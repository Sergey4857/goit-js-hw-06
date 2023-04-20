const refs = {
  input: document.querySelector("#controls input"),
  boxes: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", () => {
  createBoxes(refs.input.value);
});

refs.destroyBtn.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
});

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const createBoxes = (amount) => {
  let size = 30;
  let boxStyle = "";

  for (let i = 0; i < amount; i += 1) {
    let color = getRandomHexColor();
    boxStyle += `<div style="width: ${size}px;
                     height: ${size}px; 
                     background-color: ${color};"></div>`;

    size += 10;
  }
  refs.boxes.insertAdjacentHTML("afterbegin", boxStyle);
};
