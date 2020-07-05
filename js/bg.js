const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImg(number) {
  const img = new Image();
  img.src = `./js/image/${number}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);
}

function genImg() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genImg();
  paintImg(randomNumber);
}
init();
