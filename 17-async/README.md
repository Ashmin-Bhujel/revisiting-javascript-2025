# Asynchronous JavaScript

- Asynchronous JavaScript is a programming paradigm that allows for non-blocking operations, enabling the execution of code without waiting for previous operations to complete. This is particularly useful in web development, where tasks like network requests, file I/O, and timers can take time to complete.

- In JavaScript, asynchronous programming can be achieved using callbacks, promises, and async/await syntax. This allows developers to write cleaner and more maintainable code while handling asynchronous operations effectively.

## Difference between synchronous and asynchronous JavaScript

- Synchronous JavaScript executes code sequentially, meaning each line of code must complete before the next one starts. This can lead to blocking behavior, where long-running tasks prevent other code from executing.

- Asynchronous JavaScript, on the other hand, allows for non-blocking execution. This means that while one task is waiting for a response (like a network request), other tasks can continue to run. This improves performance and responsiveness in applications, especially in web development.

## Callbacks

- A callback is a function passed as an argument to another function, which is then executed after the completion of that function. Callbacks are commonly used in asynchronous programming to handle the result of an operation once it is complete.

  ```js
  function fetchData(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      callback(data);
    }, 2000);
  }

  fetchData((data) => {
    console.log("Data received:", data);
  });
  ```

- In this example, the `fetchData` function simulates an asynchronous operation using `setTimeout`. Once the data is ready, it calls the provided callback function with the data as an argument.

- Callbacks can lead to "callback hell," where multiple nested callbacks make the code difficult to read and maintain. This is one of the reasons why promises and async/await were introduced in JavaScript.

## Promises

- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner way to handle asynchronous code compared to callbacks.

- A promise can be in one of three states:

  - Pending: The initial state, neither fulfilled nor rejected.
  - Fulfilled: The operation completed successfully, and the promise has a resulting value.
  - Rejected: The operation failed, and the promise has a reason for the failure.

- Promises can be created using the `Promise` constructor, which takes a function with two parameters: `resolve` and `reject`. The `resolve` function is called when the operation is successful, while the `reject` function is called when it fails.

  ```js
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        resolve(data);
      }, 2000);
    });
  }

  fetchData()
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  ```

- In this example, the `fetchData` function returns a promise that resolves with the data after a 2-second delay. The `then` method is used to handle the resolved value, while the `catch` method handles any errors that may occur.

## Async/Await

- Async/await is a syntactic sugar built on top of promises, making asynchronous code easier to read and write. The `async` keyword is used to define an asynchronous function, and the `await` keyword is used to pause the execution of the function until the promise is resolved.

  ```js
  async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        resolve(data);
      }, 2000);
    });
  }

  async function getData() {
    try {
      const data = await fetchData();
      console.log("Data received:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getData();
  ```

- In this example, the `fetchData` function returns a promise, and the `getData` function uses `await` to pause execution until the promise is resolved. The `try/catch` block is used to handle any errors that may occur during the asynchronous operation.

## XMLHttpRequest

- `XMLHttpRequest` is a built-in JavaScript object that allows you to make HTTP requests to servers. It can be used to fetch data from APIs or send data to servers asynchronously.

  ```js
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log("Data received:", data);
    }
  };
  xhr.send();
  ```

- In this example, an `XMLHttpRequest` object is created to make a GET request to a placeholder API. The `onreadystatechange` event handler checks if the request is complete and successful, and then parses and logs the received data.

## Fetch API

- The Fetch API is a modern alternative to `XMLHttpRequest` for making HTTP requests. It provides a more powerful and flexible feature set, including support for promises and a simpler syntax.

  ```js
  // Using .then, .catch
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Using async/await
  async function getPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        console.log("Data received:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  getPost();
  ```

- In this example, the `fetch` function is used to make a GET request to a placeholder API. The response is checked for success, and if successful, the data is parsed as JSON and logged to the console. Any errors that occur during the request are caught and logged.
