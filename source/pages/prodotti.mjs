/* Page I prodotti : grand titre puis bandeau panoramique (reti), l'huile (goût, formats), l'huile au citron,
   les olives de table, le bois tessinois (Waldmuus), sans ingrédients artificiels. */
import { html } from '../../outils/gabarit.mjs';
import { carta, chf } from '../gabarits/prodotto.mjs';

export const page = { cle: 'prodotti', fichier: 'prodotti', imagePartage: 'grok/reti-1280.webp' };

export default (c) => {
  const P = c.donnees.prodotti.lista;
  const trova = (id) => P.find((p) => p.id === id);
  return html`
<section class="apertura-titolo-banda" id="inizio">
  <div class="conteneur banda-testa">
    <p class="sopra" data-anime="gsap">${c.t('prodotti.apertura.sopra')}</p>
    <h1 class="banda-titolo" data-anime="gsap"><span data-iris-centre>${c.tb('prodotti.apertura.titolo')}</span></h1>
    <div class="banda-lato" data-anime="gsap">
      <p>${c.t('prodotti.apertura.testo')}</p>
      <p class="banda-azioni">${c.lien('shop', { classe: 'bouton', texte: c.t('accueil.apertura.azione'), attrs: 'data-action-principale' })}<span class="apertura-info" data-info-cle><span class="punto-giallo" aria-hidden="true"></span>${c.t('commun.spedizione')}</span></p>
    </div>
  </div>
  ${c.media({ nom: 'grok/reti', alt: c.s('prodotti.apertura.alt'), priorite: true, classe: 'banda-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10" data-effet="banda" data-anime="gsap"' })}
</section>

<section class="sezione olio-sezione" id="olio">
  <div class="conteneur olio-griglia">
    <div class="olio-testo">
      <p class="sopra" data-anime>${c.t('prodotti.olio.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('prodotti.olio.titolo')}</h2>
      <p data-anime>${c.t('prodotti.olio.testo')}</p>
      <ul class="gusto" data-anime="cascade">
        ${['g1', 'g2', 'g3', 'g4'].map((k) => html`<li>${c.t('prodotti.olio.' + k)}</li>`)}
      </ul>
      <h3 class="formati-titolo" data-anime>${c.t('prodotti.olio.formati')}</h3>
      <ul class="formati" data-anime="cascade">
        ${['olio-25', 'olio-75', 'latta-5', 'latta-25'].map((id) => { const p = trova(id); return html`<li><span class="formati-f">${p.formato}</span><span class="formati-p">${chf(p.prezzo)}</span></li>`; })}
      </ul>
    </div>
    <div class="olio-foto">
      <figure class="olio-vetrina" data-effet="bottiglia-vetrina">
        <img src="/assets/images/bottiglia-75-1300.webp" srcset="/assets/images/bottiglia-75-560.webp 243w, /assets/images/bottiglia-75-900.webp 389w, /assets/images/bottiglia-75-1300.webp 562w" sizes="(max-width: 760px) 40vw, 16vw" alt="${c.s('prodotti.olio.alt')}" width="562" height="1300" loading="lazy" decoding="async">
      </figure>
    </div>
  </div>
</section>

<section class="sezione limone fondo-salvia" id="limone">
  <div class="conteneur limone-griglia">
    ${c.media({ nom: 'grok/limoni', alt: c.s('prodotti.limone.alt'), classe: 'limone-media', sizes: '(max-width: 760px) 100vw, 36vw', attrs: 'data-anime="rideau"' })}
    <div class="limone-testo">
      <p class="sopra" data-anime>${c.t('prodotti.limone.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('prodotti.limone.titolo')}</h2>
      <p data-anime>${c.t('prodotti.limone.testo')}</p>
    </div>
    <div data-anime="cascade" class="limone-prodotto">${carta(c, trova('olio-limone'), { testo: false })}</div>
  </div>
</section>

<section class="sezione olive-sezione fondo-oliva" id="olive">
  <div class="conteneur sezione-testa">
    <div>
      <p class="sopra" data-anime>${c.t('prodotti.olive.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('prodotti.olive.titolo')}</h2>
    </div>
    <div class="sezione-testa-lato">
      <p class="numero-grande numero-grande--chiaro" data-anime><strong data-compteur="6">6</strong><span>${c.t('prodotti.olive.mesi')}</span></p>
      <p data-anime>${c.t('prodotti.olive.testo')}</p>
    </div>
  </div>
  <div class="conteneur olive-griglia">
    ${c.media({ nom: 'grok/salamoia', alt: c.s('prodotti.olive.alt'), classe: 'olive-media', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="zoom"' })}
    <div class="olive-prodotti" data-anime="cascade" data-scorri>
      ${['olive-salamoia', 'olive-snocciolate', 'pate'].map((id) => carta(c, trova(id), { classe: 'prodotto--chiaro', sizes: '(max-width: 760px) 72vw, 20vw' }))}
    </div>
  </div>
</section>

<section class="sezione waldmuus" id="waldmuus">
  <div class="conteneur sezione-testa">
    <div>
      <p class="sopra" data-anime>${c.t('prodotti.waldmuus.sopra')}</p>
      <h2 data-anime="lignes">${c.tb('prodotti.waldmuus.titolo')}</h2>
    </div>
    <p class="sezione-testa-lato" data-anime>${c.t('prodotti.waldmuus.testo')}</p>
  </div>
  <div class="conteneur waldmuus-griglia">
    <article class="waldmuus-voce">
      ${c.media({ nom: 'linfa', alt: c.s('prodotti.waldmuus.altLinfa'), classe: 'waldmuus-media', sizes: '(max-width: 760px) 100vw, 26vw', attrs: 'data-anime="rideau"' })}
      <div data-panier-produit>
        <h3 data-anime="lignes">${c.t('prodotti.waldmuus.linfaT')}</h3>
        <p data-anime>${c.t('prodotti.waldmuus.linfa')}</p>
        <p class="waldmuus-acquisto" data-anime><span class="prodotto-prezzo" data-prix>${chf(18.1)} · 500 ml</span> <button type="button" class="bouton bouton--aggiungi" data-panier-ajouter="linfa" data-nom="Linfa di betulla bio 500 ml" data-prix="18.10" data-image="/assets/images/linfa-800.webp" aria-label="${c.s('commun.aggiungi')} Linfa di betulla bio 500 ml">${c.t('commun.aggiungi')}</button></p>
      </div>
    </article>
    <article class="waldmuus-voce">
      ${c.media({ nom: 'grok/aglio-bosco', alt: c.s('prodotti.waldmuus.altAglio'), classe: 'waldmuus-media', sizes: '(max-width: 760px) 100vw, 26vw', attrs: 'data-anime="rideau"' })}
      <div data-panier-produit>
        <h3 data-anime="lignes">${c.t('prodotti.waldmuus.aglioT')}</h3>
        <p data-anime>${c.t('prodotti.waldmuus.aglio')}</p>
        <p class="waldmuus-acquisto" data-anime><span class="prodotto-prezzo" data-prix>${chf(14.5)} · 145 g</span> <button type="button" class="bouton bouton--aggiungi" data-panier-ajouter="aglio-orsino" data-nom="Aglio orsino bio in olio e Sel des Alpes 145 g" data-prix="14.50" data-image="/assets/images/aglio-orsino-800.webp" aria-label="${c.s('commun.aggiungi')} Aglio orsino bio 145 g">${c.t('commun.aggiungi')}</button></p>
      </div>
    </article>
  </div>
</section>

<section class="sezione senza fondo-salvia" id="senza">
  <div class="conteneur senza-griglia">
    <h2 data-anime="lettres">${c.tb('prodotti.senza.titolo')}</h2>
    <div>
      <p data-anime>${c.t('prodotti.senza.testo')}</p>
      <p data-anime>${c.lien('shop', { classe: 'bouton', texte: c.t('accueil.apertura.azione') })}</p>
    </div>
  </div>
</section>
`;
};
