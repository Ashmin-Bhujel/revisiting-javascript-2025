# Higher Order Array Loops in JavaScript

## `forEach()`

- Performs the specified action for each element in an array.
- It takes a callback function and that callback function has three parameters
  - Current element
  - Current index of element
  - The array itself
- It does not returns an array.

### Usage and Example

```js
const users = ["Jane", "Eli", "Peter", "Amanda"];

users.forEach((user, index) => {
  console.log(user, index);
});
// Prints each element and index of `users` array
// Output: "Jane" 0, "Eli" 1, "Peter" 2, "Amanda" 3
```

## `map()`

- Calls a defined callback function on each element of an array, and returns an array that contains the results.

### Usage and Example

```js
const numbers = [1, 2, 3, 4, 5];

const timesTwo = numbers.map((number) => number * 2);
console.log(timesTwo);
// Returns an resulting array where each element of `numbers` array is multiplied by 2
// Output: [2, 4, 6, 8, 10]
```

## `filter()`

- Returns the elements of an array that meet the condition specified in a callback function.

## Usage and Example

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
// Returns an array of even numbers from `numbers` array
// Output: [2, 4]
```

## `reduce()`

- Calls the specified callback function for all the elements in an array.
- Its callback function has these parameters
  - accumulator
  - current element
- `reduce()` takes some initial value for accumulator as its second parameter after the callback function.
- The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

```js
const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;

const sum = numbers.reduce(
  (accumulator, currentElement) => accumulator + currentElement,
  initialValue
);
console.log(sum);
// Returns the sum of all elements of `numbers` array
// Output: 15
```
