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

  ### Using `var` Keyword

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

  ### Using `let` Keyword

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

  ### Using `const` Keyword

  ```js
  const PI = 3.14159;

  PI = 3.14;
  // It gives and error
  ```

## Data Types

### Primitives [Pass by Value] [Stack Memory]

- `number`
- `string`
- `boolean`
- `undefined`
- `null`
- `bigint`

  #### Usage and Examples

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

### Non-Primitives [Pass by Reference] [Heap Memory]

**NOTE:** Everything except primitive data types are objects in `JavaScript`.

- `object`
- `array`
- `function`

  #### Usage and Examples

  - `object`

    ```js
    // In an object the data is stored in key-value pair
    const userInfo = {
      name: "John Doe",
      age: 26,
      isLoggedIn: false,
    };
    ```

  - `array`

    ```js
    // Array is a collection of related data
    const marks = [78, 80, 64, 56];

    /* In other programming language
     * only the values with same data type
     * can be stored in an array (Homogenous data)
     * but in JavaScript we are allowed to have values
     * with different data types (Heterogenous data)
     */
    const user = ["Jane Parker", 36, true];
    ```

  - `function`

    ```js
    // There are many ways to define a function
    // Normal, Anonymous, Arrow, IIFE

    // Normal function
    function fn1() {
      // Do something
    }

    // Anonymous function
    const fn2 = function () {
      // Do something
    };

    // Arrow function
    const fn3 = () => {
      // Do something
    };

    // IIFE (Immediately Invoked Function Expression)
    (function () {
      // Do something
    })();

    // OR
    (() => {
      // Do something
    })();
    ```

## Data Type Conversions

- To `number`

  ```js
  // Using type conversion function i.e. Number()
  let a = "21";
  let b = Number(a);
  console.log(typeof b);
  // Output: number

  // Using '+' operator
  let x = "123";
  let y = +x;
  console.log(typeof y);
  // Output: number

  // Some conversions to remember
  // NOTE: Here "NaN" means not a number
  // "" => 0
  // "123abc" => NaN
  // [] => 0
  // {} => NaN
  // null => 0
  // undefined => NaN
  // true => 1, false => 0
  ```

- To `string`

  ```js
  // Using type conversion function i.e. String()
  let a = 123;
  let b = String(a);
  console.log(typeof b);
  // Output: string

  // By adding to an empty string
  let x = 2025;
  let y = x + "";
  console.log(typeof y);
  // Output: string

  // Some conversion to remember
  // [] => ""
  // {} => [object Object] (string)
  // null => "null" (string)
  // undefined => "undefined" (string)
  // true => "true", false => "false" (string)
  ```

- To `boolean`

  ```js
  // Using type conversion function i.e. Boolean()
  let a = 1;
  let b = Boolean(x);
  console.log(typeof b);
  // Output: boolean

  // Using '!!' operator
  let x = 123;
  let y = !!x;
  console.log(typeof y);
  // Output: boolean

  // Some conversion to remember
  /* NOTE: Even though [] and {} are empty they are
   * treated as truthy values in JavaScript
   */
  // [] => true
  // {} => true
  // 1 => true, 0 => false (Any number except 0 are treated as truthy value)
  // "" => false, "123" => true (Empty strings are treated as falsy value)
  // null => false
  // undefined => false
  ```
