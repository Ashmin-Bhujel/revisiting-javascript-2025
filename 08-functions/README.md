# Functions in JavaScript

- Functions are collection of reuseable set of instructions.
- They are useful to do similar tasks without writing the same sets of instructions again and again.

## Usage and Example

```js
// Normal function usage
function add(x, y) {
  return x + y;
}
console.log(add(2, 4));
// Output: 6

// Default parameter values
// Uses the given default value if no arguments are passed
function greet(username = "John") {
  console.log(`Hello, ${username}`);
}
greet();
// Output: "Hello, John"
greet("James");
// Output: "Hello, James"

// Rest operator
// Collects and returns array of passed arguments
function printAll(...numbers) {
  console.log(`Numbers: ${numbers}`);
}
printAll(1, 2, 3, 4, 5);
// Output: Numbers 1, 2, 3, 4, 5
```

## Arrow Functions

- Arrow functions were introduced in ES6 along with various other modern JavaScript features.
- Arrow function is short and cleaner way of writing function.
- The difference between a normal function and an arrow function is the context they refer to with `this` keyword.

```js
const add = (x, y) => {
  return x + y;
};

// We can further shorten the code if there is only return statement
// By using implicit return expression
const add = (x, y) => x + y;
```

## IIFE (Immediately Invoked Function Expression)

- They are used to execute a function immediately after its creation.
- They help to reduce variable pollution at global scope.
- They useful for doing tasks like connecting a database, fetching data, etc.

```js
// Using normal function
(function ConnectToDB(dbName) {
  console.log(`Connected to ${dbName} database.`);
})("users");

// Using arrow function
((url) => {
  const users = fetchUsers(url);
  console.log(`Users: ${users}`);
})("/api/users");
```
