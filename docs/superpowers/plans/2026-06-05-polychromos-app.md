# Polychromos App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eine einzelne `index.html` Datei, die 120 Polychromos-Buntstifte als farbige Kacheln anzeigt, Besitz per Klick umschalten und Ohuhu-Nummern inline editieren lässt — alles per localStorage gespeichert, kein Server nötig.

**Architecture:** Single HTML file mit eingebetteten CSS (Tailwind CDN) und Vanilla JS. Alle Stiftdaten als hardcoded JS-Array. State (owned/ohuhu) in localStorage unter dem Key `polychromos_data`.

**Tech Stack:** HTML5, Tailwind CSS (CDN), Vanilla JS, Google Fonts (Nunito), localStorage

---

## Dateien

- Erstellen: `index.html` — die gesamte App

---

### Task 1: HTML-Grundgerüst + Stiftdaten

**Files:**
- Erstellen: `index.html`

- [ ] **Schritt 1: index.html anlegen** mit diesem Grundgerüst:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Polychromos — Meine Stiftsammlung</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito', sans-serif; }
  </style>
</head>
<body class="min-h-screen" style="background: linear-gradient(135deg, #fdf4ff 0%, #f0f0ff 50%, #fce7f3 100%);">
  <div id="app" class="max-w-6xl mx-auto px-6 py-10">
    <h1 id="title">wird geladen...</h1>
  </div>
  <script>
    // Daten und Logik kommen in Task 2+
  </script>
</body>
</html>
```

- [ ] **Schritt 2: Im Browser öffnen** (`open index.html`) — "wird geladen..." muss erscheinen.

- [ ] **Schritt 3: Stiftdaten als JS-Array einbetten** — direkt im `<script>`-Tag:

```js
const PENCILS = [
  { nr: 101, name: "Weiß",                   lf: "★★★", color: "#F5F5F0", grad: "#E8E8E0" },
  { nr: 102, name: "Strohgelb",               lf: "★★★", color: "#F0D060", grad: "#E8C040" },
  { nr: 103, name: "Elfenbein",               lf: "★★★", color: "#F5ECD4", grad: "#EAD9B0" },
  { nr: 104, name: "Lichtgelb lasierend",     lf: "★★★", color: "#FFF0A0", grad: "#FFE060" },
  { nr: 105, name: "Kadmiumgelb hell",        lf: "★★★", color: "#FFD700", grad: "#FFC000" },
  { nr: 106, name: "Chromgelb hell",          lf: "★★★", color: "#FFB700", grad: "#FFA000" },
  { nr: 107, name: "Kadmiumgelb",             lf: "★★★", color: "#FFA500", grad: "#FF8C00" },
  { nr: 108, name: "Kadmiumgelb dunkel",      lf: "★★★", color: "#FF8C00", grad: "#E07000" },
  { nr: 109, name: "Chromgelb dunkel",        lf: "★★★", color: "#E07800", grad: "#C06000" },
  { nr: 110, name: "Phthaloblau",             lf: "★★★", color: "#0047AB", grad: "#003388" },
  { nr: 111, name: "Kadmiumorange",           lf: "★★★", color: "#FF6600", grad: "#E05000" },
  { nr: 112, name: "Laubgrün",                lf: "★★★", color: "#4A7C59", grad: "#3A6045" },
  { nr: 113, name: "Lasurorange",             lf: "★★★", color: "#FF7A35", grad: "#F06020" },
  { nr: 115, name: "Kadmiumorange dunkel",    lf: "★★★", color: "#E05500", grad: "#C04000" },
  { nr: 117, name: "Kadmiumrot hell",         lf: "★★★", color: "#FF4040", grad: "#E02020" },
  { nr: 118, name: "Scharlachrot",            lf: "★★★", color: "#FF2400", grad: "#DD0000" },
  { nr: 119, name: "Magenta hell",            lf: "★",   color: "#FF80C0", grad: "#F060A0" },
  { nr: 120, name: "Ultramarin",              lf: "★★★", color: "#3F00FF", grad: "#2800CC" },
  { nr: 121, name: "Geraniumrot hell",        lf: "★★★", color: "#FF4757", grad: "#EE2233" },
  { nr: 123, name: "Fuchsia",                 lf: "★★",  color: "#E040FB", grad: "#C020D8" },
  { nr: 124, name: "Karminrosé",              lf: "★★★", color: "#E8739E", grad: "#D05080" },
  { nr: 125, name: "Purpurrosa mittel",       lf: "★★",  color: "#C2478B", grad: "#A03070" },
  { nr: 126, name: "Permanentkarmin",         lf: "★★★", color: "#990033", grad: "#770022" },
  { nr: 127, name: "Karminrosa",              lf: "★★",  color: "#E66B8F", grad: "#CC4470" },
  { nr: 128, name: "Purpurrosa hell",         lf: "★★",  color: "#F4A0C0", grad: "#E080A0" },
  { nr: 129, name: "Krapplack rosa",          lf: "★★",  color: "#C06080", grad: "#A04060" },
  { nr: 130, name: "Lachs",                   lf: "★★★", color: "#FF8C69", grad: "#F07050" },
  { nr: 131, name: "Koralle",                 lf: "★★★", color: "#FF6B6B", grad: "#EE4444" },
  { nr: 132, name: "Beigerot",                lf: "★★★", color: "#D2856A", grad: "#B86044" },
  { nr: 133, name: "Magenta",                 lf: "★★★", color: "#CC0066", grad: "#AA0044" },
  { nr: 134, name: "Karmoisin",               lf: "★★",  color: "#990044", grad: "#770033" },
  { nr: 135, name: "Rotviolett hell",         lf: "★★",  color: "#C455A0", grad: "#A03380" },
  { nr: 136, name: "Purpurviolett",           lf: "★★",  color: "#8B008B", grad: "#660066" },
  { nr: 137, name: "Blauviolett",             lf: "★★★", color: "#5B2C8D", grad: "#3D1A6B" },
  { nr: 138, name: "Violett",                 lf: "★★",  color: "#7B1A8A", grad: "#5A0A6A" },
  { nr: 140, name: "Ultramarin hell",         lf: "★★★", color: "#4169E1", grad: "#2244BB" },
  { nr: 141, name: "Delfterblau",             lf: "★★★", color: "#003F87", grad: "#002860" },
  { nr: 142, name: "Krapplack",               lf: "★★★", color: "#A0143C", grad: "#800022" },
  { nr: 143, name: "Kobaltblau",              lf: "★★★", color: "#0047AB", grad: "#003388" },
  { nr: 144, name: "Kobaltblau grünlich",     lf: "★★★", color: "#0066AA", grad: "#004488" },
  { nr: 145, name: "Phthaloblau hell",        lf: "★★",  color: "#2277CC", grad: "#1155AA" },
  { nr: 146, name: "Smalteblau",              lf: "★★★", color: "#003388", grad: "#002266" },
  { nr: 149, name: "Türkis bläulich",         lf: "★★★", color: "#00CED1", grad: "#00AAAA" },
  { nr: 151, name: "Helioblau rötl. mittel",  lf: "★★★", color: "#6699CC", grad: "#4477AA" },
  { nr: 152, name: "Phthaloblau mittel",      lf: "★★★", color: "#0055B3", grad: "#003B88" },
  { nr: 153, name: "Kobalttürkis",            lf: "★★★", color: "#00B4CC", grad: "#008899" },
  { nr: 154, name: "Kobalttürkis hell",       lf: "★★",  color: "#40C8D8", grad: "#20AABC" },
  { nr: 155, name: "Heliotürkis",             lf: "★★★", color: "#00CCCC", grad: "#009999" },
  { nr: 156, name: "Kobaltgrün",              lf: "★★★", color: "#3D9970", grad: "#2A7050" },
  { nr: 157, name: "Indigo dunkel",           lf: "★★★", color: "#2E0080", grad: "#1A0060" },
  { nr: 158, name: "Kobaltgrün tief",         lf: "★★★", color: "#006644", grad: "#004430" },
  { nr: 159, name: "Hookers grün",            lf: "★★★", color: "#2D6A4F", grad: "#1A4A35" },
  { nr: 160, name: "Manganviolett",           lf: "★",   color: "#7B2D8B", grad: "#5A1A6A" },
  { nr: 161, name: "Phthalogrün",             lf: "★★★", color: "#009B77", grad: "#007755" },
  { nr: 162, name: "Phthalogrün hell",        lf: "★★",  color: "#00CC88", grad: "#00AA66" },
  { nr: 163, name: "Smaragdgrün",             lf: "★★★", color: "#50C878", grad: "#30A855" },
  { nr: 165, name: "Wacholdergrün",           lf: "★★★", color: "#2D5016", grad: "#1A3308" },
  { nr: 166, name: "Grasgrün",                lf: "★★★", color: "#3A8A3A", grad: "#226622" },
  { nr: 167, name: "Permanentgrün oliv",      lf: "★★★", color: "#556B2F", grad: "#3A4A1A" },
  { nr: 168, name: "Grünerde gelblich",       lf: "★★★", color: "#8B9A46", grad: "#6B7A2A" },
  { nr: 169, name: "Caput mortuum",           lf: "★★★", color: "#592720", grad: "#3A1510" },
  { nr: 170, name: "Maigrün",                 lf: "★★★", color: "#76BC21", grad: "#559900" },
  { nr: 171, name: "Lichtgrün",               lf: "★★★", color: "#90EE90", grad: "#60CC60" },
  { nr: 172, name: "Grünerde",                lf: "★★★", color: "#7B8B6F", grad: "#5B6B4F" },
  { nr: 173, name: "Olivgrün gelblich",       lf: "★★★", color: "#6B7B3A", grad: "#4A5A20" },
  { nr: 174, name: "Chromoxydgrün stumpf",    lf: "★★★", color: "#4A5E40", grad: "#2A3E20" },
  { nr: 175, name: "Sepia dunkel",            lf: "★★★", color: "#3B1C08", grad: "#220C00" },
  { nr: 176, name: "Van-Dyck-Braun",          lf: "★★★", color: "#4A2B0F", grad: "#2A1500" },
  { nr: 177, name: "Walnussbraun",            lf: "★★★", color: "#5C3317", grad: "#3A1A00" },
  { nr: 178, name: "Nougat",                  lf: "★★★", color: "#7B5C3A", grad: "#5B3C1A" },
  { nr: 179, name: "Bister",                  lf: "★★",  color: "#6B4226", grad: "#4A2A10" },
  { nr: 180, name: "Umbra natur",             lf: "★★★", color: "#6B4F3A", grad: "#4A2F1A" },
  { nr: 181, name: "Paynesgrau",              lf: "★★★", color: "#536878", grad: "#334858" },
  { nr: 182, name: "Braunocker",              lf: "★★★", color: "#A0724A", grad: "#7A5230" },
  { nr: 183, name: "Lichter Ocker",           lf: "★★",  color: "#C8943C", grad: "#A87420" },
  { nr: 184, name: "Neapelgelb dunkel",       lf: "★★★", color: "#D4A045", grad: "#B48025" },
  { nr: 185, name: "Neapelgelb",              lf: "★★★", color: "#DDBA65", grad: "#BB9A45" },
  { nr: 186, name: "Terracotta",              lf: "★★★", color: "#C4613E", grad: "#A04020" },
  { nr: 187, name: "Ocker gebrannt",          lf: "★★★", color: "#B8722A", grad: "#885010" },
  { nr: 188, name: "Rötel",                   lf: "★★★", color: "#A0382A", grad: "#7A1A10" },
  { nr: 189, name: "Zimtbraun",               lf: "★★★", color: "#8B4513", grad: "#6B2500" },
  { nr: 190, name: "Venezianischrot",         lf: "★★★", color: "#9B2335", grad: "#770018" },
  { nr: 191, name: "Pompejanischrot",         lf: "★★★", color: "#7B3030", grad: "#5A1010" },
  { nr: 192, name: "Indischrot",              lf: "★★★", color: "#8C3030", grad: "#6A1515" },
  { nr: 193, name: "Karmin gebrannt",         lf: "★★★", color: "#7B2040", grad: "#550020" },
  { nr: 194, name: "Rotviolett",              lf: "★★★", color: "#882255", grad: "#660033" },
  { nr: 199, name: "Schwarz",                 lf: "★★★", color: "#2A2A2A", grad: "#111111" },
  { nr: 205, name: "Kadmiumgelb zitron",      lf: "★★★", color: "#F5E642", grad: "#DCC820" },
  { nr: 217, name: "Nummer",                  lf: "★★★", color: "#CC8800", grad: "#AA6600" },
  { nr: 219, name: "Scharlachrot tief",       lf: "★★★", color: "#CC1100", grad: "#AA0000" },
  { nr: 223, name: "Tiefrot",                 lf: "★★",  color: "#AA0022", grad: "#880011" },
  { nr: 225, name: "Dunkelrot",               lf: "★★★", color: "#880011", grad: "#660000" },
  { nr: 226, name: "Alizarinkarmesin",        lf: "★★",  color: "#880033", grad: "#660022" },
  { nr: 230, name: "Kaltgrau I",              lf: "★★★", color: "#D0D0D0", grad: "#B8B8B8" },
  { nr: 231, name: "Kaltgrau II",             lf: "★★★", color: "#B8B8B8", grad: "#A0A0A0" },
  { nr: 232, name: "Kaltgrau III",            lf: "★★★", color: "#A0A0A0", grad: "#888888" },
  { nr: 233, name: "Kaltgrau IV",             lf: "★★★", color: "#888888", grad: "#707070" },
  { nr: 234, name: "Kaltgrau V",              lf: "★★★", color: "#6C6C6C", grad: "#505050" },
  { nr: 235, name: "Kaltgrau VI",             lf: "★★★", color: "#505050", grad: "#383838" },
  { nr: 246, name: "Preußischblau",           lf: "★★★", color: "#003366", grad: "#002244" },
  { nr: 247, name: "Indanthrenblau",          lf: "★★★", color: "#1A2C6B", grad: "#0A1A4A" },
  { nr: 249, name: "Mauve",                   lf: "★★★", color: "#9B72AA", grad: "#7A5088" },
  { nr: 250, name: "Gold",                    lf: "★★★", color: "#C8A400", grad: "#A07800" },
  { nr: 251, name: "Silber",                  lf: "★★★", color: "#A8A8A8", grad: "#888888" },
  { nr: 252, name: "Kupfer",                  lf: "★★★", color: "#B87333", grad: "#885511" },
  { nr: 263, name: "Caput mortuum violett",   lf: "★★★", color: "#6B2D55", grad: "#4A1535" },
  { nr: 264, name: "Phthalogrün dunkel",      lf: "★★★", color: "#006B54", grad: "#004433" },
  { nr: 266, name: "Permanentgrün",           lf: "★★★", color: "#4CAF50", grad: "#2A8A2A" },
  { nr: 267, name: "Tannengrün",              lf: "★★★", color: "#1B4332", grad: "#0A2A1A" },
  { nr: 268, name: "Grüngold",                lf: "★★★", color: "#808000", grad: "#606000" },
  { nr: 270, name: "Warmgrau I",              lf: "★★★", color: "#D5CBBC", grad: "#BBAA99" },
  { nr: 271, name: "Warmgrau II",             lf: "★★★", color: "#C0B4A4", grad: "#A09080" },
  { nr: 272, name: "Warmgrau III",            lf: "★★★", color: "#A89A8A", grad: "#887868" },
  { nr: 273, name: "Warmgrau IV",             lf: "★★★", color: "#907E6E", grad: "#705E4E" },
  { nr: 274, name: "Warmgrau V",              lf: "★★★", color: "#786658", grad: "#584840" },
  { nr: 275, name: "Warmgrau VI",             lf: "★★★", color: "#604E42", grad: "#402E22" },
  { nr: 276, name: "Chromoxydgrün feurig",    lf: "★★★", color: "#3A7A3A", grad: "#1A5A1A" },
  { nr: 278, name: "Chromoxydgrün",           lf: "★★★", color: "#4A7A4A", grad: "#2A5A2A" },
  { nr: 280, name: "Umbra gebrannt",          lf: "★★★", color: "#7B4B2A", grad: "#5A2A0A" },
  { nr: 283, name: "Siena gebrannt",          lf: "★★★", color: "#C06030", grad: "#A04010" },
];
```

- [ ] **Schritt 4: Browser-Reload** — kein Fehler in der Console.

- [ ] **Schritt 5: Commit**
```bash
git init && git add index.html && git commit -m "feat: add HTML skeleton and pencil data"
```

---

### Task 2: Header + State-Management

**Files:**
- Modify: `index.html`

- [ ] **Schritt 1: localStorage-State-Modul** — direkt nach dem PENCILS-Array im `<script>`-Tag:

```js
const STORAGE_KEY = 'polychromos_data';

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

function toggleOwned(nr) {
  state[nr] = state[nr] || {};
  state[nr].owned = !state[nr].owned;
  saveState(state);
  renderAll();
}

function setOhuhu(nr, value) {
  state[nr] = state[nr] || {};
  state[nr].ohuhu = value.trim();
  saveState(state);
}

function isOwned(nr) { return !!(state[nr]?.owned); }
function getOhuhu(nr) { return state[nr]?.ohuhu || ''; }
function ownedCount() { return PENCILS.filter(p => isOwned(p.nr)).length; }
```

- [ ] **Schritt 2: Header-HTML** — `renderHeader()`-Funktion:

```js
function renderHeader() {
  const count = ownedCount();
  const pct = Math.round(count / PENCILS.length * 100);
  return `
    <div class="mb-8">
      <h1 class="text-4xl font-black mb-1" style="background: linear-gradient(90deg, #c026d3, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        🎨 Polychromos
      </h1>
      <p class="font-semibold mb-4" style="color: #a855f7;">Meine Stiftsammlung</p>
      <div class="flex items-center gap-4 mb-2">
        <div class="rounded-full h-2 flex-1 max-w-xs overflow-hidden" style="background: #f3e8ff;">
          <div class="h-full rounded-full transition-all duration-500"
               style="width: ${pct}%; background: linear-gradient(90deg, #c026d3, #7c3aed);"></div>
        </div>
        <span class="text-sm font-bold" style="color: #9333ea;">${count} von ${PENCILS.length} Stiften · ${pct}%</span>
      </div>
      <div class="flex gap-2 mt-4">
        <button id="btn-numeric" onclick="setView('numeric')"
          class="px-4 py-1.5 rounded-full text-sm font-bold transition-all">
          Nummerisch
        </button>
        <button id="btn-groups" onclick="setView('groups')"
          class="px-4 py-1.5 rounded-full text-sm font-bold transition-all">
          Farbgruppen
        </button>
      </div>
    </div>
  `;
}
```

- [ ] **Schritt 3: View-State** — direkt nach `loadState()`:

```js
let currentView = localStorage.getItem('polychromos_view') || 'numeric';

function setView(view) {
  currentView = view;
  localStorage.setItem('polychromos_view', view);
  renderAll();
}
```

- [ ] **Schritt 4: `renderAll()` und Init** — am Ende des Scripts:

```js
function renderAll() {
  const app = document.getElementById('app');
  app.innerHTML = renderHeader() + renderGrid();
  // View-Toggle-Styling
  ['numeric', 'groups'].forEach(v => {
    const btn = document.getElementById(`btn-${v}`);
    if (v === currentView) {
      btn.style.cssText = 'background: linear-gradient(90deg, #c026d3, #7c3aed); color: white; box-shadow: 0 2px 8px rgba(168,85,247,0.4);';
    } else {
      btn.style.cssText = 'background: #f3e8ff; color: #7e22ce;';
    }
  });
}

function renderGrid() { return '<p>Kacheln kommen in Task 3</p>'; }

renderAll();
```

- [ ] **Schritt 5: Browser-Reload** — Header mit Progressbar und Toggle-Buttons muss erscheinen.

- [ ] **Schritt 6: Commit**
```bash
git add index.html && git commit -m "feat: add header, progress bar and state management"
```

---

### Task 3: Kacheln rendern

**Files:**
- Modify: `index.html`

- [ ] **Schritt 1: `renderTile()`-Funktion** — ersetze `renderGrid()`:

```js
function renderTile(p) {
  const owned = isOwned(p.nr);
  const ohuhu = getOhuhu(p.nr);
  const filter = owned ? '' : 'filter: saturate(0.2) brightness(1.1); opacity: 0.55;';
  const badge = owned
    ? `<div style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-size:11px;box-shadow:0 1px 4px rgba(0,0,0,0.2);">✓</div>`
    : '';

  return `
    <div onclick="toggleOwned(${p.nr})"
         title="${p.name} (${p.lf})"
         style="
           width:90px; height:110px;
           border-radius:16px;
           background: linear-gradient(160deg, ${p.color}, ${p.grad});
           display:flex; flex-direction:column; align-items:center;
           justify-content:flex-start; padding:10px 6px 6px;
           cursor:pointer; position:relative;
           box-shadow: 0 2px 8px rgba(0,0,0,0.15);
           transition: transform 0.15s, box-shadow 0.15s;
           ${filter}
         "
         onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.2)';"
         onmouseout="this.style.transform='';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.15)';">
      <div style="font-size:18px;font-weight:900;color:white;text-shadow:0 1px 3px rgba(0,0,0,0.35);line-height:1;">${p.nr}</div>
      <div style="font-size:8px;font-weight:700;color:rgba(255,255,255,0.9);text-shadow:0 1px 2px rgba(0,0,0,0.3);text-align:center;margin-top:3px;line-height:1.2;padding:0 2px;">${p.name}</div>
      ${badge}
      <input
        type="text"
        value="${ohuhu}"
        placeholder="Ohuhu"
        maxlength="6"
        onclick="event.stopPropagation()"
        onchange="setOhuhu(${p.nr}, this.value)"
        onkeydown="if(event.key==='Enter')this.blur()"
        style="
          position:absolute; bottom:6px; left:50%; transform:translateX(-50%);
          width:72px;
          background:rgba(255,255,255,0.2);
          border:1.5px solid rgba(255,255,255,0.5);
          border-radius:6px;
          padding:2px 4px;
          font-size:9px; font-weight:700;
          color:white; text-align:center;
          outline:none;
          font-family:'Nunito',sans-serif;
        "
        onfocus="this.style.background='rgba(255,255,255,0.4)';this.style.borderColor='white';"
        onblur="this.style.background='rgba(255,255,255,0.2)';this.style.borderColor='rgba(255,255,255,0.5)';">
    </div>
  `;
}
```

- [ ] **Schritt 2: `renderGrid()` für numerische Ansicht**:

```js
function renderGrid() {
  if (currentView === 'groups') return renderGroups();
  return `
    <div style="display:flex;flex-wrap:wrap;gap:10px;">
      ${PENCILS.map(p => renderTile(p)).join('')}
    </div>
  `;
}
```

- [ ] **Schritt 3: Browser-Reload** — alle 120 Kacheln sollen als Flex-Grid erscheinen.

- [ ] **Schritt 4: Klick-Test** — eine Kachel anklicken → ✓ Badge erscheint, Fortschrittsbalken wächst.

- [ ] **Schritt 5: Ohuhu-Test** — in ein Ohuhu-Feld eine Nummer eingeben, Enter drücken, Seite neu laden → Nummer muss noch da sein.

- [ ] **Schritt 6: Commit**
```bash
git add index.html && git commit -m "feat: render pencil tiles with owned toggle and ohuhu field"
```

---

### Task 4: Farbgruppen-Ansicht

**Files:**
- Modify: `index.html`

- [ ] **Schritt 1: Gruppen-Definition** — direkt vor `renderGrid()`:

```js
const COLOR_GROUPS = [
  { label: "🟡 Gelbtöne",           nrs: [101,102,103,104,105,106,107,108,109,205] },
  { label: "🟠 Orangetöne",          nrs: [111,113,115] },
  { label: "🔴 Rottöne",             nrs: [117,118,121,131,219,223,225,226] },
  { label: "🌸 Rosa & Pink",         nrs: [119,123,124,125,127,128,129,130,132] },
  { label: "💜 Violett & Magenta",   nrs: [133,134,135,136,137,138,160,194,249,263] },
  { label: "🔵 Blautöne",            nrs: [110,120,140,141,143,144,145,146,151,152,157,181,246,247] },
  { label: "🩵 Türkis",              nrs: [149,153,154,155] },
  { label: "🟢 Grüntöne",            nrs: [112,156,158,159,161,162,163,165,166,167,168,170,171,172,173,174,264,266,267,268,276,278] },
  { label: "🤎 Braun & Erde",        nrs: [169,175,176,177,178,179,180,182,183,184,185,186,187,188,189,190,191,192,193,280,283] },
  { label: "🩶 Grau & Schwarz",      nrs: [199,217,230,231,232,233,234,235,270,271,272,273,274,275] },
  { label: "✨ Metallic",             nrs: [250,251,252] },
];
```

- [ ] **Schritt 2: `renderGroups()`-Funktion**:

```js
function renderGroups() {
  const pencilByNr = Object.fromEntries(PENCILS.map(p => [p.nr, p]));
  return COLOR_GROUPS.map(group => `
    <div style="margin-bottom:32px;">
      <h2 style="font-size:14px;font-weight:800;color:#7e22ce;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">${group.label}</h2>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        ${group.nrs.map(nr => pencilByNr[nr] ? renderTile(pencilByNr[nr]) : '').join('')}
      </div>
    </div>
  `).join('');
}
```

- [ ] **Schritt 3: Browser-Test** — auf „Farbgruppen" klicken → alle Gruppen mit Überschriften erscheinen. Zurück auf „Nummerisch" → nummerische Ansicht.

- [ ] **Schritt 4: Reload-Test** — View-Wahl bleibt nach Reload erhalten (in localStorage gespeichert).

- [ ] **Schritt 5: Commit**
```bash
git add index.html && git commit -m "feat: add color group view with toggle"
```

---

### Task 5: Visueller Feinschliff

**Files:**
- Modify: `index.html`

- [ ] **Schritt 1: Placeholder-Styling** für Ohuhu-Feld (damit der Placeholder-Text auch weiß ist):

Im `<style>`-Tag ergänzen:
```css
input::placeholder { color: rgba(255,255,255,0.55); }
input[type="text"] { caret-color: white; }
```

- [ ] **Schritt 2: Scrollbar-Styling** (optional, macOS):
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #fdf4ff; }
::-webkit-scrollbar-thumb { background: #d8b4fe; border-radius: 4px; }
```

- [ ] **Schritt 3: Page-Padding und max-width prüfen** — auf einem 13" Bildschirm sollten die Kacheln schön umbrechen ohne zu gequetscht zu wirken. Ggf. `gap` auf `12px` erhöhen.

- [ ] **Schritt 4: Gesamttest**
  - Alle 120 Kacheln sichtbar ✓
  - Klick → owned toggle mit Badge ✓
  - Ohuhu inline editieren ✓
  - View toggle ✓
  - Fortschrittsbalken aktualisiert sich ✓
  - Nach Browser-Reload: State bleibt erhalten ✓

- [ ] **Schritt 5: Final Commit**
```bash
git add index.html && git commit -m "feat: polish visual details and finalize app"
```
