# Rapport d’audit

Projet : `natural-iter-maquette` · 23/11/2026 18:41:24 · 21 min · 6 page(s) · audit complet

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261123-172015-complet` · version ?v=2
- Échecs : **4**
- À regarder : **5**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (6), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (9), souris immobile (1), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/chi-siamo` — div.conteneur.archivio-griglia > div.archivio-testo:nth-of-type(1) > p.archivio-azioni:nth-of-type(3) > span.apertura-info « Dal Ponente Ligure a Mendrisio » _(320×568 normal, 844×390 normal, 320×568 sansWebgl, 844×390 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/shop` — section#inizio > div.conteneur.shop-griglia > div.soglia:nth-of-type(2) > p.soglia-cifra:nth-of-type(2) « CHF 150 » _(320×568 normal, 320×568 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/shop` — div.conteneur.shop-griglia > div.shop-testo:nth-of-type(1) > p.shop-azioni:nth-of-type(3) > a.bouton:nth-of-type(1) « Vedi i prodotti » _(1000×560 normal, 1000×560 sansWebgl)_

### retour avant : image isolée différente (flash) (1)

- **retour avant : image isolée différente (flash)** — `/prodotti` — à 50 ms (films/retour-avant-390.png) _(390×844 retour avant)_

## À regarder

### section sans visuel (3)

- **section sans visuel** — `/` — section#professionisti « PER RISTORANTI, ALBERGHI E GRANDI QUANTITÀ Cartoni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/prodotti` — section#senza « Senza ingredienti artificiali Tutti i prodotti Nat » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/shop` — section#inizio « SHOP Lo shop di Natural-Iter Vedi i prodotti Buono » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, 375×667 sansWebgl)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/prodotti` — à 150 ms (différence 24 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

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

- Numéro de version des fichiers : ?v=2
- Journal v2 : 1 étape(s) notée(s), 9 min de travail pour 15 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2738 ms depuis le premier octet
- Ouverture /chi-siamo (1366×768) : 2495 ms depuis le premier octet
- Ouverture /contatti (1366×768) : 2449 ms depuis le premier octet
- Ouverture /prodotti (1366×768) : 2640 ms depuis le premier octet
- Ouverture /shop (1366×768) : 2515 ms depuis le premier octet
- Ouverture / (390×844) : 2729 ms depuis le premier octet
- Ouverture /chi-siamo (390×844) : 2554 ms depuis le premier octet
- Ouverture /contatti (390×844) : 2430 ms depuis le premier octet
- film de l'ouverture /contatti 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prodotti (390×844) : 2677 ms depuis le premier octet
- Ouverture /shop (390×844) : 2509 ms depuis le premier octet
- Bords de l’écran : 414 images d’intro, 14 de voile et 210 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /shop : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chi-siamo : aucune section épinglée ou plein écran.
- Tient dans l'écran /contatti : aucune section épinglée ou plein écran.
- Tient dans l'écran /prodotti : aucune section épinglée ou plein écran.
- Tient dans l'écran /shop : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 429, tâche la plus longue 0 ms
- Fluidité /chi-siamo 1366×768 (molette) : 0 % d'images lentes sur 288, tâche la plus longue 0 ms
- Fluidité /contatti 1366×768 (molette) : 0 % d'images lentes sur 181, tâche la plus longue 0 ms
- Fluidité /prodotti 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité /shop 1366×768 (molette) : 0 % d'images lentes sur 324, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 0 ms
- Fluidité /chi-siamo 390×844 (doigt) : 0 % d'images lentes sur 1412, tâche la plus longue 0 ms
- Fluidité /contatti 390×844 (doigt) : 0 % d'images lentes sur 1382, tâche la plus longue 0 ms
- Fluidité /prodotti 390×844 (doigt) : 0 % d'images lentes sur 1421, tâche la plus longue 0 ms
- Fluidité /shop 390×844 (doigt) : 0 % d'images lentes sur 1410, tâche la plus longue 0 ms
- Vitesse / : 0.76 s de calcul au chargement (téléphone ralenti).
- Vitesse /chi-siamo : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /contatti : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /prodotti : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /shop : 0.65 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/chi-siamo,/shop,/prodotti --seulement=fichiers,mesures,films
```
