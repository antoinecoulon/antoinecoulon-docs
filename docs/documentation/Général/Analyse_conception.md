---
description: Analyse et Conception
---

# Analyse et Conception

- [Analyse et Conception](#analyse-et-conception)
  - [Ordre](#ordre)
    - [Diagramme des cas d’utilisation (Use Case Diagram)](#diagramme-des-cas-dutilisation-use-case-diagram)
      - [Exemple pour une application e-commerce](#exemple-pour-une-application-e-commerce)
      - [Conseils pratiques](#conseils-pratiques)
    - [Diagramme de classes métier (ou MCD – Modèle Conceptuel de Données)](#diagramme-de-classes-métier-ou-mcd--modèle-conceptuel-de-données)
      - [Exemple pour une application](#exemple-pour-une-application)
    - [Diagramme de séquence (Sequence Diagram)](#diagramme-de-séquence-sequence-diagram)
    - [Diagramme de classes logiques](#diagramme-de-classes-logiques)
    - [Diagramme d’activités ou de flux (optionnel mais utile)](#diagramme-dactivités-ou-de-flux-optionnel-mais-utile)
    - [Maquettes (Wireframes)](#maquettes-wireframes)
    - [Diagramme de déploiement (Deployment Diagram)](#diagramme-de-déploiement-deployment-diagram)

---

## Ordre

1. Cas d’utilisation
2. MCD / classes métier
3. Maquettes
4. Séquences / Activités
5. Classes logiques
6. Déploiement (en fin de projet)

---

### Diagramme des cas d’utilisation (Use Case Diagram)

*Quand ?* En tout début de projet (phase de spécification).

*Utilité :*

- Identifier les acteurs (utilisateurs ou systèmes externes).
- Décrire ce que fait le système sans entrer dans les détails techniques.
- Sert de base à la définition des exigences fonctionnelles.

Le diagramme de cas d'utilisation a pour but de décrire les fonctionnalités du système du point de vue des utilisateurs (ou "acteurs"). Il répond à la question : « Qui fait quoi dans le système ? »

Il ne décrit pas comment les choses sont faites, mais quelles interactions sont possibles.

*Contenu :*

- Acteurs (ex. : Utilisateur, Administrateur, Système de paiement): Entités externes qui interagissent avec le système (utilisateurs, systèmes).
- Cas d'utilisation (ex. : Se connecter, Ajouter un produit, Valider un panier): Fonctions ou services fournis par le système aux acteurs.
- Relations (inclure (`<<include>>`), étendre (`<<extend>>`), généralisation).

#### Exemple pour une application e-commerce

Acteurs :

- Client
- Administrateur
- Système de paiement (acteur secondaire)

Cas d'utilisation :

- S'inscrire
- Se connecter
- Parcourir les produits
- Ajouter au panier
- Passer une commande
- Gérer les produits (Admin)
- Gérer les utilisateurs (Admin)

Exemple de relation :

- Passer une commande inclut Payer
- Payer utilise le système de paiement (acteur secondaire)

#### Conseils pratiques

- Un use case = une action complète, avec début, traitement, fin.
- Ne pas mettre trop de détails (on le fera dans les diagrammes de séquence ou d’activités).
- Le diagramme aide à identifier les fonctionnalités essentielles à développer.

---

### Diagramme de classes métier (ou MCD – Modèle Conceptuel de Données)

*Quand ?* Juste après les use cases, pour modéliser les données.

*Utilité :*

- Définir les entités principales, leurs attributs et leurs relations.
- Sert à concevoir la base de données logique et physique plus tard.
- Représente une vision "métier", indépendante du système.

Le MCD sert à modéliser les données nécessaires au système de manière indépendante de toute technologie. C’est une représentation abstraite des entités et de leurs relations. Il répond à la question : « Quelles données devons-nous stocker ? »

*Contenu :*

- Entités (ex. : Utilisateur, Commande, Produit): Représentent des objets métiers du système (ex : Utilisateur, Produit).
- Attributs (ex. : nom, prix, email): Informations que l’on veut stocker pour chaque entité (ex : nom, email).
- Associations et cardinalités (ex. : "Un utilisateur peut passer plusieurs commandes"): Lien logique entre deux entités (ex : "un utilisateur passe une commande").
- Cardinalités: Contraintes sur le nombre de liens (ex : 1..*, 0..1, etc.).

#### Exemple pour une application

*Entités :*

**Utilisateur:**

- idUtilisateur (PK)
- nom
- email
- motDePasse

**Produit:**

- idProduit (PK)
- nom
- description
- prix

**Commande:**

- idCommande (PK)
- dateCommande
- statut
- total

**LigneCommande:** (association entre Commande et Produit)

- quantité
- prixUnitaire

*Relations :*

- Un Utilisateur peut passer plusieurs Commandes
- Une Commande contient plusieurs Produits via LigneCommande
- Un Produit peut apparaître dans plusieurs Commandes

*Conseils pratiques :*

- Ne pas inclure de logique technique (pas de types SQL ou de structures de table).
- C’est la base pour générer le Modèle Logique de Données (MLD) puis le schéma SQL.
- Vérifie toujours les cardinalités pour éviter des incohérences (ex : 0..* vs 1..1).

*Représentation graphique du MCD:*

On représente souvent :

- Les entités sous forme de rectangles
- Les relations par des losanges ou traits
- Les attributs sous les entités
- Les cardinalités près des extrémités des relations

---

### Diagramme de séquence (Sequence Diagram)

Quand ? Après avoir défini les cas d’utilisation détaillés.

Utilité :

Montrer comment les objets interagissent dans le temps.

Utile pour détailler les scénarios complexes (authentification, traitement de commande...).

Contenu :

Objets ou classes (ex. : Frontend, Backend, Base de données).

Messages échangés entre objets (ex. : login(), checkCredentials()).

Ordre temporel des interactions.

---

### Diagramme de classes logiques

Quand ? En parallèle ou après les diagrammes de séquence.

Utilité :

Définir les structures de classes du système logiciel.

Sert à guider l'implémentation dans le code.

Diffère du MCD par l’ajout de méthodes et de types spécifiques au langage.

Contenu :

Classes, attributs, méthodes.

Relations (association, héritage, composition...).

Visibilité (public, privé...).

---

### Diagramme d’activités ou de flux (optionnel mais utile)

Quand ? Si les processus sont complexes ou conditionnels.

Utilité :

Visualiser les flux de traitements, y compris les décisions.

Complémentaire aux use cases ou séquences pour décrire la logique métier.

Contenu :

Actions, décisions, boucles.

Début et fin.

Transitions entre activités.

---

### Maquettes (Wireframes)

Quand ? En parallèle des use cases ou juste après.

Utilité :

Préparer l’interface utilisateur.

Valider les choix fonctionnels avec le client.

Contenu :

Pages principales (login, dashboard, etc.).

Placement des éléments (boutons, formulaires, tableaux).

---

### Diagramme de déploiement (Deployment Diagram)

Quand ? En fin de conception ou début de mise en production.

Utilité :

Montrer où sont déployés les composants (frontend, backend, base de données…).

Représente l’architecture physique de l’application.

Contenu :

Nœuds (serveur web, base de données, navigateur).

Artefacts déployés.

Connexions réseau.
