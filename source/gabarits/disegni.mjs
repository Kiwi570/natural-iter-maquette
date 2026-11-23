/* Dessins en SVG propres au client, produits à la génération (aucun calcul au chargement).
   - muretto : muret de pierre sèche, pierres irrégulières posées par rangées (effet « muretto » dans site.js).
   - termometro : thermomètre dont la colonne descend sous 25 °C (effet « termometro »).
   - goccia : goutte d'huile (intro, voile). */
import { html, brut } from '../../outils/gabarit.mjs';

/* Pseudo-aléatoire stable : le muret est le même à chaque génération. */
function graine(n) {
  let s = n;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

const TEINTES = ['#d6ccb7', '#c7bca4', '#b9ae95', '#ddd5c3', '#a99e85', '#cbc2ad', '#bfb6a0'];

export function muretto({ largeur = 1440, rangees = 4, hauteur = 30, seme = 7, classe = 'muretto' } = {}) {
  const r = graine(seme);
  const pierres = [];
  let i = 0;
  for (let rg = 0; rg < rangees; rg++) {
    const y0 = rg * hauteur;
    let x = rg % 2 ? -r() * 40 : -r() * 20;
    while (x < largeur) {
      const w = 46 + r() * 74, h = hauteur - 3 - r() * 5;
      const j = () => (r() - 0.5) * 5;
      const x1 = x + 2, x2 = x + w - 2, y1 = y0 + (hauteur - h) + 1.5, y2 = y0 + hauteur - 1.5;
      /* Pierre : quadrilatère aux coins arrondis et légèrement de travers. */
      const p = [[x1 + j(), y1 + j() * 0.5], [x2 + j(), y1 + j() * 0.5], [x2 + j(), y2 + j() * 0.3], [x1 + j(), y2 + j() * 0.3]];
      const d = `M${(p[0][0] + 4).toFixed(1)} ${p[0][1].toFixed(1)} L${(p[1][0] - 4).toFixed(1)} ${p[1][1].toFixed(1)} Q${p[1][0].toFixed(1)} ${p[1][1].toFixed(1)} ${p[1][0].toFixed(1)} ${(p[1][1] + 4).toFixed(1)} L${p[2][0].toFixed(1)} ${(p[2][1] - 4).toFixed(1)} Q${p[2][0].toFixed(1)} ${p[2][1].toFixed(1)} ${(p[2][0] - 4).toFixed(1)} ${p[2][1].toFixed(1)} L${(p[3][0] + 4).toFixed(1)} ${p[3][1].toFixed(1)} Q${p[3][0].toFixed(1)} ${p[3][1].toFixed(1)} ${p[3][0].toFixed(1)} ${(p[3][1] - 4).toFixed(1)} L${p[0][0].toFixed(1)} ${(p[0][1] + 4).toFixed(1)} Q${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)} ${(p[0][0] + 4).toFixed(1)} ${p[0][1].toFixed(1)} Z`;
      pierres.push(`<path class="pietra" d="${d}" fill="${TEINTES[Math.floor(r() * TEINTES.length)]}" style="--x:${((x + w / 2) / largeur).toFixed(3)};--r:${rangees - 1 - rg}"/>`);
      x += w;
      i++;
    }
  }
  const h = rangees * hauteur;
  return html`<svg class="${classe}" viewBox="0 0 ${largeur} ${h}" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">${brut(pierres.join(''))}</svg>`;
}

export function termometro() {
  /* Tube de 40 à 250 ; repère des 25 °C à y = 150. La colonne part au-dessus et finit en dessous (site.js). */
  return html`<svg class="termometro" viewBox="0 0 120 300" aria-hidden="true" focusable="false">
  <defs><clipPath id="tubo"><rect x="44" y="30" width="32" height="225" rx="16"/><circle cx="60" cy="262" r="28"/></clipPath></defs>
  <rect class="termometro-vetro" x="44" y="30" width="32" height="225" rx="16"/>
  <circle class="termometro-vetro" cx="60" cy="262" r="28"/>
  <g clip-path="url(#tubo)">
    <rect class="termometro-colonna" x="40" y="60" width="40" height="240"/>
    <circle class="termometro-colonna" cx="60" cy="262" r="30"/>
  </g>
  <g class="termometro-scala">
    <line x1="80" y1="70" x2="92" y2="70"/><line x1="80" y1="110" x2="92" y2="110"/>
    <line class="termometro-soglia" x1="20" y1="150" x2="100" y2="150"/>
    <line x1="80" y1="190" x2="92" y2="190"/><line x1="80" y1="230" x2="92" y2="230"/>
  </g>
</svg>`;
}

export const goccia = () => html`<svg class="goccia-svg" viewBox="0 0 40 56" aria-hidden="true" focusable="false"><path d="M20 2 C 20 2 4 24 4 36 a16 16 0 0 0 32 0 C 36 24 20 2 20 2 Z"/></svg>`;

/* Carte schématique (pas à l'échelle) : côte ligure, frontière suisse, trajet Ponente Ligure → Mendrisio,
   consegne verso nord. Le trajet porte data-fx-trait : il se dessine au défilement (data-fx="trace" sur le svg). */
export function mappa({ etichette, compatta = false } = {}) {
  const e = etichette;
  return html`<svg class="mappa${compatta ? ' mappa--compatta' : ''}" viewBox="0 0 600 480" role="img" aria-label="${e.aria}" data-fx="trace">
  <rect class="mappa-terra" x="0" y="0" width="600" height="480" rx="18"/>
  <path class="mappa-mare" d="M0 462 C 70 456 112 430 150 410 C 200 386 250 362 300 330 C 340 310 384 322 424 346 C 472 374 528 390 600 394 L600 462 Q600 480 582 480 L18 480 Q0 480 0 462 Z"/>
  <g class="mappa-onde"><path d="M250 420 q14 -8 28 0 t28 0"/><path d="M380 440 q14 -8 28 0 t28 0"/><path d="M120 455 q14 -8 28 0 t28 0"/></g>
  <path class="mappa-confine" d="M150 40 C 210 74 262 86 318 94 C 362 100 394 112 406 140 C 418 164 442 154 454 130 C 472 98 522 80 600 72"/>
  <path class="mappa-percorso" data-fx-trait d="M150 404 C 186 344 248 292 298 246 C 348 200 392 168 422 138"/>
  <g class="mappa-consegne">
    <path data-fx-trait d="M428 122 C 418 92 398 62 368 34"/><path data-fx-trait d="M436 120 C 462 84 502 56 548 36"/><path data-fx-trait d="M422 126 C 378 104 318 84 258 64"/>
  </g>
  <circle class="mappa-punto" cx="150" cy="404" r="9"/><circle class="mappa-punto mappa-punto--casa" cx="424" cy="134" r="10"/>
  <g class="mappa-goccia" transform="translate(150 404)"><path d="M0 -22 C 0 -22 -11 -8 -11 0 a11 11 0 0 0 22 0 C 11 -8 0 -22 0 -22 Z"/></g>
  <text class="mappa-testo" x="40" y="380">${e.ponente}</text>
  <text class="mappa-testo mappa-testo--piccolo mappa-testo--mare" x="300" y="410">${e.mare}</text>
  <text class="mappa-testo" x="444" y="170">${e.mendrisio}</text>
  <text class="mappa-testo mappa-testo--piccolo" x="470" y="58">${e.svizzera}</text>
  <text class="mappa-testo mappa-testo--piccolo" x="200" y="150">${e.italia}</text>
</svg>`;
}
