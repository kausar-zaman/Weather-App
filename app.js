const api = {
    key: "56a96815f8b070251f708f1b1c7e87ee", 
    base: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
       return weather.json(); 
    }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let weather_icon = document.querySelector('.location .icon');
    weather_icon.innerHTML = `<img src="./icons/${weather.weather[0].icon}.png" height="200px" width="200px"/>`;
    
    /*let description = document.querySelector('.current .description');
    description.innerText = weather.weather[0].description;*/

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

    // Sunrise Time
    let sunrise =  `${weather.sys.sunrise}`;
    let unix_timestamp = sunrise;
    var current_date = new Date(unix_timestamp * 1000);
    let time_zone = `${weather.timezone}` / 3600 - 1;
    current_date.setHours(current_date.getHours() + time_zone);
    let sunrise_time = document.querySelector('.sunrise_time');
    sunrise_time.innerText = `Sunrise: ${current_date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;

    // Sunset Time
    let sunset =  `${weather.sys.sunset}`;
    let unix = sunset;
    var todays_date = new Date(unix * 1000);
    let tz = `${weather.timezone}` / 3600 - 1;
    todays_date.setHours(todays_date.getHours() + tz);
    let sunset_time = document.querySelector('.sunset_time');
    sunset_time.innerText = `Sunset: ${todays_date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;

}

function dateBuilder (d) {
    let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}
