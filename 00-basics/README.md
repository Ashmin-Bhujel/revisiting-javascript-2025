# JavaScript Basics

## Comments

- Single-line comment

  ```js
  // This is a single-line comment
  ```

- Multi-line comment

  ```js
  /* This
   * is
   * a
   * multi-line
   * comment
   */
  ```

## Variables

- We can declare variables using either `var` or `let` keyword.

  ### Using `var` keyword

  ```js
  var username = "John";
  /* If we use `var` for variable declaration
   * its value can be reassigned
   * also we can redeclare an existing variable
   */

  username = "Peter";
  /* The value "Peter"
   * is reassigned to the variable `username`
   */

  var username = "Jane";
  /* The variable `username` is redeclared
   * with a new value "Jane"
   */

  // `var` defines global-scoped variables
  {
    var age = 24;
  }

  console.log(age);
  // The variable `age` is accessible
  // Output: 24
  ```

  ### Using `let` keyword

  ```js
  let username = "Peter";
  /* We can reassign a variable's value
   * but we cannot redeclare a variable
   * declared using `let`
   */

  username = "Gwen";
  /* The value "Gwen"
   * is reassigned to the variable `username`
   */

  let username = "Gwen";
  // It gives an error

  // `let` declares block-scoped variables
  {
    let age = 26;
  }

  console.log(age);
  // The variable `age` is not accessible
  // It gives an error
  ```

## Constants

- In `JavaScript` we can declare constants using `const` keyword.

- They have similar features like variables declared using `let` keyword except that they cannot be reassigned.

  ### Using `const` keyword

  ```js
  const PI = 3.14159;

  PI = 3.14;
  // It gives and error
  ```

## Data Types

### Primitives

- `number`
- `string`
- `boolean`
- `undefined`
- `null`
- `bigint`

  #### Usage and examples

  - `number`

    ```js
    // number
    let age = 21;
    console.log(age, typeof age);
    // Output: 21 number
    ```

  - `string`

    ```js
    // string
    let username = "Jane";
    console.log(username, typeof username);
    // Output: "Jane" string
    ```

  - `boolean`

    ```js
    // Boolean
    let isRaining = false;
    console.log(isRaining, typeof isRaining);
    // Output: false boolean
    ```

  - `undefined`

    ```js
    // undefined
    /* It is the default value of variables
     * which are declared but not initialized
     */
    let notInitialized;
    console.log(notInitialized, typeof notInitialized);
    // Output: undefined undefined
    ```

  - `null`

    ```js
    // null
    /* It is standalone value in it self
     * used for explicitly mean nothing/empty value
     */
    let emptyValue = null;
    console.log(emptyValue, typeof emptyValue);
    // Output: null object

    /* NOTE:
     * The type of `null` is returned as an `object`
     * but `null` is a primitive, It has something to do with
     * the bits used by `typeof` operator in JavaScript
     * to determine type of a variable
     */
    ```

  - `bigint`

    ```js
    // bigint
    /* It is used for working with big numbers
     * We define a `bigint` number by
     * adding 'n' at the end of a big number
     */
    let bigNumber = 12345678910111213141516n;
    console.log(bigNumber, typeof bigNumber);
    // Output: 12345678910111213141516n bigint
    ```
