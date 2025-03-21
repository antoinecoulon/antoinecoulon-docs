# Angular

- [Angular](#angular)
  - [Ressources](#ressources)
  - [Architecture](#architecture)
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

---

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
ng new mon-projet
```

### Lancer le serveur

```bash
cd mon-projet
ng serve
```

> Congratulations! Your app is running. 🎉

---

## Créer son premier composant

On va créer un composant 'hello-world' via le CLI:
```bash
ng generate component hello-world
```

Un dossier 'hello-world' a été créé dans /src/app avec tous les fichiers nécessaires (html, css, ts et test).