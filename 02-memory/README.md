# Stack and Heap Memory

## Stack Memory

- All the primitives are stored in stack memory.
- When a variable's value is assigned to another variable only a copy of its value is assigned to it.

  ```js
  let x = 2;
  let y = x;
  // Here ony the copy of value
  // stored in `x` is assigned to `y`

  y = 4;
  console.log(`x: ${x}, y: ${y}`);
  // Output: x: 2, y: 4
  // `x` still has its original value 2
  // While `y` is updated to new value 4
  ```

## Heap Memory

- All the non-primitives are stored in heap memory.
- When a variable's value is assigned to another variable the memory reference is assigned to it.
- It means both old and new variable can access the same original memory reference.

  ```js
  const user1 = {
    name: "John Doe",
    age: 26,
  };

  const user2 = [];
  // Here the same memory reference as
  // user1 is assigned to user2

  user2.name = "Jane Stark";
  console.log(user1);
  console.log(user2);
  // Both variables we will have the new updated
  // value for the property `name` i.e. "Jane Stark"
  ```

- **NOTE:** For only copying the value of one non-primitive to another non-primitive variable we can use spread operator `...`

  ```js
  const user1 = {
    name: "Dave Lee",
    age: 32,
  };

  const newUser = { ...user1 };
  // This copies all the values from `user1`
  // to `newUser` but the memory reference will be different
  ```
