function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "82f2ff36563otbde1564b5ee447a074a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}$units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", refreshWeather);
