# DOM in JavaScript

- DOM stands for Document Object Model.
- It is basically a large object tree structure with all the different document nodes.

## Different DOM Selectors

- `getElementById()`

  - Selects an DOM element using its id.

    ```html
    <body>
      <h1 id="page-title">DOM in JavaScript</h1>

      <!-- JavaScript -->
      <script>
        const pageTitle = document.getElementById("page-title");
        console.log(pageTitle.textContent);
      </script>
    </body>

    <!-- Selects and prints the text content of the element
    having id "page-title" to the console -->
    ```

- `getElementsByClassName()`

  - Selects multiple elements having same class name.
  - Returns `HTMLCollection` which is like an `array` but lacks features.
  - We can convert `HTMLCollection` into an `array` using `Array.from()` method.

    ```html
    <body>
      <h1 id="page-title">DOM in JavaScript</h1>
      <p class="content">Hello</p>
      <p class="content">World</p>
      <p class="content">Revisiting JavaScript in 2025</p>

      <!-- JavaScript -->
      <script>
        const contents = document.getElementsByClassName("content");
        const iterableContents = Array.from(contents);

        iterableContents.forEach((content) => {
          content.style.color = "orange";
        });
      </script>

      <!-- Selects and changes the text color of all the elements
      having class name "content" -->
    </body>
    ```

- `querySelector()`

  - It supports complex queries to select elements
  - We can use CSS like query. e.g. `#card-title`, `.box`, `p:first-child`, etc.
  - Selects the first element that matches the given query.

    ```html
    <body>
      <h1 id="page-title">DOM in JavaScript</h1>
      <p class="content">Hello</p>
      <p class="content">World</p>
      <p class="content">Revisiting JavaScript in 2025</p>

      <!-- JavaScript -->
      <script>
        const firstContent = document.querySelector(".content");
        firstContent.style.color = "red";
      </script>

      <!-- Selects and changes the text color of first element
      having class name "content" to red -->
    </body>
    ```

- `querySelectorAll()`

  - Similar to `querySelector()` but selects multiple elements having the same class name.
  - Returns a `NodeList` which is similar to an `array` and supports `forEach()` method.

    ```html
    <body>
      <h1 id="page-title">DOM in JavaScript</h1>
      <main>
        <p class="content">Hello</p>
        <p class="content">World</p>
        <p class="content">Revisiting JavaScript in 2025</p>

        <div>
          <p class="content">Inside</p>
          <p class="content">the</p>
          <p class="content">&lt;div&gt;</p>
          <p class="content">element</p>
        </div>
      </main>

      <!-- JavaScript -->
      <script>
        const directChildOfMain = document.querySelectorAll("main > .content");
        console.log(directChildOfMain);
      </script>
    </body>

    <!-- Selects and prints the `NodeList` of all the elements
    which are direct child of `main` element
    and has class name "content" -->
    ```

## Some Useful Properties and Methods

- `id`: Returns the value of `id` attribute of the selected element.

- `className`: Returns the value of `class` attribute of the selected element.

- `classList`: Returns a `DOMTokenList` of the class names of the selected element.

  - `add`: Adds a class name from the class names list.

  - `remove`: Removes a class name from the class names list.

  - `toggle`: Toggles class name i.e. adds if not exists and removes if exists from the class names list.

- `style`: Returns `CSSStyleDeclaration` of the selected element, we can also assign some value e.g. `.style.color = "red"` changes the text color to "red".

- `textContent`: Returns all the text content of the selected element.

- `innerText`: Returns visible text content of the selected element.

- `innerHTML`: Returns HTML content inside of the selected element.

- `children`: Returns `HTMLCollection` of the child elements of the selected element.

- `childNode`: Returns `NodeList` of the child nodes of the selected element.

- `firstElementChild`: Returns first child element of the selected element.

- `lastElementChild`: Returns last child element of the selected element.

- `nextElementSibling`: Returns next sibling element of the selected element.

- `previousElementSibling`: Returns previous sibling element of the selected element.

- `replaceWith`: Replaces currently selected element with specified element.

- `getAttribute(attributeName)`: Returns the value of specified attribute of the selected element.

- `setAttribute(attributeName, value)`: Sets the given value to specified attribute of the selected element.

- `document.createElement("Element Name")`: Creates the specified HTML element.

- `appendChild(childElement)`: Appends an child element to the selected element.

- `insertAdjacentElement(position, element)`: Inserts an element at the specified position to the selected element.

  - The supported positions are `"beforebegin"`, `"afterbegin"`,`"beforeend"` and` "afterend"`.

- `remove()`: Removes the currently selected element.
