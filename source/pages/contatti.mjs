/* Page Contatti : ouverture en deux colonnes (coordonnées en grand, collines du Mendrisiotto),
   formulaire simulé prérempli par ?sujet=, professionnels, carte schématique et partenaire. */
import { html } from '../../outils/gabarit.mjs';
import { mappa } from '../gabarits/disegni.mjs';

export const page = { cle: 'contatti', fichier: 'contatti', imagePartage: 'grok/mendrisiotto-1280.webp' };

export default (c) => {
  const k = c.site.contact;
  const sogg = [['privato', 's1'], ['professionisti', 's2'], ['quantita', 's3'], ['buono', 's4'], ['altro', 's5']];
  return html`
<section class="apertura-contatti" id="inizio">
  <div class="conteneur contatti-griglia">
    <div class="contatti-testo">
      <p class="sopra" data-anime="gsap">${c.t('contatti.apertura.sopra')}</p>
      <h1 class="contatti-titolo" data-anime="gsap">${c.tb('contatti.apertura.titolo')}</h1>
      <p data-anime="gsap">${c.t('contatti.apertura.testo')}</p>
      <dl class="recapiti" data-anime="gsap">
        <div data-info-cle><dt>${c.t('contatti.apertura.telefono')}</dt><dd><a href="tel:${k.telephoneLien}" data-action-principale>${k.telephone}</a></dd></div>
        <div><dt>${c.t('contatti.apertura.email')}</dt><dd><a href="mailto:${k.email}">${k.email}</a></dd></div>
        <div><dt>${c.t('contatti.apertura.indirizzo')}</dt><dd>${c.site.nomComplet}<br>${k.rue}, ${k.localite}</dd></div>
      </dl>
    </div>
    ${c.media({ nom: 'grok/mendrisiotto', alt: c.s('contatti.apertura.alt'), priorite: true, classe: 'contatti-media', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="8"' })}
  </div>
</section>

<section class="sezione dove" id="dove">
  <div class="conteneur dove-griglia">
    <figure class="dove-mappa">
      ${mappa({ compatta: true, etichette: { aria: c.s('chi.tragitto.mappaAria'), ponente: 'Ponente Ligure', mare: 'Mar Ligure', mendrisio: 'Mendrisio', svizzera: c.s('chi.tragitto.svizzera'), italia: 'Italia' } })}
      <figcaption>${c.t('chi.tragitto.nota')}</figcaption>
    </figure>
    <div class="dove-testo">
      <h2 data-anime="lignes">${c.tb('contatti.dove.titolo')}</h2>
      <p data-anime>${c.t('contatti.dove.testo')}</p>
      <p class="partner" data-anime><strong>${c.t('contatti.dove.partner')}</strong><br>Biofair - Naturapart GmbH, Via Vignalunga 7, 6850 Mendrisio<br><a href="tel:+41919666487">091 966 64 87</a> · <a href="mailto:info@naturapart.com">info@naturapart.com</a></p>
    </div>
  </div>
</section>

<section class="sezione scrivici fondo-salvia" id="scrivici">
  <div class="conteneur scrivici-griglia">
    <div class="scrivici-testo">
      <h2 data-anime="lignes">${c.tb('contatti.modulo.titolo')}</h2>
      <p data-anime>${c.t('contatti.modulo.testo')}</p>
      <div class="pro-riquadro" data-anime>
        <h3>${c.t('contatti.pro.titolo')}</h3>
        <p>${c.t('contatti.pro.testo')}</p>
      </div>
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate data-anime>
      <div class="champ"><label for="f-nome">${c.t('contatti.modulo.nome')}</label><input id="f-nome" name="nome" autocomplete="name" required></div>
      <div class="champ-duo">
        <div class="champ"><label for="f-email">${c.t('contatti.modulo.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
        <div class="champ"><label for="f-tel">${c.t('contatti.modulo.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
      </div>
      <div class="champ"><label for="f-sujet">${c.t('contatti.modulo.oggetto')}</label>
        <select id="f-sujet" name="sujet">${sogg.map(([v, t]) => html`<option value="${v}"${v === 'privato' ? ' selected' : ''}>${c.t('contatti.modulo.' + t)}</option>`)}</select></div>
      <div class="champ"><label for="f-messaggio">${c.t('contatti.modulo.messaggio')}</label><textarea id="f-messaggio" name="messaggio" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.t('contatti.modulo.dati')}</p>
      <button type="submit" class="bouton">${c.t('contatti.modulo.invia')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>

`;
};
