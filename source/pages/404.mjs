/* Page 404 : la récolte est finie (échelle contre l'olivier, filet vide). */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introvabile" id="inizio">
  ${c.media({ nom: 'grok/pagina-404', alt: c.s('introvabile.alt'), priorite: true, classe: 'introvabile-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="zoom"' })}
  <div class="conteneur introvabile-testo">
    <p class="sopra" data-anime="gsap">404</p>
    <h1 data-anime="gsap">${c.tb('introvabile.titolo')}</h1>
    <p data-anime="gsap">${c.t('introvabile.testo')}</p>
    <p class="finale-azioni" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('introvabile.home'), attrs: 'data-action-principale' })}${c.lien('shop', { classe: 'bouton bouton--contour', texte: c.t('introvabile.shop') })}</p>
  </div>
</section>
`;
