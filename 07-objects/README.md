# Objects in JavaScript

- We store data in key-value pair inside an object.
- Every data types except primitives are some kind of object in JavaScript.
- We can access and assign value from and to an object using either dot notation `.` or bracket notation `[]`.

## Creating an Object

- Using object literal

  ```js
  const user = {
    name: "John Doe",
    age: 28,
  };
  ```

- Using object constructor

  ```js
  const user = new Object();
  user.name = "Jane Stark";
  user.age = 26;
  ```

## Some Useful Methods

- `Object.assign()`

  ```js
  /* Copy the values of all of the enumerable own properties
   * from one or more source objects to a target object
   * Returns the target object.
   */
  const u1 = { a: 1, b: 2 };
  const u2 = { c: 3, d: 4 };
  const u3 = Object.assign({}, u1, u2);
  console.log(u3);
  // Output: {a: 1, b: 2, c: 3, d: 4}
  ```

- `Object.keys()`

  ```js
  // Returns an array of enumerable names of properties and methods
  const user = {
    name: "Jane Foster",
    age: 26,
  };
  console.log(Object.keys(user));
  // Output: ["name", "age"]
  ```

- `Object.values()`

  ```js
  // Returns an array of values of the enumerable own properties of an object
  const repository = {
    name: "revisiting-javascript-2025",
    createdOn: "2025 April 21",
  };
  console.log(Object.values(repository));
  // Output: ["revisiting-javascript-2025", "2025 April 21"]
  ```

- `Object.freeze()`: Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

## Spread Operator with Object

- We can combine and copy one or more objects into an object using spread operator `...`

  ```js
  const l1 = { a: 1, b: 2 };
  const l2 = { c: 3, d: 4 };
  const l3 = { ...l1, ...l2 };
  console.log(l3);
  // Output: {a: 1, b: 2, c: 3, d: 4}
  ```

## Object Destructuring

- We can destructure an object i.e. extracting data from an object using object destructuring.

  ```js
  const user = {
    name: "Eli Manson",
    age: 24,
  };

  const { name } = user;
  console.log(name);
  // Output: "Eli Manson"

  // We can also use another name instead
  const { age: userAge } = user;
  console.log(userAge);
  // Output: 24
  ```
