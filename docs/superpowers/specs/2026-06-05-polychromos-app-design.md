# Polychromos Stiftsammlung — Design Spec

**Datum:** 2026-06-05  
**Status:** Approved

## Ziel

Eine lokale Single-Page-App (eine einzige `index.html`) zum Verwalten einer Faber-Castell Polychromos Stiftsammlung. Die Nutzerin kann abhaken welche Stifte sie besitzt und die Ohuhu-Marker-Nummer als Zwilling hinterlegen.

## Tech-Stack

- **Format:** Einzelne `index.html` — kein Build-Schritt, kein Server, kein Framework
- **Styling:** Tailwind CSS via CDN
- **Font:** Nunito via Google Fonts
- **JS:** Vanilla JS (keine Dependencies)
- **Persistenz:** `localStorage` — Schlüssel `polychromos_data`, Wert: JSON-Objekt `{ [nr]: { owned: boolean, ohuhu: string } }`
- **Daten:** CSV-Inhalt direkt als JS-Array in die HTML-Datei eingebettet

## Datenstruktur

Jeder Eintrag aus der CSV:
```js
{ nr: 102, name: "Strohgelb", lightfastness: "★★★", color: "#f0d060" }
```

localStorage-Schema:
```json
{
  "102": { "owned": true, "ohuhu": "Y12" },
  "133": { "owned": false, "ohuhu": "" }
}
```

## UI-Komponenten

### Header
- Gradient-Titel „🎨 Polychromos"
- Untertitel „Meine Stiftsammlung"
- Fortschrittsbalken: `X von 120 Stiften (Y%)`
- View-Toggle: `Nummerisch` | `Farbgruppen`

### Kachelraster
Jede Kachel (~90×110px):
- Hintergrund: Farbverlauf passend zum jeweiligen Stift (hardcoded Hex-Farben pro Nummer)
- **Oben:** Stiftnummer (groß, weiß, fett)
- **Mitte:** Stiftname (klein, weiß, halbdurchsichtig)
- **Oben rechts:** ✓-Badge (weiß, rund) wenn `owned === true`
- **Unten:** Inline-Textfeld für Ohuhu-Nummer (weißer Rahmen, halbtransparent)
  - Klick auf Feld → editierbar, Stoppt Event-Propagation (toggled Besitz nicht)
  - `blur` oder `Enter` → in localStorage speichern
- **Kachel-Klick** (außerhalb des Feldes) → `owned` umschalten, sofort speichern
- Wenn `owned === false`: Filter/Sättigung reduziert (`filter: saturate(0.25) brightness(1.05) opacity(0.6)`)

### View-Modi

**Nummerisch:** Alle 120 Kacheln als ein durchgehendes Flex-Wrap-Raster, aufsteigend nach Nummer.

**Farbgruppen:** Stifte in benannte Blöcke aufgeteilt mit Gruppen-Überschrift:
| Gruppe | Nummern (ungefähr) |
|--------|-------------------|
| Gelbtöne | 101–109, 205 |
| Orangetöne | 111, 113, 115 |
| Rottöne | 117–121, 219, 223, 225, 226 |
| Rosa & Pink | 123–132 |
| Violett & Magenta | 133–138, 160, 194, 249, 263 |
| Blautöne | 110, 120, 137, 140–152, 157, 181, 246, 247 |
| Türkis | 149, 153–155 |
| Grüntöne | 112, 156, 158–168, 170–174, 264, 266–268, 276, 278 |
| Braun & Erde | 169, 175–193 |
| Grau & Schwarz | 199, 230–235, 270–275 |
| Metallic | 250, 251, 252 |

## Stil

- **Hintergrund:** Gradient `#fdf4ff → #f0f0ff → #fce7f3`
- **Akzentfarben:** Magenta `#c026d3`, Violett `#7c3aed`, Lila `#a855f7`
- **Font:** Nunito (400, 700, 800, 900)
- **Kacheln:** `border-radius: 16px`, leichter Drop Shadow, Hover-Lift-Effekt
- **Ton:** Verspielt, clean — nicht überladen

## Verhalten

- Beim Laden: localStorage auslesen, State initialisieren
- Alle Änderungen (owned toggle, ohuhu input) → sofort in localStorage schreiben
- View-Toggle-Auswahl wird ebenfalls in localStorage gespeichert
- Keine externe API, kein Network-Request (außer CDN beim ersten Load)
