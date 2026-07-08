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
| PvP activé (+ ouverture des donjons) | 40 minutes après le lancement |
| Final Heal (soigne tout le monde à fond) | 35 minutes après le lancement |
| Début du rétrécissement de la bordure | 2 heures après le lancement |
| Durée du rétrécissement de la bordure | 1 heure |
| Taille finale de la bordure | 100 blocs de diamètre (rayon 50) |

Des avertissements (titre à l'écran + son) sont envoyés 5 minutes puis 1 minute avant le début du rétrécissement de la bordure.

## Vie et régénération

- **Régénération de vie naturelle activée** (faim pleine régénère automatiquement, comme dans Minecraft de base).
- **Avant l'activation du PvP** : mourir (chute, mob, lave...) fait juste respawn normalement, comme dans Minecraft classique — aucune élimination.
- **À partir de l'activation du PvP** : mourir élimine définitivement (passage en spectateur), plus de respawn possible.
- Chaque race a son propre nombre de cœurs de départ et son maximum absolu (voir [Races](/races)).
- Les cœurs d'absorption (pommes dorées enchantées, etc.) sont limités ou interdits selon la race, voir [Races](/races).
- Les **Pommes de Notch (pommes dorées enchantées) sont totalement bannies** : ni craftables, ni trouvables dans aucun loot (coffres déjà générés compris).

## Début de partie : la dispersion ("scatter")

Au lancement, chaque équipe est téléportée à un point réparti **par angle autour du centre de la carte**, pour garantir un espacement équitable entre équipes. Chaque coéquipier est vérifié individuellement (pas d'eau/lave à proximité, pas de falaise/ravin/grotte, terrain stable).

Chaque joueur est ensuite enfermé dans une **boîte de verre** (teintée de la couleur de son équipe) à 50 blocs au-dessus de son point d'atterrissage. Un compte à rebours de 5 secondes s'affiche, puis le verre se casse : la chute est **invulnérable** (aucun dégât de chute), et l'invulnérabilité se lève automatiquement une fois posé au sol.

## Récolte des arbres

Casser une seule bûche (n'importe quel outil, même à la main) abat tout l'arbre d'un coup, feuillage compris, toutes essences confondues. Les feuilles ont une chance de lâcher une pomme (0,5% par feuille, comme en vanilla), dont 1 sur 12 est une pomme en or.

## Minage automatiquement fondu

Casser un minerai brut (fer, or ou cuivre) donne directement le lingot correspondant avec l'XP correspondante, comme s'il était passé au four. Silk Touch donne toujours le minerai brut normalement, et Fortune s'applique bien à la quantité obtenue. Charbon, diamant, émeraude, redstone, lapis et quartz ne sont pas concernés, ils sortent déjà utilisables tels quels en vanilla.

## Objets bannis

- **Pommes de Notch** : bannies partout (craft, loot, coffres).
- **Briquet (Flint and Steel)** : interdit.
- **Obsidienne** : impossible à poser dans un rayon de 30 blocs autour du rituel final.

## Nether et End désactivés

L'accès au Nether et à l'End est bloqué : emprunter un portail ne fait rien, tout se joue dans le monde principal.

## Limites d'enchantement

| Enchantement | Niveau maximum |
|---|---|
| Protection | **III** sur fer/cuir/chaîne/or, **II** sur diamant |
| Tranchant (Sharpness) | III |
| Puissance (Power, arc) | IV |
| Châtiment (Smite) | IV |
| Fléau des Arthropodes (Bane of Arthropods) | II |
| Flamme (Flame, arc) | **Totalement interdit** |
| Aspect Feu (Fire Aspect) | **Totalement interdit** |
| Tous les autres (Solidité/Unbreaking, Réparation/Mending, Efficacité, Fortune, Butin/Looting, Respiration, Rapidité aquatique/Depth Strider, Chute de plumes/Feather Falling, Épines/Thorns, Recul/Knockback, Piston/Punch, etc.) | Aucune limite |

**Les objets légendaires sont totalement exemptés** de ces limites. C'est normal que la Master Sword (Sharpness VI, Bane of Arthropods II, Smite V), la Tunique du Héros (Protection VI) ou l'Arc de Lumière (Flame I) dépassent ces plafonds, ils ne sont pas concernés par la règle.

### Comment ça se comporte concrètement

- **Table d'enchantement** : si le résultat dépasserait une limite, l'enchantement est intégralement refusé, aucune XP ni Lapis n'est consommé (pas de réduction silencieuse du niveau).
- **Enclume** : même principe, le résultat est bloqué si la combinaison dépasserait la limite (les deux objets utilisés restent dans leurs emplacements, rien n'est consommé). Un message d'erreur s'affiche, sans spam si vous laissez les objets en place.
- **Objet obtenu autrement** (loot, don admin...) : dès que l'objet est tenu en main ou déplacé dans l'inventaire, un enchantement interdit (Flamme/Aspect Feu) est retiré automatiquement, et un enchantement trop haut (ex: Tranchant IV) est réduit au niveau maximum autorisé. Un message en jeu vous informe dans les deux cas.

## Rappels automatiques

Toutes les 5 minutes, un message rappelle que `/craft` donne accès aux recettes spéciales et `/positions` affiche les positions du Temple, des donjons et des marchands.
