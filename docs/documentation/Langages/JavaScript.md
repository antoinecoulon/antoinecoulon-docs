# JavaScript

[Roadmap JavaScript](https://roadmap.sh/javascript)

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

## Arrays

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
```
