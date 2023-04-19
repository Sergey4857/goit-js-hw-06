const refs = {
  input: document.querySelector("input#font-size-control"),
  span: document.querySelector("span#text"),
};
refs.span.style.fontSize;
console.log(refs.span.style.fontSize);
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.span.style.fontSize = event.currentTarget.value + "px";
}
