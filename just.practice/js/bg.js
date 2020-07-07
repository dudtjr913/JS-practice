const bgBody = document.querySelector("body");

const bgNumber = 5;

function genBg(random) {
  const img = new Image();
  bgBody.appendChild(img);
  img.src = `./js/image/${random}.jpg`;
  img.classList.add("bgShow");
}

function randomNumber() {
  return Math.ceil(Math.random() * bgNumber);
}

function init() {
  const whatNumber = randomNumber();
  genBg(whatNumber);
}
init();
