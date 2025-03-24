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
  - [Créer son premier composant](#créer-son-premier-composant)

---

## Ressources

[Doc](https://angular.dev/overview)

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

## Créer son premier composant

On va créer un composant 'hello-world' via le CLI:

```bash
ng generate component hello-world
```

Un dossier 'hello-world' a été créé dans /src/app avec tous les fichiers nécessaires (html, css, ts et test).
