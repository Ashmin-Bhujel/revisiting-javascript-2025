const user = {
  name: "Ashmin Bhujel",
  age: 21,
  isBackFromBreak: true,
};

Object.keys(user).forEach((key, index) => {
  console.log(`[${index + 1}] - [${key}] - [${user[key]}]`);
});
