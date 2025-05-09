---
slug: tuto-openrouterai
title: Obtenir une API Key OpenRouter.AI et implémentation
authors: [antoine]
tags: [learn]
---

Voici un guide étape par étape pour créer une clé API sur OpenRouter, puis l'utiliser dans un projet React avec Vite et TypeScript. Nous allons passer par plusieurs étapes : créer une clé API, configurer l'environnement, et utiliser l'API dans ton projet.

## Étape 1 : Créer une clé API sur OpenRouter

Inscription sur OpenRouter

Va sur OpenRouter.ai et crée un compte si tu n’en as pas encore un.

Une fois connecté, tu devrais accéder à ton tableau de bord (Dashboard).

Générer une clé API

Dans ton tableau de bord, cherche l'option API Keys.

Clique sur Create API Key.

Donne un nom à ta clé (par exemple "React-Vite-Project").

Une fois la clé générée, copie-la. C'est cette clé qui te permettra de faire des appels API.

## Étape 2 : Installer Axios pour effectuer des requêtes API

Nous allons utiliser Axios pour gérer les requêtes HTTP. Tu peux l'installer avec npm :

```bash
npm install axios
```

## Étape 4 : Créer un fichier .env pour stocker ta clé API

Il est recommandé de ne jamais exposer ta clé API directement dans ton code. Utilise un fichier .env pour la stocker en toute sécurité.

Crée un fichier .env à la racine de ton projet.

Ajoute ta clé API dans ce fichier en utilisant une variable d’environnement :

```ini
VITE_OPENROUTER_API_KEY=ta_clé_api_ici
```

Note : Les variables d’environnement qui commencent par VITE_ sont accessibles dans le code du front-end avec Vite.

## Étape 5 : Implémenter l’appel API dans React

Créer un fichier api.ts pour centraliser la logique d'appel API :

```typescript title="src/api.ts"
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export const getImageDescription = async (imageUrl: string) => {
    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/completions', // Utilisation de l'API OpenRouter
            {
                model: 'meta-llama/llama-4-maverick:free',
                messages: [
                    {
                        role: 'user',
                        content: [
                            { type: 'text', text: 'What is in this image?' },
                            { type: 'image_url', image_url: { url: imageUrl } }
                        ]
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
};
```

Créer un composant React pour afficher le résultat

Maintenant, créons un composant React qui prendra une URL d'image et affichera la réponse générée par l'API.

```tsx title="src/components/ImageDescription.tsx"
import React, { useState } from 'react';
import { getImageDescription } from '../api';

const ImageDescription: React.FC = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    const handleFetchDescription = async () => {
        if (imageUrl) {
            try {
                const description = await getImageDescription(imageUrl);
                setDescription(description);
            } catch (error) {
                setDescription('Error fetching description.');
            }
        }
    };

    return (
        <div className="container">
            <h2>Get Image Description</h2>
            <input
                type="text"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="input"
            />
            <button onClick={handleFetchDescription} className="button">
                Fetch Description
            </button>
            {description && <p>{description}</p>}
        </div>
    );
};

export default ImageDescription;
```

Utiliser ce composant dans ton application

Ajoute ce composant dans ton fichier App.tsx pour l'afficher :

```tsx title="src/App.tsx"
import React from 'react';
import './App.css';
import ImageDescription from './components/ImageDescription';

const App: React.FC = () => {
    return (
        <div className="App">
            <ImageDescription />
        </div>
    );
}

export default App;
```

## Étape 6 : Tester ton application

Assure-toi que ton serveur de développement fonctionne toujours :

```bash
npm run dev
```

Ouvre ton navigateur à l'adresse `http://localhost:3000`.

Entres l'URL d'une image dans le champ et clique sur "Fetch Description". L'API OpenRouter devrait retourner une description de l'image.

## Conclusion

Félicitations, tu as maintenant une application React avec Vite et TypeScript qui interagit avec l'API OpenRouter ! Tu peux utiliser cette structure pour intégrer davantage d'interactions avec l'API OpenRouter, que ce soit pour des tâches de génération de texte, d'images, ou d'autres cas d'utilisation.

Si tu rencontres des erreurs, n’hésite pas à vérifier les logs dans la console pour plus de détails ou me les partager, et je t'aiderai à les résoudre !
