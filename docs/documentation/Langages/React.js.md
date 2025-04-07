# React.js

---

- [React.js](#reactjs)
  - [Ressources](#ressources)
  - [Essential JavaScript for React](#essential-javascript-for-react)
  - [Introduction](#introduction)
    - [Créer une app React from scratch](#créer-une-app-react-from-scratch)
    - [Installation avec Vite - Setup](#installation-avec-vite---setup)
  - [Basic structure](#basic-structure)
  - [Components](#components)
    - [Functional components](#functional-components)
    - [Components basics](#components-basics)
      - [JSX](#jsx)
      - [Props vs State](#props-vs-state)

---

## Ressources

> - [UVCanvas](https://uvcanvas.com/) - React animated backgrounds library
> - [HeroUI](https://www.heroui.com/) - React UI library
> - [Fancy Components](https://www.fancycomponents.dev/)
>
> [Documentation officielle](https://fr.react.dev/)

---

## Essential JavaScript for React

- [Functions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions) and [Arrow Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Objects](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Arrays and array methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Template literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)
- [Ternary Operators](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [ES Modules and Import / Export Syntax](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)

---

## Introduction

React utilise une sorte de placeholder pour injecter du code jsx.

### Créer une app React from scratch

```html title="index.html"
<html>
    <head>
        <link rel="stylesheet" href="/index.css">
    </head>
    <body>

        <!--    ICI !!!   -->
        <div id="root"></div>


        <script src="/index.jsx" type="module"></script>
    </body>
</html>
```

```ts title="index.jsx"
import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"))
root.render(<p>Hello from the world of React!</p>)
```

---

### Installation avec Vite - Setup

[Vite](https://vitejs.dev/)
[Doc](https://vite.dev/guide/)

Requirements:

Avoir Node installé, au moins v18 pour utiliser Vite.

```bash
node -v
```

Initialiser le projet avec Vite:

```bash
npm create vite@latest [mon-projet] [-- --template react]
```

Démarrer le serveur: (partie optionnelle)

```bash
npm run dev [-- --open] [--port 3000]
```

---

## Basic structure

Structure de base:

![Structure projet](/img/react_structure-projet.png)

index.html is the most important top-level file. Vite injects your code into this file so that your browser can run it.

The public directory contains static files that will be served directly to your browser without being processed by Vite's build tooling. Right now, it only contains a Vite logo.

The src directory is where we'll spend most of our time, as it's where the source code for our application lives. You'll notice that some JavaScript files in this directory end in the extension .jsx. This extension is necessary for any file that contains JSX – it tells Vite to turn the JSX syntax into JavaScript that your browser can understand. The src/assets directory contains the React logo you saw in the browser.

The package.json and package-lock.json files contain metadata about our project.

---

## Components

Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.

### Functional components

Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree. Functional components can also have state which is managed using React hooks. > [See](https://www.robinwieruch.de/react-function-component/)

```jsx
import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
```

### Components basics

#### JSX

[JSX](https://www.w3schools.com/react/react_jsx.asp) stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.

JSX and React are *two separate things*. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

The **rules of JSX** are:

- Return a single root element (use `<Fragment> ... </Fragment>`, often written `<> ... </>`)
- Close all the tags (`<img ... />`, `<li>...</li>`, etc)
- camelCase most of the things ('className', 'strokeWidth', etc)

#### Props vs State
