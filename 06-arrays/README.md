# Arrays in JavaScript

- Array is a collection of related data.
- In JavaScript arrays are dynamic and supports mixed data type.
- We can find length of an array with the `length` property.

## Some Useful Methods

- `push()`

  ```js
  // Adds an element at the end of the array
  const avengers = ["Iron Man", "Captain America", "Black Widow"];
  avengers.push("Thor", "Hulk", "Hawk Eye");

  console.log(avengers);
  /* Output:
   * [
   *  "Iron Man",
   *  "Captain America",
   *  "Black Widow",
   *  "Thor",
   *  "Hulk",
   *  "Hawk Eye",
   * ]
   */
  ```

- `pop()`

  ```js
  // Removes and returns the last element from the array
  const numbers = [0, 1, 1, 2, 3];
  const lastElement = number.pop();

  console.log(numbers);
  // Output: [0, 1, 1, 2]

  console.log(lastElement);
  // Output: 3
  ```

- `unshift()`

  ```js
  // Adds element at the start
  const marks = [56, 60, 48, 52];
  marks.unshift(46);

  console.log(marks);
  // Output: [46, 56, 60, 48, 52]
  ```

- `shift()`

  ```js
  // Works similar to `pop` but removes and returns from the start
  const numbers = [123, 1, 2, 3];
  const firstElement = numbers.shift();

  console.log(numbers);
  // Output: [1, 2, 3]

  console.log(firstElement);
  // Output: 123
  ```

  **NOTE:** `unshift` and `shift` are more computation heavy than `push` and `pop`.

- `slice()`

  ```js
  /* Returns an sub-array according to
   * specified start and end index (exclusive)
   * Doesn't mutate the original array
   */
  const names = ["Ram", "John", "Eli"];
  console.log(names.slice(1, 3));
  // Output: ["John", "Eli"]
  ```

- `splice()`

  ```js
  /* Removes and returns an sub-array according to
   * specified start and end index (inclusive)
   * Mutates the original array
   */
  const fruits = ["Apple", "Mango", "Papaya"];

  console.log(fruits.splice(1, 2));
  // Output: ["Mango", "Papaya"]

  console.log(fruits);
  // Output: ["Apple"]
  ```

- `join()`

  ```js
  // Returns a string by joining elements by specified string
  const numbers = ["2025", "04", "23"];
  console.log(numbers.join("-"));
  // Output: "2025-04-23"
  ```

- `includes()`

  ```js
  // Returns `true` if a match is found else returns `false`
  // Case Sensitive
  const numbers = [0, 1, 1, 2];
  console.log(numbers.include(3));
  // Output: false
  ```

- `indexOf()`

  ```js
  /* Returns index of first occurrence
   * if a match is found
   * otherwise returns -1
   * Case Sensitive
   */
  const fruits = ["Mango", "Grapes", "Guava"];
  console.log(fruits.indexOf("Apple"));
  // Output: -1
  ```
