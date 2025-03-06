const apiKey = "f5994464f8fa6c54da8e84cfefc93eff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weatherimg");

async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-condition").style.display = "none";
    }
    else{
        var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed+"Kmph";
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/weather-app-img_pnxdcr/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/weather-app-img_pnxdcr/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/weather-app-img_pnxdcr/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/weather-app-img_pnxdcr/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/weather-app-img_pnxdcr/images/mist.png";
    }
    
    document.querySelector(".weather-condition").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

    

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
});

