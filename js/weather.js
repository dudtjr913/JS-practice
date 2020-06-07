const weather = document.querySelector(".js-weather");

const API_KEY = "83a2e79014cb1a10f8b1e4087082c3f1";
const USER_GEO = "userGeo";

function geoInf(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp}℃, ${place}`;
    });
}

function saveGeo(location) {
  localStorage.setItem(USER_GEO, JSON.stringify(location));
}

function successGeo(location) {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  const geoObj = {
    latitude,
    longitude,
  };
  saveGeo(geoObj);
  geoInf(latitude, longitude);
}

function failGeo() {
  console.log("you disagree to access geo");
}

function askForGeo() {
  navigator.geolocation.getCurrentPosition(successGeo, failGeo);
}

function loadGeo() {
  const loadedGeo = localStorage.getItem(USER_GEO);
  if (loadedGeo === null) {
    askForGeo();
  } else {
    const parsedGeo = JSON.parse(loadedGeo);
    geoInf(parsedGeo.latitude, parsedGeo.longitude);
  }
}

function init() {
  loadGeo();
}
init();
