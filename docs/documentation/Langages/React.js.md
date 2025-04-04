# React.js

---

- [React.js](#reactjs)
  - [Ressources](#ressources)
  - [Essential JavaScript for React](#essential-javascript-for-react)
  - [Scrimba course](#scrimba-course)
    - [Introduction](#introduction)
  - [Part 1 - Installation avec Vite - Setup](#part-1---installation-avec-vite---setup)
    - [Basics](#basics)
    - [Component props](#component-props)
  - [Part 2 - Learn building a todo app](#part-2---learn-building-a-todo-app)

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

## Scrimba course

### Introduction

React utilise une sorte de placeholder pour injecter du code jsx.

Créer une app React from scratch:

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

## Part 1 - Installation avec Vite - Setup

Requirements:

Avoir Node installé, au moins v18 pour utiliser Vite.

```bash
node -v
```

Initialiser le projet avec Vite:

```bash
npm create vite@latest mon-projet -- --template react
```

Démarrer le serveur: (partie optionnelle)

```bash
npm run dev (-- --open --port 3000)
```

### Basics

Structure de base:

![Structure projet](/img/react_structure-projet.png)

index.html is the most important top-level file. Vite injects your code into this file so that your browser can run it.

The public directory contains static files that will be served directly to your browser without being processed by Vite's build tooling. Right now, it only contains a Vite logo.

The src directory is where we'll spend most of our time, as it's where the source code for our application lives. You'll notice that some JavaScript files in this directory end in the extension .jsx. This extension is necessary for any file that contains JSX – it tells Vite to turn the JSX syntax into JavaScript that your browser can understand. The src/assets directory contains the React logo you saw in the browser.

The package.json and package-lock.json files contain metadata about our project.

Unlike HTML, JSX allows us to write variables and other JavaScript expressions right alongside our other content. Let's declare a variable called subject just above the App() function:

```jsx
const subject = "React";

function App() {

    // code omitted for brevity

}
```

Next, replace the word "World" in the "< h1 >" element with \{ subject \}:

```jsx
<h1>Hello, {subject}!</h1>
```

The curly braces around subject are another feature of JSX's syntax. The curly braces tell React that we want to read the value of the subject variable, rather than render the literal string "subject". You can put any valid JavaScript expression inside curly braces in JSX; React will evaluate it and render the *result* of the expression as the final content. Following is a series of examples, with comments above explaining what each expression will render:

```jsx
{/* Hello, React :)! */}

<h1>Hello, {subject + ' :)'}!</h1>

{/* Hello, REACT */}

<h1>Hello, {subject.toUpperCase()}</h1>

{/* Hello, 4! */}

<h1>Hello, {2 + 2}!</h1>
```

### [Component props](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started#component_props)

Props are a means of passing data into a React component. Their syntax is identical to that of attributes, in fact: prop="value". The difference is that whereas attributes are passed into plain elements, props are passed into React components.

In React, the flow of data is unidirectional: props can only be passed from parent components down to child components.

Let's open main.jsx and give our < App /> component its first prop.

Add a prop of subject to the < App /> component call, with a value of Clarice. When you are done, it should look something like this:

```jsx
<App subject="Clarice" />
```

Back in App.jsx, let's revisit the App() function. Change the signature of App() so that it accepts props as a parameter and log props to the console so you can inspect it. Also delete the subject const; we don't need it anymore. Your App.jsx file should look like this:

```jsx
function App(props) {

    console.log(props);

    return (

    // code omitted for brevity

    );
}
```

Save your file and check your browser. You'll see a blank background with no content. This is because we're trying to read a subject variable that's no longer defined. Fix this by commenting out the < h1 >Hello \{subject\}!< /h1 > line.

Note: If your code editor understands how to parse JSX (most modern editors do!), you can use its built-in commenting shortcut — Ctrl + / (on Windows) or Cmd + / (on macOS) — to create comments more quickly.

Save the file with that line commented out. This time, you should see your "Click me!" button rendered by itself. If you open your browser's developer console, you'll see a message that looks like this:

```jsx
Object { subject: "Clarice" }
```

The object property subject corresponds to the subject prop we added to our < App /> component call, and the string Clarice corresponds to its value. Component props in React are always collected into objects in this fashion.

Let's use this subject prop to fix the error in our app. Uncomment the < h1 >Hello, \{subject\}!< /h1 > line and change it to < h1 >Hello, "\{ props.subject \}"!< /h1 >, then delete the console.log() statement. Your code should look like this:

```jsx
function App(props) {

    return (

        <>

        <header>

        <h1>Hello, {props.subject}!</h1>

        <button type="button" className="primary">

            Click me!

        </button>

        </header>

        </>
    );
}
```

When you save, the app should now greet you with "Hello, Clarice!". If you return to main.jsx, edit the value of subject, and save, your text will change.

For additional practice, you could try adding an additional greeting prop to the < App/> component call inside main.jsx and using it alongside the subject prop inside App.jsx.

**Summary Part 1:**

In React:

- Components can import modules they need and must export themselves at the bottom of their files.
- Component functions are named with PascalCase.
- You can render JavaScript expressions in JSX by putting them between curly braces, like \{so\}.
- Some JSX attributes are different than HTML attributes so that they don't conflict with JavaScript reserved words. For example, class in HTML translates to className in JSX.
- Props are written just like attributes inside component calls and are passed into components.

## Part 2 - Learn building a todo app

On React docs at **developer.mozilla.org/**

Follow along the MDN Web Docs tutorial and build a Todo app
