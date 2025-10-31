const apiKey = "2cf3a95d8d87b722ba1f2030dbdea044";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    if(!city){
        alert("please enter a city name!");
        return;
    }
    const response = await fetch(apiurl +city+ `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
       document.querySelector(".error").style.display = "block";
    }else{

        var data = await response.json();
   

    document.querySelector(".city").innerHTML =  data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C ";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="weather-app-img/images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src="weather-app-img/images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="weather-app-img/images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "weather-app-img/images/snow.png";
    }else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "weather-app-img/images/mist.png";
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "weather-app-img/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
      
    
}

searchBtn.addEventListener("click",()=>{

    checkWeather(searchBox.value);
});
