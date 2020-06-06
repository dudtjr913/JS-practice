const form = document.querySelector(".js-hello"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_NL = "currentUser";
const SHOWING = "showing";

function saveName(text) {
  localStorage.setItem(USER_NL, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintHello(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

function paintHello(text) {
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerText = `Hello ${text}`;
}

function loadHello() {
  const currentUser = localStorage.getItem(USER_NL);
  if (currentUser === null) {
    askForName();
  } else {
    paintHello(currentUser);
  }
}

function init() {
  loadHello();
}
init();
