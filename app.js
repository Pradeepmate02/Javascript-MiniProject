
const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=7156ff825208430283051657240704"

let city = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let hide = document.querySelector(".hide");
let hide2 = document.querySelector(".invisible")
let speed = document.querySelector(".speed");
let humid = document.querySelector(".humid");
let tempC = document.querySelector(".temp");
let cityTemp = document.querySelector(".city")
let weatherImg = document.querySelector(".weather img")

btn.addEventListener("click", ()=>{
    weatherInfo();

})
 const weatherInfo = async() =>{
    let cityName = city.value;
    if(cityName == ""){
        hide.classList.remove("hide");

    }
    else{
        hide.classList.add("hide")
        hide2.classList.remove("invisible")
    }
    const URL = `${BASE_URL}&q=${cityName}`
    let response = await fetch(URL)
    let info = await response.json()
    let data = info.current;
    let weather = data.condition.text;
    if(weather == "Sunny"){
        weather = "clear";
    }
    let weatherIcon = data.condition.icon;
    let humidity = data.humidity;
    let temp = data.temp_c;
    let windS = data.wind_kph;
    console.log(data)
    console.log(temp)
    weatherImg.src = `weather-app-img/images/${weather}.png`
    tempC.innerText =`${temp}°C`;
    speed.innerText = `${windS}Km/hr`;
    humid.innerText = `${humidity}%`;
    cityTemp.innerText = `${cityName.toUpperCase()}`
 }