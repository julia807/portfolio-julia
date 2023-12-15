const temperature = document.querySelector(".city_temperature");
const description = document.querySelector(".city_weather_description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const lat = document.getElementById("lat");
const long = document.getElementById("long");

var search_button = document.querySelector(".searchBtn");
var search_input = document.querySelector(".search-Input");

//We first take user input, that is the city entered by the user in the search bar.
const takeUserInput = function () {

    console.log(lat.value,long.value)
    gethcurrweath(lat.value,long.value)
}


//We pass this input(specified city) to the api to get the response/details about the weather back
const getCityCurrentWeather = function (city) {

    //the api_url looks for the specified city from the input to get its current weather info
    const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=25ba9b1776ffb6593c36f34fa561c2c2&units=metric';
    const api_url2 = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
    fetch(api_url)
        .then(response => {
            console.log(response)
            if(!response.ok) {
                alert("Error: No weather available, check your input!");
            }
            const responseFromApi = response.json();
            return responseFromApi;
        })

        .then(responseFromApi => {
            displayCurrentWeatherResults(responseFromApi);
        })

        .catch(err => {
            console.log(err);
        });

        
}

const gethcurrweath = function (lat, long) {

    //the api_url looks for the specified city from the input to get its current weather info
    
    const api_url2 = 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+long+'&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max'
    fetch(api_url2)
        .then(response => {
            console.log(response)
            if(!response.ok) {
                alert("Error: No weather available, check your input!");
            }
            const responseFromApi = response.json();
            return responseFromApi;
        })

        .then(responseFromApi => {
            wind.innerText = "Wind speed: " + responseFromApi.daily.wind_speed_10m_max[1] + "km/h";
            humidity.innerText = "Humidity: " + responseFromApi.daily.precipitation_probability_max[1] + "%";
            temperature.innerHTML = "Temp: " + responseFromApi.daily.temperature_2m_max[1] + " °C";
        })

        .catch(err => {
            console.log(err);
        });

        
}



//we pass the weather results from the api to the display function, to display the weather of the city.
const displayCurrentWeatherResults = function(responseFromApi) {

    console.log(responseFromApi)
    temperature.innerHTML = "Temp: " + Math.round(responseFromApi.main.temp) + " °C";
    description.innerText = responseFromApi.weather[0].description;
    humidity.innerText = "Humidity: " + responseFromApi.main.humidity + "%";
    wind.innerText = "Wind speed: " + responseFromApi.wind.speed + " km/h";


}
