const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");

// Event capturing
level1.addEventListener(
  "click",
  () => {
    console.log("%cEvent capturing: Level 1", "color: #0afbac");
  },
  true
);

level2.addEventListener(
  "click",
  () => {
    console.log("%cEvent capturing: Level 2", "color: #0afbac");
  },
  true
);

level3.addEventListener(
  "click",
  () => {
    console.log("%cEvent capturing: Level 3", "color: #0afbac");
  },
  true
);

// Event bubbling
level1.addEventListener("click", () => {
  console.log("%cEvent bubbling: Level 1", "color: #faab0c");
});

level2.addEventListener("click", () => {
  console.log("%cEvent bubbling: Level 2", "color: #faab0c");
});

level3.addEventListener("click", () => {
  console.log("%cEvent bubbling: Level 3", "color: #faab0c");
});
