const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeItemsIngredients = ingredients.map((value) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = value;
  console.log(itemEl);
  return itemEl;
});

const classListel = document.querySelector("ul#ingredients");

classListel.append(...makeItemsIngredients);
