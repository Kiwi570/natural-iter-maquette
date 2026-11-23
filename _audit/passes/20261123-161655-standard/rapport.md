# Rapport d’audit

Projet : `natural-iter-maquette` · 23/11/2026 17:34:19 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **61 échec(s)**
- Passe : `20261123-161655-standard` · version ?v=1
- Échecs : **61**
- À regarder : **69**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (9), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (1), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### zone tactile sous 44 px (14)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(3) > a « Shop » — 40 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(4) > a « Shop » — 40 × 44 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(3) > a « Shop » — 40 × 44 px _(844×390 normal, 768×1024 normal)_
- **zone tactile sous 44 px** — `/chi-siamo` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/chi-siamo` — nav > ul > li:nth-of-type(3) > a « Shop » — 40 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/contatti` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/contatti` — nav > ul > li:nth-of-type(3) > a « Shop » — 40 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/prodotti` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/prodotti` — nav > ul > li:nth-of-type(3) > a « Shop » — 40 × 44 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/shop` — input#ccq-pour — 358 × 32 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/shop` — input#ccq-de — 358 × 32 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/shop` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/shop` — nav > ul > li:nth-of-type(3) > a « Shop » — 40 × 44 px _(768×1024 normal, 844×390 normal)_

### textes qui se chevauchent (23)

- **textes qui se chevauchent** — `/` — section#inizio > div.apertura-testo:nth-of-type(1) > h1.apertura-titolo > span.apertura-riga:nth-of-type(1) « Olio » — avec section#inizio > div.apertura-testo:nth-of-type(1) > h1.apertura-titolo > span.olio-parola:nth-of-type(2) « taggiasco » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(1) > span.pro-formato:nth-of-type(1) « 6 × 75 cl » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(1) > span.pro-prezzo:nth-of-type(3) « CHF 204.00 » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(2) > span.pro-formato:nth-of-type(1) « 12 × 75 cl » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(2) > span.pro-prezzo:nth-of-type(3) « CHF 396.00 » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(3) > span.pro-formato:nth-of-type(1) « 18 × 75 cl » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(3) > span.pro-prezzo:nth-of-type(3) « CHF 576.00 » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(4) > span.pro-formato:nth-of-type(1) « 5 L » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(4) > span.pro-prezzo:nth-of-type(3) « CHF 200.00 » _(320×568 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(5) > span.pro-formato:nth-of-type(1) « 25 L » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(5) > span.pro-prezzo:nth-of-type(3) « CHF 900.00 » _(320×568 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(6) > span.pro-formato:nth-of-type(1) « 3,5 kg » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati.fx-fini > li:nth-of-type(6) > span.pro-prezzo:nth-of-type(3) « CHF 66.00 » _(320×568 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(1) > span.pro-formato:nth-of-type(1) « 6 × 75 cl » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(1) > span.pro-prezzo:nth-of-type(3) « CHF 204.00 » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(2) > span.pro-formato:nth-of-type(1) « 12 × 75 cl » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(2) > span.pro-prezzo:nth-of-type(3) « CHF 396.00 » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(3) > span.pro-formato:nth-of-type(1) « 18 × 75 cl » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(3) > span.pro-prezzo:nth-of-type(3) « CHF 576.00 » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#storia > div.conteneur.storia-griglia > div.storia-testo:nth-of-type(2) > p:nth-of-type(3) « Dalla fine degli anni Novanta porta i suoi prodott » — avec div.conteneur.storia-griglia > div.storia-testo:nth-of-type(2) > p.numero-grande:nth-of-type(4) > strong « 40 » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(4) > span.pro-formato:nth-of-type(1) « 5 L » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(4) > span.pro-prezzo:nth-of-type(3) « CHF 200.00 » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(5) > span.pro-formato:nth-of-type(1) « 25 L » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(5) > span.pro-prezzo:nth-of-type(3) « CHF 900.00 » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(6) > span.pro-formato:nth-of-type(1) « 3,5 kg » — avec div.conteneur.pro-griglia:nth-of-type(1) > ul.pro-formati > li:nth-of-type(6) > span.pro-prezzo:nth-of-type(3) « CHF 66.00 » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/404` — section#inizio > div.conteneur.introvabile-testo > p.sopra:nth-of-type(1) « 404 » — avec section#inizio > div.conteneur.introvabile-testo > h1 « Qui la raccolta è finita » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/chi-siamo` — div.conteneur.frt__testa > div.frt__chiffres > p.frt__chiffre:nth-of-type(1) > span.frt__prima:nth-of-type(1) « più di » — avec div.conteneur.frt__testa > div.frt__chiffres > p.frt__chiffre:nth-of-type(1) > span.frt__n:nth-of-type(2) « 40 » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **textes qui se chevauchent** — `/chi-siamo` — div.conteneur.frt__testa > div.frt__chiffres > p.frt__chiffre:nth-of-type(1) > span.frt__n:nth-of-type(2) « 40 » — avec div.conteneur.frt__testa > div.frt__chiffres > p.frt__chiffre:nth-of-type(1) > span.frt__l:nth-of-type(3) « anni di lavoro » _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **textes qui se chevauchent** — `/chi-siamo` — section#inizio > div.conteneur.archivio-griglia > div.archivio-testo:nth-of-type(1) > p.sopra:nth-of-type(1) « CHI SIAMO » — avec section#inizio > div.conteneur.archivio-griglia > div.archivio-testo:nth-of-type(1) > h1.archivio-titolo « Più di quarant'anni sulle fasce » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/contatti` — section#inizio > div.conteneur.contatti-griglia > div.contatti-testo > p.sopra:nth-of-type(1) « CONTATTI » — avec section#inizio > div.conteneur.contatti-griglia > div.contatti-testo > h1.contatti-titolo « Scrivici o chiamaci » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/prodotti` — div.conteneur.sezione-testa:nth-of-type(1) > div.sezione-testa-lato:nth-of-type(2) > p.numero-grande.numero-grande--chiaro:nth-of-type(1) > strong « 6 » — avec div.conteneur.sezione-testa:nth-of-type(1) > div.sezione-testa-lato:nth-of-type(2) > p.numero-grande.numero-grande--chiaro:nth-of-type(1) > span « mesi di fermentazione, come minimo » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/prodotti` — section#inizio > div.conteneur.banda-testa > p.sopra « I PRODOTTI » — avec section#inizio > div.conteneur.banda-testa > h1.banda-titolo > span « Dall'oliva all'olio » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/prodotti` — div.conteneur.sezione-testa:nth-of-type(1) > div.sezione-testa-lato:nth-of-type(2) > p.numero-grande.numero-grande--chiaro:nth-of-type(1) > strong « 6 » — avec section#olive > div.conteneur.sezione-testa:nth-of-type(1) > div.sezione-testa-lato:nth-of-type(2) > p:nth-of-type(2) « Le olive vengono deamarizzate e fermentate per alm » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/shop` — section#inizio > div.conteneur.shop-griglia > div.soglia:nth-of-type(2) > p.soglia-sopra:nth-of-type(1) « SPEDIZIONE GRATUITA IN SVIZZERA DA » — avec section#inizio > div.conteneur.shop-griglia > div.soglia:nth-of-type(2) > p.soglia-cifra:nth-of-type(2) « CHF 150 » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_

### image non chargée (6)

- **image non chargée** — `/` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/404` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/chi-siamo` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/contatti` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/prodotti` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/shop` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

### texte coupé (5)

- **texte coupé** — `/` — article#p-linfa > div.prodotto-testo > div.prodotto-riga > p.prodotto-prezzo « CHF 18.10 » — coupé par article#p-linfa « WALDMUUS · BIO SUISSE Linfa di betulla bio 500 ml  » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/` — article#p-aglio-orsino > div.prodotto-testo > div.prodotto-riga > p.prodotto-prezzo « CHF 14.50 » — coupé par article#p-aglio-orsino « WALDMUUS · BIO SUISSE Aglio orsino bio in olio e S » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/shop` — article#p-panettone > div.prodotto-testo > div.prodotto-riga > p.prodotto-prezzo « da CHF 67.50 CHF 72.00 » — coupé par article#p-panettone « NATALE REGALI E DOLCI Panettone al cioccolato bian » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/shop` — div.prodotto-testo > div.prodotto-riga > p.prodotto-prezzo > s « CHF 72.00 » — coupé par article#p-panettone « NATALE REGALI E DOLCI Panettone al cioccolato bian » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **texte coupé** — `/shop` — div.ccq__carte > div.ccq__carte-haut:nth-of-type(1) > span.ccq__noms:nth-of-type(2) > span.ccq__maison:nth-of-type(2) « Natural-Iter » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### accessibilité (axe) : scrollable-region-focusable (1)

- **accessibilité (axe) : scrollable-region-focusable** — `/` — .passi — Scrollable region must have keyboard access _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#inizio > div.conteneur.introvabile-testo > p.finale-azioni:nth-of-type(3) > a.bouton:nth-of-type(1) « Torna alla home » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### contraste insuffisant (1)

- **contraste insuffisant** — `/chi-siamo` — li.frt__etape:nth-of-type(1) > div.frt__visuel:nth-of-type(2) > figure.media.frt__media > figcaption.mention-ia « Illustrazione generata » — 1.10:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### photo faible affichée en grand (4)

- **photo faible affichée en grand** — `/prodotti` — div.olio-foto:nth-of-type(2) > figure.media.olio-media > picture > img « Bottiglia di olio extravergine taggiasco da 75 cl  » — olio-75 (4/5, faible, 63 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/prodotti` — article#p-olio-limone > figure.media.prodotto-media > picture > img « Olio al limone da 25 cl con limoni freschi » — olio-limone (4/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/prodotti` — div.olio-foto:nth-of-type(2) > figure.media.olio-media > picture > img « Bottiglia di olio extravergine taggiasco da 75 cl  » — olio-75 (4/5, faible, 48 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/prodotti` — div.olio-foto:nth-of-type(2) > figure.media.olio-media > picture > img « Bottiglia di olio extravergine taggiasco da 75 cl  » — olio-75 (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/shop` — section#inizio > div.conteneur.shop-griglia > div.soglia:nth-of-type(2) > p.soglia-cifra:nth-of-type(2) « CHF 150 » _(320×568 normal, 320×568 sansJs)_

### texte sous 12 px (1)

- **texte sous 12 px** — `/shop` — div.ccq__carte > div.ccq__carte-haut:nth-of-type(1) > span.ccq__noms:nth-of-type(2) > span.ccq__maison:nth-of-type(2) « Natural-Iter » — 11.7 px _(320×568 normal, 320×568 sansJs)_

### lien profond (4)

- **lien profond** — `/prodotti → /shop#catalogo` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/prodotti → /shop#buono-regalo` — section pas en haut de l'écran (4423 px) _(1366×768 lien profond)_
- **lien profond** — `/prodotti → /shop#buono-regalo` — section pas en haut de l'écran (5676 px) _(390×844 lien profond)_
- **lien profond** — `/ → /shop?categoria=regali#catalogo` — section introuvable à l’arrivée _(1366×768 lien profond, 390×844 lien profond)_

## À regarder

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/carte-cadeau-qui-se-compose/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/` — 251 × 59 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (4)

- **section sans visuel** — `/` — section#professionisti « PER RISTORANTI, ALBERGHI E GRANDI QUANTITÀ Cartoni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contatti` — section#scrivici « Il tuo messaggio Compila il modulo, oppure chiamac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/prodotti` — section#senza « Senza ingredienti artificiali Tutti i prodotti Nat » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/shop` — section#quantita « Quantità diverse? Scrivici Per quantità diverse da » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_

### texte de contenu sous 13 px (ordinateur) (57)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#inizio > div.apertura-testo:nth-of-type(1) > p.sopra:nth-of-type(1) « OLIO EXTRAVERGINE · PONENTE LIGURE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#inizio > div.apertura-scena:nth-of-type(2) > figure.media.apertura-media:nth-of-type(1) > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#prodotti > div.conteneur.sezione-testa:nth-of-type(1) > div > p.sopra « I NOSTRI PRODOTTI » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#p-olive-salamoia > div.prodotto-testo > p.prodotto-sopra:nth-of-type(1) > span « OLIVE E PATÉ » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#p-olive-snocciolate > div.prodotto-testo > p.prodotto-sopra:nth-of-type(1) > span « OLIVE E PATÉ » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#p-pate > div.prodotto-testo > p.prodotto-sopra:nth-of-type(1) > span « OLIVE E PATÉ » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.taggiasca-griglia:nth-of-type(1) > div.taggiasca-immagini:nth-of-type(1) > figure.media.taggiasca-media:nth-of-type(1) > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.taggiasca-griglia:nth-of-type(1) > div.taggiasca-immagini:nth-of-type(1) > figure.media.taggiasca-reale:nth-of-type(2) > figcaption.media-legende « Le reti stese sotto gli ulivi. Foto Natural-Iter » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#taggiasca > div.conteneur.taggiasca-griglia:nth-of-type(1) > div.taggiasca-testo:nth-of-type(2) > p.sopra:nth-of-type(1) « L'OLIVA TAGGIASCA » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#filiera > div.conteneur.sezione-testa > div > p.sopra « DALL'OLIVA ALLA BOTTIGLIA » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.conteneur.passi > li.passo:nth-of-type(1) > figure.media.passo-media > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.conteneur.passi > li.passo:nth-of-type(2) > figure.media.passo-media > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#bosco > figure.media.bosco-fondo > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#bosco > div.conteneur.bosco-griglia > div.bosco-pannello:nth-of-type(1) > p.sopra:nth-of-type(1) « DAL BOSCO TICINESE · WALDMUUS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#p-linfa > div.prodotto-testo > p.prodotto-sopra:nth-of-type(1) > span.prodotto-marchio « WALDMUUS · BIO SUISSE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#p-aglio-orsino > div.prodotto-testo > p.prodotto-sopra:nth-of-type(1) > span.prodotto-marchio « WALDMUUS · BIO SUISSE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#panettone > div.conteneur.stagione-griglia > div.stagione-testo > p.sopra:nth-of-type(1) « IN QUESTO PERIODO · NATALE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.storia-griglia > div.storia-foto:nth-of-type(1) > figure.media.storia-foto-1:nth-of-type(1) > figcaption.media-legende « Jürg Raz, fine anni Ottanta » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.storia-griglia > div.storia-foto:nth-of-type(1) > figure.media.storia-foto-2:nth-of-type(2) > figcaption.media-legende « Jürg, inizio anni Duemila » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#storia > div.conteneur.storia-griglia > div.storia-testo:nth-of-type(2) > p.sopra:nth-of-type(1) « LA NOSTRA STORIA » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#professionisti > div.conteneur.pro-griglia:nth-of-type(1) > div.pro-testo > p.sopra:nth-of-type(1) « PER RISTORANTI, ALBERGHI E GRANDI QUANTITÀ » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#finale > figure.media.finale-fondo > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#inizio > figure.media.introvabile-media > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/chi-siamo` — li.frt__etape:nth-of-type(1) > div.frt__visuel:nth-of-type(2) > figure.media.frt__media > figcaption.mention-ia « Illustrazione generata » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/chi-siamo` — section#giacomo > div.conteneur.giacomo-griglia > div.giacomo-testo:nth-of-type(2) > p.sopra:nth-of-type(1) « IL SUCCESSORE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- … et 32 autres (rapport.json)

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/prodotti` — à 144 ms (différence 23 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/contatti` — écran différent à la même position après rechargement (5.9 %), voir comparaisons/rechargement-contatti-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 64 min de travail pour 120 min de budget, 11 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 12 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /chi-siamo, /contatti, /prodotti, /shop.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2742 ms depuis le premier octet
- Ouverture /chi-siamo (1366×768) : 2532 ms depuis le premier octet
- Ouverture /contatti (1366×768) : 2452 ms depuis le premier octet
- Ouverture /prodotti (1366×768) : 2650 ms depuis le premier octet
- Ouverture /shop (1366×768) : 2543 ms depuis le premier octet
- film de l'ouverture /shop 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2691 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /chi-siamo (390×844) : 2490 ms depuis le premier octet
- Ouverture /contatti (390×844) : 2400 ms depuis le premier octet
- Ouverture /prodotti (390×844) : 2642 ms depuis le premier octet
- Ouverture /shop (390×844) : 2476 ms depuis le premier octet
- bords de l’écran /chi-siamo 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 387 images d’intro, 9 de voile et 146 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /shop : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chi-siamo : aucune section épinglée ou plein écran.
- Tient dans l'écran /contatti : aucune section épinglée ou plein écran.
- Tient dans l'écran /prodotti : aucune section épinglée ou plein écran.
- Tient dans l'écran /shop : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 393, tâche la plus longue 0 ms
- Fluidité /chi-siamo 1366×768 (molette) : 0 % d'images lentes sur 283, tâche la plus longue 0 ms
- Fluidité /contatti 1366×768 (molette) : 0 % d'images lentes sur 169, tâche la plus longue 0 ms
- Fluidité /prodotti 1366×768 (molette) : 0 % d'images lentes sur 296, tâche la plus longue 0 ms
- Fluidité /shop 1366×768 (molette) : 0 % d'images lentes sur 333, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1431, tâche la plus longue 0 ms
- Fluidité /chi-siamo 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /contatti 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /prodotti 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /shop 390×844 (doigt) : 0 % d'images lentes sur 1360, tâche la plus longue 0 ms
- Vitesse / : 0.60 s de calcul au chargement (téléphone ralenti).
- Vitesse /chi-siamo : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /contatti : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /prodotti : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /shop : 0.52 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
