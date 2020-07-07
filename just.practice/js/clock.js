const clockH1 = document.querySelector(".js-clock");

function getRealTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockH1.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getRealTime();
  setInterval(getRealTime, 1000);
}

init();
