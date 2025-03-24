# Angular

- [Angular](#angular)
  - [Ressources](#ressources)
  - [Architecture](#architecture)
  - [Introduction](#introduction)
    - [Single Page Application](#single-page-application)
    - [Ecosystème](#ecosystème)
    - [Prérequis](#prérequis)
  - [Angular CLI](#angular-cli)
    - [Installation](#installation)
    - [Créer un projet](#créer-un-projet)
    - [Lancer le serveur](#lancer-le-serveur)
  - [Structure de base](#structure-de-base)
  - [Créer son premier composant](#créer-son-premier-composant)
    - [Structure d'un composant](#structure-dun-composant)
    - [Décorateurs principaux](#décorateurs-principaux)

---

## Ressources

- [Doc](https://angular.dev/overview)
- [Simon DIENY](https://www.youtube.com/channel/UCZqq_ow06Husetd9ICEM2gQ/videos)

---

## Architecture

![Architecture Angular](/img/angular_architecture.PNG)

*Architecture robuste MVVM*: Model - ViewModel - View

- Architecture modulaire
- Basée sur les composants
- Injection de dépendances
- Découpage fonctionnel
- Single Page Application

---

## Introduction

Angular est un framework front JS, aujourd'hui il recommande d'utiliser TypeScript. On peut y associer NodeJS pour avoir un back simple et rapide.

Angular + TypeScript est une combinaison puissante pour des applications web robustes !

### Single Page Application

Une **SPA** est une application web moderne qui charge **une seule page** initiale et met à jour son contenu **dynamiquement**, *sans rechargement complet* lors des intéractions utilisateur:

- Chargement asynchrone des données
- MAJ dynamique du contenu sans rechargement
- Expérience fluide
- Répartition optimale des traitements (client/serveur)

### Ecosystème

- **TypeScript**: Typage statique
- **Angular CLI**: Outil de développement
- **RxJS**: Programmation réactive (observables) *(librairie)*
- **Angular Material**: Composants UI *(librairie)*
- **NgRx**: Gestion d'état *(librairie)*

### Prérequis

- Node.js (LTS)
- npm
- TypeScript (5.5+)

*(extensions vscode):*

- Angular Language Service
- Angular Snippets

## Angular CLI

Utilitaire en ligne de commande qui permet de:

- Créer un projet
- Tester un projet
- Lancer un serveur web de dev
- Build pour la prod

[Doc Angular CLI](https://github.com/angular/angular-cli)

### Installation

```bash
npm install -g @angular/cli
```

### Créer un projet

```bash
ng new mon-projet --skip-tests --style=scss
```

### Lancer le serveur

```bash
cd mon-projet
ng serve -o
```

> Congratulations! Your app is running. 🎉

---

## Structure de base

*/public* : va contenir les assets.

*/src* : répertoire où l'on va travailler, va contenir les composants, vues, etc.

  *styles.scss* : feuille de style général de l'app, chaque composant pourra être customisé avec son propre fichier scss.

  *main.ts* : point d'entrée de l'applocation, lancement du composant de base AppComponent.

  *index.html* : point d'entrée aux yeux du navigateur, balise `base` importante pour le routing, balise `<app-root>` qui correspond au composant parent de l'app.

*/app* : composant parent et fichiers associés.

  *app.routes.ts* : routing (tableau qui contient nos routes).

  *app.config.ts* : définit de la configuration pour notre app.

  *app.component.ts* : définit un composant et ses paramètres (selector: nom de la balise et du composant / imports: injecter dans le template html des composants et autres éléments d'angular / styleUrl: feuille de style de ce composant exclusivement).

*tsconfig.json* : fichier de configuration pour TypeScript (transpilation, build, etc).

*package.json* : dépendances et scripts.

*angular.json* : configuration du framework.

---

## Créer son premier composant

On va créer un composant via le CLI (toujours se placer à la racine du projet pour lancer ces commandes):

```bash
ng generate component folder/component-name
```

(fonctionne aussi avec des alias)

```bash
ng g c folder/component-name
```

Un dossier 'hello-world' a été créé dans /src/app avec tous les fichiers nécessaires (html, css, ts et test).

### Structure d'un composant

![Structure](/img/angular_structure-component.PNG)

### Décorateurs principaux

- @Component() - Définit un composant
- @Injectable() - Service injectable
