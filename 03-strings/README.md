# Strings in JavaScript

- String is simply a collection of characters.
- Normally we write strings inside double quotes `""` or single quotes `''`.
- String in any programming language is one of the most powerful data type.

## Some Useful String Methods

**NOTE:** Since `string` is a primitive data type the methods that are accessible to work with strings are provided by the temporary wrapper object of `String()` around the original `string`.

- `split()`

  ```js
  /* Splits an string into substrings
   * using specified separator
   */
  let username = "Jane Olsen";
  console.log(username.split(""));
  // Output: ["Jane", "Olsen"]
  ```

- `slice()`

  ```js
  /* Returns substring from the string using specified
   * start and end index (exclusive)
   */
  let username = "Jane Olsen";
  console.log(username.split(1, 4));
  // Output: "ane"
  ```

- `toUpperCase()`

  ```js
  // Converts all alphabetic characters to uppercase
  let fruit = "Mango";
  console.log(fruit.toUpperCase());
  // Output: "MANGO"
  ```

- `toLowerCase()`

  ```js
  // Converts all alphabetic characters to lowercase
  let fruit = "Guava";
  console.log(fruit.toLowerCase());
  // Output: "guava"
  ```

- `charAt()`

  ```js
  // Returns the character at specified index
  let fruit = "Grapes";
  console.log(fruit.chatAt(2));
  // Output: 'a'
  ```

- `indexOf()`

  ```js
  /* Returns the index of first match of
   * the given substring
   * and returns -1 if there is not a match.
   * [Case Sensitive]
   */
  let username = "Sara Evans";
  console.log(username.indexOf("ra"));
  // Output: 2
  ```

- `includes()`

  ```js
  /* Returns `true` if there is a match of
   * given substring else `false`
   * [Case Sensitive]
   */
  let username = "Ellie Brown";
  console.log(username.include("own"));
  // Output: true
  ```
