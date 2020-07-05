const coords = document.querySelector(".js-coords");

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
      console.log(json);
      const temp = json.main.temp;
      const place = json.name;
      coords.innerText = `${temp} @ ${place}`;
    });
}

function geoSuccess(geo) {
  const longitude = geo.coords.longitude,
    latitude = geo.coords.latitude;
  const geoObj = {
    longitude: longitude,
    latitude: latitude,
  };
  localStorage.setItem(USER_GEO, JSON.stringify(geoObj));
  paintGeo(latitude, longitude);
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
    paintGeo(parsedGeo.latitude, parsedGeo.longitude);
  }
}

function init() {
  getGeo();
}
init();
