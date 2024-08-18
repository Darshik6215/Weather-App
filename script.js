// class and id target
const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");

const checkWeather = async (city) => {
  // api key
  const api_key = "0ed74e9157b3f7149754accf0ad4a287";
  // url
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  // fetch api
  const weatherData = await fetch(`${URL}`).then((response) => response.json());

  // 404 error image logic
  if (weatherData.cod === "404") {
    locationNotFound.style.display = "flex";
    weatherBody.style.display = "none";
    return;
  } else {
    locationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
  }

  // temperature
  temperature.innerHTML = `${Math.round(
    weatherData.main.temp - 273.15
  )}<sup>°C</sup>`;
  // description
  description.innerHTML = `${weatherData.weather[0].description}`;
  // humidity
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  // windSpeed
  windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`;

  // api change images
  switch (weatherData.weather[0].main) {
    case "Clouds":
      weatherImg.src =
        "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/cloud.png";
      break;
    case "Clear":
      weatherImg.src =
        "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/clear.png";
      break;
    case "Rain":
      weatherImg.src =
        "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/rain.png";
      break;
    case "Mist":
      weatherImg.src =
        "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/mist.png";
      break;
    case "Snow":
      weatherImg.src =
        "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/snow.png";
      break;
    default:
      break;
  }
};

// search button
searchBtn.addEventListener("click", () => {
  // checkWeather function called
  checkWeather(inputBox.value);
});
