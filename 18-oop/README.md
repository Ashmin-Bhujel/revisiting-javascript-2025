# Object Oriented Programming in JavaScript

- JavaScript is a prototype-based language, which means that objects can inherit properties and methods from other objects.

- JavaScript uses constructor functions to create objects, which can be thought of as blueprints for creating instances of objects.

- JavaScript also supports classes, which are syntactical sugar over constructor functions and prototypes.

## Prototypes

- In JavaScript, every object has a prototype, which is another object from which it inherits properties and methods.

- The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects.

- When you access a property or method on an object, JavaScript first checks if the property or method exists on the object itself. If it doesn't, it checks the object's prototype, and so on up the prototype chain until it finds the property or method or reaches the end of the chain (null).

- You can create a new object that inherits from another object using `Object.create()`, which creates a new object with the specified prototype object and properties.

- You can also use the `__proto__` property to access an object's prototype, but this is not recommended as it is not part of the official JavaScript specification and may not work in all environments.

- Instead, you should use `Object.getPrototypeOf()` to get an object's prototype and `Object.setPrototypeOf()` to set an object's prototype.

- You can also use the `instanceof` operator to check if an object is an instance of a particular constructor function or class.

  ```js
  function Person(name) {
    this.name = name;
  }

  const john = new Person("John");
  console.log(john instanceof Person); // true
  console.log(john instanceof Object); // true
  ```

- You can also use the `isPrototypeOf()` method to check if an object is in the prototype chain of another object.

  ```js
  function Person(name) {
    this.name = name;
  }

  function Employee(name, job) {
    Person.call(this, name);
    this.job = job;
  }

  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;

  const john = new Employee("John", "Developer");
  console.log(Person.prototype.isPrototypeOf(john)); // true
  console.log(Employee.prototype.isPrototypeOf(john)); // true
  console.log(john instanceof Person); // true
  console.log(john instanceof Employee); // true
  ```

## Getters and Setters

- Getters and setters are special methods that allow you to define how properties of an object are accessed and modified.
- You can define getters and setters using the `get` and `set` keywords.
- Getters are used to retrieve the value of a property, while setters are used to set the value of a property.

  ```js
  const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };

  console.log(person.fullName); // John Doe

  person.fullName = "Jane Smith";
  console.log(person.firstName); // Jane
  console.log(person.lastName); // Smith
  ```

## `this` keyword

- The `this` keyword in JavaScript refers to the object that is currently executing the code.

- In a method, `this` refers to the object that the method is called on.

  ```js
  const person = {
    name: "John",
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

  person.greet(); // Hello, my name is John
  ```

- In a constructor function, `this` refers to the instance of the object being created.

  ```js
  function Person(name) {
    this.name = name;
  }

  const john = new Person("John");
  console.log(john.name); // John
  ```

- In a regular function, `this` refers to the global object (or `undefined` in strict mode).

  ```js
  function greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  const name = "John";
  greet(); // Hello, my name is John
  ```

- In an event handler, `this` refers to the element that triggered the event.

  ```html
  <button id="myButton">Click me</button>

  <script>
    const button = document.getElementById("myButton");
    button.addEventListener("click", function () {
      console.log(this); // <button id="myButton">Click me</button>
    });
  </script>
  ```

- In arrow functions, `this` is lexically bound, meaning it retains the value of `this` from the enclosing context.

  ```js
  const person = {
    name: "John",
    greet: function () {
      const arrowFunction = () => {
        console.log(`Hello, my name is ${this.name}`);
      };
      arrowFunction();
    },
  };
  person.greet(); // Hello, my name is John
  ```

## `new` keyword

- The `new` keyword is used to create a new instance of an object using a constructor function.
- When you use the `new` keyword, JavaScript does the following:

  - Creates a new object.
  - Sets the prototype of the new object to the constructor function's prototype.
  - Calls the constructor function with `this` set to the new object.
  - Returns the new object unless the constructor function returns a different object.

- You can use the `new` keyword with both constructor functions and classes.

  ```js
  function Person(name) {
    this.name = name;
  }
  const john = new Person("John");
  console.log(john.name); // John
  ```

  ```js
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  const john = new Person("John");
  console.log(john.name); // John
  ```

- You can also use the `new` keyword with built-in objects like `Date`, `Array`, and `RegExp`.

  ```js
  const date = new Date();
  console.log(date); // Current date and time
  ```

  ```js
  const arr = new Array(1, 2, 3);
  console.log(arr); // [1, 2, 3]
  ```

  ```js
  const regex = new RegExp("abc");
  console.log(regex); // /abc/
  ```
