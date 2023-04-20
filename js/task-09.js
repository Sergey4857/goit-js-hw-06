const refs = {
  button: document.querySelector("button.change-color"),
  span: document.querySelector("span.color"),
  body: document.querySelector("body"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  refs.span.textContent = event.currentTarget.value = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
