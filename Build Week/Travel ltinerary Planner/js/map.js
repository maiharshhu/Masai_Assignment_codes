// Initialize Leaflet map centered on Delhi
const map = L.map("map").setView([28.6139, 77.2090], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const geocoder = L.Control.geocoder({
  defaultMarkGeocode: false,
  placeholder: "Search for places..."
}).addTo(map);

let marker;

const weatherLocationEl = document.getElementById("weather-location");
const weatherDescriptionEl = document.getElementById("weather-description");
const weatherDetailsEl = document.getElementById("weather-details");

geocoder.on("markgeocode", async function (e) {
  const latlng = e.geocode.center;

  // Remove old marker if any
  if (marker) {
    map.removeLayer(marker);
  }

  // Add marker on searched location
  marker = L.marker(latlng).addTo(map);
  map.setView(latlng, 12);

  // Fetch weather and update UI
  try {
    const weatherData = await fetchWeather(latlng.lat, latlng.lng);
    updateWeatherUI(weatherData, e.geocode.name);
  } catch (error) {
    weatherLocationEl.textContent = "Error fetching weather data";
    weatherDescriptionEl.textContent = "";
    weatherDetailsEl.innerHTML = "";
  }
});

async function fetchWeather(lat, lon) {
  const apiKey = process.env.OpenwKey; // Replace with your key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error("Weather API error");
  return await resp.json();
}

function updateWeatherUI(data, locationName) {
  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  weatherLocationEl.textContent = `Weather in ${locationName}`;
  weatherDescriptionEl.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
  weatherDetailsEl.innerHTML = `
    <li>Temperature: ${temp} °C</li>
    <li>Humidity: ${humidity} %</li>
    <li>Wind Speed: ${windSpeed} m/s</li>
  `;
}
