// Precomputed Farb-Spektrum aus Polychromos-Stiften und Ohuhu-Markern (jeweils
// dunkelste der 5 Auftragsstufen). l = CIELAB-Helligkeit (100=weiß..0=schwarz),
// h/c = CIELCh-Farbton (Grad)/Buntheit für die Regenbogen-Sortierung. Generiert
// aus data/polychromos.js und data/ohuhu.js — siehe scratchpad/gen-spectrum.js.
// Bei Datenänderung neu generieren, nicht von Hand editieren.
const SPECTRUM = [
  {
    "type": "polychromos",
    "id": 101,
    "name": "Weiß",
    "hex": "#FFFFFF",
    "l": 100,
    "h": 158,
    "c": 0,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 103,
    "name": "Elfenbein",
    "hex": "#FFF4D8",
    "l": 96.4,
    "h": 93,
    "c": 15,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 102,
    "name": "Strohgelb",
    "hex": "#FFF1B6",
    "l": 95,
    "h": 98,
    "c": 31,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 104,
    "name": "Lichtgelb lasierend",
    "hex": "#F3EF6F",
    "l": 92.5,
    "h": 104,
    "c": 63,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 105,
    "name": "Kadmiumgelb hell",
    "hex": "#FFE73E",
    "l": 91.1,
    "h": 96,
    "c": 80,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 205,
    "name": "Kadmiumgelb zitron",
    "hex": "#EBEA64",
    "l": 90.5,
    "h": 104,
    "c": 66,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 106,
    "name": "Chromgelb hell",
    "hex": "#FFDE45",
    "l": 88.9,
    "h": 93,
    "c": 75,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV010",
    "name": "Water Lily",
    "hex": "#EED6DF",
    "l": 87.8,
    "h": 352,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv010-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 107,
    "name": "Kadmiumgelb",
    "hex": "#FFD530",
    "l": 86.5,
    "h": 90,
    "c": 79,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 185,
    "name": "Neapelgelb",
    "hex": "#F8D25A",
    "l": 85.4,
    "h": 90,
    "c": 63,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 270,
    "name": "Warmgrau I",
    "hex": "#D9D0CE",
    "l": 84.1,
    "h": 37,
    "c": 3,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 230,
    "name": "Kaltgrau I",
    "hex": "#CAD1D8",
    "l": 83.5,
    "h": 256,
    "c": 4,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G020",
    "name": "Pale Lemon Yellow",
    "hex": "#CAD650",
    "l": 82.5,
    "h": 109,
    "c": 66,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g020-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 108,
    "name": "Kadmiumgelb dunkel",
    "hex": "#FFC220",
    "l": 81.8,
    "h": 83,
    "c": 80,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 184,
    "name": "Neapelgelb dunkel",
    "hex": "#F5C25B",
    "l": 81.2,
    "h": 83,
    "c": 58,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "FY010",
    "name": "Fluorescent Yellow",
    "hex": "#BAD505",
    "l": 80.8,
    "h": 111,
    "c": 85,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-fy010-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 183,
    "name": "Lichter Ocker",
    "hex": "#FCBC5F",
    "l": 80.5,
    "h": 76,
    "c": 57,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 171,
    "name": "Lichtgrün",
    "hex": "#A0D185",
    "l": 78.9,
    "h": 132,
    "c": 44,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 231,
    "name": "Kaltgrau II",
    "hex": "#BEC4CC",
    "l": 78.9,
    "h": 264,
    "c": 5,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 271,
    "name": "Warmgrau II",
    "hex": "#C8C1BE",
    "l": 78.5,
    "h": 51,
    "c": 3,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 250,
    "name": "Gold",
    "hex": "#CDC08D",
    "l": 77.6,
    "h": 97,
    "c": 28,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G320",
    "name": "Jade Green",
    "hex": "#8ECCB6",
    "l": 77.5,
    "h": 169,
    "c": 25,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g320-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E010",
    "name": "Pale Fruit Pink",
    "hex": "#DCB99A",
    "l": 77.4,
    "h": 68,
    "c": 22,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e010-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 154,
    "name": "Kobalttürkis hell",
    "hex": "#66CBDA",
    "l": 76.4,
    "h": 213,
    "c": 30,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y080",
    "name": "Lightning Yellow",
    "hex": "#CFBB10",
    "l": 75.4,
    "h": 96,
    "c": 76,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G030",
    "name": "Crescent Yellow",
    "hex": "#C0BE62",
    "l": 75.4,
    "h": 105,
    "c": 48,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g030-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV030",
    "name": "Light Hot Pink",
    "hex": "#FD9AD0",
    "l": 75.2,
    "h": 345,
    "c": 46,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv030-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y010",
    "name": "Primrose",
    "hex": "#BCBB98",
    "l": 75.1,
    "h": 107,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y010-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV130",
    "name": "Queen Pink",
    "hex": "#EDA3C6",
    "l": 75,
    "h": 348,
    "c": 33,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv130-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 109,
    "name": "Chromgelb dunkel",
    "hex": "#FAA632",
    "l": 74.7,
    "h": 72,
    "c": 71,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "YR110",
    "name": "Mellow Peach",
    "hex": "#FAA468",
    "l": 74.7,
    "h": 59,
    "c": 51,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr110-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G110",
    "name": "Mignonette",
    "hex": "#9AC37E",
    "l": 74.4,
    "h": 131,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g110-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 131,
    "name": "Koralle",
    "hex": "#F69C99",
    "l": 73.3,
    "h": 25,
    "c": 37,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "BG4",
    "name": "Mint Blue",
    "hex": "#56C2C0",
    "l": 72.5,
    "h": 195,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg4-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 130,
    "name": "Lachs",
    "hex": "#F69892",
    "l": 72.3,
    "h": 28,
    "c": 39,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV260",
    "name": "Pink",
    "hex": "#E99DA3",
    "l": 72.3,
    "h": 16,
    "c": 30,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv260-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 232,
    "name": "Kaltgrau III",
    "hex": "#ACB1B8",
    "l": 72,
    "h": 265,
    "c": 4,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y030",
    "name": "Lemon Chiffon",
    "hex": "#C2B241",
    "l": 72,
    "h": 97,
    "c": 58,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y030-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 170,
    "name": "Maigrün",
    "hex": "#9FBB56",
    "l": 71.9,
    "h": 118,
    "c": 54,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y110",
    "name": "Grayish Yellow",
    "hex": "#D3A976",
    "l": 71.9,
    "h": 75,
    "c": 33,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y110-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 166,
    "name": "Grasgrün",
    "hex": "#76C25F",
    "l": 71.7,
    "h": 135,
    "c": 60,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "YR220",
    "name": "Yellowish Shade",
    "hex": "#DBA37D",
    "l": 71.4,
    "h": 60,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr220-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 146,
    "name": "Smalteblau",
    "hex": "#86B2DF",
    "l": 71,
    "h": 263,
    "c": 27,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 251,
    "name": "Silber",
    "hex": "#ABADB0",
    "l": 70.6,
    "h": 266,
    "c": 2,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "B030",
    "name": "Frost Blue",
    "hex": "#55B8D1",
    "l": 70,
    "h": 225,
    "c": 30,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b030-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G120",
    "name": "Yellowish Green",
    "hex": "#65BD7B",
    "l": 69.9,
    "h": 148,
    "c": 48,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g120-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 129,
    "name": "Krapplack rosa",
    "hex": "#F389B2",
    "l": 69.6,
    "h": 355,
    "c": 45,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 111,
    "name": "Kadmiumorange",
    "hex": "#F78F26",
    "l": 69.2,
    "h": 64,
    "c": 75,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G322",
    "name": "Pale Aqua Mint",
    "hex": "#43B8BF",
    "l": 68.9,
    "h": 204,
    "c": 33,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g324-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR030",
    "name": "Carmine Red",
    "hex": "#E79372",
    "l": 68.8,
    "h": 47,
    "c": 42,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr030-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 156,
    "name": "Kobaltgrün",
    "hex": "#01BABD",
    "l": 68.6,
    "h": 199,
    "c": 39,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y121",
    "name": "Primrose",
    "hex": "#B5A856",
    "l": 68.4,
    "h": 98,
    "c": 44,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y121-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 162,
    "name": "Phthalogrün hell",
    "hex": "#38BB8F",
    "l": 68.3,
    "h": 165,
    "c": 47,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 186,
    "name": "Terracotta",
    "hex": "#EC8E59",
    "l": 68,
    "h": 54,
    "c": 53,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV280",
    "name": "Light Pink",
    "hex": "#FD79B5",
    "l": 67.9,
    "h": 352,
    "c": 57,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv280-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y040",
    "name": "Calamansi",
    "hex": "#B9A631",
    "l": 67.9,
    "h": 96,
    "c": 60,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y040-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 187,
    "name": "Ocker gebrannt",
    "hex": "#D89763",
    "l": 67.8,
    "h": 63,
    "c": 41,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 272,
    "name": "Warmgrau III",
    "hex": "#A8A59F",
    "l": 67.8,
    "h": 90,
    "c": 3,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 112,
    "name": "Laubgrün",
    "hex": "#49B95C",
    "l": 67.2,
    "h": 144,
    "c": 64,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R242",
    "name": "Grayish Cherry",
    "hex": "#B79CA7",
    "l": 67,
    "h": 350,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r242-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R18",
    "name": "Pastel Peach",
    "hex": "#D0957C",
    "l": 66.8,
    "h": 49,
    "c": 29,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r18-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R19",
    "name": "Barely Beige",
    "hex": "#D79277",
    "l": 66.8,
    "h": 47,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r19-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R21",
    "name": "Fruit Pink",
    "hex": "#EC8677",
    "l": 66.7,
    "h": 34,
    "c": 45,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r21-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 145,
    "name": "Phthaloblau hell",
    "hex": "#43ACE1",
    "l": 66.6,
    "h": 250,
    "c": 38,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y120",
    "name": "Buttercup Yellow",
    "hex": "#CC9851",
    "l": 66.4,
    "h": 75,
    "c": 46,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y120-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 119,
    "name": "Magenta hell",
    "hex": "#D786B9",
    "l": 65.8,
    "h": 340,
    "c": 41,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "B050",
    "name": "Robin's Egg Blue",
    "hex": "#43ACCB",
    "l": 65.8,
    "h": 230,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b050-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 113,
    "name": "Lasurorange",
    "hex": "#F48034",
    "l": 65.7,
    "h": 56,
    "c": 71,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV300",
    "name": "Tender Pink",
    "hex": "#F87878",
    "l": 65.6,
    "h": 26,
    "c": 54,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv300-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G130",
    "name": "Acid Green",
    "hex": "#60B249",
    "l": 65.6,
    "h": 135,
    "c": 64,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g130-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY7",
    "name": "Sugarcane",
    "hex": "#92A92A",
    "l": 65.5,
    "h": 113,
    "c": 64,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy7-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 268,
    "name": "Grüngold",
    "hex": "#CA9439",
    "l": 65,
    "h": 78,
    "c": 55,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R22",
    "name": "Dark Blush",
    "hex": "#FD6D88",
    "l": 64.6,
    "h": 13,
    "c": 59,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r22-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 115,
    "name": "Kadmiumorange dunkel",
    "hex": "#F47933",
    "l": 64.3,
    "h": 53,
    "c": 72,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 132,
    "name": "Beigerot",
    "hex": "#D48A6A",
    "l": 64.3,
    "h": 49,
    "c": 38,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "BR208",
    "name": "Black Brown",
    "hex": "#FE6F59",
    "l": 64.3,
    "h": 36,
    "c": 66,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-br208-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R080",
    "name": "Pale Cherry Pink",
    "hex": "#D5896E",
    "l": 64.3,
    "h": 45,
    "c": 37,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r080-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 161,
    "name": "Phthalogrün",
    "hex": "#00B091",
    "l": 64.2,
    "h": 173,
    "c": 46,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 182,
    "name": "Braunocker",
    "hex": "#C4925D",
    "l": 64.2,
    "h": 70,
    "c": 37,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R050",
    "name": "Chocolate Pink",
    "hex": "#ED7B5F",
    "l": 64.2,
    "h": 40,
    "c": 54,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r050-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y3",
    "name": "Barium Yellow",
    "hex": "#C09523",
    "l": 64,
    "h": 85,
    "c": 61,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V230",
    "name": "Viola",
    "hex": "#9D93D4",
    "l": 64,
    "h": 299,
    "c": 37,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v230-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 163,
    "name": "Smaragdgrün",
    "hex": "#0CB074",
    "l": 63.7,
    "h": 159,
    "c": 56,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "GY6",
    "name": "Anise",
    "hex": "#AE9A2C",
    "l": 63.6,
    "h": 95,
    "c": 57,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy6-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 128,
    "name": "Purpurrosa hell",
    "hex": "#F06D98",
    "l": 63.1,
    "h": 2,
    "c": 55,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "YR070",
    "name": "Light Orange",
    "hex": "#F37248",
    "l": 63,
    "h": 45,
    "c": 66,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B220",
    "name": "Pale Grayish Blue",
    "hex": "#749EB7",
    "l": 63,
    "h": 246,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b220-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG68",
    "name": "Turquoise Blue",
    "hex": "#13A9AA",
    "l": 62.9,
    "h": 197,
    "c": 36,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg68-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 168,
    "name": "Grünerde gelblich",
    "hex": "#82A255",
    "l": 62.7,
    "h": 124,
    "c": 44,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 252,
    "name": "Kupfer",
    "hex": "#B09092",
    "l": 62.7,
    "h": 16,
    "c": 13,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "E470",
    "name": "Tea Rose",
    "hex": "#E67769",
    "l": 62.5,
    "h": 33,
    "c": 50,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e470-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y050",
    "name": "Summer Lemon",
    "hex": "#B0950C",
    "l": 62.3,
    "h": 92,
    "c": 65,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y050-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G050",
    "name": "Celadon Green",
    "hex": "#81A21B",
    "l": 62.2,
    "h": 116,
    "c": 66,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g050-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 140,
    "name": "Ultramarin hell",
    "hex": "#659AD2",
    "l": 62.1,
    "h": 267,
    "c": 34,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R14",
    "name": "Pale Purple",
    "hex": "#FC5A9A",
    "l": 62,
    "h": 359,
    "c": 67,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r14-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E030",
    "name": "Pink Flamingo",
    "hex": "#D3806C",
    "l": 62,
    "h": 39,
    "c": 39,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e030-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y070",
    "name": "Acid Yellow",
    "hex": "#BD8D06",
    "l": 61.6,
    "h": 83,
    "c": 66,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R15",
    "name": "Cerise",
    "hex": "#FC588C",
    "l": 61.3,
    "h": 5,
    "c": 66,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r15-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY173",
    "name": "Dim Green",
    "hex": "#96984B",
    "l": 61.2,
    "h": 107,
    "c": 42,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy173-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 152,
    "name": "Phthaloblau mittel",
    "hex": "#309CD6",
    "l": 61,
    "h": 255,
    "c": 40,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 233,
    "name": "Kaltgrau IV",
    "hex": "#8E9498",
    "l": 61,
    "h": 245,
    "c": 3,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV270",
    "name": "Shadow Pink",
    "hex": "#D07B85",
    "l": 61,
    "h": 15,
    "c": 35,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv270-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY172",
    "name": "Spectrum Green",
    "hex": "#779E5A",
    "l": 60.9,
    "h": 130,
    "c": 41,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy172-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "CG020",
    "name": "Neutral Grey 02",
    "hex": "#909390",
    "l": 60.6,
    "h": 144,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg020-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "FY020",
    "name": "Fluorescent Orange",
    "hex": "#FE5728",
    "l": 59.9,
    "h": 44,
    "c": 85,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-fy020-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R120",
    "name": "Light Prawn",
    "hex": "#F15E6D",
    "l": 59.7,
    "h": 21,
    "c": 62,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r120-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 188,
    "name": "Rötel",
    "hex": "#D77255",
    "l": 59.1,
    "h": 42,
    "c": 50,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "YR240",
    "name": "Cream",
    "hex": "#C17D3B",
    "l": 58.3,
    "h": 66,
    "c": 50,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr240-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR090",
    "name": "Peach Pie",
    "hex": "#F25936",
    "l": 58.3,
    "h": 41,
    "c": 76,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr090-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 124,
    "name": "Karminrosé",
    "hex": "#E95C72",
    "l": 58.2,
    "h": 16,
    "c": 59,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y130",
    "name": "Mustard",
    "hex": "#BC7F20",
    "l": 58,
    "h": 74,
    "c": 59,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y130-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R110",
    "name": "Sardonyx",
    "hex": "#D76B5F",
    "l": 57.8,
    "h": 33,
    "c": 49,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r110-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "MG020",
    "name": "Blue Grey 02",
    "hex": "#6E909F",
    "l": 57.8,
    "h": 235,
    "c": 14,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-mg020-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 117,
    "name": "Kadmiumrot hell",
    "hex": "#F05544",
    "l": 57.5,
    "h": 36,
    "c": 72,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV070",
    "name": "Sakura Pink",
    "hex": "#E85777",
    "l": 57.4,
    "h": 12,
    "c": 60,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv070-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 123,
    "name": "Fuchsia",
    "hex": "#EF4C86",
    "l": 57.3,
    "h": 3,
    "c": 66,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G326",
    "name": "Bright Blue",
    "hex": "#06999C",
    "l": 57.3,
    "h": 199,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g326-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG3",
    "name": "Blue Grey 3",
    "hex": "#748E95",
    "l": 57.3,
    "h": 222,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R9",
    "name": "Pastel Rose",
    "hex": "#F44B60",
    "l": 57.2,
    "h": 22,
    "c": 70,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r9-5-ohuhuy13-y13-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "R10",
    "name": "Pastel Pink",
    "hex": "#EE4993",
    "l": 57.1,
    "h": 356,
    "c": 69,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r10-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B120",
    "name": "Pale Blue",
    "hex": "#4D8EC2",
    "l": 56.9,
    "h": 261,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b120-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 127,
    "name": "Karminrosa",
    "hex": "#E85274",
    "l": 56.5,
    "h": 12,
    "c": 62,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 276,
    "name": "Chromoxydgrün feurig",
    "hex": "#00987F",
    "l": 56.1,
    "h": 175,
    "c": 40,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "V020",
    "name": "Pale Lilac",
    "hex": "#B270A4",
    "l": 55.8,
    "h": 333,
    "c": 38,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v020-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 172,
    "name": "Grünerde",
    "hex": "#738C70",
    "l": 55.7,
    "h": 140,
    "c": 19,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "CGII00",
    "name": "Cool Grey II 0",
    "hex": "#838588",
    "l": 55.5,
    "h": 266,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg-o00-ohuhuy6-y6-individualmarker"
  },
  {
    "type": "polychromos",
    "id": 121,
    "name": "Geraniumrot hell",
    "hex": "#EF4650",
    "l": 55.4,
    "h": 27,
    "c": 72,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G340",
    "name": "Horizon Green",
    "hex": "#1B957A",
    "l": 55.2,
    "h": 172,
    "c": 39,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g340-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R20",
    "name": "Powder Pink",
    "hex": "#CB684E",
    "l": 55.2,
    "h": 41,
    "c": 49,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r20-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 118,
    "name": "Scharlachrot",
    "hex": "#E84D47",
    "l": 55,
    "h": 32,
    "c": 70,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 219,
    "name": "Scharlachrot tief",
    "hex": "#E8495E",
    "l": 54.8,
    "h": 21,
    "c": 66,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV160",
    "name": "Thistle",
    "hex": "#B56C92",
    "l": 54.7,
    "h": 346,
    "c": 35,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv160-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y1",
    "name": "Pastel Yellow",
    "hex": "#AA7A14",
    "l": 54.6,
    "h": 80,
    "c": 57,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G410",
    "name": "Light Holly Green",
    "hex": "#638C70",
    "l": 54.6,
    "h": 153,
    "c": 23,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g410-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E090",
    "name": "Eggshell White",
    "hex": "#B2744C",
    "l": 54.5,
    "h": 58,
    "c": 38,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e090-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 264,
    "name": "Phthalogrün dunkel",
    "hex": "#009378",
    "l": 54.3,
    "h": 173,
    "c": 40,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y4",
    "name": "Quince",
    "hex": "#DA5934",
    "l": 54.3,
    "h": 43,
    "c": 67,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y4-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB7",
    "name": "Pastel Blue",
    "hex": "#088CB8",
    "l": 54.3,
    "h": 244,
    "c": 35,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb7-ohuhuy9-y9-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "E160",
    "name": "Soft Sun",
    "hex": "#A6784C",
    "l": 54.1,
    "h": 68,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e160-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V330",
    "name": "Prune",
    "hex": "#807CAA",
    "l": 53.9,
    "h": 296,
    "c": 27,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v330-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R190",
    "name": "Bougainvillaea",
    "hex": "#D35866",
    "l": 53.8,
    "h": 19,
    "c": 52,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r190-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 178,
    "name": "Nougat",
    "hex": "#927C6B",
    "l": 53.6,
    "h": 65,
    "c": 14,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RP6",
    "name": "Vivid Pink",
    "hex": "#DF496A",
    "l": 53.5,
    "h": 13,
    "c": 62,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rp6-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 135,
    "name": "Rotviolett hell",
    "hex": "#AB68A1",
    "l": 53.1,
    "h": 331,
    "c": 41,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "FY030",
    "name": "Fluorescent Red",
    "hex": "#EF3536",
    "l": 53.1,
    "h": 33,
    "c": 82,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-fy030-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV320",
    "name": "Apricot Pink",
    "hex": "#DB4C62",
    "l": 53.1,
    "h": 18,
    "c": 60,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv320-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 273,
    "name": "Warmgrau IV",
    "hex": "#7C7E7F",
    "l": 52.7,
    "h": 236,
    "c": 1,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "V150",
    "name": "Mallow",
    "hex": "#B85DA4",
    "l": 52.6,
    "h": 335,
    "c": 51,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v150-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R23",
    "name": "Rose Pink",
    "hex": "#D74C68",
    "l": 52.5,
    "h": 14,
    "c": 58,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r23-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E280",
    "name": "Sand White",
    "hex": "#8E7B58",
    "l": 52.5,
    "h": 85,
    "c": 22,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e280-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G420",
    "name": "Green Shadow",
    "hex": "#478A62",
    "l": 52.3,
    "h": 154,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g420-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y260",
    "name": "Yellow Dahlia",
    "hex": "#9E7522",
    "l": 52,
    "h": 81,
    "c": 50,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y260-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R29",
    "name": "Pear Color",
    "hex": "#B66651",
    "l": 51.9,
    "h": 41,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r29-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 160,
    "name": "Manganviolett",
    "hex": "#9A69AD",
    "l": 51.8,
    "h": 318,
    "c": 43,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G220",
    "name": "Lime Green",
    "hex": "#748057",
    "l": 51.7,
    "h": 120,
    "c": 24,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g220-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 180,
    "name": "Umbra natur",
    "hex": "#9A734A",
    "l": 51.4,
    "h": 70,
    "c": 30,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "YR190",
    "name": "Cadmium Orange",
    "hex": "#DC4430",
    "l": 51.3,
    "h": 38,
    "c": 73,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr190-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R24",
    "name": "Dark Violet Light",
    "hex": "#6E70C8",
    "l": 50.8,
    "h": 296,
    "c": 51,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r24-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 138,
    "name": "Violett",
    "hex": "#8A6BAF",
    "l": 50.7,
    "h": 310,
    "c": 41,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 266,
    "name": "Permanentgrün",
    "hex": "#278A46",
    "l": 50.7,
    "h": 147,
    "c": 52,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 223,
    "name": "Tiefrot",
    "hex": "#E42F44",
    "l": 50.6,
    "h": 26,
    "c": 76,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "V322",
    "name": "Rain Flower Purple",
    "hex": "#727696",
    "l": 50.4,
    "h": 288,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v322-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 110,
    "name": "Phthaloblau",
    "hex": "#0B7DC2",
    "l": 50.3,
    "h": 266,
    "c": 44,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 153,
    "name": "Kobalttürkis",
    "hex": "#0082A2",
    "l": 50.2,
    "h": 235,
    "c": 31,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y140",
    "name": "Nugget",
    "hex": "#A96818",
    "l": 50,
    "h": 69,
    "c": 55,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y140-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 226,
    "name": "Alizarinkarmesin",
    "hex": "#DF2D5D",
    "l": 49.9,
    "h": 14,
    "c": 71,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R200",
    "name": "Coralessence",
    "hex": "#CD464D",
    "l": 49.4,
    "h": 26,
    "c": 60,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r200-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R1",
    "name": "Coral Pink",
    "hex": "#D43C3E",
    "l": 49,
    "h": 30,
    "c": 68,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B110",
    "name": "Crystal Blue",
    "hex": "#017BB8",
    "l": 49,
    "h": 262,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b110-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR4",
    "name": "Salmon Pink",
    "hex": "#BA5827",
    "l": 49,
    "h": 51,
    "c": 58,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr4-ohuhuy040-y040-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "R070",
    "name": "Agate",
    "hex": "#D33E32",
    "l": 48.9,
    "h": 36,
    "c": 71,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r070-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 142,
    "name": "Krapplack",
    "hex": "#CD3F5C",
    "l": 48.6,
    "h": 15,
    "c": 60,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "V030",
    "name": "Mauve",
    "hex": "#8A669C",
    "l": 48.6,
    "h": 316,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v030-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR250",
    "name": "Moccasin",
    "hex": "#B15D22",
    "l": 48.6,
    "h": 57,
    "c": 56,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr250-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YG040",
    "name": "Yellow Grey 04",
    "hex": "#7F734D",
    "l": 48.6,
    "h": 93,
    "c": 23,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yg040-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 125,
    "name": "Purpurrosa mittel",
    "hex": "#C3408B",
    "l": 48.4,
    "h": 347,
    "c": 60,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 155,
    "name": "Heliotürkis",
    "hex": "#087E90",
    "l": 48.2,
    "h": 219,
    "c": 28,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 126,
    "name": "Permanentkarmin",
    "hex": "#D82C4A",
    "l": 48.1,
    "h": 22,
    "c": 71,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G070",
    "name": "Lemon Green",
    "hex": "#777600",
    "l": 48.1,
    "h": 102,
    "c": 55,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G324",
    "name": "Aqua Blue",
    "hex": "#2F7D7E",
    "l": 48,
    "h": 198,
    "c": 24,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g324-individual-marker-brush-chisel-1"
  },
  {
    "type": "ohuhu",
    "id": "YR170",
    "name": "Chrome Orange",
    "hex": "#C24D09",
    "l": 48,
    "h": 52,
    "c": 71,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr170-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B070",
    "name": "Tahitian Blue",
    "hex": "#0879AA",
    "l": 47.8,
    "h": 254,
    "c": 35,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E210",
    "name": "Brick Beige",
    "hex": "#876E3B",
    "l": 47.8,
    "h": 84,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e210-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y2",
    "name": "Sunflower",
    "hex": "#9F6400",
    "l": 47.6,
    "h": 72,
    "c": 58,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y2-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 234,
    "name": "Kaltgrau V",
    "hex": "#6E7176",
    "l": 47.5,
    "h": 268,
    "c": 3,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "CG030",
    "name": "Neutral Grey 03",
    "hex": "#6D7170",
    "l": 47.3,
    "h": 179,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg030-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 167,
    "name": "Permanentgrün oliv",
    "hex": "#4C7A4F",
    "l": 47,
    "h": 144,
    "c": 31,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 120,
    "name": "Ultramarin",
    "hex": "#506DB4",
    "l": 46.9,
    "h": 285,
    "c": 42,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RP1",
    "name": "Vivid Reddish Purple",
    "hex": "#BF4457",
    "l": 46.8,
    "h": 17,
    "c": 53,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rp1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV180",
    "name": "Hollyhock",
    "hex": "#C23D6A",
    "l": 46.8,
    "h": 4,
    "c": 56,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv180-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G060",
    "name": "Celery Yellow",
    "hex": "#687600",
    "l": 46.8,
    "h": 110,
    "c": 55,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g060-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 149,
    "name": "Türkis bläulich",
    "hex": "#0077A2",
    "l": 46.7,
    "h": 249,
    "c": 33,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R250",
    "name": "Antique Fuchsia",
    "hex": "#886473",
    "l": 46.4,
    "h": 351,
    "c": 17,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r250-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G440",
    "name": "Leaf Green",
    "hex": "#347C42",
    "l": 46.4,
    "h": 145,
    "c": 44,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g440-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 217,
    "name": "Nummer",
    "hex": "#BC454F",
    "l": 46.3,
    "h": 22,
    "c": 53,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 169,
    "name": "Caput mortuum",
    "hex": "#9A5D58",
    "l": 46.2,
    "h": 29,
    "c": 28,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 134,
    "name": "Karmoisin",
    "hex": "#A14D9D",
    "l": 46.1,
    "h": 329,
    "c": 54,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 193,
    "name": "Karmin gebrannt",
    "hex": "#AA5164",
    "l": 46.1,
    "h": 10,
    "c": 39,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R11",
    "name": "Mauve Shadow",
    "hex": "#7B6683",
    "l": 46.1,
    "h": 317,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r11-ohuhuy11-y11-individualmarker"
  },
  {
    "type": "polychromos",
    "id": 151,
    "name": "Helioblau rötl.",
    "hex": "#1770B8",
    "l": 45.9,
    "h": 272,
    "c": 45,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 174,
    "name": "Chromoxydgrün stumpf",
    "hex": "#65714F",
    "l": 45.8,
    "h": 122,
    "c": 21,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y230",
    "name": "Deep Cream",
    "hex": "#7F6A2F",
    "l": 45.7,
    "h": 89,
    "c": 36,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y230-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG01",
    "name": "Warm Grey 1",
    "hex": "#7A685A",
    "l": 45.3,
    "h": 66,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg01-ohuhuy030-y030-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "Y5",
    "name": "Rouge Orange",
    "hex": "#BD3F37",
    "l": 45.2,
    "h": 33,
    "c": 60,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV350",
    "name": "Crimson",
    "hex": "#B04B43",
    "l": 45.2,
    "h": 32,
    "c": 48,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv350-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G140",
    "name": "Horseradish",
    "hex": "#1E7B30",
    "l": 45.2,
    "h": 143,
    "c": 54,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g140-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R150",
    "name": "Zinnober",
    "hex": "#C53439",
    "l": 45.1,
    "h": 29,
    "c": 65,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r150-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV080",
    "name": "Bright Pink",
    "hex": "#C52773",
    "l": 45,
    "h": 357,
    "c": 65,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GG1",
    "name": "Green Grey 1",
    "hex": "#5E6E69",
    "l": 45,
    "h": 174,
    "c": 7,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "MG030",
    "name": "Blue Grey 03",
    "hex": "#487082",
    "l": 45,
    "h": 238,
    "c": 17,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-mg030-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 144,
    "name": "Kobaltblau grünlich",
    "hex": "#156DB6",
    "l": 44.9,
    "h": 274,
    "c": 45,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RG110",
    "name": "Red Grey 110",
    "hex": "#6E696B",
    "l": 44.9,
    "h": 350,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rg110-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG050",
    "name": "Warm Grey 05",
    "hex": "#6F6A59",
    "l": 44.8,
    "h": 97,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg050-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E380",
    "name": "Ash Rose",
    "hex": "#7A665C",
    "l": 44.8,
    "h": 54,
    "c": 11,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e380-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 159,
    "name": "Hookers grün",
    "hex": "#0B7764",
    "l": 44.5,
    "h": 175,
    "c": 33,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "P3",
    "name": "Pastel Violet",
    "hex": "#895791",
    "l": 44.5,
    "h": 322,
    "c": 39,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-p3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G8",
    "name": "Glass Green",
    "hex": "#207837",
    "l": 44.3,
    "h": 145,
    "c": 49,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb1-ohuhug8-g8-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "PB1",
    "name": "Sky Blue",
    "hex": "#3968B0",
    "l": 44.1,
    "h": 280,
    "c": 44,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb1-ohuhuy8-y8-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "RV330",
    "name": "Strawberry Pink",
    "hex": "#AB484B",
    "l": 43.9,
    "h": 25,
    "c": 45,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv330-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 143,
    "name": "Kobaltblau",
    "hex": "#056AB5",
    "l": 43.8,
    "h": 274,
    "c": 47,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "YR260",
    "name": "Yellowish Brown",
    "hex": "#9C5520",
    "l": 43.8,
    "h": 59,
    "c": 49,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr260-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG050",
    "name": "Cool Grey 05",
    "hex": "#626871",
    "l": 43.8,
    "h": 267,
    "c": 6,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg050-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y6",
    "name": "Lemon Yellow",
    "hex": "#8F5B04",
    "l": 43.3,
    "h": 73,
    "c": 53,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y6-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY4",
    "name": "Yellow Green",
    "hex": "#517003",
    "l": 43.3,
    "h": 118,
    "c": 54,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy4-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R3",
    "name": "Coral Red",
    "hex": "#B13F3C",
    "l": 43.1,
    "h": 30,
    "c": 53,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r3-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 136,
    "name": "Purpurviolett",
    "hex": "#7358A0",
    "l": 43,
    "h": 307,
    "c": 44,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 179,
    "name": "Bister",
    "hex": "#7C604C",
    "l": 43,
    "h": 62,
    "c": 18,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 189,
    "name": "Zimtbraun",
    "hex": "#8B5A3A",
    "l": 42.9,
    "h": 58,
    "c": 31,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 283,
    "name": "Siena gebrannt",
    "hex": "#895A47",
    "l": 42.9,
    "h": 48,
    "c": 25,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "B340",
    "name": "Lavender Mist",
    "hex": "#3D60BA",
    "l": 42.6,
    "h": 289,
    "c": 54,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b340-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 133,
    "name": "Magenta",
    "hex": "#934E67",
    "l": 42.2,
    "h": 357,
    "c": 32,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R12",
    "name": "Rose Buvard",
    "hex": "#A74342",
    "l": 42.2,
    "h": 28,
    "c": 47,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r12-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY1",
    "name": "Pale Green",
    "hex": "#327029",
    "l": 41.9,
    "h": 137,
    "c": 48,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V250",
    "name": "Light Lavender",
    "hex": "#625C91",
    "l": 41.7,
    "h": 298,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v250-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R2",
    "name": "Vermillion",
    "hex": "#A6413F",
    "l": 41.6,
    "h": 29,
    "c": 47,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r2-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 249,
    "name": "Mauve",
    "hex": "#6157A1",
    "l": 41.1,
    "h": 300,
    "c": 45,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 165,
    "name": "Wacholdergrün",
    "hex": "#44694D",
    "l": 41,
    "h": 149,
    "c": 23,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 274,
    "name": "Warmgrau V",
    "hex": "#626060",
    "l": 40.9,
    "h": 20,
    "c": 1,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R160",
    "name": "Cadmium Red",
    "hex": "#AC3644",
    "l": 40.9,
    "h": 21,
    "c": 52,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r160-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB8",
    "name": "Cerulean Blue",
    "hex": "#106694",
    "l": 40.8,
    "h": 259,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb8-ohuhuy10-y10-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "CG2",
    "name": "Cool Grey II 2",
    "hex": "#5E6064",
    "l": 40.7,
    "h": 272,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg2-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "G080",
    "name": "Limeade",
    "hex": "#5D6501",
    "l": 40.6,
    "h": 108,
    "c": 49,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G170",
    "name": "May Green",
    "hex": "#2D6D1A",
    "l": 40.5,
    "h": 134,
    "c": 53,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g170-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 158,
    "name": "Kobaltgrün tief",
    "hex": "#146B60",
    "l": 40.4,
    "h": 182,
    "c": 27,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 247,
    "name": "Indanthrenblau",
    "hex": "#445E98",
    "l": 40.4,
    "h": 283,
    "c": 36,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 246,
    "name": "Preußischblau",
    "hex": "#126495",
    "l": 40.3,
    "h": 262,
    "c": 34,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R25",
    "name": "Pale Blue Violet",
    "hex": "#59589A",
    "l": 40.3,
    "h": 296,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r25-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 194,
    "name": "Rotviolett",
    "hex": "#88496D",
    "l": 39.8,
    "h": 344,
    "c": 33,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "B140",
    "name": "Aquamarine",
    "hex": "#1B5FA3",
    "l": 39.7,
    "h": 276,
    "c": 43,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b140-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R230",
    "name": "Strong Red",
    "hex": "#984341",
    "l": 39.7,
    "h": 28,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r230-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 192,
    "name": "Indischrot",
    "hex": "#91474A",
    "l": 39.6,
    "h": 22,
    "c": 34,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 176,
    "name": "Van-Dyck-Braun",
    "hex": "#6C5954",
    "l": 39.5,
    "h": 40,
    "c": 9,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 225,
    "name": "Dunkelrot",
    "hex": "#A63055",
    "l": 39.4,
    "h": 7,
    "c": 51,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "R5",
    "name": "Cherry Pink",
    "hex": "#9C3E3F",
    "l": 39.4,
    "h": 27,
    "c": 44,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RG030",
    "name": "Red Grey 03",
    "hex": "#645B54",
    "l": 39.3,
    "h": 67,
    "c": 6,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rg030-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 263,
    "name": "Caput mort. violett",
    "hex": "#824E51",
    "l": 39.2,
    "h": 19,
    "c": 24,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y10",
    "name": "Apricot",
    "hex": "#AE2A02",
    "l": 39,
    "h": 45,
    "c": 73,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y10-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 137,
    "name": "Blauviolett",
    "hex": "#59529E",
    "l": 38.9,
    "h": 299,
    "c": 47,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV100",
    "name": "Red Onion",
    "hex": "#AE2050",
    "l": 38.9,
    "h": 9,
    "c": 58,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv100-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB10",
    "name": "Light Turquoise Green",
    "hex": "#016854",
    "l": 38.8,
    "h": 173,
    "c": 31,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb10-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 173,
    "name": "Olivgrün gelblich",
    "hex": "#5B5D44",
    "l": 38.7,
    "h": 111,
    "c": 15,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 278,
    "name": "Chromoxydgrün",
    "hex": "#4A614B",
    "l": 38.7,
    "h": 144,
    "c": 17,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "RV200",
    "name": "Dark Orchid",
    "hex": "#983A54",
    "l": 38.5,
    "h": 7,
    "c": 42,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv200-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR33",
    "name": "Melon Yellow",
    "hex": "#8B4913",
    "l": 38.4,
    "h": 60,
    "c": 48,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr33-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G240",
    "name": "Beige Green",
    "hex": "#4E5F3C",
    "l": 38.1,
    "h": 127,
    "c": 22,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g240-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BR3",
    "name": "Rose Beige",
    "hex": "#9B3B19",
    "l": 38.1,
    "h": 46,
    "c": 55,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-br3-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "GY3",
    "name": "Bud Green",
    "hex": "#356419",
    "l": 37.7,
    "h": 130,
    "c": 47,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB9",
    "name": "Cloud Blue",
    "hex": "#2D6069",
    "l": 37.7,
    "h": 216,
    "c": 18,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb9-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 280,
    "name": "Umbra gebrannt",
    "hex": "#685546",
    "l": 37.6,
    "h": 65,
    "c": 13,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "B250",
    "name": "Light Blue",
    "hex": "#2E5D7B",
    "l": 37.6,
    "h": 254,
    "c": 23,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b250-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 190,
    "name": "Venezianischrot",
    "hex": "#9B3535",
    "l": 37.4,
    "h": 29,
    "c": 48,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "GG020",
    "name": "Green Grey 02",
    "hex": "#535952",
    "l": 37.1,
    "h": 140,
    "c": 5,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg020-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 235,
    "name": "Kaltgrau VI",
    "hex": "#575758",
    "l": 37,
    "h": 290,
    "c": 1,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "polychromos",
    "id": 141,
    "name": "Delfterblau",
    "hex": "#484F9F",
    "l": 36.9,
    "h": 295,
    "c": 49,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "BGII03",
    "name": "Blue Grey II 3",
    "hex": "#3C5A6E",
    "l": 36.7,
    "h": 251,
    "c": 16,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg-o03-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 275,
    "name": "Warmgrau VI",
    "hex": "#585557",
    "l": 36.5,
    "h": 336,
    "c": 2,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "E490",
    "name": "Deep Orange",
    "hex": "#81471B",
    "l": 36.5,
    "h": 59,
    "c": 42,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e490-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR3",
    "name": "Orange",
    "hex": "#AA1607",
    "l": 36.2,
    "h": 40,
    "c": 73,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V050",
    "name": "Pearl Violet",
    "hex": "#674B6E",
    "l": 36.1,
    "h": 320,
    "c": 24,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v050-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 267,
    "name": "Tannengrün",
    "hex": "#315C48",
    "l": 35.5,
    "h": 161,
    "c": 21,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "BG9",
    "name": "Pigeon Blue",
    "hex": "#45565E",
    "l": 35.5,
    "h": 237,
    "c": 8,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg9-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R4",
    "name": "Deep Red",
    "hex": "#962E31",
    "l": 35.3,
    "h": 28,
    "c": 49,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r4-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E220",
    "name": "Sand",
    "hex": "#75481F",
    "l": 35,
    "h": 64,
    "c": 35,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e220-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 177,
    "name": "Walnussbraun",
    "hex": "#5D4F48",
    "l": 34.8,
    "h": 54,
    "c": 8,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "Y250",
    "name": "Flax",
    "hex": "#5A522E",
    "l": 34.8,
    "h": 96,
    "c": 22,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y250-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G500",
    "name": "Peacock Blue",
    "hex": "#1E5960",
    "l": 34.5,
    "h": 211,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g500-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R240",
    "name": "Garnet",
    "hex": "#704444",
    "l": 34,
    "h": 23,
    "c": 21,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r240-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B260",
    "name": "Smoky Blue",
    "hex": "#295178",
    "l": 33.4,
    "h": 268,
    "c": 26,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b260-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E432",
    "name": "Vert Celadon",
    "hex": "#4E503C",
    "l": 33.3,
    "h": 112,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e432-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G260",
    "name": "Apple Green",
    "hex": "#355715",
    "l": 33.2,
    "h": 127,
    "c": 41,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g260-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R170",
    "name": "Lipstick Red",
    "hex": "#8B2C32",
    "l": 33,
    "h": 25,
    "c": 45,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r180-individual-marker-brush-chisel-1"
  },
  {
    "type": "ohuhu",
    "id": "G360",
    "name": "Pond Green",
    "hex": "#005940",
    "l": 33,
    "h": 165,
    "c": 31,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g360-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 181,
    "name": "Paynesgrau",
    "hex": "#484E55",
    "l": 32.9,
    "h": 261,
    "c": 5,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "CG050",
    "name": "Neutral Grey 05",
    "hex": "#4A4E4F",
    "l": 32.9,
    "h": 220,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg050-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G190",
    "name": "Olive Green",
    "hex": "#2E5620",
    "l": 32.6,
    "h": 134,
    "c": 37,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g190-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RG120",
    "name": "Red Grey 120",
    "hex": "#504B4F",
    "l": 32.5,
    "h": 331,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rg120-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R6",
    "name": "Rose Red",
    "hex": "#8A2A2F",
    "l": 32.4,
    "h": 26,
    "c": 46,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r6-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GG040",
    "name": "Light Jade Green Grey",
    "hex": "#434E49",
    "l": 32.1,
    "h": 165,
    "c": 6,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg040-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 191,
    "name": "Pompejanischrot",
    "hex": "#7B3535",
    "l": 31.8,
    "h": 26,
    "c": 34,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G330",
    "name": "Mineral Green",
    "hex": "#305148",
    "l": 31.8,
    "h": 174,
    "c": 15,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g330-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V270",
    "name": "Lobelia",
    "hex": "#4C446F",
    "l": 31.4,
    "h": 301,
    "c": 28,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v270-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 157,
    "name": "Indigo dunkel",
    "hex": "#3E4A5B",
    "l": 31.1,
    "h": 269,
    "c": 12,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "E050",
    "name": "Lipstick Natural",
    "hex": "#62413A",
    "l": 31.1,
    "h": 37,
    "c": 17,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e050-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 175,
    "name": "Sepia dunkel",
    "hex": "#474948",
    "l": 30.8,
    "h": 163,
    "c": 1,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  },
  {
    "type": "ohuhu",
    "id": "G9",
    "name": "Meadow Green",
    "hex": "#2A503E",
    "l": 30.8,
    "h": 161,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g9-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V160",
    "name": "Deep Lilac",
    "hex": "#6C3659",
    "l": 30.8,
    "h": 340,
    "c": 31,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v160-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY2",
    "name": "Grass Green",
    "hex": "#2B5122",
    "l": 30.7,
    "h": 136,
    "c": 33,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy2-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B080",
    "name": "Process Blue",
    "hex": "#004987",
    "l": 30.7,
    "h": 278,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "P5",
    "name": "Aubergine",
    "hex": "#4B4748",
    "l": 30.6,
    "h": 360,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-p5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y270",
    "name": "Pale Ocre",
    "hex": "#5D4409",
    "l": 30.6,
    "h": 82,
    "c": 37,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y270-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R270",
    "name": "Baby Blossoms",
    "hex": "#663C43",
    "l": 30.6,
    "h": 11,
    "c": 20,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r270-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B090",
    "name": "Pebble Blue",
    "hex": "#264B64",
    "l": 30.3,
    "h": 255,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b090-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "P4",
    "name": "Lavender",
    "hex": "#534152",
    "l": 30,
    "h": 327,
    "c": 13,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-p4-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G490",
    "name": "Viridian",
    "hex": "#175037",
    "l": 29.9,
    "h": 159,
    "c": 27,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g490-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G3",
    "name": "Ocean Green",
    "hex": "#06502B",
    "l": 29.3,
    "h": 153,
    "c": 35,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YG080",
    "name": "Yellow Grey 08",
    "hex": "#4C442D",
    "l": 29.1,
    "h": 92,
    "c": 15,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yg080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR1",
    "name": "Dark Yellow",
    "hex": "#613B18",
    "l": 28.7,
    "h": 65,
    "c": 31,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V060",
    "name": "Amethyst",
    "hex": "#484054",
    "l": 28.6,
    "h": 307,
    "c": 13,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v060-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y9",
    "name": "Yellow Orche",
    "hex": "#603A19",
    "l": 28.3,
    "h": 63,
    "c": 30,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y9-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V320",
    "name": "Gentian Violet",
    "hex": "#423E5F",
    "l": 27.9,
    "h": 298,
    "c": 21,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v320-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R17",
    "name": "Pansy",
    "hex": "#443F50",
    "l": 27.7,
    "h": 303,
    "c": 11,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r17-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G270",
    "name": "Moss",
    "hex": "#30481E",
    "l": 27.7,
    "h": 129,
    "c": 28,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g270-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V340",
    "name": "Lavender Blue",
    "hex": "#3C4059",
    "l": 27.7,
    "h": 288,
    "c": 16,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v340-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V080",
    "name": "Dark Violet",
    "hex": "#4B3D45",
    "l": 27.5,
    "h": 341,
    "c": 8,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG070",
    "name": "Warm Grey 07",
    "hex": "#443F38",
    "l": 26.9,
    "h": 82,
    "c": 5,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R8",
    "name": "Geranium",
    "hex": "#6E2828",
    "l": 26.7,
    "h": 28,
    "c": 35,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r8-ohuhuy12-y12-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "B350",
    "name": "Cornflower Blue",
    "hex": "#253B79",
    "l": 26.5,
    "h": 290,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b350-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "FY050",
    "name": "Fluorescent Violet",
    "hex": "#373482",
    "l": 26.4,
    "h": 300,
    "c": 50,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-fy050-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "P2",
    "name": "Light Violet",
    "hex": "#6C2539",
    "l": 26.2,
    "h": 7,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-p2-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E440",
    "name": "Khaki",
    "hex": "#4C3B1F",
    "l": 26.1,
    "h": 80,
    "c": 20,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e450-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y11",
    "name": "Brown Grey",
    "hex": "#513918",
    "l": 26,
    "h": 75,
    "c": 25,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y11-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B64",
    "name": "Indian Blue",
    "hex": "#2D3F54",
    "l": 26,
    "h": 267,
    "c": 15,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b64-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "MG060",
    "name": "Blue Grey 06",
    "hex": "#21414F",
    "l": 25.8,
    "h": 239,
    "c": 14,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-mg060-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR180",
    "name": "Lipstick Orange",
    "hex": "#721F0D",
    "l": 25.5,
    "h": 42,
    "c": 47,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr180-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E110",
    "name": "Dark Suntan",
    "hex": "#602E18",
    "l": 25.3,
    "h": 49,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e110-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R180",
    "name": "Bright Red",
    "hex": "#662725",
    "l": 25,
    "h": 29,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r180-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR172",
    "name": "Tiger Lily",
    "hex": "#68270D",
    "l": 25,
    "h": 48,
    "c": 41,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr172-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "P1",
    "name": "Vivid Purple",
    "hex": "#5B2E2C",
    "l": 24.8,
    "h": 27,
    "c": 23,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-p1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "NG03",
    "name": "Neutral Grey 3",
    "hex": "#373C3A",
    "l": 24.8,
    "h": 169,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-ng03-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E240",
    "name": "Chamois",
    "hex": "#533318",
    "l": 24.6,
    "h": 63,
    "c": 25,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e240-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G2",
    "name": "Vivid Green",
    "hex": "#16431F",
    "l": 24.6,
    "h": 145,
    "c": 30,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g2-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y7",
    "name": "Dull Yellow",
    "hex": "#43391E",
    "l": 24.4,
    "h": 90,
    "c": 18,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y7-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GG3",
    "name": "Green Grey 3",
    "hex": "#323C3A",
    "l": 24.4,
    "h": 182,
    "c": 5,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G470",
    "name": "Pine Tree Green",
    "hex": "#2A3F27",
    "l": 24.3,
    "h": 139,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g470-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG060",
    "name": "Deep Cool Grey",
    "hex": "#373A3C",
    "l": 24.2,
    "h": 245,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg060-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG5",
    "name": "Dolphin Blue",
    "hex": "#1D3F3A",
    "l": 24.1,
    "h": 183,
    "c": 14,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg5-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "PB11",
    "name": "Marine Blue",
    "hex": "#2D3A43",
    "l": 23.6,
    "h": 249,
    "c": 8,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb11-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG3",
    "name": "Warm Grey 3",
    "hex": "#393731",
    "l": 23.1,
    "h": 96,
    "c": 4,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY5",
    "name": "Absinthe",
    "hex": "#2D3C10",
    "l": 23.1,
    "h": 120,
    "c": 28,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V070",
    "name": "Eggplant Purple",
    "hex": "#562451",
    "l": 23.1,
    "h": 330,
    "c": 34,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y180",
    "name": "Shallow Orange Cafe",
    "hex": "#542D0E",
    "l": 23,
    "h": 60,
    "c": 31,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y180-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G6",
    "name": "Dusty Jade Green",
    "hex": "#193C33",
    "l": 22.6,
    "h": 174,
    "c": 15,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g6-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG4",
    "name": "Warm Grey 4",
    "hex": "#363631",
    "l": 22.5,
    "h": 109,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg4-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V370",
    "name": "Blue Bell",
    "hex": "#262E6C",
    "l": 21.8,
    "h": 296,
    "c": 41,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v370-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BR2",
    "name": "Potato Brown",
    "hex": "#502918",
    "l": 21.4,
    "h": 49,
    "c": 25,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-br2-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "B380",
    "name": "Capri Blue",
    "hex": "#222A73",
    "l": 21,
    "h": 298,
    "c": 49,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b380-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E370",
    "name": "Light Walnut",
    "hex": "#452D1C",
    "l": 20.9,
    "h": 60,
    "c": 18,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e370-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E400",
    "name": "Cocoa Brown",
    "hex": "#3E2F2B",
    "l": 20.9,
    "h": 40,
    "c": 8,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e400-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G4",
    "name": "Mint Green Light",
    "hex": "#003A2E",
    "l": 20.9,
    "h": 173,
    "c": 21,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g4-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY43",
    "name": "Deep Olive Green",
    "hex": "#28352A",
    "l": 20.7,
    "h": 148,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy43-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E434",
    "name": "Dragon Well Tea",
    "hex": "#313326",
    "l": 20.7,
    "h": 115,
    "c": 9,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e434-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB2",
    "name": "Brilliant Blue",
    "hex": "#172F64",
    "l": 20.6,
    "h": 288,
    "c": 36,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb2-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG8",
    "name": "Teal",
    "hex": "#183730",
    "l": 20.6,
    "h": 176,
    "c": 14,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg8-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V390",
    "name": "Dark Slate Blue",
    "hex": "#2E2E52",
    "l": 20.6,
    "h": 296,
    "c": 24,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v390-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG6",
    "name": "Peacock Green",
    "hex": "#183638",
    "l": 20.5,
    "h": 204,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg6-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E300",
    "name": "Clay",
    "hex": "#3A2F20",
    "l": 20.2,
    "h": 78,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e300-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B270",
    "name": "Vivid Blue",
    "hex": "#1A324D",
    "l": 20.2,
    "h": 271,
    "c": 19,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b270-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E170",
    "name": "Caribe Cocoa",
    "hex": "#45291C",
    "l": 19.8,
    "h": 51,
    "c": 18,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e170-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G5",
    "name": "Turquoise Ink Blue",
    "hex": "#1B342C",
    "l": 19.5,
    "h": 170,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RG050",
    "name": "Red Grey 05",
    "hex": "#332E2B",
    "l": 19.4,
    "h": 60,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rg050-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G1",
    "name": "Emerald Green",
    "hex": "#113527",
    "l": 19.3,
    "h": 164,
    "c": 18,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR2",
    "name": "Marigold",
    "hex": "#5A1700",
    "l": 19.2,
    "h": 44,
    "c": 41,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr2-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B180",
    "name": "Vienna Blue",
    "hex": "#112A65",
    "l": 18.9,
    "h": 291,
    "c": 40,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b180-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG070",
    "name": "Cool Grey 07",
    "hex": "#282E34",
    "l": 18.6,
    "h": 258,
    "c": 5,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GG060",
    "name": "Green Grey 06",
    "hex": "#292E2C",
    "l": 18.4,
    "h": 169,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg060-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB5",
    "name": "Prussian Blue",
    "hex": "#2A2C38",
    "l": 18.3,
    "h": 286,
    "c": 8,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E120",
    "name": "Reddish Brass",
    "hex": "#442418",
    "l": 18.2,
    "h": 46,
    "c": 20,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e120-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R16",
    "name": "Deep Violet",
    "hex": "#372926",
    "l": 18.1,
    "h": 37,
    "c": 7,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r16-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R280",
    "name": "Currant",
    "hex": "#4B1E22",
    "l": 18.1,
    "h": 20,
    "c": 23,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r280-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "YR5",
    "name": "Terra Cota",
    "hex": "#521913",
    "l": 18.1,
    "h": 35,
    "c": 32,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-yr5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V210",
    "name": "Signal Violet",
    "hex": "#3C233F",
    "l": 18,
    "h": 323,
    "c": 22,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v210-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY8",
    "name": "Petits Pois",
    "hex": "#272F10",
    "l": 17.9,
    "h": 117,
    "c": 21,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy8-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R13",
    "name": "Clematis",
    "hex": "#25284C",
    "l": 17.6,
    "h": 294,
    "c": 25,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r13-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RG150",
    "name": "Red Grey 150",
    "hex": "#2D2A2D",
    "l": 17.5,
    "h": 325,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rg150-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G390",
    "name": "Green",
    "hex": "#182E24",
    "l": 16.9,
    "h": 162,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g390-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B440",
    "name": "Cyanine Blue",
    "hex": "#272151",
    "l": 16.1,
    "h": 301,
    "c": 33,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b440-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E260",
    "name": "Leather",
    "hex": "#392313",
    "l": 16.1,
    "h": 60,
    "c": 17,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e260-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GY42",
    "name": "Bronze Green",
    "hex": "#222B16",
    "l": 16.1,
    "h": 125,
    "c": 15,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gy42-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E310",
    "name": "Dark Brown",
    "hex": "#30241D",
    "l": 15.4,
    "h": 57,
    "c": 8,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e310-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG090",
    "name": "Warm Grey 09",
    "hex": "#282622",
    "l": 15.2,
    "h": 90,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg090-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB3",
    "name": "Cobalt Blue",
    "hex": "#222537",
    "l": 15.2,
    "h": 288,
    "c": 13,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb3-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BGII05",
    "name": "Blue Grey II 5",
    "hex": "#1A2830",
    "l": 15.2,
    "h": 245,
    "c": 8,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg-o09-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R7",
    "name": "Old Red",
    "hex": "#3B1D1A",
    "l": 14.9,
    "h": 31,
    "c": 17,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r7-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E060",
    "name": "Light Mahogany",
    "hex": "#411910",
    "l": 14.7,
    "h": 39,
    "c": 24,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e060-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y210",
    "name": "Deep Teak",
    "hex": "#2E2116",
    "l": 14,
    "h": 66,
    "c": 11,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y210-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "CG070",
    "name": "Neutral Grey 07",
    "hex": "#212423",
    "l": 13.9,
    "h": 173,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg070-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y12",
    "name": "Mahogany",
    "hex": "#321F17",
    "l": 13.9,
    "h": 49,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y12-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG2",
    "name": "Deep Green",
    "hex": "#1E2523",
    "l": 13.9,
    "h": 176,
    "c": 4,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg2-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y8",
    "name": "Olive Yellow",
    "hex": "#2A220C",
    "l": 13.6,
    "h": 89,
    "c": 15,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y8-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB4",
    "name": "Napoleon Blue",
    "hex": "#21212F",
    "l": 13.3,
    "h": 293,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb4-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E130",
    "name": "Copper",
    "hex": "#2E1E18",
    "l": 13.1,
    "h": 47,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e130-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B290",
    "name": "Antwerp Blue",
    "hex": "#102237",
    "l": 12.8,
    "h": 272,
    "c": 16,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b290-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "B190",
    "name": "Ultramarine",
    "hex": "#111A55",
    "l": 12.7,
    "h": 298,
    "c": 42,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-b190-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GG110",
    "name": "Toner Grey",
    "hex": "#1F2121",
    "l": 12.5,
    "h": 199,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg110-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E080",
    "name": "Praline",
    "hex": "#3A150E",
    "l": 12.4,
    "h": 36,
    "c": 22,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV240",
    "name": "Bronze Purple",
    "hex": "#331820",
    "l": 12.4,
    "h": 2,
    "c": 15,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv240-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R290",
    "name": "Cardinal",
    "hex": "#301A19",
    "l": 12.2,
    "h": 26,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r290-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GG5",
    "name": "Green Grey 5",
    "hex": "#1C211F",
    "l": 12.2,
    "h": 168,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R282",
    "name": "Colocasia Torino",
    "hex": "#2D1B1B",
    "l": 12.1,
    "h": 22,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r282-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG7",
    "name": "Forest Green",
    "hex": "#142220",
    "l": 11.9,
    "h": 185,
    "c": 7,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg7-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BG1",
    "name": "Turquoise Green",
    "hex": "#15211D",
    "l": 11.5,
    "h": 171,
    "c": 6,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg1-ohuhuy2-y2-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "E430",
    "name": "Pecan",
    "hex": "#221E18",
    "l": 11.5,
    "h": 83,
    "c": 5,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e430-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G7",
    "name": "Chromium Oxide Green",
    "hex": "#18201B",
    "l": 11.3,
    "h": 156,
    "c": 5,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g7-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "MG100",
    "name": "Blue Grey 09",
    "hex": "#181F24",
    "l": 11.3,
    "h": 249,
    "c": 5,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-mg-100-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BR1",
    "name": "Raw Umber",
    "hex": "#281B12",
    "l": 11.1,
    "h": 60,
    "c": 10,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-br1-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "G300",
    "name": "Dark Olive",
    "hex": "#1C1E15",
    "l": 10.8,
    "h": 118,
    "c": 7,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-g300-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "NG06",
    "name": "Neutral Grey 6",
    "hex": "#1C1C1C",
    "l": 10.3,
    "h": 158,
    "c": 0,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-ng06-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "CGII04",
    "name": "Cool Grey II 4",
    "hex": "#1A1C20",
    "l": 10.2,
    "h": 273,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg-o04-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "CG5",
    "name": "Cool Grey II 5",
    "hex": "#1A1C1F",
    "l": 10.2,
    "h": 267,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg5-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "GG9",
    "name": "Green Grey 9",
    "hex": "#1C1C1A",
    "l": 10.2,
    "h": 110,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-gg9-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG130",
    "name": "Warm Grey 13",
    "hex": "#1C1C1A",
    "l": 10.2,
    "h": 110,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg130-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E450",
    "name": "Fennel Seed",
    "hex": "#1E1C14",
    "l": 10.2,
    "h": 98,
    "c": 6,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e450-individual-marker-brush-chisel-1"
  },
  {
    "type": "ohuhu",
    "id": "NG07",
    "name": "Neutral Grey 7",
    "hex": "#1C1C1B",
    "l": 10.2,
    "h": 110,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-ng07-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RV250",
    "name": "Peony",
    "hex": "#2A1619",
    "l": 10.1,
    "h": 12,
    "c": 11,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rv250-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "V450",
    "name": "Dark Lavender",
    "hex": "#1A1B24",
    "l": 10,
    "h": 288,
    "c": 7,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-v450-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "RG080",
    "name": "Red Grey 08",
    "hex": "#1C1A19",
    "l": 9.4,
    "h": 55,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-rg080-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R284",
    "name": "Clove",
    "hex": "#2A1413",
    "l": 9.3,
    "h": 26,
    "c": 12,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r284-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "WG09",
    "name": "Warm Grey 9",
    "hex": "#1B1A16",
    "l": 9.2,
    "h": 99,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-wg09-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "E460",
    "name": "Military Olive",
    "hex": "#1B1A14",
    "l": 9.2,
    "h": 102,
    "c": 4,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-e460-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "PB6",
    "name": "Royal Blue",
    "hex": "#10192C",
    "l": 8.9,
    "h": 282,
    "c": 14,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-pb6-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R340",
    "name": "Argyle Purple",
    "hex": "#1E1716",
    "l": 8.5,
    "h": 31,
    "c": 4,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r340-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "CGII07",
    "name": "Cool Grey II 7",
    "hex": "#161819",
    "l": 8.1,
    "h": 236,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg-o07-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "Y13",
    "name": "Chestnut Brown",
    "hex": "#191713",
    "l": 7.8,
    "h": 89,
    "c": 3,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-y13-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "BGII09",
    "name": "Blue Grey II 9",
    "hex": "#161616",
    "l": 7.2,
    "h": 158,
    "c": 0,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-bg050-individual-marker-brush-chisel-1"
  },
  {
    "type": "ohuhu",
    "id": "120",
    "name": "Black",
    "hex": "#171513",
    "l": 6.9,
    "h": 73,
    "c": 2,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-120-individualmarker"
  },
  {
    "type": "ohuhu",
    "id": "CGII08",
    "name": "Cool Grey II 8",
    "hex": "#141515",
    "l": 6.7,
    "h": 199,
    "c": 0,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg-o08-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "CGII09",
    "name": "Cool Grey II 9",
    "hex": "#131313",
    "l": 5.9,
    "h": 158,
    "c": 0,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-cg-o09-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "R350",
    "name": "Dark Purple Grey",
    "hex": "#141211",
    "l": 5.6,
    "h": 54,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-r350-individual-marker-brush-chisel"
  },
  {
    "type": "ohuhu",
    "id": "NG09",
    "name": "Neutral Grey 9",
    "hex": "#13110F",
    "l": 5.2,
    "h": 73,
    "c": 1,
    "shopUrl": "https://eu.ohuhu.com/products/ohuhu-honolulu-ng09-individual-marker-brush-chisel"
  },
  {
    "type": "polychromos",
    "id": 199,
    "name": "Schwarz",
    "hex": "#111111",
    "l": 5.1,
    "h": 158,
    "c": 0,
    "shopUrl": "https://www.kunstpark-shop.de/faber-castell-polychromos-einzeln.html"
  }
];
