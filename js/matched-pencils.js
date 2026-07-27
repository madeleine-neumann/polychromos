// ── Farbabstand (Lab/CIE76) — identisch zu index.html ───────────────────────
function hexToRgb(hex) { return [1,3,5].map(i => parseInt(hex.slice(i,i+2), 16)); }
function rgbToLab([r,g,b]) {
  const srgb = [r,g,b].map(c => { c /= 255; return c <= 0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); });
  const [rl,gl,bl] = srgb;
  const x = (rl*0.4124564 + gl*0.3575761 + bl*0.1804375) / 0.95047;
  const y = (rl*0.2126729 + gl*0.7151522 + bl*0.0721750) / 1.0;
  const z = (rl*0.0193339 + gl*0.1191920 + bl*0.9503041) / 1.08883;
  const f = t => t > 0.008856 ? Math.cbrt(t) : (7.787*t + 16/116);
  const [fx,fy,fz] = [x,y,z].map(f);
  return [116*fy - 16, 500*(fx-fy), 200*(fy-fz)];
}
function labDist(hexA, hexB) {
  const [L1,a1,b1] = rgbToLab(hexToRgb(hexA));
  const [L2,a2,b2] = rgbToLab(hexToRgb(hexB));
  return Math.sqrt((L1-L2)**2 + (a1-a2)**2 + (b1-b2)**2);
}

const MARKERS_BY_CODE = Object.fromEntries(MARKERS.map(m => [m.code, m]));
const PENCILS_BY_NR = Object.fromEntries(PENCILS.map(p => [p.nr, p]));
const NEAREST_OHUHU_BY_NR = Object.fromEntries(PENCILS.map(p => {
  let best = null, bestDist = Infinity;
  for (const m of MARKERS) {
    const d = labDist(p.color, m.colors[2]);
    if (d < bestDist) { bestDist = d; best = m; }
  }
  return [p.nr, { code: best.code, name: best.name, dist: bestDist }];
}));
const NEAREST_POLY_BY_CODE = Object.fromEntries(MARKERS.map(m => {
  let best = null, bestDist = Infinity;
  for (const p of PENCILS) {
    const d = labDist(p.color, m.colors[2]);
    if (d < bestDist) { bestDist = d; best = p; }
  }
  return [m.code, { nr: best.nr, dist: bestDist }];
}));

// ── State ─────────────────────────────────────────────────────────────────
function readJSON(key) {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}
let polyState  = readJSON('polychromos_data');
let ohuhuState = readJSON('ohuhu_data');

function isPencilOwned(nr)  { return !!(polyState[nr]?.owned); }
function isMarkerOwned(code){ return !!(ohuhuState[code]?.owned); }
function isMarkerWishlisted(code) { return !!(ohuhuState[code]?.wishlist); }
function matchedCode(nr) {
  return polyState[nr]?.ohuhu || NEAREST_OHUHU_BY_NR[nr]?.code || '';
}
function isAutoMatch(nr) { return polyState[nr]?.ohuhu ? !!polyState[nr].ohuhuAuto : true; }

function matchedPencilNr(code) {
  const manual = Object.entries(polyState).find(([, d]) => d?.ohuhu === code);
  return manual ? manual[0] : (NEAREST_POLY_BY_CODE[code]?.nr ?? null);
}

function refresh() {
  polyState  = readJSON('polychromos_data');
  ohuhuState = readJSON('ohuhu_data');
  renderAll();
}

function broadcastUpdate() {
  try { new BroadcastChannel('polychromos-sync').postMessage({ type: 'updated', source: 'matched-pencils' }); } catch {}
}

function toggleOhuhuWishlist(code) {
  ohuhuState[code] = ohuhuState[code] || {};
  ohuhuState[code].wishlist = !ohuhuState[code].wishlist;
  localStorage.setItem('ohuhu_data', JSON.stringify(ohuhuState));
  broadcastUpdate();
  scheduleGistSave();
  renderAll();
}

// ── Shared Gist Sync (nur Ohuhu-Einkaufsliste schreiben, Rest lesend) ──────
const TOKEN_KEY  = 'polychromos_gh_token';
const SHARED_KEY = 'shared_gist_id';
const POLY_FILE  = 'polychromos_data.json';
const OHUHU_FILE = 'ohuhu_data.json';
const GH_API     = 'https://api.github.com';

let githubToken = localStorage.getItem(TOKEN_KEY) || '';
let gistId      = localStorage.getItem(SHARED_KEY) || '';
let syncTimer   = null;

function ghHeaders() {
  return { Authorization: `Bearer ${githubToken}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' };
}

async function ensureGistId() {
  if (gistId) return;
  const r = await fetch(`${GH_API}/gists?per_page=100`, { headers: ghHeaders() });
  if (!r.ok) throw new Error('Token ungültig');
  const gists = await r.json();
  const found = gists.find(g => g.files[POLY_FILE] && g.files[OHUHU_FILE])
    || gists.find(g => g.files[POLY_FILE])
    || gists.find(g => g.files[OHUHU_FILE]);
  if (!found) return; // keine passende Gist gefunden — Sync bleibt lokal
  gistId = found.id;
  localStorage.setItem(SHARED_KEY, gistId);
}

async function loadFromGist() {
  if (!githubToken) return;
  try {
    await ensureGistId();
    if (!gistId) return;
    const r = await fetch(`${GH_API}/gists/${gistId}`, { headers: ghHeaders() });
    if (!r.ok) throw new Error();
    const data = await r.json();
    const ohuhuContent = data.files[OHUHU_FILE]?.content;
    if (ohuhuContent) {
      const gistState  = JSON.parse(ohuhuContent);
      const gistOwned  = Object.values(gistState).filter(v => v?.owned).length;
      const localOwned = Object.values(ohuhuState).filter(v => v?.owned).length;
      if (!(gistOwned === 0 && localOwned > 0)) {
        ohuhuState = gistState;
        localStorage.setItem('ohuhu_data', JSON.stringify(ohuhuState));
      }
    }
    const polyContent = data.files[POLY_FILE]?.content;
    if (polyContent) polyState = JSON.parse(polyContent);
  } catch (e) { /* bleibt beim lokalen Stand */ }
}

async function saveToGist() {
  if (!githubToken) return;
  try {
    await ensureGistId();
    if (!gistId) return;
    await fetch(`${GH_API}/gists/${gistId}`, {
      method: 'PATCH', headers: ghHeaders(),
      body: JSON.stringify({ files: { [OHUHU_FILE]: { content: JSON.stringify(ohuhuState) } } })
    });
  } catch (e) { /* still lokal gespeichert, nächster Sync versucht es erneut */ }
}

function scheduleGistSave() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(saveToGist, 1500);
}

// ── Render ────────────────────────────────────────────────────────────────
const ICON_CHECK = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
const ICON_MISSING = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const ICON_CART = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`;
const ICON_LINK = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
const ICON_CHEVRON = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

const FILTER_LABELS = {
  all:              'Alle Stifte',
  owned:            'Nur vollständige Paare',
  'missing-ohuhu':  'Fehlender Ohuhu-Marker',
  'missing-poly':   'Fehlender Polychromos-Stift',
};

function renderHeader(forwardRows, reverseRows) {
  const complete = forwardRows.filter(r => r.pencilOwned && r.markerOwned).length;
  const missingOhuhu = forwardRows.filter(r => r.pencilOwned && !r.markerOwned).length;
  const missingPoly = reverseRows.filter(r => !r.pencilOwned).length;
  const total = complete + missingOhuhu + missingPoly;
  return `
    <div class="app-header">
      <div class="header-top">
        <div>
          <h1 class="app-title">${ICON_LINK}<span class="app-title-text">Matched Pencils</span></h1>
          <p class="app-subtitle">Polychromos-Besitz × farblich nächstgelegener Ohuhu-Marker</p>
        </div>
      </div>
      <div class="progress-row">
        <div class="progress-bar"><div class="progress-fill" style="width:${total ? Math.round(complete/total*100) : 0}%"></div></div>
        <span class="progress-label">${complete} / ${total} Zwillinge vorhanden</span>
        <span class="progress-label refill-label">${missingOhuhu} Marker fehlen · ${missingPoly} Stifte fehlen</span>
      </div>
      <details class="view-select">
        <summary class="view-select-current">
          <span>${FILTER_LABELS[filter]}</span>
          ${ICON_CHEVRON}
        </summary>
        <div class="view-select-list">
          <button class="${filter === 'all'             ? 'active' : ''}" onclick="setFilter('all')">${FILTER_LABELS.all}</button>
          <button class="${filter === 'owned'            ? 'active' : ''}" onclick="setFilter('owned')">${FILTER_LABELS.owned}</button>
          <button class="${filter === 'missing-ohuhu'    ? 'active' : ''}" onclick="setFilter('missing-ohuhu')">${FILTER_LABELS['missing-ohuhu']}</button>
          <button class="${filter === 'missing-poly'     ? 'active' : ''}" onclick="setFilter('missing-poly')">${FILTER_LABELS['missing-poly']}</button>
        </div>
      </details>
    </div>`;
}

let filter = 'missing-ohuhu';
function setFilter(f) { filter = f; renderAll(); }

function renderTable(forwardRows, reverseRows) {
  const filtered =
    filter === 'missing-poly' ? reverseRows.filter(r => !r.pencilOwned) :
    filter === 'owned'        ? forwardRows.filter(r => r.pencilOwned && r.markerOwned) :
    filter === 'missing-ohuhu'? forwardRows.filter(r => r.pencilOwned && !r.markerOwned) :
    forwardRows;
  if (!filtered.length) {
    return `<p class="shopping-empty">Keine Einträge für diesen Filter.</p>`;
  }
  return `<div class="table-scroll"><table class="data-table">
    <thead><tr>
      <th></th><th>Nr.</th><th>Name</th>
      <th data-tooltip="Stift besessen">` + ICON_CHECK + `</th>
      <th></th><th>Ohuhu-Zwilling</th>
      <th data-tooltip="Zwilling besessen">` + ICON_CHECK + `</th>
      <th data-tooltip="Farbabstand (CIE76 ΔE) zwischen Stift und Zwilling: 0 = identisch, bis ~10 = kaum sichtbar unterschiedlich, ab ~20 = deutlich andere Farbe">ΔE ⓘ</th>
    </tr></thead>
    <tbody>${filtered.map(r => `
      <tr style="${r.pencilOwned !== r.markerOwned ? 'border-left:3px solid var(--accent-warm)' : ''}">
        <td><div class="table-swatch" style="background:${r.pencil.color}"></div></td>
        <td>${r.pencil.shopUrl ? `<a href="${r.pencil.shopUrl}" target="_blank" rel="noopener" style="color:inherit" data-tooltip="Im Kunstpark-Shop ansehen">${r.pencil.nr}</a>` : r.pencil.nr}</td>
        <td>${r.pencil.name}</td>
        <td><span class="table-icon-btn${r.pencilOwned ? ' table-icon-btn--active' : ''}">${r.pencilOwned ? ICON_CHECK : ICON_MISSING}</span></td>
        <td>${r.marker ? `<div class="table-swatch" style="background:${r.marker.colors[2]}"></div>` : ''}</td>
        <td>${r.marker ? `${r.marker.shopUrl ? `<a href="${r.marker.shopUrl}" target="_blank" rel="noopener" style="color:inherit" data-tooltip="Im Ohuhu-Shop ansehen">${r.marker.code}</a>` : r.marker.code} · ${r.marker.name}${r.auto ? ' <span class="ohuhu-match-inline ohuhu-match-inline--suggest" title="Automatischer Vorschlag, nicht manuell bestätigt">≈ auto</span>' : ''}` : '—'}</td>
        <td>${r.markerOwned
          ? `<span class="table-icon-btn table-icon-btn--green">${ICON_CHECK}</span>`
          : (r.marker ? `<button class="table-icon-btn${r.wishlisted ? ' table-icon-btn--green' : ''}" onclick="toggleOhuhuWishlist('${r.marker.code}')" data-tooltip="${r.wishlisted ? 'Von Einkaufsliste entfernen' : 'Zur Einkaufsliste hinzufügen'}">${ICON_CART}</button>` : ICON_MISSING)}</td>
        <td>${r.dist != null ? r.dist.toFixed(0) : '—'}</td>
      </tr>`).join('')}</tbody>
  </table></div>`;
}

function compareCode(a, b) {
  const [, pa, na] = a.code.match(/^([A-Za-z]*)(\d*)$/);
  const [, pb, nb] = b.code.match(/^([A-Za-z]*)(\d*)$/);
  if (pa !== pb) return pa.localeCompare(pb);
  return (parseInt(na, 10) || 0) - (parseInt(nb, 10) || 0);
}

function buildRows() {
  return PENCILS.map(p => {
    const code = matchedCode(p.nr);
    const marker = code ? MARKERS_BY_CODE[code] : null;
    return {
      pencil: p,
      pencilOwned: isPencilOwned(p.nr),
      marker,
      markerOwned: marker ? isMarkerOwned(marker.code) : false,
      wishlisted: marker ? isMarkerWishlisted(marker.code) : false,
      auto: isAutoMatch(p.nr),
      dist: marker ? labDist(p.color, marker.colors[2]) : null,
      reverse: false,
    };
  });
}

// Abgleich in Gegenrichtung: für jeden besessenen Ohuhu-Marker dessen eigener
// nächstgelegener Polychromos-Stift (kanonisch aus Marker-Sicht, nicht aus
// Stift-Sicht — sonst würden mehrere Stifte denselben Marker fälschlich als
// "fehlender Stift" beanspruchen, wenn er nur zufällig auch ihr Nächstgelegener ist).
function buildReverseRows() {
  return MARKERS
    .filter(m => isMarkerOwned(m.code))
    .map(m => {
      const nr = matchedPencilNr(m.code);
      const pencil = nr != null ? PENCILS_BY_NR[nr] : null;
      if (!pencil) return null;
      return {
        pencil,
        pencilOwned: isPencilOwned(pencil.nr),
        marker: m,
        markerOwned: true,
        wishlisted: isMarkerWishlisted(m.code),
        auto: !polyState[pencil.nr]?.ohuhu,
        dist: labDist(pencil.color, m.colors[2]),
        reverse: true,
      };
    })
    .filter(Boolean);
}

function renderAll() {
  const forwardRows = buildRows();
  const reverseRows = buildReverseRows();
  const app = document.getElementById('app');
  app.innerHTML = renderHeader(forwardRows, reverseRows) + renderTable(forwardRows, reverseRows);
}

renderAll();
if (githubToken) loadFromGist().then(renderAll);

// ── Cross-Tab Sync ────────────────────────────────────────────────────────
try {
  const syncChannel = new BroadcastChannel('polychromos-sync');
  syncChannel.onmessage = ({ data }) => { if (data?.type === 'updated') refresh(); };
} catch {}
