const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

const city = document.getElementById('cities')
const getWeatherButton = document.querySelector('.button')

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=fdaed127dd07d0eca0c2e4345b0d194d&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  console.log(data)

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

getWeather()

getWeatherButton.addEventListener('click', getWeather)
