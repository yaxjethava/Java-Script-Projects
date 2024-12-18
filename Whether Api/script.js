
let apiKey = "96584284a27dd3a776751d625d60c410";

//for search event
let form = document.getElementById("input_form");
let user_input = document.getElementById("user_input");

//values of dom
let city_name_dom = document.getElementById("city");
let temp = document.getElementById("temp");
let max_temp = document.getElementById("max-temp");
let min_temp = document.getElementById("min-temp");
let image = document.getElementById("icon_img")
let main_weather = document.getElementById("main_weather");
let cloud_value = document.getElementById("cloud_value");
let real_feel = document.getElementById("real-feel");
let wind_speed = document.getElementById("wind-speed");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

//for other city
let other_city_img_1 = document.getElementById("other_icon_img_1")
let other_city_img_2 = document.getElementById("other_icon_img_2")
let other_city_img_3 = document.getElementById("other_icon_img_3")

let other_city_name_1 = document.getElementById("other-city-name-1")
let other_city_name_2 = document.getElementById("other-city-name-2")
let other_city_name_3 = document.getElementById("other-city-name-3")

let other_city_temp_1 = document.getElementById("other-city-temp-1")
let other_city_temp_2 = document.getElementById("other-city-temp-2")
let other_city_temp_3 = document.getElementById("other-city-temp-3")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    weatherCall(user_input.value);
    // user_input.value = ""
    console.log(user_input.value)
});

weatherCall

async function weatherCall(city) {

    try {
        let fetchresult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let result = await fetchresult.json();
        console.log(result)
        if (result.cod == 404) {
            city_name_dom.textContent = "not found"//city name
            temp.textContent = `0°C`
            max_temp.textContent = `0°`
            min_temp.textContent = `0°`
            image.src = `https://openweathermap.org/img/wn/10d@2x.png`// changing img src
            main_weather.textContent = "-"
            cloud_value.textContent = `0%`
            real_feel.textContent = `0°`
            wind_speed.textContent = `- km/h`
            humidity.textContent = `0%`
            pressure.textContent = `- Pa`
        } else
            //append new vlaue in DOM
            city_name_dom.textContent = result.name//city name
        temp.textContent = `${result.main.temp}°C`
        max_temp.textContent = `${result.main.temp_max}°`
        min_temp.textContent = `${result.main.temp_min}°`
        image.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`// changing img src
        main_weather.textContent = result.weather[0].main
        cloud_value.textContent = `${result.clouds.all}%`
        real_feel.textContent = `${result.main.feels_like}°`
        wind_speed.textContent = `${result.wind.speed} km/h`
        humidity.textContent = `${result.main.humidity}%`
        pressure.textContent = `${result.main.pressure} Pa`
    } catch (e) {
        console.log(e)
    }

}
async function weatherCallForDelhi(city) {

    try {
        let fetchresult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let result = await fetchresult.json();
        console.log(result)
        if (result.cod == 404) {
            other_city_name_2.textContent = "not found"//city name
            other_city_temp_2.textContent = `0°C`
            other_city_img_2.src = `https://openweathermap.org/img/wn/10d@2x.png`// changing img src
        } else
            //append new vlaue in DOM
            other_city_name_2.textContent = result.name//city name
        other_city_temp_2.textContent = `${result.main.temp}°C`
        other_city_img_2.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`// changing img src
    } catch (e) {
        console.log(e)
    }

}
async function weatherCallForGandhinagar(city) {

    try {
        let fetchresult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let result = await fetchresult.json();
        console.log(result)
        if (result.cod == 404) {
            other_city_name_1.textContent = "not found"//city name
            other_city_temp_1.textContent = `0°C`
            other_city_img_1.src = `https://openweathermap.org/img/wn/10d@2x.png`// changing img src
        } else
            //append new vlaue in DOM
            other_city_name_1.textContent = result.name//city name
        other_city_temp_1.textContent = `${result.main.temp}°C`
        other_city_img_1.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`// changing img src
    } catch (e) {
        console.log(e)
    }

}
async function weatherCallForBangalore(city) {

    try {
        let fetchresult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let result = await fetchresult.json();
        console.log(result)
        if (result.cod == 404) {
            other_city_name_3.textContent = "not found"//city name
            other_city_temp_3.textContent = `0°C`
            other_city_img_3.src = `https://openweathermap.org/img/wn/10d@2x.png`// changing img src
        } else
            //append new vlaue in DOM
            other_city_name_3.textContent = result.name//city name
        other_city_temp_3.textContent = `${result.main.temp}°C`
        other_city_img_3.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`// changing img src
    } catch (e) {
        console.log(e)
    }

}
weatherCall("amreli")
weatherCallForDelhi("Delhi");
weatherCallForGandhinagar("Gandhinagar");
weatherCallForBangalore("Bangalore");