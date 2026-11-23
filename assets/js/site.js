/* Natural-Iter : effets propres au client. Le socle gère l'ouverture, le voile, l'en-tête, le menu, les boucles,
   les mesures et la bibliothèque d'effets (posés par attributs dans les pages). Effets propres du plan d'animation :
   - olio-titolo      : le mot « taggiasco » se remplit d'huile dorée ; la surface ondule et penche avec le défilement ;
   - muretto          : les pierres du muret se posent une à une au défilement ;
   - termometro       : la colonne descend sous les 25 °C au défilement ;
   - bottiglia-soglia : la bouteille de la boutique se remplit avec le total du panier, jusqu'à CHF 150 ;
   - banda, archivio  : ouvertures des pages Prodotti et Chi siamo (bandeau qui s'ouvre, photo d'archive qui se pose).
   Modules de la bibliothèque : panier en tiroir (toutes les pages), catalogue à filtres et carte cadeau (shop), frise (chi siamo). */
import { demarrer, boucle, versObjet, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pagina = document.documentElement.dataset.pagina;

/* ---------- Huile dans le mot (olio-titolo) ---------- */
const olio = { el: null, livello: 0, finale: 0.8, inclinazione: 0, versione: 0, attivo: false };
function onda(t) {
  const n = 26, pts = [];
  const base = (1 - olio.livello) * 100;
  for (let i = 0; i <= n; i++) {
    const x = -4 + (108 * i) / n;
    const y = base + Math.sin(i * 0.7 + t * 2.1) * 1.5 + Math.sin(i * 0.31 - t * 1.3) * 1.1 + olio.inclinazione * ((x - 50) / 50);
    pts.push(`${x.toFixed(1)}% ${y.toFixed(2)}%`);
  }
  return `polygon(-4% 140%, ${pts.join(', ')}, 104% 140%)`;
}
function preparaOlio() {
  olio.el = $('.olio-parola');
  if (!olio.el) return;
  let ultimoY = window.scrollY, tempo = 0;
  boucle(olio.el, (dt, t) => {
    tempo = t;
    /* Le liquide penche selon la vitesse de défilement, puis revient à plat (ressort amorti). */
    const y = window.scrollY, v = (y - ultimoY) / Math.max(dt, 0.001); ultimoY = y;
    const voluto = Math.max(-7, Math.min(7, v / 260));
    olio.inclinazione += (voluto - olio.inclinazione) * Math.min(1, dt * 6);
    olio.el.style.setProperty('--vague', onda(tempo));
  });
}
function riempi(duree = 1.3) {
  if (!olio.el || !gsap) return;
  gsap.fromTo(olio, { livello: 0 }, { livello: olio.finale, duration: duree, ease: 'power2.out', overwrite: true });
}
function olioFinale() { if (olio.el) { olio.livello = olio.finale; olio.el.style.setProperty('--vague', onda(0)); } }

/* ---------- Muret qui se construit (muretto) ---------- */
const muretti = [];
function preparaMuretti() {
  if (!gsap || !ST) return;
  for (const fascia of $$('[data-effet="muretto"]')) {
    const pietre = $$('.pietra', fascia);
    if (!pietre.length) return;
    /* Une fois posé, le muret reste construit (pas de retour en arrière en remontant). */
    const tl = gsap.timeline({ paused: true });
    ST.create({ trigger: fascia, start: 'top 92%', once: true, onEnter: () => tl.play() });
    muretti.push(tl);
    pietre.forEach((p) => {
      const riga = +getComputedStyle(p).getPropertyValue('--r') || 0;
      const x = +getComputedStyle(p).getPropertyValue('--x') || 0;
      tl.fromTo(p, { y: -70 - riga * 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'bounce.out' }, riga * 0.38 + x * 0.55);
    });
  }
}

/* ---------- Thermomètre qui descend sous 25 °C (termometro) ---------- */
function preparaTermometro() {
  const box = $('[data-effet="termometro"]');
  if (!box || !gsap || !ST) return;
  const colonne = $$('.termometro-colonna', box);
  const rect = colonne.find((c) => c.tagName === 'rect');
  gsap.timeline({ scrollTrigger: { trigger: box, start: 'top 85%', end: 'bottom 45%', scrub: 0.8, invalidateOnRefresh: true } })
    .fromTo(rect, { attr: { y: 52 } }, { attr: { y: 182 }, ease: 'none', duration: 1 }, 0)
    .fromTo(colonne, { fill: '#d9792b' }, { fill: '#e3bd3c', ease: 'none', duration: 1 }, 0);
}

/* ---------- Bouteille-jauge de la boutique (bottiglia-soglia) ---------- */
const SOGLIA = 150;
function totaleCarrello() {
  try { const m = JSON.parse(localStorage.getItem('natural-iter-carrello') || 'null'); return m && Array.isArray(m.lignes) ? m.lignes.reduce((t, l) => t + l.prix * l.qte, 0) / 100 : 0; } catch { return 0; }
}
function preparaSoglia() {
  const box = $('[data-effet="bottiglia-soglia"]');
  if (!box) return;
  const path = $('.soglia-olio', box), stato = $('[data-soglia-stato]');
  const s = { livello: 0, voluto: 0 };
  const fmt = (n) => 'CHF ' + n.toFixed(2);
  const aggiorna = (anima = true) => {
    const tot = totaleCarrello();
    s.voluto = Math.min(1, tot / SOGLIA);
    if (stato) stato.textContent = !tot ? stato.dataset.vuoto || stato.textContent
      : tot >= SOGLIA ? `Nel carrello: ${fmt(tot)}. Spedizione gratuita in Svizzera!`
      : `Nel carrello: ${fmt(tot)}. Mancano ${fmt(SOGLIA - tot)} per la spedizione gratuita.`;
    if (gsap && anima) gsap.to(s, { livello: s.voluto, duration: 1.1, ease: 'power2.out', overwrite: true }); else s.livello = s.voluto;
  };
  if (stato) stato.dataset.vuoto = stato.textContent;
  boucle(box, (dt, t) => {
    /* Intérieur de la bouteille : de y 128 (vide) à y 22 (pleine) ; un filet d'huile reste visible même vide. */
    const y = 128 - (0.04 + s.livello * 0.96) * 106;
    let d = `M0 150 L0 ${y.toFixed(1)}`;
    for (let x = 0; x <= 520; x += 26) d += ` L${x} ${(y + Math.sin(x / 38 + t * 2.4) * 2.6).toFixed(1)}`;
    path.setAttribute('d', d + ' L520 150 Z');
  });
  aggiorna(false); s.livello = 0;
  quand('pret', () => aggiorna(true));
  window.addEventListener('storage', (e) => { if (e.key === 'natural-iter-carrello') aggiorna(); });
  const compte = $('[data-panier-compte]');
  if (compte) new MutationObserver(() => aggiorna()).observe(compte, { childList: true, characterData: true, subtree: true });
}

/* ---------- Vitrine : flèches et avancement ---------- */
function preparaVetrina() {
  const r = $('[data-vetrina]');
  if (!r) return;
  const prec = $('[data-vetrina-prec]'), succ = $('[data-vetrina-succ]'), barra = $('.vetrina-avanzamento');
  let misure = { max: 1, passo: 300 };
  const misura = () => { const c = r.firstElementChild; misure = { max: Math.max(1, r.scrollWidth - r.clientWidth), passo: c ? c.getBoundingClientRect().width + 20 : 300 }; aggiorna(); };
  const aggiorna = () => {
    const p = Math.min(1, r.scrollLeft / misure.max);
    if (barra) barra.style.setProperty('--avanzamento', (r.clientWidth / (r.clientWidth + misure.max) + p * (misure.max / (r.clientWidth + misure.max))).toFixed(3));
    if (prec) prec.disabled = r.scrollLeft < 4;
    if (succ) succ.disabled = r.scrollLeft > misure.max - 4;
  };
  prec?.addEventListener('click', () => r.scrollBy({ left: -misure.passo, behavior: 'smooth' }));
  succ?.addEventListener('click', () => r.scrollBy({ left: misure.passo, behavior: 'smooth' }));
  r.addEventListener('scroll', aggiorna, { passive: true });
  new ResizeObserver(misura).observe(r);
  misura();
}

/* ---------- Ouverture des pages intérieures (banda, archivio) au défilement ---------- */
function preparaAperture() {
  if (!gsap || !ST) return;
  const bott = $('[data-effet="bottiglia-vetrina"] img');
  if (bott) gsap.fromTo(bott, { y: 40, rotation: -4 }, { y: -30, rotation: 3, ease: 'none', scrollTrigger: { trigger: bott.parentElement, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
  const foto = $('[data-effet="archivio"]');
  if (foto) gsap.fromTo(foto, { rotation: 0, y: 0 }, { rotation: -3, y: 60, ease: 'none', scrollTrigger: { trigger: foto, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
}

/* ---------- Recherche dans le catalogue (sans accents, sans majuscules, pluriels tolérés) ---------- */
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
function preparaCerca(api) {
  const campo = $('[data-cerca]');
  if (!campo || !api) return;
  const fiches = $$('.cff__fiche');
  let minuto = 0;
  const filtra = () => {
    const parole = norm(campo.value).split(/\s+/).filter((p) => p.length > 1).map((p) => p.length > 4 ? p.slice(0, -1) : p);
    for (const f of fiches) {
      const testo = norm(f.dataset.nome + ' ' + (f.querySelector('.prodotto-descr')?.textContent || ''));
      f.dataset.cercaFuori = parole.length && !parole.every((p) => testo.includes(p)) ? '1' : '0';
    }
    api.appliquer(true);
  };
  campo.addEventListener('input', () => { clearTimeout(minuto); minuto = setTimeout(filtra, 160); });
  document.addEventListener('click', (e) => { if (e.target.closest('[data-reinit]')) { campo.value = ''; fiches.forEach((f) => { f.dataset.cercaFuori = '0'; }); } }, true);
}

/* ---------- Modules de la bibliothèque ---------- */
async function moduli() {
  const v = document.documentElement.dataset.v || '1';
  const carica = (nome) => import(`./modules/${nome}/module.js?v=${v}`);
  try { const m = await carica('panier-en-tiroir'); for (const el of $$('[data-module="panier-en-tiroir"]')) await m.init(el); } catch (err) { console.error('[panier]', err); }
  const cat = $('[data-module="catalogue-filtres-flip"]');
  if (cat) {
    try {
      const m = await carica('catalogue-filtres-flip');
      const api = await m.init(cat, { mots: ['prodotto', 'prodotti'], format: (n) => 'CHF ' + n });
      preparaCerca(api);
    } catch (err) { console.error('[catalogo]', err); }
  }
  const buono = $('[data-module="carte-cadeau-qui-se-compose"]');
  if (buono) {
    try {
      const m = await carica('carte-cadeau-qui-se-compose');
      await m.init(buono, { devise: 'CHF', langue: 'it-CH', cachet: 'NI', textes: {
        pour: 'Per {pour}', de: 'Da parte di {de}', quantite: '× {n}',
        ticketUn: 'Un buono da {montant}', ticket: '{n} buoni da {montant} · totale {total}', annonce: 'Totale: {total}',
        uneCarte: 'un buono da {montant}', plusieurs: '{n} buoni da {montant}', pourQui: ' per {pour}',
        statut: 'Buono pronto: {quoi}{pourQui}, totale {total}. {simule}', simule: 'Acquisto simulato: nulla viene addebitato.',
        preparation: 'Preparazione del buono…', erreurMontant: 'Scegli un importo tra {min} e {max}.', echec: 'Il buono non è stato registrato. Riprova tra poco.',
      } });
    } catch (err) { console.error('[buono]', err); }
  }
  const frise = $('[data-module="frise-tracee"]');
  if (frise) { try { const m = await carica('frise-tracee'); await m.init(frise, { locale: 'it-CH' }); } catch (err) { console.error('[frise]', err); } }
}

/* ---------- Premier écran : éléments animés par le projet ---------- */
const primi = () => $$('main > section:first-child [data-anime="gsap"], .apertura-titolo > :not(.olio-parola)');
function entrata(tl, t) {
  const el = primi();
  const bott = $('.apertura-bottiglia'), banda = $('.banda-media'), archivio = $('.archivio-media');
  const testi = el.filter((x) => x !== bott && x !== banda && x !== archivio);
  const anim = (cosa, da, a, quando) => (tl ? tl.fromTo(cosa, da, a, quando) : gsap.fromTo(cosa, da, { ...a, delay: quando }));
  if (testi.length) anim(testi, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out' }, t);
  if (bott) anim(bott, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, t + 0.1);
  if (banda) anim(banda, { clipPath: 'inset(18% 22% 18% 22% round 28px)', opacity: 1 }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', opacity: 1, duration: 1.1, ease: 'power3.inOut' }, t);
  if (archivio) anim(archivio, { y: 40, rotation: 5, opacity: 0 }, { y: 0, rotation: -2, opacity: 1, duration: 0.9, ease: 'back.out(1.4)' }, t + 0.05);
}

demarrer({
  preparer() {
    preparaOlio();
    preparaMuretti();
    preparaTermometro();
    preparaSoglia();
    preparaAperture();
    preparaVetrina();
  },
  /* Intro (moins de 3 s) : le panneau olive et le logo, une goutte d'huile tombe, glisse jusqu'à l'objet d'ouverture
     de la page (le mot « taggiasco » sur l'accueil) et le panneau s'ouvre depuis elle ; puis le mot se remplit (hors timeline). */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-logo', { opacity: 0, y: 12, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.45 }, 0)
      .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.35 }, 0.15)
      .fromTo('.goccia', { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.45)
      .to('.ouverture-logo, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 0.75);
    versObjet(tl, { a: 0.8, duree: 0.45, ouverture: 0.75 });
    tl.to('.goccia', { opacity: 0, duration: 0.2 }, 1.3);
    entrata(tl, 1.35);
    tl.call(() => riempi(1.3), null, 1.4);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set(primi(), { opacity: 1, y: 0, rotation: 0 });
    const banda = $('.banda-media'); if (banda) gsap.set(banda, { clipPath: 'inset(0% 0% 0% 0% round 0px)', opacity: 1 });
    const arch = $('.archivio-media'); if (arch) gsap.set(arch, { rotation: -2, opacity: 1, y: 0 });
    olioFinale();
    muretti.forEach((tl) => tl.progress(1));
  },
  arrivee() {
    if (!gsap) return;
    entrata(null, 0.1);
    riempi(1.2);
  },
});

moduli();
