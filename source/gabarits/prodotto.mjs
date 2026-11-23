/* Carte produit commune (accueil, prodotti, shop) : vraie photo du client, format, prix, bouton « Aggiungi »
   déclaré pour le panier en tiroir (assets/js/modules/panier-en-tiroir). Sans JavaScript, le bouton mène au catalogue. */
import { html, brut } from '../../outils/gabarit.mjs';

export const chf = (n) => 'CHF\u00a0' + Number(n).toFixed(2);

export function carta(c, p, { testo = true, sizes = '(max-width: 760px) 72vw, 30vw', classe = '', titolo = 'h3', attrs = '' } = {}) {
  const cats = c.donnees.prodotti.categorie;
  const nomeCompleto = `${p.nome} ${p.formato}`;
  const T = titolo;
  return html`<article class="prodotto ${classe}" id="p-${p.id}" data-panier-produit data-categoria="${p.categoria}" data-prezzo="${p.prezzo}" data-nome="${nomeCompleto}"${brut(attrs ? ' ' + attrs : '')}>
  ${c.media({ nom: p.immagine, alt: c.donnees.images?.[p.immagine]?.alt || nomeCompleto, classe: 'prodotto-media', sizes })}
  <div class="prodotto-testo">
    <p class="prodotto-sopra">${p.etichetta ? html`<span class="prodotto-etichetta">${p.etichetta}</span>` : ''}${p.marchio ? html`<span class="prodotto-marchio">${p.marchio}</span>` : html`<span>${cats.find((x) => p.categoria.split(' ').includes(x.id))?.nome || ''}</span>`}</p>
    ${brut(`<${T} class="prodotto-nome">`)}${p.nome}${brut(`</${T}>`)}
    <p class="prodotto-formato">${p.formato}</p>
    ${testo ? html`<p class="prodotto-descr">${p.testo}</p>` : ''}
    <div class="prodotto-riga">
      <p class="prodotto-prezzo" data-prix>${p.da ? html`<small>da</small> ` : ''}${chf(p.prezzo)}${p.prezzoPrima ? html` <s aria-label="invece di ${chf(p.prezzoPrima)}">${chf(p.prezzoPrima)}</s>` : ''}</p>
      <button type="button" class="bouton bouton--aggiungi" data-panier-ajouter="${p.id}" data-nom="${nomeCompleto}" data-prix="${p.prezzo}" aria-label="${c.s('commun.aggiungi')} ${nomeCompleto}">${c.t('commun.aggiungi')}</button>
    </div>
  </div>
</article>`;
}
