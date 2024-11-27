const apiKey = "94b226a73afcf26ee2a2240536252e59";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchox = document.querySelector(".inputsearch");
const searchbtn = document.querySelector(".searchbtn");
const weatherImg = document.querySelector(".weatherimg");

async function checkWeather(city) {
  
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main == "Clouds" ){
            weatherImg.src="images/clouds.png"

        }
        else if(data.weather[0].main=="Clear" ){
            weatherImg.src="images/clear.png"
        }
        else if(data.weather[0].main=="Drizzle" ){
            weatherImg.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Rain" ){
            weatherImg.src="images/rain.png"
        }
        else if(data.weather[0].main=="Snow" ){
            weatherImg.src="images/snow.png"
        }
         else if(data.weather[0].main=="Mist" ){
            weatherImg.src="images/mist.png"
        } else if(data.weather[0].main=="Haze" ){
            weatherImg.src="images/mist.png"
        }
        
   
}

searchbtn.addEventListener("click", () => {
    const city = searchox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});



// nav faq 
function openfaq(){
    // Frequently Asked Questions
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        // Toggle the 'open' class
        faq.classList.toggle('open');
        
        // Change the icon class
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    });
});
}
openfaq();


// aoslibrary
   
AOS.init({
    offset: 250,
  
    duration: 2000,
    container: '.scroll-container',

    
}) 
$(window).on("scroll", function () {
        AOS.init();
    });

//    end AOS
