# Call, Bind and Apply

## Call

- `call` is a method that allows you to call a function with a specific `this` value and arguments provided individually.
- It is used to invoke a function with a given `this` value and arguments provided individually.
- It is useful when you want to borrow methods from one object and use them in another object.
- It is a method of the `Function` prototype.

  ```js
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }

  const person = {
    name: "Alice",
  };

  greet.call(person, "Hello"); // Output: Hello, Alice
  ```

## Apply

- `apply` is similar to `call`, but it takes an array of arguments instead of individual arguments.
- It is used to invoke a function with a given `this` value and arguments provided as an array (or array-like object).
- It is useful when you want to pass an array of arguments to a function.
- It is a method of the `Function` prototype.

  ```js
  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }

  const person = {
    name: "Alice",
  };

  greet.apply(person, ["Hello", "!"]); // Output: Hello, Alice!
  ```

## Bind

- `bind` is a method that creates a new function that, when called, has its `this` keyword set to the provided value.
- It allows you to set the `this` value for a function and also pre-fill some arguments.
- It is useful when you want to create a new function with a specific `this` value and arguments.
- It does not invoke the function immediately; instead, it returns a new function.
- It is a method of the `Function` prototype.

  ```js
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }

  const person = {
    name: "Alice",
  };

  const greetAlice = greet.bind(person);
  greetAlice("Hello"); // Output: Hello, Alice
  ```
