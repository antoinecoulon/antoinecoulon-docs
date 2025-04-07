# JavaScript

---

## Resources

- [Roadmap JavaScript](https://roadmap.sh/javascript)
- [Repo GitHub learnJS](https://github.com/antoinecoulon/learnJS)
- [Scrimba course](https://scrimba.com/learn-javascript-c0v)

---

- [JavaScript](#javascript)
  - [Resources](#resources)
  - [All about variables](#all-about-variables)
    - [var](#var)
    - [let](#let)
    - [const](#const)
    - [Scope](#scope)
  - [Data types](#data-types)
    - [Primitive types](#primitive-types)
    - [Object](#object)
    - [typeof Operator](#typeof-operator)
  - [Data structures](#data-structures)
    - [Arrays](#arrays)
    - [Typed Arrays](#typed-arrays)
    - [Keyed Collections](#keyed-collections)
      - [Map](#map)
      - [Set](#set)
    - [Structured Data (JSON)](#structured-data-json)
  - [return](#return)
  - [Math object](#math-object)
    - [Math.random()](#mathrandom)
    - [Math.floor()](#mathfloor)
  - [Operators](#operators)
    - [Arithmetic operators](#arithmetic-operators)
    - [Equality](#equality)
    - [Strict Equality Operator (===)](#strict-equality-operator-)
    - [Comparison operators](#comparison-operators)
  - [Logical operators](#logical-operators)
  - [Loops \& iterations](#loops--iterations)
    - [for loops](#for-loops)
      - [for...of](#forof)
      - [for...in](#forin)
    - [while](#while)
      - [do...while](#dowhile)
    - [break / continue](#break--continue)
  - [Conditional statements](#conditional-statements)
    - [if... else if... else](#if-else-if-else)
    - [Switch](#switch)
  - [Objects](#objects)
  - [Functions](#functions)
    - [Functions parameters/arguments](#functions-parametersarguments)
    - [Arrow functions](#arrow-functions)
    - [Built-in functions](#built-in-functions)
    - [Recursion](#recursion)
    - [Timing events](#timing-events)
  - [localStorage](#localstorage)
  - [Template strings/literals](#template-stringsliterals)
  - [Operators (2)](#operators-2)
    - [Conditional operator (Ternary op.)](#conditional-operator-ternary-op)
    - [Unary operators](#unary-operators)
  - [Exceptions](#exceptions)
    - [throw](#throw)
    - [try, catch, finally](#try-catch-finally)
    - [Error objects](#error-objects)
      - [Types of Errors](#types-of-errors)
  - [Working with APIs](#working-with-apis)
    - [Fetch](#fetch)
    - [XMLHttpRequest](#xmlhttprequest)

---

## All about variables

### var

The `var` statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

### let

The `let` declaration declares a block-scoped local variable, optionally initializing it to a value.

### const

Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can’t be changed through reassignment (i.e. by using the assignment operator), and it can’t be re-declared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

```js
var variable = 1
let variable2 = "deux"
const NUMBER = 3
```

### Scope

Scope refers to the visibility of a variable or how it can be used after it is declared. The scope of a variable depends on the keyword that was used to declare it.

The three types of Scope are Global Scope, Function Scope, and Block Scope.

---

## Data types

There are seven primitive data types in JavaScript (Number, BigInt, String, Boolean, Null, Undefined and Symbol). Objects are non-primitives.

### Primitive types

- **String**: `string` is a primitive type that holds a sequence of characters. String is written within a pair of single quotation marks '', double quotation marks "", or backticks `` (template literals). All types of quotes can be used to contain a string but only if the starting quote is the same as the end quote.
- **Number**: the `number` data type represents floating-point numbers, such as 37 or -9.25. The Number constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the `Number()` function.
- **Bigint**: the BigInt built-in object allows you to work with integers of arbitrary size. Unlike the Number type, which can accurately represent integers only within the range of ±2^53 , BigInt can handle integers far beyond this limit. This makes it particularly useful for applications requiring high precision with very large numbers, such as cryptography or scientific computations.
- **Boolean**: a `boolean` is a simple data type that can hold one of two values: `true` or `false`. These values are used to represent logical states and are essential in controlling the flow of a program. Booleans are commonly used in conditional statements (`if`, `else`, `while`, etc.) to determine whether a block of code should execute.
- **undefined**: `undefined` is a Primitive data type. Whenever a variable is declared but not initialized or assigned a value, then it is stored as undefined. A function returns undefined if a value was not returned. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.
- **null**: the `null` value signifies the deliberate absence of any object value. It is considered as one of JavaScript’s primitive values and a falsy value. In essence, `null` is a way to reset a variable, signalling that it should not reference any object.
- **Symbol**: Symbols are a unique and immutable primitive data type in JavaScript, introduced in ECMAScript 6 (ES6). They are often used to create unique property keys for objects, ensuring no property key collisions occur. Each Symbol value is distinct, even when multiple are created with the same description. Symbols can be created using the `Symbol()` function, and their primary use case is to add hidden or special properties to objects that won’t interfere with other properties or methods. ([1](https://www.javascripttutorial.net/symbol/)), ([2](https://javascript.info/symbol)) et ([3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol))

```js
let string = "string" // 'string', `string`
let number = 13
let boolean = true // false
let variable // undefined
let variable = null
let symbol = Symbol("description")
```

---

### Object

JavaScript object is a data structure that allows us to have key-value pairs; so we can have distinct keys and each key is mapped to a value that can be of any JavaScript data type. Comparing it to a real-world object, a pen is an object with several properties such as color, design, the material it is made of, etc. In the same way, JavaScript objects can have properties that define their characteristics.

```js
let myself = new Person(
    "name": "Antoine",
    "age": 31
)
```

JavaScript is an object-oriented language built around a prototype model. In JavaScript, every object inherits properties from its prototype, if there are any. A prototype is simply an object from which another object inherits properties. To create complex programs using JavaScript, one has to be proficient in working with prototypes — they form the very core of OOP in the language.

The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use `Object.getPrototypeOf` and `Object.setPrototypeOf`.

Built-in objects, or “global objects”, are those built into the language specification itself. There are numerous built-in objects with the JavaScript language, all of which are accessible at the global scope. Some examples are:

> Number
> Math
> Date
> String
> Error
> Function
> Boolean

*Voir aussi*: [POO](https://antoinecoulon.github.io/antoinecoulon-docs/docs/documentation/G%C3%A9n%C3%A9ral/POO) , [Objects](https://javascript.info/object) , [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

### typeof Operator

You can use the `typeOf` operator to find the data type of a variable. It returns a string indicating the type of provided operand’s value.

---

## Data structures

A Data structure is a format to organize, manage and store data in a way that allows efficient access and modification.

### Arrays

Indexed Collections are collections that have numeric indices i.e. the collections of data that are ordered by an index value. An array is an ordered set of values that has a numeric index.

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are objects that store a collection of items and can be assigned to a variable. They have their methods that can perform operations on the array.

```js
let fruits = ["Orange", "Pomme", "Ananas"]
console.log( fruits[0] ) // Orange
console.log( fruits.length ) // 3

let complexArray = ["Antoine", 31, true] // composite/complex Array

let cards = [3, 11]
cards.push(6)
console.log(cards) // [3, 11, 6]
cards.pop()
console.log(cards) // [3, 11]
```

### Typed Arrays

In Javascript, a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) is an array-like buffer of binary data. There is no JavaScript property or object named TypedArray, but properties and methods can be used with typed array objects.

### Keyed Collections

[Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections) are data collections that are ordered by key not index. They are associative in nature.

#### Map

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

#### Set

The [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object lets you store unique values of any type, whether primitive values or object references. A value in the Set may only occur once; it is unique in the Set’s collection.

### Structured Data (JSON)

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications.

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

[Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

---

## return

The `return` statement ends function execution and specifies a value to be returned to the function caller.

```js
function getRectArea(width, height) {
  return width * height;
}
console.log(getRectArea(3, 4)); // Expected output: 12
```

---

## Math object

### Math.random()

Developers often have the need of creating a random generating value (security, games, etc).

```js
let randomNumber = Math.random() // generates a random number between 0 and 1 (not inclusive of 1)
```

**`Math.random()`** : 0.000 -> 0.999

**`Math.random()*6`** : 0.000 -> 5.999

### Math.floor()

The `Math.floor()` static method always rounds down and returns the largest integer less than or equal to a given number.

```js
console.log( Math.floor(5.95) ) // Expected output: 5
console.log( Math.floor(5.05) ) // Expected output: 5
console.log( Math.floor(5) ) // Expected output: 5
console.log( Math.floor(-5.05) ) // Expected output: 6
```

---

## Operators

### Arithmetic operators

- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `**` (Exponentiation)
- `/` (Division)
- `%` (Modulus i.e. Remainder)
- `++` (Increment)
- `--` (Decrement)

- `+`, `+=` (Concatenation)

### Equality

The `==` operator does the type conversion of the operands before comparison, whereas the `===` operator compares the values and the data types of the operands. The O`bject.is()` method determines whether two values are the same value: `Object.is(value1, value2)`. -> [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is)

### Strict Equality Operator (===)

The strict equality operator `===` compares both the value and the type of two operands. This means that it will only return `true` if both the value and the type are identical.

```js
"5" === "5"   // true
"5" === 5   // false
```

### Comparison operators

The operators that compare values and return true or false. The operators include: `>`, `<`, `>=`, `<=`, `==`, `===`, `!=` and `!==`.

## Logical operators

There are four logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT), `??` (Nullish Coalescing).

---

## Loops & iterations

### for loops

The [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) is commonly used to iterate over given sequences or iterate a known number of times and execute a piece of code for each iteration.

```js
for (let i = 0; i < 9; i++) {
  console.log(i); // 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8
}
```

#### for...of

The [`for...of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

```js
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element); // "a" / "b" / "c"
}
```

#### for...in

The [`for...in` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`); // "a:1" / "b:2" / "c:3"
}
```

### while

The [`while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) creates a loop that executes a specified statement as long as the test condition evaluates to `true`. The condition is evaluated before executing the statement.

```js
let n = 0;

while (n < 3) {
  n++;
}

console.log(n); // 3
```

#### do...while

The [`do...while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) creates a loop that executes a specified statement until the test condition evaluates to `false`. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

```js
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result); // "12345"
```

### break / continue

[`break` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break), without a label reference, can only be used to jump out of a loop or a switch block.

```js
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i); // 3
```

[`continue` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue), with or without a label reference, can only be used to skip one loop iteration.

```js
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text); // "012456789"
```

---

## Conditional statements

When you write code, you often want to perform different actions for different decisions. You can use conditional statements in your code to do this.

### if... else if... else

-> [**See**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

```js
if (condition) {
  statement1;
} else if (other condition) {
  statement2;
} else {
  statement3;
}
```

### Switch

The [`switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) evaluates an expression, matching the expression’s value against a series of `case` clauses, and executes statements after the first `case` clause with a matching value, until a `break` statement is encountered. The `default` clause of a `switch` statement will be jumped to if no `case` matches the expression’s value.

```js
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    break;
  case value2:
    //Statements executed when the result of expression matches value2
    break;
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    break;
  default:
    //Statements executed when none of the values match the value of the expression
    break;
}
```

---

## Objects

```js
// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}
console.log( course.tags )

//-----------------------------------------

let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}
player.sayHello()

//-----------------------------------------

let tabs = [
  {url: "http://www.google.com"}
]
console.log(tabs[0].url) // http://www.google.com

//-----------------------------------------

const person = {
  "Name": "Antoine",
  "Age": 31
}
console.log(Object.keys(person)) // ["Name", "Age"]
console.log(Object.values(person)) // ["Antoine", "31"]
console.log(Object.entries(person)) // ["Name", "Age"], ["Antoine", "31"]
```

## Functions

[Functions](https://www.codeguage.com/courses/js/functions-basics) exist so we can reuse code. They are blocks of code that execute whenever they are invoked.

### Functions parameters/arguments

> [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters)

```js
                  // parameters !
function greetUser(greeting, name) {
  console.log( `${greeting}, ${name} !!` ) // template literals
}

          // arguments !!
greetUser("Hi", "Antoine")

let hi = "Hello"
greetUser(hi, "Antoine")
```

### Arrow functions

A new way of creating functions:

```js
const sayHello = () => {
    console.log(`Hello from Arrow Function !`);
}
```

### Built-in functions

JavaScript offers a variety of [built-in functions](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm) that simplify common tasks.

### Recursion

Recursion is when a function invokes itself. Such a function is called a *recursive function*. > [See](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

### Timing events

The [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) runs a function after the specified period expires. Times are declared in milliseconds.

The [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) method helps us to repeatedly execute a function after a fixed delay. It returns a unique interval ID which can later be used by the clearInterval() method, which stops further repeated execution of the function.

setInterval() is similar to setTimeout, with a difference. Instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds):

> [See](https://javascript.info/settimeout-setinterval)
---

## localStorage

Permet de stocker des données (Strings) chez un utilisateur, en local dans son navigateur.

```js
localStorage.setItem("itemName", data) // Stocker
localStorage.getItem("itemName") // Récupérer/lire
localStorage.clear() // Effacer les données 
```

---

## Template strings/literals

Exemple:

```js
for (let i = 0; i < array.length; i++) {
  listItems += `
      <li>
          <a target="_blank" href="${array[i]}">
              ${array[i]}
          </a>
      </li>
  `  
}
```

---

## Operators (2)

### Conditional operator (Ternary op.)

Conditional operator also known as [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) is the only JS operator that takes three operands.

Syntax:

`condition ? val_for_true : val_for_false`

```js
const status = age >= 18 ? "adult" : "minor";
```

### Unary operators

JavaScript [Unary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#unary_operators) are the special operators that consider a single operand and perform all the types of operations on that single operand.

- `delete`
- `void`
- `typeof`
- `!`
- `~`
- `+`
- `-`
- `await`

---

## Exceptions

In JavaScript, all [exceptions](https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript) are simply objects.

### throw

The [`throw` statement](https://javascript.info/try-catch#throw-operator) allows you to create a custom error. It "throws" (generates) an error. The technical term for this is:

The throw statement throws an exception.

The exception can be a JavaScript String, a Number, a Boolean or an Object:

```js
throw "Too big";  // throw a text
throw 500;        // throw a number
throw false;      // throw a boolean
throw person;     // throw an object
```

*Note*: Using `throw` with `try` and `catch`, lets you control program flow and generate custom error messages.

### try, catch, finally

Inside the try code block we have the code to run, inside the catch block we handle the errors, and inside the finally block we have code that runs after the execution of the previous code blocks, regardless of the result.

```js
try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}
finally {
  // Block of code to be executed regardless of the try / catch result
}
```

> See [Javascript Errors](https://www.w3schools.com/js/js_errors.asp)

### Error objects

When a runtime error occurs, a new `Error` object is created and thrown. With this `Error` object, we can determine the type of the Error and handle it according to its type. *> [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)*

#### Types of Errors

- AggregateError - A collection of errors thrown simultaneously.
- EvalError - An error occurred during the evaluation of a JavaScript expression.
- InternalError - An internal JavaScript error, often indicating a bug in the engine.
- RangeError - A value is outside the allowed range for a given operation.
- ReferenceError - A variable or object is referenced before it’s declared or doesn’t exist.
- SyntaxError - The code contains incorrect syntax, preventing it from being parsed.

```js
try {
  willGiveErrorSometime();
} catch (error) {
  if (error instanceof RangeError) {
    rangeErrorHandler(error);
  } else if (error instanceof ReferenceError) {
    referenceErrorHandle(error);
  } else {
    errorHandler(error);
  }
}
```

---

## Working with APIs

When working with remote APIs, you need a way to interact with those APIs. Modern JavaScript provides two native ways to send HTTP requests to remote servers, XMLHttpRequest and Fetch.

### Fetch

The [`fetch()` method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

### XMLHttpRequest

[`XMLHttpRequest` (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) is a built-in browser object that can be used to interact with server. XHR allows you to update data without having to reload a web page. Despite the word XML in its name, XHR not only used to retrieve data with XML format, we can use it with any type of data, like JSON, file(s), and much more.
