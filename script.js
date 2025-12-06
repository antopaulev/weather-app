const apiKey = "your key";  // replace with your key

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
  }
});
cityInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

async function getWeather(city) {
  const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      alert("City not found!");
      return;
    }

    const data = await response.json();
    updateUI(data);

  } catch (error) {
    alert("Error fetching data!");
  }
}
const iconMap = {
  "01d": "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
  "01n": "https://cdn-icons-png.flaticon.com/512/5265/5265333.png",
  "02d": "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
  "02n": "https://cdn-icons-png.flaticon.com/512/4130/4130303.png",
  "03d": "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
  "03n": "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
  "04d": "https://cdn-icons-png.flaticon.com/512/414/414825.png",
  "04n": "https://cdn-icons-png.flaticon.com/512/414/414825.png",
  "09d": "https://cdn-icons-png.flaticon.com/512/3313/3313998.png",
  "09n": "https://cdn-icons-png.flaticon.com/512/3313/3313998.png",
  "10d": "https://cdn-icons-png.flaticon.com/512/1163/1163634.png",
  "10n": "https://cdn-icons-png.flaticon.com/512/1163/1163634.png",
  "11d": "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
  "11n": "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
  "13d": "https://cdn-icons-png.flaticon.com/512/642/642102.png",
  "13n": "https://cdn-icons-png.flaticon.com/512/642/642102.png",
  "50d": "https://cdn-icons-png.flaticon.com/512/4151/4151022.png",
  "50n": "https://cdn-icons-png.flaticon.com/512/4151/4151022.png"
};

function updateUI(data) {
  document.getElementById("cityName").textContent = data.name;

  document.getElementById("temperature").textContent =
    `Temperature: ${data.main.temp}°C`;

  document.getElementById("feelsLike").textContent =
    `Feels Like: ${data.main.feels_like}°C`;

  document.getElementById("humidity").textContent =
    `${data.main.humidity}%`;

  document.getElementById("wind").textContent =
    `${data.wind.speed} m/s`;

  document.getElementById("description").textContent =
    data.weather[0].description;

  const iconCode = data.weather[0].icon;
  document.getElementById("weatherIcon").src = iconMap[iconCode];


  document.getElementById("weatherResult").classList.remove("hidden");
}
