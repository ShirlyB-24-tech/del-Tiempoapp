function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
}
function formatedDate(date) {
  let minutes = date.getminutes();
  let hours = date.gethours();
  let days = [];
}
let day = days[date.getDay()];
if (minutes < 10) {
  minutes = `0${minutes}`;
}
return `${day} ${hours}: ${minutes}`;

function searchCity(city) {
  let apikey = "96574tb3d9054b0ffad57ffob464d258";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&unit=metric`;
  axios.get(apiURL).then(updateWeather);
}
