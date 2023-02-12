let cName = document.querySelector('.city-name');
let date = document.querySelector('.day-and-date');
let clock = document.querySelector('.time');
let farenheit = document.querySelector('.main-left-farenheit');
let tempDesc = document.querySelector('.main-left-temp-desc');
let highTemp = document.querySelector('.high-temp');
let mph = document.querySelector('.wind-mph');
let riseTime = document.querySelector('.sunrise-time');
let lowTemp = document.querySelector('.low-temp');
let rainPer = document.querySelector('.rain-percent');
let setTime = document.querySelector('.sunset-time');

document.querySelector('button').addEventListener('click', weather)

function weather(){
    let city = document.querySelector('#city').value.toLowerCase()
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=632a49dfefab49c186110226231202&q=${city}&days=7&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        cName.textContent = data.location.name + ',' + data.location.region;
        date.textContent = data.forecast.forecastday[0].date.toString();
        farenheit.textContent = data.current.temp_f.toString();
        tempDesc.textContent = data.forecast.forecastday[0].day.condition.text.toString();
        highTemp.textContent = data.forecast.forecastday[0].day.maxtemp_f.toString();
        mph.textContent = data.current.wind_mph.toString();
        riseTime.textContent = data.forecast.forecastday[0].astro.sunrise;
        lowTemp.textContent = data.forecast.forecastday[0].day.mintemp_f.toString();
        rainPer.textContent = data.forecast.forecastday[0].day.daily_chance_of_rain.toString()
        setTime.textContent = data.forecast.forecastday[0].astro.sunset

    })
}