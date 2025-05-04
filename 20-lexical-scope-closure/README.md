# Lexical Scope and Closure

## Lexical Scope

- Lexical scope is a feature of JavaScript that determines the scope of variables based on their location in the source code. It means that a variable's scope is determined by where it is declared, not where it is called.

- In JavaScript, functions create their own scope. Variables declared inside a function are not accessible from outside that function. This is known as function scope.

- However, if a function is defined inside another function, the inner function has access to the variables of the outer function. This is known as lexical scoping.

- Lexical scope allows for the creation of closures, which are functions that have access to the outer function's variables even after the outer function has returned.

## Closure

- A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

- Closures are created whenever a function is defined inside another function. The inner function has access to the outer function's variables, even after the outer function has returned.

- Closures are often used to create private variables and functions, as well as to maintain state in asynchronous programming.

- Closures can also be used to create functions that remember their environment, allowing for more flexible and powerful programming patterns.

  ```js
  function powerFunctionGenerator(power) {
    function temp(base) {
      return base ** power;
    }
    return temp;
  }

  const square = powerFunctionGenerator(2);
  const cube = powerFunctionGenerator(3);

  console.log(square(2)); // 4
  console.log(cube(2)); // 8
  ```

- In the example above, `powerFunctionGenerator` returns a function that calculates the power of a number. The inner function `temp` has access to the `power` variable, even after `powerFunctionGenerator` has returned. This is an example of a closure.
