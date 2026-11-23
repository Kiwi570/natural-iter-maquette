# Rapport d’audit

Projet : `natural-iter-maquette` · 23/11/2026 17:53:38 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261123-163652-standard` · version ?v=1
- Échecs : **16**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (6), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (1), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161655-standard | standard | toutes | toutes | 61 | 69 | 1 | échecs |
| **20261123-163652-standard** (celle-ci) | standard | toutes | toutes | 16 | 12 | 1 | échecs |

## Échecs

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(4) > a « Shop » — 40 × 44 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/chi-siamo` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/contatti` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/prodotti` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/shop` — nav > ul > li:nth-of-type(4) > a « Shop » — 38 × 44 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/` — section#inizio > div.apertura-testo:nth-of-type(1) > h1.apertura-titolo > span.apertura-riga:nth-of-type(1) « Olio » — avec section#inizio > div.apertura-testo:nth-of-type(1) > h1.apertura-titolo > span.olio-parola:nth-of-type(2) « taggiasco » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#inizio > div.apertura-testo:nth-of-type(1) > h1.apertura-titolo > span.olio-parola:nth-of-type(2) « taggiasco » — avec section#inizio > div.apertura-testo:nth-of-type(1) > h1.apertura-titolo > span.apertura-sotto:nth-of-type(3) « dalle fasce liguri alla tavola svizzera » _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/chi-siamo` — div.conteneur.frt__testa > div.frt__chiffres > p.frt__chiffre:nth-of-type(1) > span.frt__n:nth-of-type(2) « 40 » — avec div.conteneur.frt__testa > div.frt__chiffres > p.frt__chiffre:nth-of-type(1) > span.frt__l:nth-of-type(3) « anni di lavoro » _(1920×1080 normal)_

### image non chargée (6)

- **image non chargée** — `/` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/404` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/chi-siamo` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/contatti` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/prodotti` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/shop` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/shop` — section#inizio > div.conteneur.shop-griglia > div.soglia:nth-of-type(2) > p.soglia-cifra:nth-of-type(2) « CHF 150 » _(320×568 normal, 320×568 sansJs)_

## À regarder

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (4)

- **section sans visuel** — `/` — section#professionisti « PER RISTORANTI, ALBERGHI E GRANDI QUANTITÀ Cartoni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contatti` — section#scrivici « Il tuo messaggio Compila il modulo, oppure chiamac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/prodotti` — section#senza « Senza ingredienti artificiali Tutti i prodotti Nat » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/shop` — section#quantita « Quantità diverse? Scrivici Per quantità diverse da » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 77 ms (différence 28 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/prodotti` — à 126 ms (différence 24 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/contatti` — écran différent à la même position après rechargement (5.9 %), voir comparaisons/rechargement-contatti-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/prodotti` — figure.olio-vetrina — bottiglia-vetrina : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

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
- Ouverture / (1366×768) : 2650 ms depuis le premier octet
- Ouverture /chi-siamo (1366×768) : 2486 ms depuis le premier octet
- Ouverture /contatti (1366×768) : 2410 ms depuis le premier octet
- Ouverture /prodotti (1366×768) : 2632 ms depuis le premier octet
- film de l'ouverture /prodotti 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /shop (1366×768) : 2528 ms depuis le premier octet
- Ouverture / (390×844) : 2675 ms depuis le premier octet
- Ouverture /chi-siamo (390×844) : 2547 ms depuis le premier octet
- Ouverture /contatti (390×844) : 2412 ms depuis le premier octet
- Ouverture /prodotti (390×844) : 2619 ms depuis le premier octet
- Ouverture /shop (390×844) : 2503 ms depuis le premier octet
- film de l'ouverture /shop 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 414 images d’intro, 7 de voile et 152 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /shop : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chi-siamo : aucune section épinglée ou plein écran.
- Tient dans l'écran /contatti : aucune section épinglée ou plein écran.
- Tient dans l'écran /prodotti : aucune section épinglée ou plein écran.
- Tient dans l'écran /shop : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 386, tâche la plus longue 0 ms
- Fluidité /chi-siamo 1366×768 (molette) : 0 % d'images lentes sur 289, tâche la plus longue 0 ms
- Fluidité /contatti 1366×768 (molette) : 0 % d'images lentes sur 173, tâche la plus longue 0 ms
- Fluidité /prodotti 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /shop 1366×768 (molette) : 0 % d'images lentes sur 332, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1427, tâche la plus longue 0 ms
- Fluidité /chi-siamo 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /contatti 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /prodotti 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /shop 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Vitesse / : 0.68 s de calcul au chargement (téléphone ralenti).
- Vitesse /chi-siamo : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /contatti : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /prodotti : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /shop : 0.55 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/chi-siamo,/contatti,/prodotti,/shop --seulement=fichiers,mesures
```
