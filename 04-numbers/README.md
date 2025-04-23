# Numbers in JavaScript

- In JavaScript both integer and float are under same data type `number`.
- There a global object called `Math` through which we can access various useful methods and properties to work with numbers.
- `Math.PI` returns value of mathematical constant `π`.

## Some Useful Methods

- `round()`

  ```js
  /* Returns a supplied numeric expression
   * rounded to the nearest integer
   */
  console.log(Math.round(123.456));
  // Output: 123
  ```

- `floor()`

  ```js
  /* Returns the greatest integer less than
   * or equal to its numeric argument
   */
  console.log(Math.floor(2.98));
  // Output: 2
  ```

- `ceil()`

  ```js
  /* Returns the smallest integer greater than
   * or equal to its numeric argument
   */
  console.log(Math.floor(2.14));
  // Output: 3
  ```

- `random()`

  ```js
  // Return a random value between 0 and 1 (exclusive)
  // 0 < x < 1
  /* If we want to use it for more useful way
   * like generating a number between `min` and `max`
   * value then we can use the following way
   */
  const min = 5;
  const max = 10;

  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomValue);
  // Returns some random number between 5 and 10 (inclusive)
  ```

There many more methods that are useful for working with numbers and mathematics.
