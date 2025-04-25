# Scopes in JavaScript

- Before ES6 we were limited to `var` for variable declaration and `var` had problems with scoping, as all variables declared with `var` were global-scoped variables and that introduced various issues.
- After ES6 `let` and `const` were introduced and now we can declare block-scoped variables and constants with them which prevents leaking of variables to global scopes.
- In JavaScript and most of the other programming language a scope is enclosed by curly braces `{}`.

## Usage and Examples

```js
// Global scope
let username = "John";

// Block scope
{
  let username = "Jane";
  // Here the `username` having value `Jane` is limited to only this scope
  // And has priority over than that declared in global scope
  console.log(username);
  // Output: "Jane"
}

console.log(username);
// Output: "John"
```

### Nested scopes

```js
function parentScope() {
  const numbers = [1, 2, 3, 4];

  function childScope() {
    const fruits = ["Apple", "Mango", "Grapes"];
    console.log(numbers);
    // Output: [1, 2, 3, 4]
    console.log(fruits);
    // Output: ["Apple", "Mango", "Grapes"]
  }
  childScope();

  console.log(numbers);
  // Output: [1, 2, 3, 4]
  console.log(fruits);
  // This will return an error
  // The outer function `parentScope` cannot access the variables from inner function `childScope`
  // But the inner function can access variables declared in its outer scope `parentScope`
}
parentScope();
```
