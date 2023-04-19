const refs = {
  input: document.querySelector("input#validation-input"),
  length: document
    .querySelector("input[data-length]")
    .getAttribute("data-length"),
};

refs.input.addEventListener("blur", onInputTextChange);

function onInputTextChange(event) {
  const currentInputLength = event.currentTarget.value.length;
  if (
    currentInputLength < Number(refs.length) ||
    currentInputLength > Number(refs.length)
  ) {
    refs.input.classList.add("invalid");
  } else {
    refs.input.classList.replace("invalid", "valid");
  }
}
