# Rapport d’audit

Projet : `natural-iter-maquette` · 23/11/2026 17:58:43 · 4 min · 6 page(s) · audit standard ciblé sur /,/404,/chi-siamo,/contatti,/prodotti,/shop (étapes : fichiers, mesures, mouvement)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-165455-standard-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5), mouvement (10), effets du plan (7), souris immobile (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161655-standard | standard | toutes | toutes | 61 | 69 | 1 | échecs |
| 20261123-163652-standard | standard | toutes | toutes | 16 | 12 | 1 | échecs |
| **20261123-165455-standard-cible-partiel** (celle-ci) | standard | /,/404,/chi-siamo,/contatti,/prodotti,/shop | fichiers, mesures, mouvement | 1 | 5 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#inizio > div.apertura-testo:nth-of-type(1) > p.apertura-info:nth-of-type(3) « Spedizione gratuita in Svizzera da CHF 150 » _(320×568 normal, 320×568 sansJs)_

## À regarder

### section sans visuel (5)

- **section sans visuel** — `/` — section#professionisti « PER RISTORANTI, ALBERGHI E GRANDI QUANTITÀ Cartoni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contatti` — section#scrivici « Il tuo messaggio Compila il modulo, oppure chiamac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/prodotti` — section#senza « Senza ingredienti artificiali Tutti i prodotti Nat » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/shop` — section#quantita « Quantità diverse? Scrivici Per quantità diverse da » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/shop` — section#inizio « SHOP Lo shop di Natural-Iter Vedi i prodotti Buono » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 64 min de travail pour 120 min de budget, 11 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 12 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /chi-siamo, /contatti, /prodotti, /shop.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures
```
