---
description: Architecture
---

# Architecture

## Rappels

*Couches composant une application*:

- **DAL**: Data Access Layer | Peristence des données
- **BLL**: Business Logic Layer | Services métiers
- **IHM**: Interface Human Machine | Présentation

- **BO**: Business Object | Données métiers (pas une couche classique = transversal, accesible par les différentes couches)

*Couplage faible / fort*:

*Architecture n-tiers*:

*Server-side rendering*:

- Désigne une architecture logicielle pour laquelle l'application située sur le serveur créé et renvoit les écrans/pages web.

*Client-side rendering*:

- Rendu effectué côté client avec les données côté serveur.

---

## Architectures

### SOA

- *Architecure Orientée Service*

![SOA](/img/architecture_soa.PNG)

- **NOTION DE SERVICE**
  - Fonction ayant une signification métier
  - Fonction ayant un objectif unique
  - Fonction mutualisée (potentiellement partagée par différentes applications)
- **INTEROPÉRABILITÉ**
  - Clients et services sont agnostiques de la technologie de l’autre partie
  - Couplage faible entre les composants
- IMPLÉMENTATIONS
  - **SOAP**
  - **REST**

#### REST

![REST](/img/architecture_rest.PNG)

Exemple d’API REST:

- /commandes + GET  :  Lire l’ensemble des commandes
- /commandes/28 + GET : Lire les données de la commande 28
- /commandes/28/avis + GET : Récupérer les avis de la commande 28
- /commandes + POST : Ajouter une commande
- /commandes/34 + DELETE : Supprimer la commande 34

![REST](/img/architecture_rest2.PNG)

*Développer une API RESTful:* Concevoir -> Implémenter -> Tester -> Documenter

---

## Architectures Monolithique / N-Tiers ou Micro services / Hexagonale

[Architecture hexagonale](https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation)

[Architecture Model View Controller](https://www.geeksforgeeks.org/mvc-design-pattern/)

![Architectures](/img/architecture_schema2.png)

---

## Divers

### Divers: Stockage en mémoire de l’objet (Pointeur)

![Stockage en mémoire de l’objet (Pointeur)](/img/architecture_schema1.png)

---
