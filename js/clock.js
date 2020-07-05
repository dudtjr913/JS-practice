const clockContainer = document.querySelector(".js-clock"),
  clockTime = clockContainer.querySelector("h1");

function realTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTime.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  realTime();
  setInterval(realTime, 1000);
}
init();
