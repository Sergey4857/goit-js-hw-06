const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((value) => {
  console.log(`Category: ${value.firstElementChild.textContent}`);

  console.log(
    `Elements: ${value.lastElementChild.querySelectorAll("li").length}`
  );
});
