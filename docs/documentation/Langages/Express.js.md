# Express.js

---

- [Express.js](#expressjs)
  - [Introduction à Express.js](#introduction-à-expressjs)
  - [Installation d'Express.js](#installation-dexpressjs)
  - [Création d'un Serveur Simple](#création-dun-serveur-simple)
  - [Gestion des Routes](#gestion-des-routes)
  - [Middleware en Express](#middleware-en-express)
    - [Exemple de Middleware](#exemple-de-middleware)
  - [Gestion des Paramètres](#gestion-des-paramètres)
    - [Paramètres d'URL](#paramètres-durl)
    - [Paramètres de Query](#paramètres-de-query)
  - [Gestion des Fichiers Statiques](#gestion-des-fichiers-statiques)
  - [Création d'une API REST Basique](#création-dune-api-rest-basique)
  - [Utilisation de Views avec EJS](#utilisation-de-views-avec-ejs)
    - [Installation de EJS](#installation-de-ejs)
    - [Configuration de Express pour utiliser EJS](#configuration-de-express-pour-utiliser-ejs)
    - [Création d'une Vue avec EJS](#création-dune-vue-avec-ejs)
    - [Affichage d'une Vue avec Express](#affichage-dune-vue-avec-express)
    - [Passer des Données Dynamiques](#passer-des-données-dynamiques)

---

## Introduction à Express.js

*Express.js est un framework minimaliste et flexible pour Node.js qui permet de créer rapidement des applications web et des API. Il simplifie la gestion des routes, des requêtes HTTP et des middleware.*

---

## Installation d'Express.js

1. Initialiser un projet Node.js
```bash
mkdir mon-projet-express

cd mon-projet-express

npm init -y
```

Cela génère un fichier `package.json`.

2. Installer Express.js
```bash
npm install express
```

## Création d'un Serveur Simple

Créons un serveur avec Express qui affiche "Hello, World!" sur la page d'accueil.

1. Créer un fichier `server.js` et ajouter le code suivant :
```js
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {

    res.send('Hello, World!');

});

app.listen(port, () => {

    console.log(`Serveur démarré sur http://localhost:${port}`);

});
```

2. Lancer le serveur
```bash
node server.js
```

Accéder à `http://localhost:3000` dans un navigateur.

## Gestion des Routes

Express permet de définir des routes pour différentes URL.
```js
app.get('/about', (req, res) => {

    res.send('Page About');

});

app.get('/contact', (req, res) => {

    res.send('Page Contact');

});
```

## Middleware en Express

Les middleware sont des fonctions qui s'exécutent entre la requête et la réponse.

### Exemple de Middleware
```js
app.use((req, res, next) => {

    console.log(`Requête reçue : ${req.method} ${req.url}`);

    next();

});
```

Express possède des middleware intégrés comme `express.json()` pour parser le JSON dans les requêtes.
```js
app.use(express.json());
```

## Gestion des Paramètres

### Paramètres d'URL
```js
app.get('/user/:id', (req, res) => {

    res.send(`Utilisateur ID: ${req.params.id}`);

});
```

Accéder à `http://localhost:3000/user/123` affichera `Utilisateur ID: 123`.

### Paramètres de Query
```js
app.get('/search', (req, res) => {

    res.send(`Recherche : ${req.query.q}`);

});
```

Accéder à `http://localhost:3000/search?q=express` affichera `Recherche : express`.

## Gestion des Fichiers Statiques

On peut servir des fichiers statiques (HTML, CSS, images, etc.) avec :
```js
app.use(express.static('public'));
```

Placez un fichier `public/index.html`, et il sera accessible via `http://localhost:3000/index.html`.

## Création d'une API REST Basique

1. Définir une liste d'objets
```js
const users = [

    { id: 1, name: 'Alice' },

    { id: 2, name: 'Bob' }

];
```

2. Endpoints pour récupérer les utilisateurs
```js
app.get('/api/users', (req, res) => {

    res.json(users);

});

app.get('/api/users/:id', (req, res) => {

    const user = users.find(u => u.id == req.params.id);

    user ? res.json(user) : res.status(404).send('Utilisateur non trouvé');

});
```

## Utilisation de Views avec EJS

EJS (Embedded JavaScript) est un moteur de template qui permet d'inclure du code JavaScript dans des fichiers HTML dynamiques.

### Installation de EJS
```bash
npm install ejs
```

### Configuration de Express pour utiliser EJS

Ajoutez ceci à votre `server.js` :
```js
app.set('view engine', 'ejs');

app.set('views', './views');
```

Cela dit à Express que les fichiers de template seront stockés dans un dossier `views/` et utiliseront EJS.

### Création d'une Vue avec EJS

Créez un dossier `views/` et un fichier `views/index.ejs` :
```js
<!DOCTYPE html>

<html lang="fr">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Page d'accueil</title>

</head>

<body>

    <h1>Bienvenue, <%= name %>!</h1>

</body>

</html>
```

### Affichage d'une Vue avec Express

Ajoutez cette route dans `server.js` :
```js
app.get('/home', (req, res) => {

    res.render('index', { name: 'Jean' });

});
```

Lorsque vous accédez à `http://localhost:3000/home`, la page affichera "Bienvenue, Jean!".

### Passer des Données Dynamiques

Vous pouvez récupérer des données dynamiques et les afficher dans la vue :
```js
app.get('/user/:name', (req, res) => {

    res.render('index', { name: req.params.name });

});
```

Accédez à `http://localhost:3000/user/Alice` pour voir "Bienvenue, Alice!".

**Ajouter : gestion des erreurs, formulaires + validation**