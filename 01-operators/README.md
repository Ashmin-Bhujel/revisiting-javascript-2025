# Operators in JavaScript

- Assignment Operator
- Arithmetic Operators
- Pre/Post-Increment/Decrement Operators
- Boolean Operators
- Equality Operators
- Comparison Operators
- Conditional Ternary Operator

## Assignment Operator

It is used to assign some value to a variable.

```js
// Simple value assignment
let x = 2;
```

## Arithmetic Operators

They are used to perform mathematical operations.

```js
// Addition, Subtraction, Multiply, Division
console.log(2 + 3); // 5
console.log(3 - 2); // 1
console.log(2 * 2); // 4
console.log(6 / 3); // 2

// Raise to the power
console.log(2 ** 3); // 8

// Remainder
console.log(12 % 5); // 2
```

## Pre/Post-Increment/Decrement Operators

```js
// Pre-increment/decrement
// Add or subtract 1 from the value before using the value
let a = 2;
console.log(++a); // 3

let b = 6;
console.log(--b); // 5

console.log(a, b); // 3 5

// Post-increment/decrement
// Add or subtract 1 from the value after using the value
let x = 2;
console.log(x++); // 2

let y = 6;
console.log(y--); // 6

console.log(x, y); // 3 5
```

## Boolean Operators

```js
// AND "&&" operator
/* Returns `true` if all of the values are `true`
 * otherwise returns `false`
 */
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR "||" operator
/* Returns `false` if all of the values are `false
 * otherwise returns `true`
 */
console.log(true && true); // true
console.log(true && false); // true
console.log(false && true); // true
console.log(false && false); // false

// NOT '!' operator
// Returns logical complement/negation of the given value
// i.e. true => false and false => true
console.log(!true); // false
console.log(!false); // true
```

## Equality Operators

```js
// "==" checks the equality of value only
console.log("2" == 2); // true

// "===" checks both value and data type
console.log("2" === 2); // true
```

## Comparison Operators

They return `true` or `false` based upon the comparison

```js
console.log(2 < 4); // true
console.log(-1 <= 0); // true
console.log(2 > 4); // false
console.log(2 >= 0); // true

/* NOTE:
 * When comparing values always do comparison
 * between values with same data type
 * Your future self will thank you for that :)
 */
```

## Conditional Ternary Operator

```js
// Can be used as shorthand for if-else conditional.
console.log(2 < 4 ? "Yes" : "No"); // "Yes"

// To assign a conditionally assign some value to a variable
let password = "randomPassword#123";
let canSignUp = password.length <= 8 ? true : false;
console.log(canSignUp); // true
```
