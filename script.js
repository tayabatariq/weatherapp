const apiKey = "94b226a73afcf26ee2a2240536252e59";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchox = document.querySelector(".inputsearch");
const searchbtn = document.querySelector(".searchbtn");

async function checkWeather(city) {
  
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
   
}

searchbtn.addEventListener("click", () => {
    const city = searchox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
