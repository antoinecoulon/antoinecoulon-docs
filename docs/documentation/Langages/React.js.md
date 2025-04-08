# React.js

---

- [React.js](#reactjs)
  - [Ressources](#ressources)
  - [Requirements: essential JavaScript for React](#requirements-essential-javascript-for-react)
  - [Introduction](#introduction)
    - [Créer une app React from scratch](#créer-une-app-react-from-scratch)
    - [Installation avec Vite - Setup](#installation-avec-vite---setup)
      - [Aside: import images with Vite](#aside-import-images-with-vite)
  - [Basic structure](#basic-structure)
  - [Components basics](#components-basics)
    - [Functional components](#functional-components)
    - [JSX](#jsx)
    - [Props](#props)
      - [Mapping components](#mapping-components)
      - [props key](#props-key)

---

## Ressources

> - [UVCanvas](https://uvcanvas.com/) - React animated backgrounds library
> - [HeroUI](https://www.heroui.com/) - React UI library
> - [Fancy Components](https://www.fancycomponents.dev/)
> - [AnimeJS](https://animejs.com/)
>
> [Documentation officielle](https://fr.react.dev/)

---

## Requirements: essential JavaScript for React

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

#### Aside: import images with Vite

To avoid broken links after build, Vite advice is to import our images from their relative path and then use their import name in our code:

```js
import mrWhiskerson from "./images/mr-whiskerson.png"
import fluffykins from "./images/fluffykins.png"
import felix from "./images/felix.png"
import pumpkin from "./images/pumpkin.png"
// ... etc

function App() {
  <Contact 
    img={mrWhiskerson}
  />
}
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

## Components basics

Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.

### Functional components

Functional components are simply JavaScript functions. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree. These components can also have state which is managed using React hooks. > [See](https://www.robinwieruch.de/react-function-component/)

```jsx
import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
```

### JSX

[JSX](https://www.w3schools.com/react/react_jsx.asp) stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.

JSX and React are *two separate things*. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

The **rules of JSX** are:

- **One top level element**: Return a single root element (use `<Fragment> ... </Fragment>`, often written `<> ... </>`)
- **Close all the tags** (`<img ... />`, `<li>...</li>`, etc)
- camelCase most of the things ('className', 'strokeWidth', etc)

With JSX you can write expressions inside curly braces `{ }`:

```jsx
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```

You cannot write `if` statements directly inside JSX code, you have to do it outside the code, or use ternary expressions instead:

```jsx
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```

### Props

Essentially **React component props** are used to pass data from component to component. You can pass data from one component to another by defining custom HTML attributes to which you assign your data with JSX's syntax:

![Props](/img/react_props.PNG)

Props *example 1*:

```jsx title="App.jsx"
export default function App() {
    return (
      <main>
        <Joke
            punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
            upvotes={10}
            isPun={true}
            comments={[
                {author: "", text: "", title: ""},
                {author: "", text: "", title: ""}
            ]}
        />
      </main>
    )
}
```

```jsx title="Joke.jsx"
export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>} // S'affiche si une propriété 'setup' existe
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
            <p>Upvotes: {props.upvotes}</p>
        </>
    )
}
```

Props *example 2*:

```jsx title="App.jsx"
import japan from './assets/japan.jpeg'

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Entry 
          img={{
            src: japan,
            alt: "Mount Fuji"
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
      </main>
    </>
  )
}

export default App
```

```jsx title="Entry.jsx"
export default function Entry(props) {
  console.log(props.img.src);
  
  return (
      <article className='journal-entry'>
          <div className='main-image-container'>
              <img 
                  className='main-image' 
                  src={props.img.src} 
                  alt={props.img.alt}
              />
          </div>
          <div className='info-container'>
              <img 
                  className='marker'
                  src="/src/assets/marker.png" 
                  alt="map marker icon" 
              />
              <span className="country">Japan</span>
              <a href={props.googleMapsLink}>View on Google Maps</a>
              <h2 className='entry-title'>{props.title}</h2>
              <p className="trip-dates">{props.dates}</p>
              <p className='entry-text'>
                  {props.text}
              </p>
          </div>           
      </article>
  )
}
```

#### Mapping components

We often use the [Array.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to iterate through an array containing the data we want to display, and create a new array defining all the components we need.

```jsx
import Joke from "./Joke"
import jokesData from "./jokesData" // Fichier qui contient les données (ici un .js avec un 'export default')

export default function App() {

  const jokeElements = jokesData.map((joke) => {
      return <Joke setup={joke.setup} punchline={joke.punchline} /> 
  })  // Ici, '.setup' et '.punchline' correspondent aux noms des datas, et non aux noms que l'on donne nous-même aux props

  return (
      <main>
          {jokeElements}
      </main>
  )
}
```

#### props key

Behind the scenes, React uses the key attribute to associate the rendered element with its place in the rendered list. Basically it's the identifier for the item element in the list element. When you iterate through an array for example, like we did, you have to pass a unique key (id) to each of its iteration. As simple as:

```jsx
key={entry.id}
```

```jsx
const entryElements = data.map((entry) => {
    return (
        <Entry
            key={entry.id}
            img={entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}
        />
    )
})
```
