# Natural-Iter · maquette v1

Maquette du nouveau site de Natural-Iter di Bassanini Giacomo (Mendrisio) : olio extravergine e olive taggiasche del Ponente Ligure, linfa di betulla e aglio orsino bio Waldmuus.
Adresse de la maquette : https://natural-iter-maquette.vercel.app (non indexée par les moteurs de recherche).

Direction « Le fasce » : pierre de Ligurie, olive, jaune Natural-Iter (logo et étiquettes) ; Young Serif et Figtree.
Pages : accueil, Prodotti, Chi siamo, Shop (catalogue filtrable, panier, buono regalo), Contatti, 404. Site en italien.

## Ce que le client doit fournir (à compléter)

- **Note legali** (éditeur, raison sociale, IDI / numéro IVA, hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) et **Informativa sulla privacy** (nLPD) : les deux mentions du pied de page et du formulaire sont marquées « da completare ».
- **Moyens de paiement** réellement acceptés et **frais de port** sous CHF 150 : le panier affiche « Spedizione : da confermare » sous le seuil, et un paiement simulé.
- **TVA** : le site actuel n'indique pas si les prix sont TVA comprise ; la maquette affiche les prix tels quels, en CHF.
- **Prix du panettone par format** (800 g et 1600 g) : le site actuel n'affiche qu'un prix (CHF 67.50 au lieu de 72.00) ; la maquette écrit « da CHF 67.50 ». Même chose pour les Anisbrötli (450 / 700, « da CHF 12.50 »).
- **Contenu de la confezione regalo** (CHF 80) : la maquette dit seulement « cassetta in legno con prodotti Natural-Iter ».
- **Allergènes et ingrédients** des olives, du paté et de l'huile au citron (aucun n'est indiqué sur le site actuel ; ceux du panettone viennent de son étiquette).
- **Code postal du partenaire Naturapart** : le site actuel écrit « CH-6950 Mendrisio » ; la maquette écrit 6850 (même rue que Natural-Iter, Via Vignalunga 7, sur l'étiquette du panettone). À confirmer.
- **Photos** : une vraie photo de Giacomo (la maquette utilise le selfie du site, en petit), des photos des oliveraies et du frantoio pour remplacer peu à peu les illustrations générées.
- **Crédits des illustrations générées** : 14 images créées avec Grok (terrasses, muret, récolte, moulin, bois de bouleaux, table, mulattiera, Mendrisiotto, citrons, olives, ail des ours, taille, réseaux, 404). Elles portent la mention « Illustrazione generata » : **la garder sur le site final**.

## Corrigé par rapport au site actuel

- Lien e-mail de « Chi siamo » qui pointait vers info@mysite.com ; message du formulaire signé « Waldmuus » ; mots-clés de transport de bateaux ; photo d'en-tête de banque d'images Wix ; noms de produits mélangés italien/allemand ; aucune fiche produit.

## À retirer ou à changer à la mise en ligne définitive

- `noindex` : balise robots dans `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` dans `vercel.json`.
- Panier, paiement, buono regalo et formulaire simulés : à brancher sur la vraie boutique.
- Mentions « da completare » du pied de page et du formulaire.
- À garder : la mention « Illustrazione generata » sur chaque image créée par IA.

## Travailler sur la maquette

- Textes : `donnees/textes/it.json` ; produits et prix : `donnees/prodotti.json` ; réglages : `donnees/site.json`.
- Pages : `source/pages/*.mjs` ; style : `assets/css/site.css` ; effets propres : `assets/js/site.js`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les .html à la main).
- Modules de la bibliothèque dans `assets/js/modules/` (panier en tiroir, envol vers le panier, catalogue à filtres, carte cadeau, frise) ; leur style est rassemblé dans `assets/css/modules.css`.
- Audit : `node _audit/audit.mjs` (standard), `--complet` pour la version finale.

## Images sources

Les photos originales du client ne sont pas dans ce zip (55 Mo) : elles sont dans `natural-iter-images-1.zip` à `-4.zip` (dossier `natural-iter-recu`). Les illustrations Grok, les analyses et les planches sont dans `recu/`. Pour refaire les images : remettre les photos dans `recu/`, puis `node <bibliotheque>/images/produire.mjs plan-images.json`.
