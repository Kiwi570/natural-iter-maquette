/* Page Chi siamo : photo d'archive de Jürg en ouverture, frise des années 80 à aujourd'hui (module frise-tracee),
   Giacomo, le trajet Ponente Ligure → Mendrisio (carte schématique), appel final. */
import { html } from '../../outils/gabarit.mjs';
import { mappa, muretto } from '../gabarits/disegni.mjs';

export const page = { cle: 'chi-siamo', fichier: 'chi-siamo', imagePartage: 'jurg-anni-80-1168.webp' };

export default (c) => {
  const tappe = [
    { k: 't1', img: 'grok/potatura' },
    { k: 't2', img: 'jurg-2000' },
    { k: 't3', img: null },
    { k: 't4', img: 'uliveto-reti' },
  ];
  return html`
<section class="apertura-archivio" id="inizio">
  <div class="conteneur archivio-griglia">
    <div class="archivio-testo">
      <p class="sopra" data-anime="gsap">${c.t('chi.apertura.sopra')}</p>
      <h1 class="archivio-titolo" data-anime="gsap">${c.tb('chi.apertura.titolo')}</h1>
      <p data-anime="gsap">${c.t('chi.apertura.testo')}</p>
      <p class="archivio-azioni" data-anime="gsap">${c.lien('prodotti', { classe: 'bouton', texte: c.t('chi.apertura.azione'), attrs: 'data-action-principale' })}<span class="apertura-info" data-info-cle><span class="punto-giallo" aria-hidden="true"></span>${c.t('chi.apertura.info')}</span></p>
    </div>
    <div class="archivio-foto" data-iris-centre data-effet="archivio">
      ${c.media({ nom: 'jurg-anni-80', alt: c.s('accueil.storia.alt1'), priorite: true, classe: 'archivio-media', sizes: '(max-width: 760px) 86vw, 40vw', legende: c.t('accueil.storia.legenda1'), attrs: 'data-anime="gsap"' })}
    </div>
  </div>
</section>

<section class="sezione frt fondo-salvia" id="radici" data-module="frise-tracee">
  <div class="conteneur frt__testa">
    <p class="sopra" data-anime>${c.t('chi.frise.sopra')}</p>
    <h2 data-anime="lignes">${c.tb('chi.frise.titolo')}</h2>
    <div class="frt__chiffres">
      <p class="frt__chiffre"><span class="frt__prima">${c.t('accueil.storia.piuDi')}</span><span class="frt__n" data-compte="40">40</span><span class="frt__l">${c.t('accueil.storia.anni')}</span></p>
      <p class="frt__chiffre"><span class="frt__n" data-compte="5">5</span><span class="frt__l">${c.t('chi.frise.lingue')}</span></p>
    </div>
  </div>
  <ol class="conteneur frt__frise">
    <svg class="frt__trait" viewBox="0 0 4 100" preserveAspectRatio="none" aria-hidden="true"><path d="M2 0 L2 100"/></svg>
    ${tappe.map((t) => html`<li class="frt__etape">
      <p class="frt__annee">${c.t('chi.frise.' + t.k + 'a')}</p>
      <div class="frt__corps"><h3>${c.t('chi.frise.' + t.k + 't')}</h3><p>${c.t('chi.frise.' + t.k)}</p></div>
      ${t.img ? html`<div class="frt__visuel">${c.media({ nom: t.img, alt: c.s('chi.frise.' + t.k + 'alt'), classe: 'frt__media', sizes: '(max-width: 760px) 80vw, 24vw' })}</div>` : html`<div class="frt__visuel frt__visuel--testo" data-visuel><p>${c.t('chi.frise.t3data')}</p></div>`}
    </li>`)}
  </ol>
</section>

<section class="sezione giacomo" id="giacomo">
  <div class="conteneur giacomo-griglia">
    <div class="giacomo-ritratto">
      ${c.media({ nom: 'giacomo', alt: c.s('chi.giacomo.alt'), classe: 'giacomo-media', sizes: '(max-width: 760px) 50vw, 20vw', attrs: 'data-fx="zoom"' })}
    </div>
    <div class="giacomo-testo">
      <p class="sopra" data-anime>${c.t('chi.giacomo.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('chi.giacomo.titolo')}</h2>
      <p data-anime>${c.t('chi.giacomo.testo1')}</p>
      <p data-anime>${c.t('chi.giacomo.testo2')}</p>
      <ul class="lingue" data-anime="cascade" aria-label="${c.s('chi.giacomo.lingueAria')}">
        <li lang="it">Italiano</li><li lang="de">Deutsch</li><li lang="fr">Français</li><li lang="en">English</li><li lang="es">Español</li>
      </ul>
    </div>
  </div>
</section>

<section class="sezione tragitto fondo-oliva" id="tragitto">
  <div class="conteneur tragitto-griglia">
    <div class="tragitto-testo">
      <p class="sopra" data-anime>${c.t('chi.tragitto.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('chi.tragitto.titolo')}</h2>
      <p data-anime>${c.t('chi.tragitto.testo')}</p>
      ${c.media({ nom: 'grok/mulattiera', alt: c.s('chi.tragitto.alt'), classe: 'tragitto-media', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="parallaxe"' })}
    </div>
    <figure class="tragitto-mappa">
      ${mappa({ etichette: { aria: c.s('chi.tragitto.mappaAria'), ponente: 'Ponente Ligure', mare: 'Mar Ligure', mendrisio: 'Mendrisio', svizzera: c.s('chi.tragitto.svizzera'), italia: 'Italia' } })}
      <figcaption>${c.t('chi.tragitto.nota')}</figcaption>
    </figure>
  </div>
</section>

<section class="sezione fine-pagina" id="fine">
  <div class="conteneur fine-griglia">
    <h2 data-anime="lignes">${c.tb('chi.fine.titolo')}</h2>
    <div>
      <p data-anime>${c.t('chi.fine.testo')}</p>
      <p class="finale-azioni" data-anime>${c.lien('shop', { classe: 'bouton', texte: c.t('accueil.apertura.azione') })}${c.lien('contatti', { classe: 'bouton bouton--contour', texte: c.t('chi.fine.contatti') })}</p>
    </div>
  </div>
  <div class="muretto-fascia muretto-fascia--fine" data-effet="muretto">${muretto({ seme: 23, rangees: 3 })}</div>
</section>
`;
};
