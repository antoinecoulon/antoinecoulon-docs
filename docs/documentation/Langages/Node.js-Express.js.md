# Node.js - Express.js

- [Node.js - Express.js](#nodejs---expressjs)
  - [Node.js - Introduction](#nodejs---introduction)
    - [Qu'est-ce que Node.js ?](#quest-ce-que-nodejs-)
    - [Pourquoi Node.js ?](#pourquoi-nodejs-)
    - [Avantages](#avantages)
    - [Inconvénients](#inconvénients)
  - [Les Bases de Node.js](#les-bases-de-nodejs)
  - [Modules en Node.js](#modules-en-nodejs)
    - [Modules Intégrés](#modules-intégrés)
    - [Modules Personnalisés](#modules-personnalisés)
  - [Utilisation de use strict](#utilisation-de-use-strict)
  - [Utilisation de ‘npm’](#utilisation-de-npm)
    - [Installer un Package](#installer-un-package)
    - [Utiliser un Package](#utiliser-un-package)
    - [node / nodemon](#node--nodemon)
  - [Ressources Supplémentaires](#ressources-supplémentaires)
  - [Express.js - Introduction](#expressjs---introduction)
  - [Installation d'Express.js](#installation-dexpressjs)
  - [Création d'un Serveur Simple](#création-dun-serveur-simple)
  - [Gestion des Routes](#gestion-des-routes)
  - [Middleware en Express](#middleware-en-express)
    - [Exemple de Middleware](#exemple-de-middleware)
  - [Gestion des Paramètres](#gestion-des-paramètres)
    - [Paramètres d'URL](#paramètres-durl)
    - [Paramètres de Query](#paramètres-de-query)
  - [Gestion des Fichiers Statiques](#gestion-des-fichiers-statiques)
  - [Communication avec le front](#communication-avec-le-front)
  - [Exemple simple de Token JWT](#exemple-simple-de-token-jwt)
  - [Connexion à une BDD](#connexion-à-une-bdd)
    - [Avec Mongoose](#avec-mongoose)
  - [Introduction vers une API REST Basique](#introduction-vers-une-api-rest-basique)
  - [Utilisation de Views avec EJS](#utilisation-de-views-avec-ejs)
    - [Installation de EJS](#installation-de-ejs)
    - [Configuration de Express pour utiliser EJS](#configuration-de-express-pour-utiliser-ejs)
    - [Création d'une Vue avec EJS](#création-dune-vue-avec-ejs)
    - [Affichage d'une Vue avec Express](#affichage-dune-vue-avec-express)
    - [Passer des Données Dynamiques](#passer-des-données-dynamiques)

---

## Node.js - Introduction

### Qu'est-ce que Node.js ?

Node.js est un **environnement d'exécution JavaScript côté serveur**. Il permet d'exécuter du code JavaScript en dehors du navigateur, ce qui est particulièrement utile pour le développement d'applications côté serveur. Node.js utilise **le moteur JavaScript V8** développé par Google.

### Pourquoi Node.js ?

- **Performance** : Node.js est rapide et efficace grâce à son modèle d'E/S non bloquant.
- **Écosystème** : Un vaste écosystème de modules et de bibliothèques disponibles via npm (Node Package Manager).
- **Communauté** : Une grande communauté de développeurs et de nombreuses ressources disponibles.

### Avantages

- Boucle d'événement non bloquante
- Fonctionnalités multi-plateforme
- JSON (JavaScript Object Notation)

### Inconvénients

- Pas de programmation multi-thread
- Manque de rétrocompatibilité
- Complexité des appels asynchrones

---

## Les Bases de Node.js

Créer un Fichier Node.js:

- Créez un fichier nommé app.js.
- Ajoutez le code suivant pour afficher "Hello, World!" dans le terminal :

```js
console.log('Hello, World!');
```

- Exécutez le fichier avec la commande :

```bash
node app.js
```

---

## Modules en Node.js

### Modules Intégrés

Quelques exemples de modules natifs de node.js:

- **fs** lecture et écriture de fichiers
- **https**, **http** création de serveurs HTTP ou sécurisés HTTPS
- **path** chemins de fichiers
- **os** informations sur le système d’exploitation
- **url** parser et formater des URL
- **crypto** chiffrement des données
- **zlib** compression et décompression des données
- **fs** : Module pour lire et écrire des fichiers.

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {

    if (err) throw err;

    console.log(data);

});
```

- **path** : Module pour travailler avec les chemins de fichiers.

```js
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

console.log(filePath);
```

- **http** : Module pour créer un serveur HTTP.

```js
const http = require('http');

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello, World!\n');

});

server.listen(3000, '127.0.0.1', () => {

    console.log('Server running at http://127.0.0.1:3000/');

});
```

### Modules Personnalisés

Vous pouvez créer vos propres modules et les inclure dans vos fichiers.

- Créer un module : Créez un fichier nommé greet.js:

```js
function greet(name) {

    console.log(`Hello, ${name}!`);

}

module.exports = greet;
```

- Utiliser le module : Dans app.js, incluez et utilisez le module greet:

```js
const greet = require('./greet');

greet('World');
```

- Charger un module:

```js
require('...');
```

```js
import { ... } from '...';
```

---

## Utilisation de use strict

`"use strict";` génère une erreur en cas de:

- variable non déclarée
- utilisation de this dans une fonction qui n’a pas de contexte
- référence à une variable avant qu’elle ait été déclarée

**=>** Bonne pratique qui améliore la qualité du code

---

## Utilisation de ‘npm’

### Installer un Package

- Pour installer un package, utilisez la commande *npm install*.

```bash
npm install express
```

### Utiliser un Package

- Incluez et utilisez le package dans votre fichier.

```js
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {

    res.send('Hello, World!');

});

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}/`);

});
```

---

### node / nodemon

```bash
node app.js
```

=> lance l’app mais doit être relancée pour voir les modifs

```bash
nodemon app.js
```

=> se relance automatiquement après des modifications dans un fichier

---

## Ressources Supplémentaires

- Documentation officielle : [nodejs.org/docs](https://nodejs.org/docs/)
- npm : [npmjs.com](https://www.npmjs.com/)
- Tutoriels et Cours en Ligne : [freeCodeCamp](https://www.freecodecamp.org/), [MDN Web Docs](https://developer.mozilla.org/)

---

## Express.js - Introduction

*Express.js est un framework minimaliste et flexible pour Node.js qui permet de créer rapidement des applications web et des API. Il simplifie la gestion des routes, des requêtes HTTP et des middleware.*

---

## Installation d'Express.js

- Initialiser un projet Node.js:

```bash
mkdir mon-projet-express

cd mon-projet-express

npm init -y
```

Cela génère un fichier `package.json`.

- Installer Express.js:

```bash
npm install express
```

---

## Création d'un Serveur Simple

[Voir aussi...](https://antoinecoulon.github.io/antoinecoulon-docs/docs/documentation/Général/API)

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

- Lancer le serveur:

```bash
node server.js
```

Accéder à `http://localhost:3000` dans un navigateur.

---

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

---

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

---

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

---

## Gestion des Fichiers Statiques

On peut servir des fichiers statiques (HTML, CSS, images, etc.) avec :

```js
app.use(express.static('public'));
```

Placez un fichier `public/index.html`, et il sera accessible via `http://localhost:3000/index.html`.

---

## Communication avec le front

Attention à la protection CORS:

```js
const cors = require("cors");

// app.options('*', cors());

app.use(cors({
    origin: "http://localhost:4200",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
}));
```

---

## Exemple simple de Token JWT

Importer le module `jsonwebtoken`:

```js
const jwt = require("jsonwebtoken");
```

Définir un JWT côté serveur: (*Attention: à cacher dans le `env`*)

```js
const JWT_SECRET = "my_secret_token";
```

Associer un token jwt à un utilisateur:

```js
const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

res.status(200).json({ token });
```

Exemple de vérification avec un middleware:

```js
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];

    if (!token) return res.status(401).json({ message: "Access denied, no token provided."});

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch(error) {
        console.error('Token verification error:', error);
        res.status(401).json({ message: "Invalid token" });
    }
};

app.get("/users", authMiddleware, async (req, res) => {...})
```

---

## Connexion à une BDD

### Avec Mongoose

```js
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Connexion BDD
mongoose.connect("mongodb://localhost:27017/youtoine", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Schema + model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", userSchema);
```

---

## Introduction vers une API REST Basique

- Définir une liste d'objets

```js
const users = [

    { id: 1, name: 'Alice' },

    { id: 2, name: 'Bob' }

];
```

- Endpoints pour récupérer les utilisateurs

```js
app.get('/api/users', (req, res) => {

    res.json(users);

});

app.get('/api/users/:id', (req, res) => {

    const user = users.find(u => u.id == req.params.id);

    user ? res.json(user) : res.status(404).send('Utilisateur non trouvé');

});
```

---

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

**TODO:** Ajouter : gestion des erreurs, formulaires + validation
