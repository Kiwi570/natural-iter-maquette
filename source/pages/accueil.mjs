/* Accueil Natural-Iter : direction « Le fasce ».
   Ouverture en deux colonnes (le mot « taggiasco » se remplit d'huile, la vraie bouteille devant les fasce),
   vitrine des produits, l'oliva taggiasca et le muret, la filière (thermomètre), le bois tessinois (Waldmuus),
   le panettone de saison, de Jürg à Giacomo, professionnels et bon cadeau, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { carta, chf } from '../gabarits/prodotto.mjs';
import { muretto, termometro } from '../gabarits/disegni.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/fasce-1280.webp' };

export default (c) => {
  const P = c.donnees.prodotti.lista;
  const trova = (id) => P.find((p) => p.id === id);
  const vetrina = P.filter((p) => p.vetrina);
  return html`
<section class="apertura" id="inizio">
  <div class="apertura-testo">
    <p class="sopra" data-anime="gsap">${c.t('accueil.apertura.sopra')}</p>
    <h1 class="apertura-titolo">
      <span class="apertura-riga">${c.t('accueil.apertura.riga1')}</span>
      <span class="olio-parola" data-iris-centre data-effet="olio-titolo" data-testo="${c.s('accueil.apertura.parola')}">${c.t('accueil.apertura.parola')}</span>
      <span class="apertura-sotto">${c.t('accueil.apertura.riga2')}</span>
    </h1>
    <p class="apertura-intro" data-anime="gsap">${c.t('accueil.apertura.testo')}</p>
    <div class="apertura-azioni" data-anime="gsap">
      ${c.lien('shop', { classe: 'bouton', texte: c.t('accueil.apertura.azione'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('prodotti', { classe: 'bouton bouton--contour', texte: c.t('accueil.apertura.azione2') })}
    </div>
    <p class="apertura-info" data-info-cle data-anime="gsap"><span class="punto-giallo" aria-hidden="true"></span>${c.t('commun.spedizione')}</p>
  </div>
  <div class="apertura-scena">
    ${c.media({ nom: 'grok/fasce', alt: c.s('accueil.apertura.alt'), priorite: true, classe: 'apertura-media', sizes: '(max-width: 760px) 100vw, 52vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <figure class="apertura-bottiglia" data-superpose data-anime="gsap">
      <img src="/assets/images/bottiglia-75-900.webp" srcset="/assets/images/bottiglia-75-560.webp 243w, /assets/images/bottiglia-75-900.webp 389w, /assets/images/bottiglia-75-1300.webp 562w" sizes="(max-width: 760px) 30vw, 13vw" alt="${c.s('accueil.apertura.bottigliaAlt')}" width="389" height="1440" fetchpriority="high" decoding="async">
    </figure>
    <div class="cartellino" data-superpose data-anime="gsap" data-panier-produit>
      <p class="cartellino-nome">${c.t('accueil.apertura.cartellino')}</p>
      <p class="cartellino-prezzo" data-prix>${chf(trova('olio-75').prezzo)}</p>
      <button type="button" class="bouton bouton--piccolo" data-panier-ajouter="olio-75" data-nom="Olio extravergine taggiasco 75 cl" data-prix="49" data-image="/assets/images/olio-75-800.webp" aria-label="${c.s('commun.aggiungi')} Olio extravergine taggiasco 75 cl">${c.t('commun.aggiungi')}</button>
    </div>
  </div>
</section>

<section class="sezione vetrina" id="prodotti">
  <div class="conteneur sezione-testa">
    <div>
      <p class="sopra" data-anime>${c.t('accueil.vetrina.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.vetrina.titolo')}</h2>
    </div>
    <p class="sezione-testa-lato" data-anime>${c.t('accueil.vetrina.testo')} ${c.lien('shop', { classe: 'freccia', texte: c.t('accueil.vetrina.tutto') })}</p>
  </div>
  <div class="conteneur vetrina-griglia" data-anime="cascade" data-scorri data-vetrina tabindex="0" role="region" aria-label="${c.s('accueil.vetrina.regione')}">
    ${vetrina.map((p) => carta(c, p, { testo: false, sizes: '(max-width: 760px) 76vw, 24vw' }))}
  </div>
  <div class="conteneur vetrina-comandi">
    <p class="scorri-nota" aria-hidden="true">${c.t('commun.scorri')}</p>
    <div class="vetrina-avanzamento" aria-hidden="true"><span></span></div>
    <div class="vetrina-frecce">
      <button type="button" data-vetrina-prec aria-label="${c.s('accueil.vetrina.prec')}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>
      <button type="button" data-vetrina-succ aria-label="${c.s('accueil.vetrina.succ')}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
    </div>
  </div>
</section>

<section class="sezione taggiasca fondo-salvia" id="taggiasca">
  <div class="conteneur taggiasca-griglia">
    <div class="taggiasca-immagini">
      ${c.media({ nom: 'grok/muretto', alt: c.s('accueil.taggiasca.alt'), classe: 'taggiasca-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="zoom"' })}
      ${c.media({ nom: 'uliveto-reti', alt: c.s('accueil.taggiasca.altReale'), classe: 'taggiasca-reale', sizes: '(max-width: 760px) 40vw, 16vw', legende: c.t('accueil.taggiasca.legendaReale'), attrs: 'data-superpose data-fx="vitesse" data-fx-force="2"' })}
    </div>
    <div class="taggiasca-testo">
      <p class="sopra" data-anime>${c.t('accueil.taggiasca.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.taggiasca.titolo')}</h2>
      <p data-anime>${c.t('accueil.taggiasca.testo')}</p>
      <ul class="fatti" data-anime="cascade">
        <li><strong>${c.t('accueil.taggiasca.f1t')}</strong><span>${c.t('accueil.taggiasca.f1')}</span></li>
        <li><strong>${c.t('accueil.taggiasca.f2t')}</strong><span>${c.t('accueil.taggiasca.f2')}</span></li>
        <li><strong>${c.t('accueil.taggiasca.f3t')}</strong><span>${c.t('accueil.taggiasca.f3')}</span></li>
      </ul>
    </div>
  </div>
  <div class="muretto-fascia" data-effet="muretto">${muretto({ seme: 11 })}</div>
</section>

<section class="sezione filiera fondo-oliva" id="filiera">
  <div class="conteneur sezione-testa">
    <div>
      <p class="sopra" data-anime>${c.t('accueil.filiera.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.filiera.titolo')}</h2>
    </div>
    <p class="sezione-testa-lato" data-anime>${c.t('accueil.filiera.testo')}</p>
  </div>
  <ol class="conteneur passi" data-anime="cascade" tabindex="0" aria-label="${c.s('accueil.filiera.sopra')}">
    <li class="passo">
      ${c.media({ nom: 'grok/raccolta', alt: c.s('accueil.filiera.alt1'), classe: 'passo-media', sizes: '(max-width: 760px) 80vw, 24vw' })}
      <p class="passo-numero">01</p><h3>${c.t('accueil.filiera.p1t')}</h3><p>${c.t('accueil.filiera.p1')}</p>
    </li>
    <li class="passo">
      ${c.media({ nom: 'grok/frantoio', alt: c.s('accueil.filiera.alt2'), classe: 'passo-media', sizes: '(max-width: 760px) 80vw, 24vw' })}
      <p class="passo-numero">02</p><h3>${c.t('accueil.filiera.p2t')}</h3><p>${c.t('accueil.filiera.p2')}</p>
    </li>
    <li class="passo passo--termometro">
      <div class="passo-media passo-disegno" data-visuel data-effet="termometro">${termometro()}<p class="termometro-etichetta">${c.t('accueil.filiera.soglia')}</p></div>
      <p class="passo-numero">03</p><h3>${c.t('accueil.filiera.p3t')}</h3><p>${c.t('accueil.filiera.p3')}</p>
    </li>
    <li class="passo">
      ${c.media({ nom: 'olio-25', alt: c.s('accueil.filiera.alt4'), classe: 'passo-media', sizes: '(max-width: 760px) 80vw, 24vw' })}
      <p class="passo-numero">04</p><h3>${c.t('accueil.filiera.p4t')}</h3><p>${c.t('accueil.filiera.p4')}</p>
    </li>
  </ol>
  <p class="conteneur filiera-link" data-anime>${c.lien('prodotti', { classe: 'bouton bouton--contour-chiaro', texte: c.t('accueil.filiera.link') })}</p>
</section>

<section class="sezione bosco" id="bosco">
  ${c.media({ nom: 'grok/bosco', alt: c.s('accueil.bosco.alt'), classe: 'bosco-fondo', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  <div class="conteneur bosco-griglia">
    <div class="bosco-pannello">
      <p class="sopra" data-anime>${c.t('accueil.bosco.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.bosco.titolo')}</h2>
      <p data-anime>${c.t('accueil.bosco.testo')}</p>
      <p class="bio-bollino" data-anime><span>Bio Suisse</span>${c.t('accueil.bosco.bio')}</p>
    </div>
    <div class="bosco-prodotti" data-anime="cascade">
      ${carta(c, trova('linfa'), { testo: false, classe: 'prodotto--chiaro' })}
      ${carta(c, trova('aglio-orsino'), { testo: false, classe: 'prodotto--chiaro' })}
    </div>
  </div>
</section>

<section class="sezione stagione" id="panettone">
  <div class="conteneur stagione-griglia">
    ${c.media({ nom: 'panettone', alt: c.s('accueil.stagione.alt'), classe: 'stagione-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-anime="rideau"' })}
    <div class="stagione-testo" data-panier-produit>
      <p class="sopra" data-anime>${c.t('accueil.stagione.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.stagione.titolo')}</h2>
      <p data-anime>${c.t('accueil.stagione.testo')}</p>
      <ul class="stagione-punti" data-anime="cascade">
        <li>${c.t('accueil.stagione.punto1')}</li>
        <li>${c.t('accueil.stagione.punto2')}</li>
        <li>${c.t('accueil.stagione.punto3')}</li>
      </ul>
      <div class="stagione-acquisto" data-anime>
        <p class="prodotto-prezzo prodotto-prezzo--grande" data-prix><small>da</small> ${chf(67.5)} <s aria-label="invece di ${chf(72)}">${chf(72)}</s></p>
        <button type="button" class="bouton" data-panier-ajouter="panettone" data-nom="Panettone al cioccolato bianco 30 %" data-prix="67.50" data-image="/assets/images/panettone-800.webp" aria-label="${c.s('commun.aggiungi')} Panettone al cioccolato bianco 30 %">${c.t('commun.aggiungi')}</button>
      </div>
    </div>
  </div>
</section>

<section class="sezione storia fondo-salvia" id="storia">
  <div class="conteneur storia-griglia">
    <div class="storia-foto">
      ${c.media({ nom: 'jurg-anni-80', alt: c.s('accueil.storia.alt1'), classe: 'storia-foto-1', sizes: '(max-width: 760px) 62vw, 26vw', legende: c.t('accueil.storia.legenda1'), attrs: 'data-fx="vitesse" data-fx-force="3"' })}
      ${c.media({ nom: 'jurg-2000', alt: c.s('accueil.storia.alt2'), classe: 'storia-foto-2', sizes: '(max-width: 760px) 56vw, 22vw', legende: c.t('accueil.storia.legenda2'), attrs: 'data-superpose data-fx="vitesse" data-fx-force="4"' })}
    </div>
    <div class="storia-testo">
      <p class="sopra" data-anime>${c.t('accueil.storia.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.storia.titolo')}</h2>
      <p data-anime>${c.t('accueil.storia.testo1')}</p>
      <p data-anime>${c.t('accueil.storia.testo2')}</p>
      <p class="numero-grande" data-anime><span>${c.t('accueil.storia.piuDi')}</span><strong data-compteur="40">40</strong><span>${c.t('accueil.storia.anni')}</span></p>
      <p data-anime>${c.lien('chi-siamo', { classe: 'bouton bouton--contour', texte: c.t('accueil.storia.link') })}</p>
    </div>
  </div>
</section>

<section class="sezione pro fondo-oliva" id="professionisti">
  <div class="conteneur pro-griglia">
    <div class="pro-testo">
      <p class="sopra" data-anime>${c.t('accueil.pro.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.pro.titolo')}</h2>
      <p data-anime>${c.t('accueil.pro.testo')}</p>
      <p data-anime>${c.lien('contatti', { params: 'sujet=professionisti', ancre: 'scrivici', classe: 'bouton', texte: c.t('accueil.pro.azione') })}</p>
    </div>
    <ul class="pro-formati" data-anime="cascade">
      ${['cartone-6', 'cartone-12', 'cartone-18', 'latta-5', 'latta-25', 'salamoia-3500'].map((id) => { const p = trova(id); return html`<li><span class="pro-formato">${p.formato}</span><span class="pro-nome">${p.nome}</span><span class="pro-prezzo">${chf(p.prezzo)}</span></li>`; })}
    </ul>
  </div>
  <div class="conteneur buono-striscia" data-anime>
    <p><strong>${c.t('accueil.pro.buonoTitolo')}</strong> ${c.t('accueil.pro.buonoTesto')}</p>
    ${c.lien('shop', { ancre: 'buono-regalo', classe: 'bouton bouton--contour-chiaro', texte: c.t('accueil.pro.buonoAzione') })}
  </div>
</section>

<section class="sezione finale" id="finale">
  ${c.media({ nom: 'grok/tavola', alt: c.s('accueil.finale.alt'), classe: 'finale-fondo', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur finale-pannello"><div class="finale-carta">
    <h2 data-anime="lignes">${c.tb('accueil.finale.titolo')}</h2>
    <p data-anime>${c.t('accueil.finale.testo')}</p>
    <p class="finale-azioni" data-anime>
      ${c.lien('shop', { classe: 'bouton', texte: c.t('accueil.apertura.azione'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
    </p>
  </div></div>
</section>
`;
};
