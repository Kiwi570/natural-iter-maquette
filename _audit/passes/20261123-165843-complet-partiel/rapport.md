# Rapport d’audit

Projet : `natural-iter-maquette` · 23/11/2026 18:04:39 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-165843-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161655-standard | standard | toutes | toutes | 61 | 69 | 1 | échecs |
| 20261123-163652-standard | standard | toutes | toutes | 16 | 12 | 1 | échecs |
| 20261123-165455-standard-cible-partiel | standard | /,/404,/chi-siamo,/contatti,/prodotti,/shop | fichiers, mesures, mouvement | 1 | 5 | 0 | échecs |
| **20261123-165843-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 5 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#inizio > div.apertura-testo:nth-of-type(1) > p.apertura-info:nth-of-type(3) « Spedizione gratuita in Svizzera da CHF 150 » _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl, 844×390 sansJs, 1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/chi-siamo` — div.conteneur.archivio-griglia > div.archivio-testo:nth-of-type(1) > p.archivio-azioni:nth-of-type(3) > span.apertura-info « Dal Ponente Ligure a Mendrisio » _(1000×560 sansJs)_

## À regarder

### section sans visuel (5)

- **section sans visuel** — `/` — section#professionisti « PER RISTORANTI, ALBERGHI E GRANDI QUANTITÀ Cartoni » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/contatti` — section#scrivici « Il tuo messaggio Compila il modulo, oppure chiamac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/prodotti` — section#senza « Senza ingredienti artificiali Tutti i prodotti Nat » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/shop` — section#inizio « SHOP Lo shop di Natural-Iter Vedi i prodotti Buono » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, 375×667 sansWebgl)_
- **section sans visuel** — `/shop` — section#quantita « Quantità diverse? Scrivici Per quantità diverse da » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chi-siamo : aucune section épinglée ou plein écran.
- Tient dans l'écran /contatti : aucune section épinglée ou plein écran.
- Tient dans l'écran /prodotti : aucune section épinglée ou plein écran.
- Tient dans l'écran /shop : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/chi-siamo --seulement=fichiers,mesures
```
