/* Page Shop : « Spedizione gratuita da CHF 150 » en très grand avec la bouteille-jauge (effet bottiglia-soglia),
   catalogue filtrable (module catalogue-filtres-flip) avec recherche, quantités spéciales,
   bon cadeau qui se compose (module carte-cadeau-qui-se-compose). Le panier en tiroir est sur toutes les pages. */
import { html } from '../../outils/gabarit.mjs';
import { carta } from '../gabarits/prodotto.mjs';

export const page = { cle: 'shop', fichier: 'shop', imagePartage: 'gamma-800.webp' };

export default (c) => {
  const D = c.donnees.prodotti;
  return html`
<section class="apertura-shop" id="inizio">
  <div class="conteneur shop-griglia">
    <div class="shop-testo">
      <p class="sopra" data-anime="gsap">${c.t('shop.apertura.sopra')}</p>
      <h1 class="shop-titolo" data-anime="gsap" data-grille="typo fil">${c.tb('shop.apertura.titolo')}</h1>
      <p data-anime="gsap">${c.t('shop.apertura.testo')}</p>
      <p class="shop-azioni" data-anime="gsap"><a class="bouton" href="#catalogo" data-action-principale data-sans-transition>${c.t('shop.apertura.azione')}</a>${c.lien('shop', { ancre: 'buono-regalo', classe: 'bouton bouton--contour', texte: c.t('commun.buono') })}</p>
    </div>
    <div class="soglia" data-anime="gsap">
      <p class="soglia-sopra">${c.t('shop.soglia.sopra')}</p>
      <p class="soglia-cifra" data-info-cle><span class="soglia-valuta">CHF</span> 150</p>
      <div class="soglia-bottiglia" data-iris-centre data-effet="bottiglia-soglia" data-visuel role="img" aria-label="${c.s('shop.soglia.aria')}">
        <svg viewBox="0 0 520 150" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="sagoma"><path d="M18 40 Q18 22 36 22 L330 22 Q362 22 384 44 L402 58 L470 58 Q482 58 482 66 L482 84 Q482 92 470 92 L402 92 L384 106 Q362 128 330 128 L36 128 Q18 128 18 110 Z"/></clipPath>
            <linearGradient id="olio-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8b23a"/><stop offset="1" stop-color="#8a7a14"/></linearGradient>
          </defs>
          <g clip-path="url(#sagoma)">
            <rect class="soglia-vetro" x="0" y="0" width="520" height="150"/>
            <path class="soglia-olio" d="M0 150 L0 150 L520 150 L520 150 Z" fill="url(#olio-g)"/>
          </g>
          <path class="soglia-contorno" d="M18 40 Q18 22 36 22 L330 22 Q362 22 384 44 L402 58 L470 58 Q482 58 482 66 L482 84 Q482 92 470 92 L402 92 L384 106 Q362 128 330 128 L36 128 Q18 128 18 110 Z"/>
          <rect class="soglia-tappo" x="482" y="54" width="26" height="42" rx="5"/>
          <rect class="soglia-etichetta" x="120" y="44" width="150" height="62" rx="4"/>
        </svg>
      </div>
      <p class="soglia-stato" data-soglia-stato aria-live="polite">${c.t('shop.soglia.vuoto')}</p>
    </div>
  </div>
</section>

<section class="sezione catalogo cff" id="catalogo" data-module="catalogue-filtres-flip">
  <div class="conteneur catalogo-testa">
    <h2 data-anime="lignes">${c.tb('shop.catalogo.titolo')}</h2>
    <div class="cff__filtres">
      <div class="cff__groupe" role="group" aria-label="${c.s('shop.catalogo.categorie')}" data-filtre-groupe="categoria">
        <button type="button" data-valeur="tout" aria-pressed="true">${c.t('shop.catalogo.tutto')}</button>
        ${D.categorie.map((k) => html`<button type="button" data-valeur="${k.id}" aria-pressed="false">${k.nome}</button>`)}
      </div>
      <div class="catalogo-strumenti">
        <label class="catalogo-cerca"><span class="visuellement-cache">${c.t('shop.catalogo.cerca')}</span><input type="search" data-cerca placeholder="${c.s('shop.catalogo.cerca')}" autocomplete="off"></label>
        <label class="catalogo-tri"><span>${c.t('shop.catalogo.ordina')}</span>
          <select data-tri><option value="ordre">${c.t('shop.catalogo.evidenza')}</option><option value="prezzo-asc">${c.t('shop.catalogo.cresc')}</option><option value="prezzo-desc">${c.t('shop.catalogo.decresc')}</option></select></label>
        <p class="catalogo-conta" aria-live="polite"><b data-compte>${D.lista.length}</b> <span data-compte-mot>${c.t('shop.catalogo.prodotti')}</span></p>
      </div>
    </div>
  </div>
  <div class="conteneur cff__grille catalogo-griglia" data-grille>
    ${D.lista.map((p) => carta(c, p, { testo: true, sizes: '(max-width: 760px) 46vw, 24vw', classe: 'cff__fiche' }))}
    <p class="cff__vide" data-vide hidden>${c.t('shop.catalogo.vuoto')} <button type="button" class="bouton bouton--piccolo" data-reinit>${c.t('shop.catalogo.reinit')}</button></p>
  </div>
  <p class="conteneur catalogo-nota" data-anime>${c.t('shop.catalogo.nota')}</p>
</section>

<section class="sezione quantita fondo-oliva" id="quantita">
  <div class="conteneur quantita-griglia">
    <div class="quantita-testa">
      <h2 data-anime="lignes">${c.tb('shop.quantita.titolo')}</h2>
      ${c.media({ nom: 'latta-5', alt: c.s('shop.quantita.alt'), classe: 'quantita-media', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-anime="rideau"' })}
    </div>
    <div>
      <p data-anime>${c.t('shop.quantita.testo')}</p>
      <p class="finale-azioni" data-anime>${c.lien('contatti', { params: 'sujet=quantita', ancre: 'scrivici', classe: 'bouton', texte: c.t('shop.quantita.azione') })}<a class="bouton bouton--contour-chiaro" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
    </div>
  </div>
</section>

<section class="sezione ccq buono" id="buono-regalo" data-module="carte-cadeau-qui-se-compose" data-cachet="NI" aria-labelledby="ccq-titre">
  <div class="ccq__grille conteneur">
    <div class="ccq__tete">
      <p class="sopra" data-anime>${c.t('shop.buono.sopra')}</p>
      <h2 id="ccq-titre" data-anime="lignes">${c.tb('shop.buono.titolo')}</h2>
      <p data-anime>${c.t('shop.buono.testo')}</p>
    </div>
    <div class="ccq__scene" aria-hidden="true" data-effet="buono">
      <div class="ccq__plateau"><div class="ccq__paquet"><div class="ccq__carte">
        <svg class="ccq__cadre" viewBox="0 0 160 100" preserveAspectRatio="none"><rect x="3.2" y="3.2" width="153.6" height="93.6" rx="5" ry="5" pathLength="1"/></svg>
        <div class="ccq__carte-haut">
          <span class="ccq__logo"><img src="/assets/images/logo-240.webp" alt="" width="82" height="40"></span>
          <span class="ccq__noms"><span class="ccq__type">${c.t('shop.buono.tipo')}</span></span>
          <span class="ccq__quantite" data-ccq-quantite hidden>× 1</span>
        </div>
        <div class="ccq__carte-bas">
          <p class="ccq__montant"><span class="ccq__devise">CHF</span> <span data-ccq-montant>50</span></p>
          <div class="ccq__dedicace"><p class="ccq__pour" data-ccq-pour></p><p class="ccq__mot" data-ccq-mot></p><p class="ccq__de" data-ccq-de></p></div>
        </div>
        <span class="ccq__reflet"></span>
      </div></div></div>
      <p class="ccq__ticket" data-ccq-ticket>${c.t('shop.buono.ticket')}</p>
    </div>
    <form class="ccq__form" action="${c.url('contatti', 'scrivici', 'sujet=buono')}" method="get" novalidate>
      <fieldset class="ccq__champ"><legend class="ccq__libelle">${c.t('shop.buono.importo')}</legend>
        <div class="ccq__puces">
          ${D.buono.map((v) => html`<label class="ccq__puce"><input type="radio" name="montant" value="${v}"${v === 50 ? ' checked' : ''}><span>CHF ${v}</span></label>`)}
          <label class="ccq__puce"><input type="radio" name="montant" value="libre"><span>${c.t('shop.buono.altro')}</span></label>
          <span class="ccq__libre"><input type="number" name="montant_libre" min="10" max="1000" aria-label="${c.s('shop.buono.libero')}" aria-describedby="ccq-erreur-montant"><span aria-hidden="true">CHF</span></span>
        </div>
        <p class="ccq__erreur" id="ccq-erreur-montant" data-ccq-erreur="montant" aria-live="polite"></p>
      </fieldset>
      <div class="ccq__champ"><label class="ccq__libelle" for="ccq-qte">${c.t('shop.buono.numero')}</label>
        <div class="ccq__qte"><button type="button" data-ccq-moins aria-label="${c.s('shop.buono.meno')}">−</button><input type="number" id="ccq-qte" name="quantite" value="1" min="1" max="10"><button type="button" data-ccq-plus aria-label="${c.s('shop.buono.piu')}">+</button></div></div>
      <div class="ccq__deux">
        <div class="ccq__champ"><label class="ccq__libelle" for="ccq-pour">${c.t('shop.buono.per')}</label><input id="ccq-pour" name="pour" autocomplete="off" maxlength="30"></div>
        <div class="ccq__champ"><label class="ccq__libelle" for="ccq-de">${c.t('shop.buono.da')}</label><input id="ccq-de" name="de" autocomplete="name" maxlength="30"></div>
      </div>
      <div class="ccq__champ"><label class="ccq__libelle" for="ccq-mot">${c.t('shop.buono.messaggio')}</label><textarea id="ccq-mot" name="mot" rows="3" maxlength="120"></textarea><p class="ccq__aide"><span data-ccq-reste>120</span> ${c.t('shop.buono.caratteri')}</p></div>
      <p class="ccq__total"><span>${c.t('shop.buono.totale')}</span><output data-ccq-total>CHF 50</output></p>
      <p class="socle-sr" aria-live="polite" data-ccq-annonce></p>
      <div class="ccq__actions"><button type="submit" class="bouton ccq__offrir">${c.t('shop.buono.regala')}</button>
        <button type="button" class="bouton bouton--contour" data-ccq-reprendre hidden>${c.t('shop.buono.altroBuono')}</button></div>
      <p class="ccq__statut" role="status" data-ccq-statut hidden></p>
    </form>
  </div>
</section>
`;
};
