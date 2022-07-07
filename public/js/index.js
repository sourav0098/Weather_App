const city = document.getElementById("city");
const searchBtn = document.getElementById("search");
const error = document.getElementById("error");
const tempInfo = document.getElementsByClassName("temp-info-container")[0];

searchBtn.addEventListener("click", async (e) => {
  let html = "";
  e.preventDefault();
  error.innerHTML = "";
  if (city.value == "") {
    error.innerHTML = "Please enter city name";
  } else {
    try {
      let cityName = city.value;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b09fdd3466bffae46479013ee893dfce&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      html += `<div class="temp-info">
                    <div class="inner-temp-info">
                        <h2 class="city">${data.name}</h2>
                        <h1 class="temp">${Math.floor(data.main.temp)}°C</h1>
                        <h2 class="weather-condition">${data.weather[0].main}</h2>
                    </div>
                    <div class="min-max-temp">
                        <p>Min temp: ${data.main.temp_min} °C</p>
                        <p>Max temp: ${data.main.temp_min} °C</p>
                    </div>
                    <div class="humidity">
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed}km/h</p>
                    </div>
                </div>`;
      tempInfo.innerHTML = html;
    } catch (err) {
      error.innerHTML = "Please enter valid city name";
    }
  }
});
