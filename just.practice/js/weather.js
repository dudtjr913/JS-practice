const weatherInf = document.querySelector(".js-weather");

const USER_GEO = "geo";
const API_KEY = "83a2e79014cb1a10f8b1e4087082c3f1";

function paintGeo(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const name = json.name;
      weatherInf.innerText = `${name} , ${temp}℃ `;
    });
}

function geoSuccess(geo) {
  const lat = geo.coords.latitude;
  const lon = geo.coords.longitude;
  const geoObj = {
    lat: lat,
    lon: lon,
  };
  localStorage.setItem(USER_GEO, JSON.stringify(geoObj));
}
function geoFail() {
  console.log("you can't acceess");
}

function askForGeo() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
}

function getGeo() {
  const currentGeo = localStorage.getItem(USER_GEO);
  if (currentGeo === null) {
    askForGeo();
  } else {
    const parsedGeo = JSON.parse(currentGeo);
    paintGeo(parsedGeo.lat, parsedGeo.lon);
  }
}

function init() {
  getGeo();
}
init();
