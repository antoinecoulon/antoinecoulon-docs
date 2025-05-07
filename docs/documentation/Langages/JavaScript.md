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
    - [Object constructors](#object-constructors)
      - [Safeguarding constructors](#safeguarding-constructors)
    - [Prototype](#prototype)
      - [Prototypal inheritance](#prototypal-inheritance)
    - [The this keyword](#the-this-keyword)
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
  - [The Big Review](#the-big-review)

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

There are multiple ways to define objects but in most cases, it is best to use the object literal syntax as follows:

```js
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
  }
};
```

There are also 2 ways to get information out of an object: dot notation and bracket notation.

```js
// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]
```

Which method you use will depend on context. Dot notation is cleaner and is usually preferred, but there are plenty of circumstances when it is not possible to use it. For example, myObject."obnoxious property" won’t work because that property is a string with a space in it. Likewise, you cannot use variables in dot notation:

```js
const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'
```

### Object constructors

When you have a specific type of object that you need to duplicate like our player or inventory items, a better way to create them is using an object constructor, which is just a regular function that by convention is named with an uppercase initial letter. It looks like this:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```

And you can use it by calling the function with the keyword new.

```js
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'
```

Just like with objects created using the Object Literal method, you can add functions to the object:

```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
```

#### Safeguarding constructors

Note that, as constructors are just regular functions, they could be called without using `new` by mistake, which would cause hard-to-track errors. To prevent that, you can use the `new.target` meta-property like this:

```js
function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}
```

### Prototype

All objects in JavaScript have a **prototype**. The prototype is *another object that the original object inherits from*, which is to say, the original object has access to all of its prototype’s methods and properties.

So for example, the `player1` and `player2` objects from before, (created with the `Player(name, marker)` object constructor) also have a prototype. Now, what does having a prototype mean? What even is a prototype of an object?

The prototype is just another object. The prototype object can have properties and functions, just as these Player objects have properties like `.name`, `.marker`, and functions like `.sayName()` attached to them.

```js
Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
```

Here, we defined the `.sayHello` function ‘on’ the `Player.prototype` object. It then became available for the `player1` and the `player2` objects to use! Similarly, you can attach other properties or functions you want to use on all `Player` objects by defining them on the objects’ prototype (`Player.prototype`).

**Note**: Every prototype object inherits from Object.prototype by default and an object’s Object.getPrototypeOf() value can only be one unique prototype object.

#### Prototypal inheritance

Now, how do you utilize Prototypal Inheritance? What do you need to do to use it? Just as we use `Object.getPrototypeOf()` to ‘get’ or view the prototype of an object, we can use `Object.setPrototypeOf()` to ‘set’ or mutate it. Let’s see how it works by adding a Person Object Constructor to the Player example, and making Player inherit from Person!

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!
player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'
```

**Note**: Though it seems to be an easy way to set up Prototypal Inheritance using `Object.setPrototypeOf()`, the prototype chain has to be set up using this function before creating any objects. Using `setPrototypeOf()` after objects have already been created can result in performance issues.

More on prototype, inheritance, `call()` function... : [Understand prototype inheritance](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)

### The this keyword

If you have been working with other programming languages such as Java, C#, or PHP, you’re already familiar with the `this` keyword.

In these languages, the `this` keyword represents the current instance of the class and it is only relevant within the class.

JavaScript also has `this` keyword. However, the `this` keyword in JavaScript behaves differently from other programming languages.

In JavaScript, you can use the `this` keyword in the global and function contexts. Moreover, the behavior of the `this` keyword changes between strict and non-strict modes.

In general, the `this` references the object of which the function is a property. In other words, the `this` references the object that is currently calling the function.

Suppose you have an object counter that has a method `next()`. When you call the `next()` method, you can access the this object.

```js
let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next();
```

Inside the `next()` function, the this references the counter object. The `next()` is a function that is the property of the counter object. Therefore, inside the `next()` function, the `this` references the `counter` object.

[More info](https://www.javascripttutorial.net/javascript-this/) about Context (global or function).

---

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

---

## The Big Review

```js
// Single-line comments start with two slashes.
/* Multiline comments start with slash-star,
   and end with star-slash */

// Statements can be terminated by ;
doStuff();

// ... but they don't have to be, as semicolons are automatically inserted
// wherever there's a newline, except in certain cases.
doStuff()

// Because those cases can cause unexpected results, we'll keep on using
// semicolons in this guide.

///////////////////////////////////
// 1. Numbers, Strings and Operators

// JavaScript has one number type (which is a 64-bit IEEE 754 double).
// Doubles have a 52-bit mantissa, which is enough to store integers
// up to about 9✕10¹⁵ precisely.
3; // = 3
1.5; // = 1.5

// Some basic arithmetic works as you'd expect.
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// Including uneven division.
5 / 2; // = 2.5

// And modulo division.
10 % 2; // = 0
30 % 4; // = 2
18.5 % 7; // = 4.5

// Bitwise operations also work; when you perform a bitwise operation your float
// is converted to a signed int *up to* 32 bits.
1 << 2; // = 4

// Precedence is enforced with parentheses.
(1 + 3) * 2; // = 8

// There are three special not-a-real-number values:
Infinity; // result of e.g. 1/0
-Infinity; // result of e.g. -1/0
NaN; // result of e.g. 0/0, stands for 'Not a Number'

// There's also a boolean type.
true;
false;

// Strings are created with ' or ".
'abc';
"Hello, world";

// Negation uses the ! symbol
!true; // = false
!false; // = true

// Equality is ===
1 === 1; // = true
2 === 1; // = false

// Inequality is !==
1 !== 1; // = false
2 !== 1; // = true

// More comparisons
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Strings are concatenated with +
"Hello " + "world!"; // = "Hello world!"

// ... which works with more than just strings
"1, 2, " + 3; // = "1, 2, 3"
"Hello " + ["world", "!"]; // = "Hello world,!"

// ...which can result in some weird behaviour...
13 + !0; // 14
"13" + !0; // '13true'

// and are compared with < and >
"a" < "b"; // = true

// Type coercion is performed for comparisons with double equals...
"5" == 5; // = true
null == undefined; // = true

// ...unless you use ===
"5" === 5; // = false
null === undefined; // = false

// You can access characters in a string with `charAt`
"This is a string".charAt(0);  // = 'T'

// ...or use `substring` to get larger pieces.
"Hello world".substring(0, 5); // = "Hello"

// `length` is a property, so don't use ().
"Hello".length; // = 5

// There's also `null` and `undefined`.
null;      // used to indicate a deliberate non-value
undefined; // used to indicate a value is not currently present (although
           // `undefined` is actually a value itself)

// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.
// Note that 0 is falsy and "0" is truthy, even though 0 == "0".

///////////////////////////////////
// 2. Variables, Arrays and Objects

// Variables are declared with the `var` keyword. JavaScript is dynamically
// typed, so you don't need to specify type. Assignment uses a single `=`
// character.
var someVar = 5;

// If you leave the var keyword off, you won't get an error...
someOtherVar = 10;

// ...but your variable will be created in the global scope, not in the scope
// you defined it in.

// Variables declared without being assigned to are set to undefined.
var someThirdVar; // = undefined

// If you want to declare a couple of variables, then you could use a comma
// separator
var someFourthVar = 2, someFifthVar = 4;

// There's shorthand for performing math operations on variables:
someVar += 5; // equivalent to someVar = someVar + 5; someVar is 10 now
someVar *= 10; // now someVar is 100

// and an even-shorter-hand for adding or subtracting 1
someVar++; // now someVar is 101
someVar--; // back to 100

// Arrays are ordered lists of values, of any type.
var myArray = ["Hello", 45, true];

// Their members can be accessed using the square-brackets subscript syntax.
// Array indices start at zero.
myArray[1]; // = 45

// Arrays are mutable and of variable length.
myArray.push("World");
myArray.length; // = 4

// Add/Modify at specific index
myArray[3] = "Hello";

// Add and remove element from front or back end of an array
myArray.unshift(3); // Add as the first element
someVar = myArray.shift(); // Remove first element and return it
myArray.push(3); // Add as the last element
someVar = myArray.pop(); // Remove last element and return it

// Join all elements of an array with semicolon
var myArray0 = [32,false,"js",12,56,90];
myArray0.join(";"); // = "32;false;js;12;56;90"

// Get subarray of elements from index 1 (include) to 4 (exclude)
myArray0.slice(1,4); // = [false,"js",12]

// Remove 4 elements starting from index 2, and insert there strings
// "hi","wr" and "ld"; return removed subarray
myArray0.splice(2,4,"hi","wr","ld"); // = ["js",12,56,90]
// myArray0 === [32,false,"hi","wr","ld"]

// JavaScript's objects are equivalent to "dictionaries" or "maps" in other
// languages: an unordered collection of key-value pairs.
var myObj = {key1: "Hello", key2: "World"};

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type.
var myObj = {myKey: "myValue", "my other key": 4};

// Object attributes can also be accessed using the subscript syntax,
myObj["my other key"]; // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue"

// Objects are mutable; values can be changed and new keys added.
myObj.myThirdKey = true;

// If you try to access a value that's not yet set, you'll get undefined.
myObj.myFourthKey; // = undefined

///////////////////////////////////
// 3. Logic and Control Structures

// The `if` structure works as you'd expect.
var count = 1;
if (count == 3){
    // evaluated if count is 3
} else if (count == 4){
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4
}

// As does `while`.
while (true){
    // An infinite loop!
}

// Do-while loops are like while loops, except they always run at least once.
var input;
do {
    input = getInput();
} while (!isValid(input));

// The `for` loop is the same as C and Java:
// initialization; continue condition; iteration.
for (var i = 0; i < 5; i++){
    // will run 5 times
}

// Breaking out of labeled loops is similar to Java
outer:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j ==5) {
            break outer;
            // breaks out of outer loop instead of only the inner one
        }
    }
}

// The for/in statement allows iteration over properties of an object.
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    description += person[x] + " ";
} // description = 'Paul Ken 18 '

// The for/of statement allows iteration over iterable objects (including the built-in String, 
// Array, e.g. the Array-like arguments or NodeList objects, TypedArray, Map and Set, 
// and user-defined iterables).
var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
    myPets += pet + " ";
} // myPets = 'cat dog hamster hedgehog '

// && is logical and, || is logical or
if (house.size == "big" && house.colour == "blue"){
    house.contains = "bear";
}
if (colour == "red" || colour == "blue"){
    // colour is either red or blue
}

// && and || "short circuit", which is useful for setting default values.
var name = otherName || "default";

// The `switch` statement checks for equality with `===`.
// Use 'break' after each case
// or the cases after the correct one will be executed too.
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}


///////////////////////////////////
// 4. Functions, Scope and Closures

// JavaScript functions are declared with the `function` keyword.
function myFunction(thing){
    return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"

// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this when using Allman style.
function myFunction(){
    return // <- semicolon automatically inserted here
    {thisIsAn: 'object literal'};
}
myFunction(); // = undefined

// JavaScript functions are first class objects, so they can be reassigned to
// different variable names and passed to other functions as arguments - for
// example, when supplying an event handler:
function myFunction(){
    // this code will be called in 5 seconds' time
}
setTimeout(myFunction, 5000);
// Note: setTimeout isn't part of the JS language, but is provided by browsers
// and Node.js.

// Another function provided by browsers is setInterval
function myFunction(){
    // this code will be called every 5 seconds
}
setInterval(myFunction, 5000);

// Function objects don't even have to be declared with a name - you can write
// an anonymous function definition directly into the arguments of another.
setTimeout(function(){
    // this code will be called in 5 seconds' time
}, 5000);

// JavaScript has function scope; functions get their own scope but other blocks
// do not.
if (true){
    var i = 5;
}
i; // = 5 - not undefined as you'd expect in a block-scoped language

// This has led to a common pattern of "immediately-executing anonymous
// functions", which prevent temporary variables from leaking into the global
// scope.
(function(){
    var temporary = 5;
    // We can access the global scope by assigning to the "global object", which
    // in a web browser is always `window`. The global object may have a
    // different name in non-browser environments such as Node.js.
    window.permanent = 10;
})();
temporary; // raises ReferenceError
permanent; // = 10

// One of JavaScript's most powerful features is closures. If a function is
// defined inside another function, the inner function has access to all the
// outer function's variables, even after the outer function exits.
function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner(){
        alert(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
}
sayHelloInFiveSeconds("Adam"); // will open a popup with "Hello, Adam!" in 5s

///////////////////////////////////
// 5. More about Objects; Constructors and Prototypes

// Objects can contain functions.
var myObj = {
    myFunc: function(){
        return "Hello world!";
    }
};
myObj.myFunc(); // = "Hello world!"

// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
myObj = {
    myString: "Hello world!",
    myFunc: function(){
        return this.myString;
    }
};
myObj.myFunc(); // = "Hello world!"

// What `this` is set to has to do with how the function is called, not where
// it's defined. So, our function doesn't work if it isn't called in the
// context of the object.
var myFunc = myObj.myFunc;
myFunc(); // = undefined

// Inversely, a function can be assigned to the object and gain access to it
// through `this`, even if it wasn't attached when it was defined.
var myOtherFunc = function(){
    return this.myString.toUpperCase();
};
myObj.myOtherFunc = myOtherFunc;
myObj.myOtherFunc(); // = "HELLO WORLD!"

// We can also specify a context for a function to execute in when we invoke it
// using `call` or `apply`.

var anotherFunc = function(s){
    return this.myString + s;
};
anotherFunc.call(myObj, " And Hello Moon!"); // = "Hello World! And Hello Moon!"

// The `apply` function is nearly identical, but takes an array for an argument
// list.

anotherFunc.apply(myObj, [" And Hello Sun!"]); // = "Hello World! And Hello Sun!"

// This is useful when working with a function that accepts a sequence of
// arguments and you want to pass an array.

Math.min(42, 6, 27); // = 6
Math.min([42, 6, 27]); // = NaN (uh-oh!)
Math.min.apply(Math, [42, 6, 27]); // = 6

// But, `call` and `apply` are only temporary. When we want it to stick, we can
// use `bind`.

var boundFunc = anotherFunc.bind(myObj);
boundFunc(" And Hello Saturn!"); // = "Hello World! And Hello Saturn!"

// `bind` can also be used to partially apply (curry) a function.

var product = function(a, b){ return a * b; };
var doubler = product.bind(this, 2);
doubler(8); // = 16

// When you call a function with the `new` keyword, a new object is created, and
// made available to the function via the `this` keyword. Functions designed to be
// called like that are called constructors.

var MyConstructor = function(){
    this.myNumber = 5;
};
myNewObj = new MyConstructor(); // = {myNumber: 5}
myNewObj.myNumber; // = 5

// Unlike most other popular object-oriented languages, JavaScript has no
// concept of 'instances' created from 'class' blueprints; instead, JavaScript
// combines instantiation and inheritance into a single concept: a 'prototype'.

// Every JavaScript object has a 'prototype'. When you go to access a property
// on an object that doesn't exist on the actual object, the interpreter will
// look at its prototype.

// Some JS implementations let you access an object's prototype on the magic
// property `__proto__`. While this is useful for explaining prototypes it's not
// part of the standard; we'll get to standard ways of using prototypes later.
var myObj = {
    myString: "Hello world!"
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase();
    }
};

myObj.__proto__ = myPrototype;
myObj.meaningOfLife; // = 42

// This works for functions, too.
myObj.myFunc(); // = "hello world!"

// Of course, if your property isn't on your prototype, the prototype's
// prototype is searched, and so on.
myPrototype.__proto__ = {
    myBoolean: true
};
myObj.myBoolean; // = true

// There's no copying involved here; each object stores a reference to its
// prototype. This means we can alter the prototype and our changes will be
// reflected everywhere.
myPrototype.meaningOfLife = 43;
myObj.meaningOfLife; // = 43

// The for/in statement allows iteration over properties of an object,
// walking up the prototype chain until it sees a null prototype.
for (var x in myObj){
    console.log(myObj[x]);
}
///prints:
// Hello world!
// 43
// [Function: myFunc]
// true

// To only consider properties attached to the object itself
// and not its prototypes, use the `hasOwnProperty()` check.
for (var x in myObj){
    if (myObj.hasOwnProperty(x)){
        console.log(myObj[x]);
    }
}
///prints:
// Hello world!

// We mentioned that `__proto__` was non-standard, and there's no standard way to
// change the prototype of an existing object. However, there are two ways to
// create a new object with a given prototype.

// The first is Object.create, which is a recent addition to JS, and therefore
// not available in all implementations yet.
var myObj = Object.create(myPrototype);
myObj.meaningOfLife; // = 43

// The second way, which works anywhere, has to do with constructors.
// Constructors have a property called prototype. This is *not* the prototype of
// the constructor function itself; instead, it's the prototype that new objects
// are given when they're created with that constructor and the new keyword.
MyConstructor.prototype = {
    myNumber: 5,
    getMyNumber: function(){
        return this.myNumber;
    }
};
var myNewObj2 = new MyConstructor();
myNewObj2.getMyNumber(); // = 5
myNewObj2.myNumber = 6;
myNewObj2.getMyNumber(); // = 6

// Built-in types like strings and numbers also have constructors that create
// equivalent wrapper objects.
var myNumber = 12;
var myNumberObj = new Number(12);
myNumber == myNumberObj; // = true

// Except, they aren't exactly equivalent.
typeof myNumber; // = 'number'
typeof myNumberObj; // = 'object'
myNumber === myNumberObj; // = false
if (0){
    // This code won't execute, because 0 is falsy.
}
if (new Number(0)){
   // This code will execute, because wrapped numbers are objects, and objects
   // are always truthy.
}

// However, the wrapper objects and the regular builtins share a prototype, so
// you can actually add functionality to a string, for instance.
String.prototype.firstCharacter = function(){
    return this.charAt(0);
};
"abc".firstCharacter(); // = "a"

// This fact is often used in "polyfilling", which is implementing newer
// features of JavaScript in an older subset of JavaScript, so that they can be
// used in older environments such as outdated browsers.

// For instance, we mentioned that Object.create isn't yet available in all
// implementations, but we can still use it with this polyfill:
if (Object.create === undefined){ // don't overwrite it if it exists
    Object.create = function(proto){
        // make a temporary constructor with the right prototype
        var Constructor = function(){};
        Constructor.prototype = proto;
        // then use it to create a new, appropriately-prototyped object
        return new Constructor();
    };
}

// ES6 Additions

// The "let" keyword allows you to define variables in a lexical scope, 
// as opposed to a function scope like the var keyword does.
let name = "Billy";

// Variables defined with let can be reassigned new values.
name = "William";

// The "const" keyword allows you to define a variable in a lexical scope
// like with let, but you cannot reassign the value once one has been assigned.

const pi = 3.14;

pi = 4.13; // You cannot do this.

// There is a new syntax for functions in ES6 known as "lambda syntax".
// This allows functions to be defined in a lexical scope like with variables
// defined by const and let. 

const isEven = (number) => {
    return number % 2 === 0;
};

isEven(7); // false

// The "equivalent" of this function in the traditional syntax would look like this:

function isEven(number) {
    return number % 2 === 0;
};

// I put the word "equivalent" in double quotes because a function defined
// using the lambda syntax cannot be called before the definition.
// The following is an example of invalid usage:

add(1, 8);

const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
```
