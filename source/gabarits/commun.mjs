/* Gabarit commun : head, en-tête, menu, pied de page, barre fixe du téléphone, voile.
   Les conventions data-* sont celles que lisent le socle JavaScript et l'audit (voir le README). */
import { html, brut } from '../../outils/gabarit.mjs';

const navigation = (c) => c.site.navigation.filter((cle) => c.pages[cle] && (c.pages[cle].langues || c.langues).includes(c.l));

function tete(c) {
  const p = c.page, cle = p.cle;
  const titre = c.s(`pages.${cle}.titre`), description = c.s(`pages.${cle}.description`);
  const ici = c.abs(c.url(cle));
  const imagePartage = c.abs(`/assets/partage/${p.partage === false ? 'accueil' : cle}-${c.l}.jpg`);
  const autres = c.alternatives(cle);
  const structure = c.donnees.structure ? JSON.stringify(c.donnees.structure).replace(/</g, '\\u003c') : '';
  return html`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${titre}</title>
<meta name="description" content="${description}">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="${ici}">
${autres.length > 1 ? autres.map((a) => html`<link rel="alternate" hreflang="${a.l}" href="${c.abs(a.url)}">\n`) : ''}${autres.length > 1 ? html`<link rel="alternate" hreflang="x-default" href="${c.abs(c.alternatives(cle)[0].url)}">` : ''}
<style>${brut(c.critique.css)}</style>
<script>${brut(c.critique.js)}</script>
${(c.site.polices || []).map((f) => html`<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>\n`)}<link rel="stylesheet" href="${c.asset('css/socle.css')}">
<link rel="stylesheet" href="${c.asset('css/modules.css')}">
<link rel="stylesheet" href="${c.asset('css/site.css')}">
<link rel="modulepreload" href="${c.asset('js/site.js')}">
<link rel="modulepreload" href="${c.asset('js/socle/index.js')}">
<script src="/assets/vendor/gsap.min.js" defer></script>
<script src="/assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/vendor/SplitText.min.js" defer></script>
<script type="module" src="${c.asset('js/site.js')}"></script>
<meta name="theme-color" content="${c.site.couleurs.theme || c.site.couleurs.fond}">
<link rel="icon" href="/assets/images/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${c.site.nom}">
<meta property="og:locale" content="${c.l === 'it' ? 'it_CH' : c.l}">
<meta property="og:title" content="${titre}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${ici}">
<meta property="og:image" content="${imagePartage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${c.s(`pages.${p.partage === false ? 'accueil' : cle}.partageAlt`)}">
<meta name="twitter:card" content="summary_large_image">
${structure ? html`<script type="application/ld+json">${brut(structure)}</script>` : ''}
</head>`;
}

function entete(c) {
  return html`<header data-entete>
  <div class="entete-rangee">
    <a class="entete-logo" href="${c.url('accueil')}" data-libelle="${c.libelle('accueil')}" aria-label="${c.site.nom}, ${c.s('pages.accueil.nav')}"${c.page.cle === 'accueil' ? brut(' aria-current="page"') : ''}>
      <img src="/assets/images/logo-240.webp" alt="" width="82" height="40">
    </a>
    <nav data-nav aria-label="${c.s('commun.navigation')}">
      <ul>${navigation(c).filter((k) => k !== 'accueil').map((k) => html`<li>${c.lien(k)}</li>`)}</ul>
    </nav>
    <div class="entete-actions">
      <a class="bouton bouton--entete" href="${c.url(c.site.actionEntete.page)}" data-libelle="${c.libelle(c.site.actionEntete.page)}">${c.t('commun.actionEntete')}</a>
      <button type="button" class="carrello-bottone" data-panier-ouvrir data-envol-cible aria-label="${c.s('commun.carrello')}"><span class="carrello-vaso" aria-hidden="true"><span class="carrello-olio"></span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.3 11.1a2 2 0 0 1-2 1.9H8.3a2 2 0 0 1-2-1.9Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg><span class="pet-compte est-vide" data-panier-compte>0</span></button>
      <button type="button" data-menu-bouton aria-controls="menu" aria-expanded="false" data-libelle-ouvrir="${c.s('commun.menu')}" data-libelle-fermer="${c.s('commun.fermer')}"><span data-libelle-bouton>${c.t('commun.menu')}</span></button>
      <a class="menu-sansjs" href="#menu" data-menu-lien>${c.t('commun.menu')}</a>
    </div>
  </div>
</header>
<script>/* Avant le premier affichage : rangées de la navigation (même règle que ajusterNav dans assets/js/socle/entete.js)
   et hauteur réelle de l'en-tête, pour que rien ne saute quand le JavaScript du site prend la main. */
(function () {
  var h = document.documentElement, u = document.querySelector('[data-nav] ul'), e = document.querySelector('[data-entete]');
  if (u) {
    var deborde = function () { return u.scrollWidth > u.clientWidth + 1; }, c = deborde();
    if (c && window.matchMedia('(min-width: 900px)').matches) {
      h.classList.add('nav-deux-rangees'); c = deborde();
      if (c) { h.classList.add('nav-deux-lignes'); var a = u.querySelector('a'); c = !a || u.getBoundingClientRect().height > a.getBoundingClientRect().height * 2.5; }
      if (c) h.classList.remove('nav-deux-rangees', 'nav-deux-lignes');
    }
    if (c) h.classList.add('nav-compacte');
  }
  if (e) h.style.setProperty('--entete-h', Math.round(e.getBoundingClientRect().height) + 'px');
})();</script>
<span id="menu-ferme" aria-hidden="true"></span>
<div id="menu" data-menu role="dialog" aria-modal="true" aria-label="${c.s('commun.menu')}">
  <p class="menu-sansjs-fermer"><a href="#menu-ferme">${c.t('commun.fermer')}</a></p>
  <ul>${navigation(c).map((k, i) => html`<li style="--i:${i}">${c.lien(k, { classe: 'menu-lien' })}</li>`)}<li style="--i:5">${c.lien('shop', { ancre: 'buono-regalo', classe: 'menu-lien menu-lien--piccolo', texte: c.t('commun.buono') })}</li></ul>
  <p class="menu-contatti"><a class="bouton" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
  <p class="menu-nota">${c.t('commun.spedizione')}</p>
</div>`;
}

function pied(c) {
  return html`<footer class="pied" id="pied">
  <div class="conteneur pied-grille">
    <div class="pied-marca">
      <img src="/assets/images/logo-240.webp" alt="${c.site.nom}" width="123" height="60" loading="lazy">
      <p>${c.site.nomComplet}<br>${c.site.contact.rue}<br>${c.site.contact.localite}</p>
      <p><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
    </div>
    <nav aria-label="${c.s('commun.sommaire')}">
      <p class="pied-titolo">${c.t('commun.sommaire')}</p>
      <ul>${navigation(c).map((k) => html`<li>${c.lien(k)}</li>`)}<li>${c.lien('shop', { ancre: 'buono-regalo', texte: c.t('commun.buono') })}</li></ul>
    </nav>
    <div>
      <p class="pied-titolo">${c.t('commun.seguici')}</p>
      <ul>
        <li><a href="${c.site.reseaux.instagram}" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="${c.site.reseaux.facebook}" target="_blank" rel="noopener">Facebook</a></li>
        <li><a href="${c.site.reseaux.waldmuus}" target="_blank" rel="noopener">${c.t('commun.waldmuusFb')}</a></li>
        <li><a href="#haut" data-sans-transition>${c.t('commun.retourHaut')}</a></li>
      </ul>
    </div>
    <div>
      <p class="pied-titolo">${c.t('commun.spedizioneTitolo')}</p>
      <p>${c.t('commun.spedizione')}</p>
      <p>${c.t('commun.senza')}</p>
    </div>
  </div>
  <div class="conteneur pied-bas"><p>${c.t('commun.legali')}</p><p>${c.t('commun.maquette')}</p><p>© ${c.site.nomComplet}</p></div>
</footer>`;
}

function barre(c) {
  const a = c.site.actionEntete;
  return html`<div data-barre-fixe>
  <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')}</a>
  ${c.page.cle === 'shop' ? html`<button type="button" class="bouton" data-panier-ouvrir>${c.t('commun.carrello')}</button>` : a ? html`<a class="bouton" href="${c.url(a.page, a.ancre || '')}" data-libelle="${c.libelle(a.page)}">${c.t('commun.actionBarra')}</a>` : ''}
</div>`;
}

/* Voile : sa forme (glisse, iris, vague, rideau) vient de donnees/site.json (formeVoile) ; voir assets/js/socle/voile.js. */
const FORMES_VOILE = ['glisse', 'iris', 'vague', 'rideau'];
function voile(c) {
  const forme = FORMES_VOILE.includes(c.site.formeVoile) ? c.site.formeVoile : 'glisse';
  const vagues = forme === 'vague'
    ? html`<svg class="voile-vague voile-vague--haut" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 120 C 240 20 480 20 720 70 S 1200 130 1440 40 V 120 H 0 Z"/></svg><svg class="voile-vague voile-vague--bas" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 C 240 100 480 100 720 50 S 1200 -10 1440 80 V 0 H 0 Z"/></svg>`
    : '';
  return html`<div data-voile data-forme="${forme}" aria-hidden="true">${vagues}<div class="voile-contenu"><img src="/assets/images/logo-240.webp" alt="" width="100" height="49"><span data-voile-libelle>${c.libelle(c.page.cle)}</span></div></div>`;
}

export function page(c, contenu) {
  return html`<!doctype html>
<html lang="${c.l}" data-v="${c.v}" data-pagina="${c.page.cle}"${c.site.curseur ? brut(' data-curseur') : ''}>
${tete(c)}
<body id="haut">
${voile(c)}
<div class="ouverture-panneau" data-ouverture aria-hidden="true">
  <img class="ouverture-logo" src="/assets/images/logo-480.webp" alt="" width="180" height="88">
  <p class="ouverture-ligne">${c.t('commun.introLigne')}</p>
  <span class="goccia" data-ouverture-objet></span>
</div>
<a class="evitement" href="#contenu">${c.t('commun.evitement')}</a>
${entete(c)}
<main id="contenu" tabindex="-1"${c.page.sansAction ? brut(' data-sans-action') : ''}${c.page.sansEffet ? brut(' data-sans-effet') : ''}>
${contenu}
</main>
${pied(c)}
${barre(c)}
<div data-module="panier-en-tiroir" data-panier-tiroir>
  <script type="application/json" data-panier-reglages>{"devise":"CHF","seuil_livraison":150,"frais_livraison":null,"tva":null,"cle":"natural-iter-carrello","prefixe":"NI"}</script>
</div>
</body>
</html>`;
}
