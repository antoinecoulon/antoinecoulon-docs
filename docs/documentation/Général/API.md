---
description: Notions et cours API
---

# API

- [API](#api)
  - [Créer son API pour Level Up](#créer-son-api-pour-level-up)
    - [Étape 1 : Préparer l'environnement](#étape-1--préparer-lenvironnement)
    - [Étape 2 : Installer Express.js](#étape-2--installer-expressjs)
    - [Étape 3 : Créer le serveur Express](#étape-3--créer-le-serveur-express)
    - [Étape 4 : Lancer le serveur](#étape-4--lancer-le-serveur)
    - [Étape 5 : Tester l'API](#étape-5--tester-lapi)
    - [Gestion des Données](#gestion-des-données)

---

## Créer son API pour Level Up

### Étape 1 : Préparer l'environnement

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

### Étape 2 : Installer Express.js

Installer Express.js :

```bash
npm install express
```

### Étape 3 : Créer le serveur Express

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

### Étape 4 : Lancer le serveur

Démarrer le serveur :

```bash
node server.js
```

Votre API devrait maintenant être en cours d'exécution sur `http://localhost:3000`. Vous pouvez tester les différentes routes avec un outil comme Postman ou directement dans votre navigateur pour les requêtes GET.

### Étape 5 : Tester l'API

GET /api/data : Récupère toutes les données.

GET /api/data/:id : Récupère une donnée par son ID.

POST /api/data : Ajoute une nouvelle donnée (envoyez un JSON avec name et description dans le corps de la requête).

PUT /api/data/:id : Met à jour une donnée existante (envoyez un JSON avec name et description dans le corps de la requête).

DELETE /api/data/:id : Supprime une donnée par son ID.

Avec ces étapes, vous avez une API de base fonctionnelle. Vous pouvez l'étendre en ajoutant plus de fonctionnalités, en connectant une base de données, ou en ajoutant des validations et des authentifications selon vos besoins.

### Gestion des Données

On récupèrera nos données d'une meilleure façon à terme.

Pour l'instant, au lieu d'avoir un tableau de données en dur dans le code de gestion des routes (server.js), on va les récupérer dans un fichier à part, comme pour simuler des données récupérées depuis l'extérieur de l'API.

On créé un dossier '/data' et pour l'exemple nous allons créer des données sur les animaux.

```js title="animals.js"
const animals = [
    { id: 1, name: "Ours polaire", description: "Adapté à la vie dans les régions arctiques, excellent nageur." },
    { id: 2, name: "Rhinocéros", description: "Mammifère massif avec une ou deux cornes sur le nez." },
    { id: 3, name: "Autruche", description: "Le plus grand oiseau, incapable de voler mais rapide à la course." },
    { id: 4, name: "Girafe", description: "Le plus haut mammifère, avec un long cou distinctif." },
    { id: 5, name: "Aigle", description: "Oiseau de proie avec une vue perçante et un vol majestueux." },
    { id: 6, name: "Hibou", description: "Oiseau nocturne avec une tête large et des yeux perçants." },
    { id: 7, name: "Chimpanzé", description: "Grand singe intelligent, proche cousin de l'homme." },
    { id: 8, name: "Morse", description: "Mammifère marin avec de longues défenses et une peau épaisse." },
    { id: 9, name: "Panda géant", description: "Herbivore emblématique, adore le bambou." },
    { id: 10, name: "Koala", description: "Marsupial arboricole, se nourrit principalement d'eucalyptus." },
    { id: 11, name: "Cochon", description: "Mammifère domestique, élevé pour sa viande et son intelligence." },
    { id: 12, name: "Crocodile", description: "Reptile aquatique redoutable, avec une morsure puissante." },
    { id: 13, name: "Panthère", description: "Félin noir, variante mélanique du léopard ou du jaguar." },
    { id: 14, name: "Cerf", description: "Mammifère avec des bois impressionnants, souvent vu dans les forêts." },
    { id: 15, name: "Léopard", description: "Félin tacheté, excellent grimpeur et chasseur." },
    { id: 16, name: "Baleine", description: "Le plus grand mammifère marin, avec des dimensions impressionnantes." },
    { id: 17, name: "Renard", description: "Canidé rusé, connu pour son intelligence et son agilité." },
    { id: 18, name: "Tortue", description: "Reptile à carapace, connu pour sa longévité." },
    { id: 19, name: "Lémurien", description: "Primate de Madagascar, avec de grands yeux réfléchissants." },
    { id: 20, name: "Pingouin", description: "Oiseau aquatique adapté à la vie en Antarctique." },
    { id: 21, name: "Chameau", description: "Mammifère du désert, connu pour ses bosses de stockage de graisse." },
    { id: 22, name: "Dauphin", description: "Mammifère marin intelligent, connu pour ses acrobaties." },
    { id: 23, name: "Loup", description: "Canidé social, chasse souvent en meute." },
    { id: 24, name: "Flamant rose", description: "Oiseau échassier connu pour sa couleur rose vif." },
    { id: 25, name: "Hippopotame", description: "Mammifère semi-aquatique, troisième plus grand animal terrestre." },
    { id: 26, name: "Zèbre", description: "Équidé africain avec des rayures noires et blanches distinctives." },
    { id: 27, name: "Kangourou", description: "Marsupial australien, connu pour ses bonds puissants." },
    { id: 28, name: "Tigre", description: "Grand félin avec des rayures uniques, excellent chasseur." },
    { id: 29, name: "Éléphant", description: "Le plus grand animal terrestre, avec une mémoire légendaire." },
    { id: 30, name: "Lion", description: "Roi de la jungle, connu pour sa crinière majestueuse." },
]

module.exports = animals;
```

Grâce à la dernière ligne, `module.exports = animals;`, on va pouvoir récupérer ces données dans notre serveur:

```js title="server.js"
const data = require('./data/animals');
```

Attention au formatage de ce fichier !
