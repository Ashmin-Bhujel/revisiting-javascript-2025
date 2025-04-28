# Loops in JavaScript

## `for` loop

- It is one of the most used loops.
- It is an entry control loop i.e. it checks the condition first and then executes the code.

  ### Usage and Example

  ```js
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // Output: [Prints value of `i` from 0 to 9]
  ```

  - In above example the initialization of iterator variable `let i = 0` runs only once at the first iteration.
  - Then the condition check `i < 10` runs at the start of every iteration.
  - The increment or decrement statement `i++` runs at end of every iteration.

  ### `break` and `continue`

  - `break` is used to terminate the current loop or control flow based on some condition.
  - `continue` is used to skip the current iteration of a loop based on some condition.

    ```js
    // Usage of `break`
    for (let i = 0; i <= 5; i++) {
      if (i === 2) {
        console.log(`2 is detected, breaking out of the loop`);
        break;
      }
      console.log(`i = ${i}`);
    }
    // It terminates the loop once `i` becomes 2
    ```

    ```js
    // Usage of `continue`
    for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) {
        console.log(`Even number detected, skipping current iteration`);
        continue;
      }
      console.log(`i = ${i}`);
    }
    // It skip every iteration where `i` becomes an even number
    ```

## `while` loop

- Similar to `for` loop, `while` loop is entry control loop.
- The iterator variable is defined outside the loop's body.
- The increment or decrement statement is inside the loop's body.

  ### Usage and Example

  ```js
  let i = 0;

  while (i < 10) {
    console.log(`i = ${i}`);
    i++;
  }
  // Output: [Prints value of `i` from 0 to 9]
  ```

## `do-while` loop

- It is an exit control loop i.e. the code inside the loop's body gets executed first and checking is done at the end of every iteration.
- The iterator variable is defined outside and increment or decrement statement is written inside the loop's body similar to `while` loop.
- In while loop the code inside the loop's body gets executed at least once even if the condition is false.

  ### Usage and Example

  ```js
  let i = 12;

  do {
    console.log(`i = ${i}`);
    i++;
  } while (i < 10);
  // The loop run for once and prints the value of `i`
  ```
