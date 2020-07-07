const helloForm = document.querySelector(".js-welcome"),
  helloInput = helloForm.querySelector("input"),
  helloUser = document.querySelector(".js-hello");

const USER_NAME = "currentUser",
  SHOWING = "showing";

function saveUser(value) {
  localStorage.setItem(USER_NAME, value);
}

function handleSubmit(event) {
  event.preventDefault();
  const value = helloInput.value;
  saveUser(value);
  paintUser(value);
}

function askUserName() {
  helloForm.classList.add(SHOWING);
  helloUser.classList.remove(SHOWING);
  helloForm.addEventListener("submit", handleSubmit);
}

function paintUser(value) {
  helloForm.classList.remove(SHOWING);
  helloUser.classList.add(SHOWING);
  helloUser.innerText = `Hello ${value}`;
}

function getUser() {
  const currentUser = localStorage.getItem(USER_NAME);
  if (currentUser === null) {
    askUserName();
  } else {
    paintUser(currentUser);
  }
}

function init() {
  getUser();
}
init();
