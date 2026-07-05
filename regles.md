# Règles de la partie

## Objectif

Rassembler les **3 Fragments de Triforce** dispersés dans des caches souterraines de la carte, puis les déposer sur les 3 dalles du **rituel final**, au Temple du Temps. Une fois le rituel lancé, s'il va au bout de son compte à rebours sans être interrompu, l'équipe qui l'a posé remporte la partie.

## Équipes

- **8 équipes maximum**, de **3 joueurs maximum** chacune (Rouge, Bleu, Vert, Jaune, Cyan, Rose, Orange, Blanc).
- Le friendly fire est désactivé entre membres d'une même équipe.
- Si toute une équipe est éliminée (plus aucun membre en vie), une annonce publique en informe tout le monde.

## Timings (valeurs par défaut, configurables)

| Événement | Délai par défaut |
|---|---|
| Sélection de race | 1min30 après le début |
| PvP activé (+ ouverture des donjons) | 20 minutes après le lancement |
| Final Heal (soigne tout le monde à fond) | 15 minutes après le lancement |
| Début du rétrécissement de la bordure | 2 heures après le lancement |
| Durée du rétrécissement de la bordure | 1 heure |
| Taille finale de la bordure | 100 blocs de diamètre (rayon 50) |

Des avertissements (titre à l'écran + son) sont envoyés 5 minutes puis 1 minute avant le début du rétrécissement de la bordure.

## Vie et régénération

- **Pas de régénération de vie naturelle** (faim pleine ne régénère pas automatiquement).
- Chaque race a son propre nombre de cœurs de départ et son maximum absolu (voir [Races](/races)).
- Les cœurs d'absorption (pommes dorées enchantées, etc.) sont limités ou interdits selon la race — voir [Races](/races).
- Les **Pommes de Notch (pommes dorées enchantées) sont totalement bannies** : ni craftables, ni trouvables dans aucun loot (coffres déjà générés compris).

## Début de partie : la dispersion ("scatter")

Au lancement, chaque équipe est téléportée à un point réparti **par angle autour du centre de la carte** (pas au hasard dans un carré) pour garantir un espacement équitable entre équipes. Chaque coéquipier est vérifié individuellement (pas d'eau/lave à proximité, pas de falaise/ravin/grotte, terrain stable).

Chaque joueur est ensuite enfermé dans une **boîte de verre** (teintée de la couleur de son équipe) à 50 blocs au-dessus de son point d'atterrissage. Un compte à rebours de 5 secondes s'affiche ("Chute imminente…"), puis le verre se casse : la chute est **invulnérable** (aucun dégât de chute), et l'invulnérabilité se lève automatiquement une fois posé au sol.

## Objets bannis

- **Pommes de Notch** : bannies partout (craft, loot, coffres).
- **Briquet (Flint and Steel)** : interdit.

## Limites d'enchantement

Certains enchantements ont un niveau maximum autorisé, appliqué automatiquement (l'enchantement est refusé/annulé au-delà) — notamment Protection (limité selon le type d'armure), Sharpness, et d'autres. Un message en jeu précise la limite si vous tentez de dépasser.

## Rappels automatiques

Toutes les 5 minutes, un message rappelle que `/craft` donne accès aux recettes spéciales et `/positions` affiche les positions du Temple, des donjons et des marchands.
