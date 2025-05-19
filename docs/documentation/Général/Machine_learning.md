# Machine Learning

- [Machine Learning](#machine-learning)
  - [Introduction au machine learning (Python)](#introduction-au-machine-learning-python)
    - [Deux ingrédients fondamentaux](#deux-ingrédients-fondamentaux)
  - [CRISP-DM (CRoss Industry Standard Process for Data Mining)](#crisp-dm-cross-industry-standard-process-for-data-mining)
  - [L'environnement technique du Machine learning](#lenvironnement-technique-du-machine-learning)
    - [Anaconda, PyCharm, Jupyter Notebooks](#anaconda-pycharm-jupyter-notebooks)
  - [Les librairies python pour le ML](#les-librairies-python-pour-le-ml)
    - [Numpy](#numpy)
    - [Pandas](#pandas)
    - [MatPlotLib](#matplotlib)
    - [Seaborn](#seaborn)

---

## Introduction au machine learning (Python)

L'IA vise à simuler des processus cognitifs qui étaient réservés à l'humain: raisonnement, planification, créativité, etc.

La Data science vise elle à trouver dans des données des faits intéressants.

Au croisement de ces deux domaines, on trouve le **Machine learning** qui va utiliser ces données pour apprendre, au travers de nombreux sous-domaines (deep learning, clusering, etc).

Le machine learning n'est pas nouveau, il a été introduit par Arthur Samuel en 1959. Mais avec le volume de données et les capacités de calcul accessibles aujourd'hui, les résultats sont bien meilleurs.

Le Machine Learning ou apprentissage automatique est une sous-catégorie de l’intelligence artificielle. Elle consiste à laisser des algorithmes découvrir des « **patterns** », à savoir des **motifs récurrents**, dans les ensembles de données. Ces données peuvent être des chiffres, des mots, des images, des statistiques…

### Deux ingrédients fondamentaux

Les données (*Data*) + l'algorithme d'apprentissage (*Learning*) = Le Modèle (*Model*): ce processus s'appelle l'*entrainement*.

![intro](/img/machine_learning-intro.png)

Pour entrainer des algorithmes qui permettent de répondre à un problème posé, il "*suffit*" d'avoir des données en grande quantité, et surtout de bonne qualité!

---

## CRISP-DM (CRoss Industry Standard Process for Data Mining)

Méthodologie prévue pour encadrer tous les travaaux d'exploitation de données, décrit le cycle de vie d'un projet *data science*.

![intro2](/img/machine_learning-intro2.png)

- **Compréhension du métier**: phase essentielle pour *comprendre les objectifs et besoins du projet* qui nécessite d'impliquer des *experts métiers* (déterminer les ressources disponibles, évaluer les bénéfices/risques, fixer les objectifs et préparer un plan pour les atteindre...).
- **Compréhension des données**: collecterles données disponibles, les décrire, les explorer, et *en évaluer la qualité*.
- **Préparation des données**: *sélection des données* et nettoyage, construction des jeux de données, conversion des données si nécessaire. Souvent la partie la plus chronophage (environ 80% du temps passé sur un projet)!
- **Modélisation**: sélection des techniques à utiliser (algorithmes à privilégier), génération des jeux de données pour l'entrainement et le test, *construction du/des modèle(s)*, comparaison des résultats de performance. Si aucun algo ne semble donner satisfaction, on essaie de l'améliorer en reprenant la préparation des données.
- **Evaluation**: on utilise différents outils qui permettent de déterminer si: objectifs atteints? besoin d'améliorations? prochaines étapes? En fait *est-ce que l'on peut déployer le projet* ?!
- **Déploiement**: définir le *plan de déploiement*, choix de technologies pour la *mise en production*, *évaluation globale* impliquant tous les métiers.

---

## L'environnement technique du Machine learning

On peut déjà diviser les outils disponibles en deux catégories:

- les outils intégrés: contenant tout le nécessaire pour un projet: analyse de données, création de modèles, évaluation... facile à prendre en main mais rigide.
- les outils de développement: basé sur des langages de programmation (technos, framework, librairies): plus de souplesse et de possibilités, mais nécessite plus de connaissance pour la prise en main, c'est **la solution la plus utilisée**!

La question récurrente: quel langage choisir ?? *Python est le langage le plus populaire actuellement* (vaste écosystème de librairies pour toutes les étapes du ML, code lisible et compréhensible, fléxible, pas dépendant d'une plateforme, grande communauté de support).

### Anaconda, PyCharm, Jupyter Notebooks

(*Installation d'Anaconda, et utilisation des Jupyter notebooks dans PyCharm.*)

Anaconda est une distribution Python spécialement pensée pour le ML. Jupyter Notebook est un outil pour produire des documents alternants code et documentation sur un projet.

---

## Les librairies python pour le ML

### Numpy

[Numpy](https://numpy.org/doc/) est une librairie pour la gestion de tableaux en Python.

- Efficacité: plus rapide que des listes
- Homogénéité: un seul type de données par tableau
- Tableaux multi-dimmensionnels

`import numpy as np`

### Pandas

[Pandas](https://pandas.pydata.org/) est une librairie pour la manipulation de données, les données sont stockées dans des structures de données optimisées grâce à Numpy.

`import pandas as pd`

3 sortes de structures de données: les Series (1D), les Dataframes (2D) et les Panel (3D). > [Cheatsheet](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)

### MatPlotLib

[Matplotlib](https://matplotlib.org/) est une librairie de visualisation 2D pour les tableaux, on utilise surtout le module pyplot.

`import matplotlib.pyplot as plt`

### Seaborn

[Seaborn](https://seaborn.pydata.org/) est une librairie de visualisation plus récente qui intègre très bien les DataFrame de Pandas et qui simplifie la syntaxe de Matplotlib.

`import seaborn as sns`
