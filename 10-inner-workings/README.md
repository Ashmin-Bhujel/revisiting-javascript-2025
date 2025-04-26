# Inner Workings of JavaScript

- JavaScript is a single threaded language.

- All the code execution happens in a single thread.

- It uses things like call stack, event loop, Web APIs, etc for managing and running code executions.

## Execution Context

- In JavaScript, execution context is an environment created for evaluation and execution of code.

- They get destroyed after completion of their execution.

- There are mainly two types of execution contexts

  - Global execution context

    - It is created when code first starts to execute.

  - Function execution context

    - It is created for every function call.

- Inside every execution context both global and function execution context there are two phases

  - Memory creation phase

    - In this phase all the variables and functions are allocated memory, variables gets assigned `undefined` as default value and functions are hoisted and assigned their function definition.

  - Code execution phase

    - In this phase every statement, expression and function call are evaluated.

    - Variables gets assigned their values.

## Call Stack

- It is used for keeping track of execution context.

- Like every stack data structure it works on LIFO (Last In First Out) principle.

- After creation of every execution context they gets pushed into the call stack.

- After completion of execution of every execution context it gets popped from the call stack.

## Example

```js
let a = 10;

function square(x) {
  return x * x;
}

const result = square(a);

console.log(`Result: ${result}`);
```

### In the above example

- When the code starts executing, a global execution context is created and pushed into the call stack.
- The variable `a` is created and assigned `undefined` in the memory creation phase.
- The function `square` is hoisted and assigned its definition in the memory creation phase.
- The variable `result` is created and assigned `undefined` in the memory creation phase.
- The code execution phase starts and the variable `a` is assigned the value `10`.
- The function `square` is called with the argument `10`.
- A new function execution context is created for the function `square` and pushed into the call stack.
- The variable `x` is created and assigned `undefined` in the memory creation phase of the function execution context.
- The variable `x` is assigned the value `10` in the code execution phase of the function execution context.
- The expression `x * x` is evaluated and the result `100` is returned.
- The function execution context is popped from the call stack.
- The variable `result` is assigned the value `100` in the global execution context.
- The `console.log` statement is executed and the output `Result: 100` is printed to the console.
- The global execution context is popped from the call stack.
- The call stack is empty.
- The program execution is completed.
