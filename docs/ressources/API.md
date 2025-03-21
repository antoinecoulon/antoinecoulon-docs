---
sidebar_position: 6
description: Liste d'APIs et notions
---

# API

## Ressources
- [Tests API](https://swagger.io/docs/)
- [Liste d'APIs publiques](https://github.com/public-apis/public-apis)
- [DummyJSON](https://dummyjson.com/)

---

## Créer son API pour Level Up

**Étape 1 : Préparer l'environnement**
Installer Node.js et npm : Assurez-vous d'avoir Node.js et npm (Node Package Manager) installés sur votre machine. Vous pouvez les télécharger depuis nodejs.org.

Créer un nouveau répertoire pour votre projet :

```bash
mkdir mon-api-perso
cd mon-api-perso
```

Initialiser un projet Node.js :

```bash
npm init -y
```
Cela créera un fichier package.json avec les configurations par défaut.

**Étape 2 : Installer Express.js**
Installer Express.js :
```bash
npm install express
```

**Étape 3 : Créer le serveur Express**
Créer un fichier server.js :
```js
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Données fictives
const data = [
    { id: 1, name: 'Item 1', description: 'Description de l\'item 1' },
    { id: 2, name: 'Item 2', description: 'Description de l\'item 2' },
];

// Route pour obtenir toutes les données
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Route pour obtenir une donnée par ID
app.get('/api/data/:id', (req, res) => {
    const item = data.find(d => d.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item non trouvé');
    res.json(item);
});

// Route pour ajouter une nouvelle donnée
app.post('/api/data', (req, res) => {
    const newItem = {
        id: data.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    data.push(newItem);
    res.status(201).json(newItem);
});

// Route pour mettre à jour une donnée
app.put('/api/data/:id', (req, res) => {
    const item = data.find(d => d.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item non trouvé');

    item.name = req.body.name;
    item.description = req.body.description;
    res.json(item);
});

// Route pour supprimer une donnée
app.delete('/api/data/:id', (req, res) => {
    const itemIndex = data.findIndex(d => d.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item non trouvé');

    const deletedItem = data.splice(itemIndex, 1);
    res.json(deletedItem);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
```

**Étape 4 : Lancer le serveur**
Démarrer le serveur :
```bash
node server.js
```
Votre API devrait maintenant être en cours d'exécution sur http://localhost:3000. Vous pouvez tester les différentes routes avec un outil comme Postman ou directement dans votre navigateur pour les requêtes GET.

**Étape 5 : Tester l'API**
GET /api/data : Récupère toutes les données.
GET /api/data/:id : Récupère une donnée par son ID.
POST /api/data : Ajoute une nouvelle donnée (envoyez un JSON avec name et description dans le corps de la requête).
PUT /api/data/:id : Met à jour une donnée existante (envoyez un JSON avec name et description dans le corps de la requête).
DELETE /api/data/:id : Supprime une donnée par son ID.
Avec ces étapes, vous avez une API de base fonctionnelle. Vous pouvez l'étendre en ajoutant plus de fonctionnalités, en connectant une base de données, ou en ajoutant des validations et des authentifications selon vos besoins.