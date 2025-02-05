// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Enter your city");
// if (city) {
//   city = city.toLowerCase();
//   if (weather[city] !== undefined) {
//     let temperature = Math.round(weather[city].temp);
//     let humidity = weather[city].humidity;
//     let celsiusTemperature = Math.round(temperature);
//     let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
//     alert(
//       `It is currently ${temperature}°C (${fahrenheitTemperature})°F in ${city} with ${humidity}% humidity`
//     );
//   } else {
//     alert(
//       `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//     );
//   }
// }
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "8d5t2fef6ec3ec9b6a24fff70o406b36";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial&`;
 axios.get(apiUrl).then(displayTemperature);
}


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function displayTemperature(response) {


  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}°F`;

let city = response.data.city;
let cityElement= document.querySelector("#current-city");
cityElement.innerHTML = city;

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let currentDateElement = document.querySelector("#date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);




