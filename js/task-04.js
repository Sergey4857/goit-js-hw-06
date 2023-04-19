let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector('button[data-action = "decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  span: document.querySelector("#value"),
};

refs.btnDecrement.addEventListener("click", onBtnDecrementClick);
refs.btnIncrement.addEventListener("click", onBtnIncremenClick);

function onBtnDecrementClick() {
  counterValue -= 1;
  refs.span.textContent = counterValue;
}
function onBtnIncremenClick() {
  counterValue += 1;
  refs.span.textContent = counterValue;
}
