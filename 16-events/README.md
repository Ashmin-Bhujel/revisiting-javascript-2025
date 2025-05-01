# Events in JavaScript

- We can listen to different types of browser events and perform some tasks with JavaScript.

- Some most used events types are mouse events, keyboard events, touch events, etc.

## Different Ways to Listen for Events

- Using `on[event]` attribute

  ```html
  <body>
    <button onclick="console.log('You clicked the button.')">Click Me!</button>
  </body>
  ```

- Using `on[event]` property

  ```html
  <body>
    <button>Click Me!</button>

    <!-- JavaScript -->
    <script>
      const button = document.querySelector("button");
      button.onclick = function () {
        console.log("You clicked the button.");
      };
    </script>
  </body>
  <!-- You can also use an arrow function -->
  ```

- Using `addEventListener()` method `[Preferred way]`

  ```html
  <body>
    <button>Click Me!</button>

    <!-- JavaScript -->
    <script>
      const button = document.querySelector("button");
      button.addEventListener("click", function () {
        console.log("You clicked the button.");
      });
    </script>
  </body>
  <!-- You can also use an arrow function -->
  ```

## Event Object

- When an event occurs, the browser creates an event object that contains information about the event.

- The event object is passed as an argument to the event handler function.

- The event object contains properties and methods that provide information about the event and allow you to control its behavior.

  ```js
  element.addEventListener(
    "click",
    function (event) {
      console.log(event.target);
    },
    true
  );
  ```

## Event Flow

- Events in JavaScript can flow in two ways: capturing and bubbling.

  - Capturing: The event starts from the root element and flows down to the target element.

  - Bubbling: The event starts from the target element and flows up to the root element.

- By default, events bubble up from the target element to the root element.

- You can use the `addEventListener()` method to specify whether you want to use capturing or bubbling by passing a third argument.

  ```js
  element.addEventListener(
    "click",
    function () {
      console.log("Event invoked");
    },
    true
  );
  ```

- You can also use the `stopPropagation()` method to stop the event from bubbling up or capturing down.

  ```js
  element.addEventListener("click", function () {
    event.stopPropagation();
  });
  ```

- You can also use the `stopImmediatePropagation()` method to stop the event from bubbling up and prevent any other event handlers from being called on the same element.

  ```js
  element.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
  });
  ```

- You can also use the `preventDefault()` method to prevent the default action of the event from being triggered.

  ```js
  element.addEventListener("click", function (event) {
    event.preventDefault();
  });
  ```

## Some Useful Properties and Methods

- `event.timestamp`: Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

- `target`: Returns the target object/element that triggered the event.

- `currentTarget`: Returns the object/element whose event is currently being invoked.

- `screenX/screenY`: Returns the X/Y coordinates of the mouse pointer relative to the screen's boundary (mouse event property).

- `clientX/clientY`: Returns the X/Y coordinates of the mouse pointer relative to the viewport (visible area) (mouse event property).

- `pageX/pageY`: Returns the X/Y coordinates of the mouse pointer relative to the document (considers page scroll also) (mouse event property).

- `offsetX/offsetY`: Returns the X/Y coordinates of the mouse pointer relative to the target element (mouse event property).

- `key`: Returns the key that was pressed (keyboard event property).

- `keyCode`: Returns the key code of the key that was pressed (keyboard event property).

- `preventDefault()`: Prevents the default action of the event from being triggered.

- `stopPropagation()`: Stops the event from bubbling up to the parent elements.

- `stopImmediatePropagation()`: Stops the event from bubbling up to the parent elements and prevents any other event handlers from being called.
