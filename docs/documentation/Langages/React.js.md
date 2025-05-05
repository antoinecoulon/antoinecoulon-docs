# React.js

---

- [React.js](#reactjs)
  - [Ressources](#ressources)
  - [Requirements: essential JavaScript for React](#requirements-essential-javascript-for-react)
  - [Roadmap](#roadmap)
  - [Introduction](#introduction)
    - [Créer une app React from scratch](#créer-une-app-react-from-scratch)
    - [Installation avec Vite - Setup](#installation-avec-vite---setup)
      - [Aside: import images with Vite](#aside-import-images-with-vite)
  - [Basic structure](#basic-structure)
  - [Components basics](#components-basics)
    - [Functional components](#functional-components)
  - [JSX](#jsx)
  - [Curly braces](#curly-braces)
  - [Fragments](#fragments)
  - [Props](#props)
    - [Mapping components](#mapping-components)
    - [props key](#props-key)
    - [Objects as props](#objects-as-props)
    - [More](#more)
  - [Props vs State](#props-vs-state)
  - [Events](#events)
    - [Example with useState](#example-with-usestate)
  - [State](#state)
    - [Pass a function as state](#pass-a-function-as-state)
    - [Aside: ternary operator](#aside-ternary-operator)
    - [State example](#state-example)
    - [Controlled components](#controlled-components)
  - [Forms](#forms)
    - [Basic JSX form example (the old way)](#basic-jsx-form-example-the-old-way)
    - [New React form handling](#new-react-form-handling)
    - [Some input particularities](#some-input-particularities)
      - [radio](#radio)
      - [checkbox](#checkbox)
      - [select and option](#select-and-option)
      - [Object.fromEntries()](#objectfromentries)
  - [Conditional rendering](#conditional-rendering)
    - [Operator \&\&](#operator-)
  - [Passing data around React](#passing-data-around-react)
    - [Inline styles](#inline-styles)
    - [Derived state vs Shared state](#derived-state-vs-shared-state)
    - [Lazy state initialization](#lazy-state-initialization)
  - [Side effects](#side-effects)
    - [Functional programming](#functional-programming)
    - [useEffect](#useeffect)
      - [Example fetching an api](#example-fetching-an-api)
  - [Aside: nanoid](#aside-nanoid)
  - [Accessing and manipulating DOM](#accessing-and-manipulating-dom)
    - [useRef](#useref)
  - [Aside: project planning](#aside-project-planning)
  - [children](#children)
  - [props spreading](#props-spreading)
  - [props destructuring](#props-destructuring)
  - [prop drilling](#prop-drilling)
  - [Compound components](#compound-components)
  - [Rendering](#rendering)
  - [Hooks](#hooks)
  - [Purity](#purity)
  - [Portals](#portals)
  - [Suspense](#suspense)
  - [Error Boundaries](#error-boundaries)

---

## Ressources

- [Ultimate React Resources](https://dev.to/themeselection/ultimate-reactjs-resources-for-web-developers-2021-424c)
- [Libraries](https://medium.com/@ryanblakes/best-react-component-libraries-in-2025-and-how-to-use-them-2fa97a76e893)
  - ShadCN/UI
  - Chakra UI
  - Smooth UI (animé)
  - MUI (Material)
  - Radix UI
  - Ant Design

- [UVCanvas](https://uvcanvas.com/) - React animated backgrounds library
- [HeroUI](https://www.heroui.com/) - React UI library
- [Fancy Components](https://www.fancycomponents.dev/)
- [AnimeJS](https://animejs.com/)
  
- [Documentation officielle](https://fr.react.dev/)
- [Cheatsheet](https://zerotomastery.io/cheatsheets/react-cheat-sheet/?utm_content=CS+-+React+-+Email+1B+%28non-members%29&utm_medium=email_action&utm_source=customer.io)

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

## Roadmap

"What topic should I explore next ?"

![Roadmap](/img/react_fullstack-roadmap.jpg)

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

## JSX

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

---

## Curly braces

![CurlyBraces](/img/react_curly-braces.PNG)

Unlike HTML, which is static and unchanging, the benefit of using React is that you can use dynamic JavaScript values in your JSX.

If you have data, you can display it in your JSX using curly braces.

Curly braces accept values like strings and numbers directly.

You can use them to make your attributes dynamic, and you can style React elements using a JavaScript object within the curly braces.

---

## Fragments

JavaScript functions can only return one thing. In React, you can only return one parent element from a component, so you can't do this without getting a big error.

We could fix this by wrapping these components in a `<div>`, but maybe you don't want to add another element to the page. Instead, you can use an empty component called a React fragment.

![Fragments](/img/react_fragments.PNG)

---

## Props

![Props](/img/react_props2.PNG)

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

### Mapping components

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

### props key

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

### Objects as props

You can pass an entire Object as props if its properties matches the data properties:

```jsx
const entryElements = data.map((entry) => {
    return (
      <Entry
          key={entry.id}
          entry={entry}
      />
    )
})
```

```jsx
<div className="main-image-container">
    <img 
        className="main-image"
        src={props.entry.img.src}
        alt={props.entry.img.alt}
    />
</div>
```

You can also use the spread object as prop:

```jsx
const entryElements = data.map((entry) => {
    return (
        <Entry
            key={entry.id}
            {...entry} // Will spread the entire object with all its properties
        />
    )
})
```

### More

You can also pass functions as props:

```jsx
export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })

  function toggleFavorite() {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
  }
  
  return (
    <main>
      <article className="card">
        
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}

export default function Star(props) {
    
  let starIcon = props.isFilled ? starFilled : starEmpty
  
  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  )
}
```

---

## Props vs State

Props refers to the properties *being passed into a component* in order for it to **work correctly**, similar to how a function receives parameters. A component receiving props is not allowed to modify those props (they are **immutable**).

State refers to values that are *managed by the component*, similar to variables declared inside a function. Any time you have changing values that should be **saved/displayed**, you'll likely be using **state**.

---

## Events

The way we can handle events in React is close to the way we did with HTML.

```jsx
function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}
```

If we had put `()` after the name of the function we called, this function would be running as far as the component was called too. It works fine just with the `onClick={handleClick}` attribute. There is more event response handler like Keyboard events etc.

Some [Mouse events functions](https://react.dev/reference/react-dom/components/common#mouseevent-handler) and [React responding events doc](https://react.dev/learn/responding-to-events)

### Example with useState

```jsx
function handleChange(event) {
  const {value, name} = event.currentTarget
  setMeme(prevMeme => ({
    ...prevMeme,
    [name]: value
  }))
}

<label>Top Text
  <input
    type="text"
    placeholder="One does not simply"
    name="topText"
    onChange={handleChange}
    value={meme.topText}
  />
</label>
```

---

## State

To manage data in our React apps, we need to use state — not that kind of state, though!

State is like a snapshot from a camera; it's a picture of our app at any given time.

To manage state, we also can't use JavaScript variables, as they don't cause our app to re-render.

Instead, we use special functions like **useState** and **useReducer**. useState takes an argument that serves as the starting value of the state variable (which is likes in this example) and returns an array containing the state variable and a function to update that state.

Using our button example, we could also update the number of times the button's been clicked with the update function `setClicks` and display it in the button with the state variable likes.

![State1](/img/react_state.PNG)

![State2](/img/react_state2.PNG)

**"View as a function of state"**:

1. *Render*: React runs your function and displays whatever gets returned. The function will only be run again if: it receives new props from above, or its internal state values change.
2. *setState*: Changing a local, non-state variable doesn't cause React to re-render the component. Changing state with a built-in `setState` function does.
3. *view = function(state)*: Thus, when state changes and React re-renders your component, something new gets returned and replace what used to be on the page.

In order to manipulate React state, first we have to import `useState` from the React library:

```jsx
import { useState } from "react" // import React from "react" for this example

export default function App() {
  const [count, setCount] = React.useState(0)

  function add() {
    setCount(count + 1)
  }

  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state. See below:
   */

  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">

        <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>

        <h2 className="count">{count}</h2>

        <button className="plus" onClick={add} aria-label="Increase count">+</button>
        
      </div>
    </main>
  )
}
```

### Pass a function as state

When we pass a function as state, like in `const [dice, setDice] = useState(generateAllNewDice())`, the function will be called at every re-render of the component, even if it doesn't use the body of that function. We can call a function like this instead, to save a little of performance:

```jsx
const [dice, setDice] = useState(() => generateAllNewDice())
```

### Aside: ternary operator

At this point, the [JS ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) will be handy, let's have a quick refresh:

```js
let variable = condition ? ifTrue : ifFalse
```

With jsx:

```jsx
return (
  <main>
    <h1 className="title">Do I feel like going out tonight?</h1>
    <button className="value">{isGoingOut ? "Yes" : "No"}</button>
  </main>
)
```

### State example

```jsx
import React from "react"

export default function App() {
    
  const [isGoingOut, setIsGoingOut] = React.useState(false)
  
  function changeMind() {
    setIsGoingOut(prev => !prev)
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button onClick={changeMind} className="value">{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}
```

Working with an array:

```jsx
const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
  
const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
"🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

function addFavoriteThing() {
  // We'll work on this next, nothing to do here yet.
  setMyFavoriteThings(prevFavThings => [...prevFavThings, <new item here>])
}
```

Working with an object:

```jsx
export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })
  
  let starIcon = contact.isFavorite ? starFilled : starEmpty

  function toggleFavorite() {
    setContact(prevContact => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card"> 
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
          >
            <img
                src={starIcon}
                alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}
```

### Controlled components

![ControlledComponents](/img/react_controlled-component.PNG)

![ControlledComponents](/img/react_controlled-component2.PNG)

Controlled components use State values to have more predictable behavior.

Here's an example of a controlled component where the value typed into the input is being put into State and controlled by the state variable value.

Here's how it works:

The user types, and `setValue` puts what the user typed into State.

The state value is then updated, and finally, the input uses that updated State as its value.

Controlled components are a great pattern to use because if we want to change the component's behavior, we just need to change the state that controls it.

---

## Forms

Documentation [here](https://react.dev/reference/react-dom/components/form#noun-labs-1201738-(2))! and [here for FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)!

### Basic JSX form example (the old way)

```jsx
function App() {
  
  function handleSubmit(event) {
    event.preventDefault()  // Block the submit event normal behavior (refreshing the page)
    const formEl = event.currentTarget  // Get the current target of the event (form)
    const formData = new FormData(formEl) // New instance of built-in object FormData...
    const email = formData.get("email") // ...now we can get the data with get("input-name")
    // Gather the info from the form
    // Submit it to a backend
    formEl.reset()  // Reset the form
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}
```

### New React form handling

Now, with React 19, we can do all of this in a much simpler way:

```jsx
function App() {
  
  function signUp(formData) { // We directly get the formData object
    const email = formData.get("email")
    const password = formData.get("password")
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>  {/* We just pass a function to the "action" attribute */}
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}
```

### Some input particularities

#### radio

With no `value` attribute, the selected radio input return `on`.

```jsx
<fieldset>
  <legend>Employment Status:</legend>
  <label>
    <input type="radio" name="employmentStatus" value="unemployed" />
    Unemployed
  </label>
  <label>
    <input type="radio" name="employmentStatus" value="part-time" />
    Part-time
  </label>
  <label>
    <input type="radio" name="employmentStatus" value="full-time" />
    Full-time
  </label>
</fieldset>
```

#### checkbox

```jsx
function signUp(formData) {
  const dietaryRestrictions = formData.getAll("dietaryRestrictions")
  console.log(dietaryRestrictions)
}

return (
  <fieldset>
    <legend>Dietary restrictions:</legend>
    <label>
      <input type="checkbox" name="dietaryRestrictions" value="kosher" />
      Kosher
    </label>
    <label>
      <input type="checkbox" name="dietaryRestrictions" value="vegan" />
      Vegan
    </label>
    <label>
      <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
      Gluten-free
    </label>
  </fieldset>
)
```

#### select and option

```jsx
<label htmlFor="favColor">What is your favorite color?</label>
<select id="favColor" name="favColor" defaultValue="" required>
  <option value="" disabled>-- Choose a color --</option>
  <option value="red">Red</option>
  <option value="orange">Orange</option>
  <option value="yellow">Yellow</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="indigo">Indigo</option>
  <option value="violet">Violet</option>
</select>
```

#### Object.fromEntries()

```jsx
function signUp(formData) {
  const data = Object.fromEntries(formData)
  // fromEntries method get only one value from the checkboxes even if there
  // are several selected. So we have to get checkboxes separain an other way
  const dietaryRestrictions = formData.getAll("dietaryRestrictions")
  const allData = {
    ...data,
    dietaryRestrictions
  } 
}
```

---

## Conditional rendering

We us conditional rendering when we want to only sometimes display something on the page based on some kind of condition.

### Operator &&

```jsx
{props.setup && <h3>{props.setup}</h3>} // h3 is rendered only if props.setup exists (is truthy)
{isShown && <p>{props.punchline}</p>} // p is rendered only if isShown is true
```

Using this operator can lead to some bugs (like 0 randomly floating in our page because of some falsy value). It's better to use ternary operator with `null` instead.

```jsx
{props.setup ? <h3>{props.setup}</h3> : null} // h3 is rendered only if props.setup exists (is truthy)
{isShown ? <p>{props.punchline}</p> : null} // p is rendered only if isShown is true
```

If the logic is becoming more complex, we can use a traditional if...else block inside a function instead:

```jsx
const [messages, setMessages] = React.useState(["a", "b"])

function determineText() {
  if (messages.length === 0) {
    return "You're all caught up!"
  } else if (messages.length === 1) {
    return "You have 1 unread message"
  } else {
    return `You have ${messages.length} unread messages`
  }
}

return (
  <div>
    <h1>{determineText()}</h1>
  </div>
)
```

---

## Passing data around React

In React, you can only pass props (and so, data) downwards, from the parent element to its child element. It's not possible to do this upwards, or to the siblings. To pass data that way, we have to deal with the data in the parent element in order to 'drill' props to the bottom.

![1](/img/react_passing-data-1.PNG)

![2](/img/react_passing-data-2.PNG)

![3](/img/react_passing-data-3.PNG)

![4](/img/react_passing-data-4.PNG)

There are tools, like third party libraries (Redux, Zustand) or using "context", to help us dealing with that...

### Inline styles

```jsx
import React from "react"
import padsData from "./pads"

export default function App({ darkMode }) {
  const [pads, setPads] = React.useState(padsData)

  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc"
  }

  const buttonElements = pads.map(pad => (
    <button style={styles} key={pad.id}></button>
  ))

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}
```

Passing props:

```jsx
export default function App() {
  const [pads, setPads] = React.useState(padsData)

  const buttonElements = pads.map(pad => (
    <Pad key={pad.id} color={pad.color} />
  ))
  
  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}

export default function Pad(props) {
  return (
    <button style={{backgroundColor: props.color}}></button>
  )
}
```

### Derived state vs Shared state

If we are a parent component, passing props/state to its children components, but we allow those children to alter their state by theirselves, it will ends with no sync between parents and children components. It's called **derived state** -> [See](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

```jsx
const [dice, setDice] = useState(() => generateAllNewDice()) // State
const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value) // Derived state of Dice
```

With a **shared state**, we can handle every individual state of the children component from the parent (here we can toggle an individual child from the parent directly):

```jsx
import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
  const [pads, setPads] = React.useState(padsData)
  
  function toggle() {
    console.log("Clicked!")
  }
  
  const buttonElements = pads.map(pad => (
    <Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on}/>
  ))
  
  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}

import React from "react"

export default function Pad(props) {
  const [on, setOn] = React.useState(props.on)
  
  return (
    <button 
      style={{backgroundColor: props.color}}
      className={on ? "on" : undefined}
      onClick={props.toggle}
    ></button>
  )
}
```

Passing function parameters:

```jsx
function hold(id) {
  setDice(prevDice => prevDice.map(
    die => die.id === id ? {...die, isHeld: !die} : die
  ))
}
```

### Lazy state initialization

If we just call our function in state, React will re-run that function at every re-render, even if we don't get a new value returned, it causes some performance issues. We can instead use lazy state initialization:

```jsx
const [dice, setDice] = useState(() => generateAllNewDice())
```

---

## Side effects

Side effect is any code that affects or interacts with an outside system (local storage, API, websockets, DOM manipulation).

Warning: [you might not need an side effect](https://react.dev/learn/you-might-not-need-an-effect) !

### Functional programming

To learn more, see concept of [functional programing](https://www.freecodecamp.org/news/functional-programming-in-javascript/).

React components are meant to be "pure functions":

- given the same props or state, the component will always return the same content, or UI.
- rendering and re-rendering a component will never have any kind of side effect on an outside system.

### useEffect

`[useEffect](https://react.dev/reference/react/useEffect)` gives us a way to sort of create [an escape hatch](https://react.dev/learn/escape-hatches#synchronizing-with-effects).

React run its useEffect function as soon as the component renders for the first time and on every re-render of the component (assuming no dependencies array). It will **NOT** run the effect when the values of the dependencies in the array stay the same between renders.

The useEffect function takes two parameters: `setup` is a callback function where you put your logic (which causing side effects), optional `dependencies` stop the callback function to re-render if its value hasn't changed since the last re-render. See below:

```jsx
import React from "react"

export default function App() {
  const [count, setCount] = React.useState(0)
  
  console.log("Rendered!")
  
  React.useEffect(() => {
    console.log("Effect function ran")
  }, [count])
  
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}
```

In this case, we can also put an empty array as dependencies, and it will trigger the useEffect only one time because the empty array value doesn't change!

```jsx
import React from "react"

export default function App() {
  const [count, setCount] = React.useState(0)
  
  console.log("Rendered!")
  
  React.useEffect(() => {
    console.log("Effect function ran")
  }, [])
  
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}
```

#### Example fetching an api

```jsx
import { useState, useEffect } from "react"

export default function Example() {
    
    const [items, setItems] = useState([]) // we say we're receiving an array of items
    
    useEffect(() => {
        fetch("https://api.example.com/get_items")
            .then(response => response.json())
            .then(data => setItems(data)) // on met à jour le state
    }, []) // empty array of dependencies avoids looping

    // return ...
}
```

---

## Aside: nanoid

The "nanoid" package can generate unique ID which can be very useful for mapping keys:

```jsx
const [dice, setDice] = useState(generateAllNewDice())

function generateAllNewDice() {
  return new Array(10)
    .fill(0)
    .map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }))
}

const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} />)

return (
  <div className="dice-container">
    {diceElements}
  </div>
)
```

---

## Accessing and manipulating DOM

### useRef

In React, the preferred way to access a DOM node is by using a ref.

At its core, refs allows us to save values between the render cycles without actually triggering a rerender itself.

We can create a ref by pulling in the useRef hook and then simply calling useRef(). When we want to access a node, we usually initialize the ref variable with `null`. We then give a `ref` attribute to the element in the DOM we want to access to.

```jsx
const buttonRef = useRef(null)

return (
  <button ref={buttonRef} className="button">
      Button we want to access to
  </button>
)
```

We can console.log this ref to see what it contains:

```jsx
console.log(buttonRef) // > {current: null}

// After accessing the ref
console.log(buttonRef) // > {current: <button class='button'>}
```

---

## Aside: project planning

When we first begin a new project, it could be useful to ask ourselves some questions and to think about the whole project structure ahead of coding.

- What are the main containers of elements I need in this app?
- What values will need to be saved in state vs. what values can be derived from state? (or just What values do we need to save or know?)
- How will the user interact with the app ? What events do I need to handle?

---

## children

So, wait — can you pass anything as a prop?

Yes, you can!

You can even pass other components as props using the children prop.

If you make opening and closing tags for a component, you can pass other components in between them.

These passed components are called children, and you can access them on the children prop of the parent component.

It's great for something called composition, which is about organizing our React components in the most optimal way.

The children prop is really useful for creating layout components when you want your children to have the same common layout.

## props spreading

## props destructuring

## prop drilling

## Compound components

---

## Rendering

But how does React take all my amazing code and make it display something in the browser?

That process is called rendering.

React does this for us, but it's important to know how it works because sometimes we can do a bad thing and cause it to infinitely re-render, which crashes our app.

The way React knows how and when to render our application is by using something called the virtual DOM, also known as the VDOM.

Okay, but what does DOM mean?

DOM stands for Document Object Model, which is what every browser uses to model all the HTML elements on a web page.

When you draw it out, it kind of looks like a tree.

![Rendering](/img/react_rendering.PNG)

Here's the complete rendering process in React:

- If the state of our React app changes, then React updates the virtual DOM, which is quicker to update than the real DOM.
- Then, React uses a process called diffing to compare the updated virtual DOM to a previous version to see what's changed.
- Once it sees what's different, React uses a process called reconciliation to update the real DOM with the changes that it found.

---

## Hooks

There are five main types of hooks:

- State hooks like useState and useReducer help you manage state within React components.
- Context hooks, such as useContext, let you pass data through React context.
- Ref hooks, such as useRef, let you reference things like HTML elements.
- Effect hooks, like useEffect, let you connect with external systems like browser APIs.
- Performance hooks, like useMemo and useCallback, can improve performance by preventing unnecessary work.

You'll use all of these hooks at some point, but the majority of the time, you'll likely use just three hooks in your React components: useState, useEffect, and useRef.

---

## Purity

![Purity](/img/react_purity.PNG)

Pure React components mean that the same input should always return the same output.

To keep a React component pure, it should only return its JSX and not change any objects or variables that existed before rendering.

The Cup component in this example is impure because it changes the variable count during render, which exists outside the component.

This leads to the JSX having the wrong output when it is used more than once.

---

## Portals

Portals, on the other hand, are kind of like context but for components.

Portals let you move React components into any HTML element you select.

Portals are great for components that can't be displayed properly because of their parent component's styles — for example, displaying modals, dropdown menus, and tooltips.

To create a portal, just use the createPortal function.

Pass your component to it and choose the HTML element where you'd like your React component to appear.

---

## Suspense

Suspense is a special component that helps you handle loading a component or its data.

Suspense is helpful for components that take some time to fetch data.

It provides a better user experience by showing a fallback component, like a loading spinner, until the data is available instead of showing nothing.

Suspense is also useful if you're lazily loading a component, which lets us load a component only when it's needed.

---

## Error Boundaries

Since React apps are all JavaScript, errors that happen during rendering can totally break your app.

Error boundaries are components that let you catch app-breaking errors and show a fallback component to tell the user what happened.

For example, our app will crash if we run this code because it throws an error when there's no user.

To prevent our app from crashing, we'll first add an error boundary to display a fallback component with a more helpful error message for the user.
