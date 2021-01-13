const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=ded1d7fe2e2f677e43611b3e0fe25e22&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = 'Минск';
  } else {
    city.textContent = localStorage.getItem('city');
  }
  getWeather();
}

function setCity(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('city', e.target.innerText);
      city.blur();
    }
  } else {
    localStorage.setItem('city', e.target.innerText);
  }
  getWeather();
}

getCity();

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);