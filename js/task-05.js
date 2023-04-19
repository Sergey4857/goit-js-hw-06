const refs = {
  input: document.querySelector("input#name-input"),
  span: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputTextChange);

function onInputTextChange(event) {
  refs.span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.span.textContent = "Anonymous";
  }
}
