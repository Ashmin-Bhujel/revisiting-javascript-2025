# Control Flow in JavaScript

- Control flow allows us programmers to conditionally run or not run some part of the code.

## If-else Statement

- It checks given condition and if the condition is true, it executes the code inside the if block. If the condition is false, it executes the code inside the else block.
- The else block is optional.
- There can also be multiple else if blocks.

  ```js
  let age = 18;

  if (age < 18) {
    console.log("You are a minor.");
  } else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
  } else {
    console.log("You are a senior citizen.");
  }

  // Output: You are an adult.
  ```

## Switch Statement

- The switch statement is used to perform different actions based on different conditions.
- It is a cleaner way to write multiple if-else statements.
- The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
- The break statement is used to terminate a switch statement and transfer control to the statement following the switch.
- The default case is optional and can be used to execute code if none of the cases match.

  ```js
  let fruit = "banana";

  switch (fruit) {
    case "apple":
      console.log("You chose an apple.");
      break;
    case "banana":
      console.log("You chose a banana.");
      break;
    case "orange":
      console.log("You chose an orange.");
      break;
    default:
      console.log("Unknown fruit.");
  }

  // Output: You chose a banana.
  ```

## Ternary Operator

- The ternary operator is a shorthand way to write an if-else statement.
- It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.
- The syntax is: `condition ? valueIfTrue : valueIfFalse`.

  ```js
  let age = 18;
  let message = age >= 18 ? "You are an adult." : "You are a minor.";
  console.log(message);

  // Output: You are an adult.
  ```

## Truthy and Falsy Values

- In JavaScript, values can be either truthy or falsy.
- Falsy values are values that evaluate to false in a boolean context. They include:
  - `false`
  - `0` (zero)
  - `""` (empty string)
  - `null`
  - `undefined`
  - `NaN` (Not a Number)
- All other values are considered truthy, including:
  - Non-zero numbers
  - Non-empty strings
  - Objects (even `{}`)
  - Arrays (even `[]`)
  - Functions

## Checking conditions with array

- Use `length` property to check if an array is empty or not.
- Use `includes` method to check if an array contains a specific value.

  ```js
  let arr = [1, 2, 3];

  if (arr.length > 0) {
    console.log("Array is not empty.");
  } else {
    console.log("Array is empty.");
  }

  // Output: Array is not empty.

  if (arr.includes(2)) {
    console.log("Array contains the number 2.");
  } else {
    console.log("Array does not contain the number 2.");
  }

  // Output: Array contains the number 2.
  ```

## Checking conditions with object

- Use `Object.keys()` to check if an object is empty or not.
- Use `in` operator to check if an object contains a specific key.

  ```js
  let obj = { name: "John", age: 30 };

  if (Object.keys(obj).length > 0) {
    console.log("Object is not empty.");
  } else {
    console.log("Object is empty.");
  }

  // Output: Object is not empty.

  if ("name" in obj) {
    console.log("Object contains the key 'name'.");
  } else {
    console.log("Object does not contain the key 'name'.");
  }

  // Output: Object contains the key 'name'.
  ```
