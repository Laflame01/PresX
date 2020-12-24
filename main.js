const API = '64929040b1f2c19079d8a59d206b7759';
const search = document.getElementById('searchBox');
let displayCity = document.getElementsByClassName('city')[0];
let displayDate = document.getElementsByClassName('date')[0];
let temperature = document.getElementById('temp');
let weather = document.getElementsByClassName('weather')[0];
let lowTemp = document.getElementById('min');
let highTemp = document.getElementById('max');

const getWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        displayCity.innerHTML = data.name;
        displayDate.innerHTML = new Date();
        temperature.innerHTML = Math.floor(data.main.temp);
        weather.innerHTML = data.weather[0].main;
        lowTemp.innerHTML = Math.floor(data.main.temp_min);
        highTemp.innerHTML = Math.floor(data.main.temp_max);
    })
}

search.onkeypress = (event) => {
    if(event.keyCode === 13) {
        getWeather(search.value)
    }
}


document.addEventListener('DOMContentLoaded',getWeather('tbilisi'));
