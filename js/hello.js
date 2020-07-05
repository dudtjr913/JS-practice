const helloForm = document.querySelector(".js-hello"),
  helloInput = helloForm.querySelector("input"),
  helloWelcome = document.querySelector(".js-welcome");

const USER_NAME = "currentUser";
const SHOWING = "showing";

function setUser(name) {
  localStorage.setItem(USER_NAME, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const value = helloInput.value;
  setUser(value);
  welcomeUser(value);
}

function askName() {
  helloWelcome.classList.remove(SHOWING);
  helloForm.classList.add(SHOWING);
  helloForm.addEventListener("submit", handleSubmit);
}

function welcomeUser(name) {
  helloWelcome.classList.add(SHOWING);
  helloForm.classList.remove(SHOWING);
  helloWelcome.innerText = `Hello ${name}`;
}

function getUser() {
  const currentUser = localStorage.getItem(USER_NAME);
  if (currentUser === null) {
    askName();
  } else {
    welcomeUser(currentUser);
  }
}

function init() {
  getUser();
}

init();
