---
sidebar_position: 4
---

- [Introduction](#introduction)
  - [Les Bases de Node.js](#les-bases-de-nodejs)
  - [Modules en Node.js](#modules-en-nodejs)
  - [Utilisation de ‘npm’](#utilisation-de-npm)
  - [Ressources Supplémentaires](#ressources-supplémentaires)

---

# Introduction

---

*Qu'est-ce que Node.js ?*

Node.js est un **environnement d'exécution JavaScript côté serveur**. Il permet d'exécuter du code JavaScript en dehors du navigateur, ce qui est particulièrement utile pour le développement d'applications côté serveur. Node.js utilise **le moteur JavaScript V8** développé par Google.

*Pourquoi Node.js ?*

- **Performance** : Node.js est rapide et efficace grâce à son modèle d'E/S non bloquant.
- **Écosystème** : Un vaste écosystème de modules et de bibliothèques disponibles via npm (Node Package Manager).
- **Communauté** : Une grande communauté de développeurs et de nombreuses ressources disponibles.

*Avantages*

- Boucle d'événement non bloquante
- Fonctionnalités multi-plateforme
- JSON (JavaScript Object Notation)

*Inconvénients*

- Pas de programmation multi-thread
- Manque de rétrocompatibilité
- Complexité des appels asynchrones

## Les Bases de Node.js

*Créer un Fichier Node.js*

- Créez un fichier nommé app.js.
- Ajoutez le code suivant pour afficher "Hello, World!" dans le terminal :
```js
console.log('Hello, World!');
```

- Exécutez le fichier avec la commande :
```bash
node app.js
```

## Modules en Node.js

*Modules Intégrés*

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

*Modules Personnalisés*

Vous pouvez créer vos propres modules et les inclure dans vos fichiers.

- Créer un module : Créez un fichier nommé greet.js.
```js
function greet(name) {

    console.log(`Hello, ${name}!`);

}

module.exports = greet;
```

- Utiliser le module : Dans app.js, incluez et utilisez le module greet.
```js
const greet = require('./greet');

greet('World');
```

Charger un module:
```js
require('...');
```
```js
import { ... } from '...';
```

Utilisation de use strict

“***use strict***”; génère une erreur en cas de:

- variable non déclarée
- utilisation de this dans une fonction qui n’a pas de contexte
- référence à une variable avant qu’elle ait été déclarée

**=>** Bonne pratique qui améliore la qualité du code

## Utilisation de ‘npm’

*Installer un Package*

- Pour installer un package, utilisez la commande *npm install*.
```bash
npm install express
```

*Utiliser un Package*

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