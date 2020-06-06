const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImg(num) {
  const image = new Image();
  image.src = `js/image/${num + 1}.jpg`;
  image.classList.add("randomImg");
  body.appendChild(image);
}

function randomNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const createImg = randomNumber();
  paintImg(createImg);
}
init();
