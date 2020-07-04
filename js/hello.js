const helloContainer = document.querySelector(".js-hello"),
  helloInput = helloContainer.querySelector("input"),
  helloWelcome = document.querySelector(".js-welcome");

const LOAD_USER = "currentUser";
const SHOWING = "showing";

function setUser(name) {
  localStorage.setItem(LOAD_USER, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const value = helloInput.value;
  paintHello(value);
  setUser(value);
}

function askYourName() {
  helloContainer.classList.add(SHOWING);
  helloContainer.addEventListener("submit", handleSubmit);
}

function paintHello(name) {
  helloContainer.classList.remove(SHOWING);
  helloWelcome.classList.add(SHOWING);
  helloWelcome.innerText = `Hello ${name}`;
}

function getUser() {
  const currentUser = localStorage.getItem(LOAD_USER);
  if (currentUser === null) {
    askYourName();
  } else {
    paintHello(currentUser);
  }
}

function init() {
  getUser();
}
init();
