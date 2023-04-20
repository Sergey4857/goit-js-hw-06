const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallery = document.querySelector(".gallery");
listGallery.style.display = "flex";
listGallery.style.justifyContent = "center";
listGallery.style.listStyle = "none";
listGallery.style.padding = "0";
listGallery.style.gap = "30px";

const markup = images.map(
  (value) => `
  <li class= "item">
    <img src="${value.url}" alt="${value.alt}" width = '400' height = '267'>
  </li>
`
);

listGallery.insertAdjacentHTML("afterbegin", markup);
