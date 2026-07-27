const ICON_SPECTRUM = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/></svg>`;
const ICON_CHEVRON = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

let filter = 'all';
function setFilter(f) { filter = f; renderAll(); }

let sortMode = 'brightness'; // 'brightness' | 'rainbow'
function setSortMode(m) { sortMode = m; renderAll(); }

// Regenbogen-Reihenfolge: Farben werden nach CIELCh-Farbton (h) in 30°-Bänder
// gruppiert — rot bleibt geschlossen bei rot, dann fließender Übergang zu orange,
// gelb, grün, blau, violett usw. Innerhalb jeder Farbgruppe geht es von dunkel
// nach hell. Das Band ist um 0° (Rot) zentriert, damit Rottöne nicht an der
// 360°/0°-Kante auseinandergerissen werden. Nahezu neutrale Töne (c < 8, kaum
// Buntheit) haben keinen verlässlichen Farbton und kommen als eigene Gruppe danach.
const HUE_BAND_SIZE = 30;
const GRAY_CHROMA_MAX = 8;
function hueBand(h) { return Math.floor(((h + HUE_BAND_SIZE / 2) % 360) / HUE_BAND_SIZE); }

// Anzeigenamen der 30°-Bänder (Bandmitte in Klammern), Index = hueBand(h).
const HUE_BAND_NAMES = [
  'Rot (0°)', 'Rotorange (30°)', 'Orange (60°)', 'Gelborange (90°)',
  'Gelb (120°)', 'Gelbgrün (150°)', 'Grün (180°)', 'Türkis (210°)',
  'Blau (240°)', 'Blauviolett (270°)', 'Violett (300°)', 'Magenta/Pink (330°)',
];
function hueSectionLabel(e) {
  return e.c < GRAY_CHROMA_MAX ? 'Neutral / Grau' : HUE_BAND_NAMES[hueBand(e.h)];
}

// Hell → Dunkel ist primär nach L* geordnet, nicht nach Farbton — ein Farbton
// wie "Rot" taucht dort in mehreren, nicht benachbarten Helligkeitsbändern auf
// und ergäbe wiederholte Überschriften. Für diesen Modus daher Überschriften
// nach der tatsächlichen Sortierachse: der Helligkeitsstufe selbst.
function lightnessSectionLabel(e) {
  if (e.l >= 80) return 'Sehr hell';
  if (e.l >= 60) return 'Hell';
  if (e.l >= 40) return 'Mittel';
  if (e.l >= 20) return 'Dunkel';
  return 'Sehr dunkel';
}

function rainbowSort(rows) {
  const chroma = rows.filter(e => e.c >= GRAY_CHROMA_MAX);
  const gray   = rows.filter(e => e.c < GRAY_CHROMA_MAX);
  chroma.sort((a, b) => hueBand(a.h) - hueBand(b.h) || a.l - b.l);
  gray.sort((a, b) => a.l - b.l);
  return [...chroma, ...gray];
}

// Hell → Dunkel: reines L* springt bei fast gleicher Helligkeit wild zwischen
// unverwandten Farbtönen hin und her (rosa → gelb → grün), weil viele Farben
// zufällig ähnlich hell sind. Deshalb erst in grobe 5-Punkte-Helligkeitsbänder
// einteilen (behält den hell→dunkel-Verlauf), innerhalb eines Bandes nach
// Farbton gruppieren (wirkt wie ein sanfter Übergang statt Zufallsmischung),
// und innerhalb der Farbgruppe wieder fein nach L* sortieren.
const BRIGHTNESS_BAND_SIZE = 5;
function brightnessSort(rows) {
  const bandOf = e => Math.floor(e.l / BRIGHTNESS_BAND_SIZE);
  const hueGroupOf = e => e.c < GRAY_CHROMA_MAX ? -1 : hueBand(e.h);
  return [...rows].sort((a, b) =>
    bandOf(b) - bandOf(a) ||
    hueGroupOf(a) - hueGroupOf(b) ||
    b.l - a.l
  );
}

function renderHeader() {
  const polyCount  = SPECTRUM.filter(e => e.type === 'polychromos').length;
  const ohuhuCount = SPECTRUM.filter(e => e.type === 'ohuhu').length;
  return `
    <div class="app-header">
      <div class="header-top">
        <div>
          <h1 class="app-title">${ICON_SPECTRUM}<span class="app-title-text">Helligkeits-Spektrum</span></h1>
          <p class="app-subtitle">${polyCount} Polychromos-Stifte und ${ohuhuCount} Ohuhu-Marker (jeweils dunkelste Auftragsstufe)</p>
        </div>
      </div>
      <label class="mode-switch">
        <span class="mode-switch-label${sortMode === 'brightness' ? ' mode-switch-label--active' : ''}">Hell → Dunkel</span>
        <span class="mode-switch-toggle">
          <input type="checkbox" id="sort-mode-switch" ${sortMode === 'rainbow' ? 'checked' : ''}
            onchange="setSortMode(this.checked ? 'rainbow' : 'brightness')">
          <span class="mode-switch-track"><span class="mode-switch-thumb"></span></span>
        </span>
        <span class="mode-switch-label${sortMode === 'rainbow' ? ' mode-switch-label--active' : ''}">Regenbogen</span>
      </label>
      <details class="view-select">
        <summary class="view-select-current">
          <span>${{ all: 'Alle', polychromos: 'Nur Polychromos', ohuhu: 'Nur Ohuhu' }[filter]}</span>
          ${ICON_CHEVRON}
        </summary>
        <div class="view-select-list">
          <button class="${filter === 'all'         ? 'active' : ''}" onclick="setFilter('all')">Alle</button>
          <button class="${filter === 'polychromos' ? 'active' : ''}" onclick="setFilter('polychromos')">Nur Polychromos</button>
          <button class="${filter === 'ohuhu'       ? 'active' : ''}" onclick="setFilter('ohuhu')">Nur Ohuhu</button>
        </div>
      </details>
    </div>`;
}

function renderRow(e) {
  return `
      <tr>
        <td><div class="table-swatch" style="background:${e.hex}"></div></td>
        <td><span class="source-badge source-badge--${e.type}">${e.type === 'polychromos' ? 'Polychromos' : 'Ohuhu'}</span></td>
        <td>${e.shopUrl ? `<a href="${e.shopUrl}" target="_blank" rel="noopener" style="color:inherit">${e.id}</a>` : e.id}</td>
        <td>${e.name}</td>
        <td>${e.l}</td>
        <td>${e.hex}</td>
      </tr>`;
}

// Zwischenüberschrift, sobald der Abschnitt wechselt — passend zur jeweiligen
// Sortierachse des Modus (siehe hueSectionLabel/lightnessSectionLabel oben).
function renderBody(rows) {
  const labelFor = sortMode === 'rainbow' ? hueSectionLabel : lightnessSectionLabel;
  let lastLabel = null;
  return rows.map(e => {
    const label = labelFor(e);
    const header = label !== lastLabel
      ? `<tr class="table-section-row"><td colspan="6">${label}</td></tr>` : '';
    lastLabel = label;
    return header + renderRow(e);
  }).join('');
}

function renderTable() {
  let rows = SPECTRUM.filter(e => filter === 'all' || e.type === filter);
  rows = sortMode === 'rainbow' ? rainbowSort(rows) : brightnessSort(rows);
  return `<div class="table-scroll"><table class="data-table">
    <thead><tr>
      <th></th><th>Quelle</th><th>Code</th><th>Name</th>
      <th data-tooltip="CIELAB-Helligkeit L*: 100 = weiß, 0 = schwarz">L* ⓘ</th>
      <th>Hex</th>
    </tr></thead>
    <tbody>${renderBody(rows)}</tbody>
  </table></div>`;
}

function renderAll() {
  document.getElementById('app').innerHTML = renderHeader() + renderTable();
}

renderAll();
