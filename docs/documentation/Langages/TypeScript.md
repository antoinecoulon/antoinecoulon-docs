# TypeScript

---

## Resources

- [Roadmap](https://roadmap.sh/typescript)
- GitHub Repo
- [Scrimba course](https://scrimba.com/learn-typescript-c03c)

---

- [TypeScript](#typescript)
  - [Resources](#resources)
  - [TypeScript vs JavaScript](#typescript-vs-javascript)
  - [Partie 1 : TypeScript pour Débutants](#partie-1--typescript-pour-débutants)
    - [Introduction à TypeScript](#introduction-à-typescript)
    - [1. Installation de TypeScript](#1-installation-de-typescript)
    - [2. Première Application TypeScript](#2-première-application-typescript)
    - [3. Types Primitifs](#3-types-primitifs)
    - [4. Fonctions et Types](#4-fonctions-et-types)
  - [Partie 2 : TypeScript pour Confirmés](#partie-2--typescript-pour-confirmés)
    - [1. Interfaces](#1-interfaces)
    - [2. Classes et Types](#2-classes-et-types)
    - [3. Generics](#3-generics)
    - [4. Modules et Import/Export](#4-modules-et-importexport)
    - [5. Types Avancés](#5-types-avancés)
    - [6. Type Inference](#6-type-inference)
  - [*Conclusion*](#conclusion)

---

*learn with Scrimba...*

## TypeScript vs JavaScript

---
*Première approche en cours Eni...*

## Partie 1 : TypeScript pour Débutants

### Introduction à TypeScript

*TypeScript est un langage de programmation qui s'appuie sur JavaScript en ajoutant des types statiques, ce qui permet de mieux structurer le code et d'identifier les erreurs plus tôt. TypeScript est un sur-ensemble de JavaScript, ce qui signifie que tout code JavaScript est également du code TypeScript valide. Lors de la compilation, TypeScript se transforme en JavaScript standard.*

---

Avantages de TypeScript :

- Détection d'erreurs à la compilation.
- Complétion automatique et aide au développement grâce aux types.
- Support des dernières fonctionnalités JavaScript avec une meilleure compatibilité.

### 1. Installation de TypeScript

Pour commencer avec TypeScript, vous devez d'abord l'installer. Vous pouvez l'installer via npm (Node Package Manager) avec la commande suivante :
```bash
npm install -g typescript
```

Ensuite, vous pouvez vérifier si l'installation a réussi en tapant :
```bash
tsc --version
```

### 2. Première Application TypeScript

Créez un fichier appelé app.ts et ajoutez le code suivant :
```typescript
let message: string = "Hello, TypeScript!";

console.log(message);
```

Explication :

- Le type string est explicitement défini pour la variable message.
- TypeScript vous avertira si vous essayez d'assigner une valeur qui n'est pas une chaîne de caractères.

Pour compiler votre code TypeScript en JavaScript, utilisez la commande :
```bash
tsc app.ts
```

Cela générera un fichier app.js que vous pouvez exécuter avec Node.js :
```bash
node app.js
```

### 3. Types Primitifs

En TypeScript, vous pouvez définir différents types de données. Voici quelques exemples :

- string : Chaîne de caractères.
- number : Nombres (entiers et flottants).
- boolean : Valeur vraie ou fausse.
- any : Un type flexible pour tout type de valeur.
- void : Représente l'absence de type, souvent utilisé pour les fonctions qui ne retournent rien.

Exemple :
```typescript
let isActive: boolean = true;

let count: number = 10;

let name: string = "Alice";

let anything: any = "Could be anything";
```

### 4. Fonctions et Types

Les fonctions en TypeScript peuvent avoir des types définis pour leurs paramètres et leur retour. Exemple :
```typescript
function greet(name: string): string {

    return "Hello, " + name;

}

let greeting = greet("World");

console.log(greeting); // "Hello, World"
```

Ici, le paramètre name est de type string, et la fonction retourne une valeur de type string.

## Partie 2 : TypeScript pour Confirmés

### 1. Interfaces

Les interfaces en TypeScript permettent de définir des structures de types pour les objets. Elles sont très utiles pour garantir que des objets respectent certaines formes.

Exemple :
```typescript
interface Person {

    name: string;

    age: number;

}

const person: Person = {

    name: "John",

    age: 25

};
```

Les interfaces sont également utilisées pour définir des signatures de fonction et des classes.

### 2. Classes et Types

Les classes en TypeScript sont très similaires à celles de JavaScript, mais elles incluent des types pour les propriétés et les méthodes.
```typescript
class Car {

    model: string;

    year: number;

    constructor(model: string, year: number) {

        this.model = model;

        this.year = year;

    }   

    displayDetails(): void {

        console.log(`${this.model}, ${this.year}`);

    }

}

let car = new Car("Tesla", 2020);

car.displayDetails();
```

Explication :

- Les types string et number sont utilisés pour les propriétés.
- Le type void est utilisé pour la méthode displayDetails, car elle ne retourne rien.

### 3. Generics

Les génériques permettent de définir des types paramétrés qui ne sont pas connus à l'avance. C’est une fonctionnalité très puissante de TypeScript.

Exemple d’utilisation d’un tableau générique :
```typescript
function identity<T>(value: T): T {

    return value;

}

let numberIdentity = identity(5); // number

let stringIdentity = identity("hello"); // string
```

Ici, T est un paramètre de type qui peut être n'importe quel type. TypeScript déduit automatiquement le type basé sur l'argument passé à la fonction.

### 4. Modules et Import/Export

TypeScript supporte les modules, ce qui permet de diviser le code en plusieurs fichiers. Vous pouvez utiliser les mots-clés import et export pour organiser votre code.
```typescript title="math.ts"
export function add(x: number, y: number): number {

    return x + y;

}
```
```typescript title="app.ts"
import { add } from './math';

console.log(add(2, 3)); // 5
```

Les modules permettent de mieux organiser et réutiliser votre code.

### 5. Types Avancés

TypeScript permet l'utilisation de types avancés comme :

- Union types : Permet d'avoir plusieurs types possibles.
- Intersection types : Combine plusieurs types ensemble.
- Literal types : Utilisation de valeurs exactes comme types.

Exemples :
```typescript
// Union Type

let status: "success" | "failure" = "success";

// Intersection Type

interface Employee {

    name: string;

    position: string;

}

interface Manager {

    department: string;

}

type ManagerEmployee = Employee & Manager;

let managerEmployee: ManagerEmployee = {

    name: "Alice",

    position: "Manager",

    department: "HR"

};

// Literal Type

let level: 1 | 2 | 3 = 2; // "1", "2", or "3" only
```

### 6. Type Inference

TypeScript peut souvent déduire le type d'une variable sans que vous ayez à le spécifier explicitement. Cela rend le code plus propre tout en maintenant la sécurité des types.
```typescript
let age = 30; // TypeScript déduit automatiquement le type number
```

Si vous tentez d’assigner un type incompatible à une variable, TypeScript génère une erreur à la compilation.

## *Conclusion*

*TypeScript est un outil puissant qui permet de travailler avec JavaScript de manière plus structurée et fiable. Au fur et à mesure que vous avancez, vous découvrirez encore plus de fonctionnalités comme les types conditionnels, les types mappés, et les décorateurs. En suivant ce cours, vous avez posé les bases d'une utilisation avancée de TypeScript pour vos projets.*