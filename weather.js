//DOM
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

  //Day2  
    let day2 = document.querySelector(".day2");
    let day2Img= document.querySelector(".day2-img");
    let day2Temp= document.querySelector(".day2-temp");

  //Day3  
    let day3 = document.querySelector(".day3");
    let day3Img = document.querySelector(".day3-img");
    let day3Temp = document.querySelector(".day3-temp");

  //Day4  
    let day4 = document.querySelector(".day4");
    let day4Img = document.querySelector(".day4-img");
    let day4Temp = document.querySelector(".day4-temp");

  //Day5  
    let day5 = document.querySelector(".day5");
    let day5Img = document.querySelector(".day5-img");
    let day5Temp = document.querySelector(".day5-temp");

  //Day6  
    let day6 = document.querySelector(".day6");
    let day6Img = document.querySelector(".day6-img");
    let day6Temp = document.querySelector(".day6-temp");

  //Day7  
    let day7 = document.querySelector(".day7");
    let day7Img = document.querySelector(".day7-img");
    let day7Temp = document.querySelector(".day7-temp");

    let daten;
document.querySelector('button').addEventListener('click', weather)




function weather(){
    let city = document.querySelector('#city').value.toLowerCase()
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=632a49dfefab49c186110226231202&q=${city}&days=7&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
      //weather-header-left
        cName.textContent = data.location.name + ',' + data.location.region;
        date.textContent = data.forecast.forecastday[0].date.toString();

      //weather-main-left
        farenheit.textContent = data.current.temp_f.toString();
        tempDesc.textContent = data.forecast.forecastday[0].day.condition.text.toString();

      //weather-main-right
        highTemp.textContent = data.forecast.forecastday[0].day.maxtemp_f.toString();
        mph.textContent = data.current.wind_mph.toString();
        riseTime.textContent = data.forecast.forecastday[0].astro.sunrise;
        lowTemp.textContent = data.forecast.forecastday[0].day.mintemp_f.toString();
        rainPer.textContent = data.forecast.forecastday[0].day.daily_chance_of_rain.toString()
        setTime.textContent = data.forecast.forecastday[0].astro.sunset
      
      //weather-bottom
       //weekdays
        day2.textContent = Intl.DateTimeFormat('en-GB', {  weekday: 'long', timeZone: "America/New_York"}).format(Date.parse(data.forecast.forecastday[2].date));
        day3.textContent = Intl.DateTimeFormat('en-GB', {  weekday: 'long', timeZone: "America/New_York"}).format(Date.parse(data.forecast.forecastday[3].date));
        day4.textContent = Intl.DateTimeFormat('en-GB', {  weekday: 'long', timeZone: "America/New_York"}).format(Date.parse(data.forecast.forecastday[4].date));
        day5.textContent = Intl.DateTimeFormat('en-GB', {  weekday: 'long', timeZone: "America/New_York"}).format(Date.parse(data.forecast.forecastday[5].date));
        day6.textContent = Intl.DateTimeFormat('en-GB', {  weekday: 'long', timeZone: "America/New_York"}).format(Date.parse(data.forecast.forecastday[6].date));
        day7.textContent = Intl.DateTimeFormat('en-GB', {  weekday: 'long', timeZone: "America/New_York"}).format(Date.parse(data.forecast.forecastday[0].date));

       //weekdays forecast images 
        day2Img.src = data.forecast.forecastday[2].day.condition.icon;
        day3Img.src = data.forecast.forecastday[3].day.condition.icon;
        day4Img.src = data.forecast.forecastday[4].day.condition.icon;
        day5Img.src = data.forecast.forecastday[5].day.condition.icon;
        day6Img.src = data.forecast.forecastday[6].day.condition.icon;
        day7Img.src = data.forecast.forecastday[0].day.condition.icon;
       
       //weekdays forecast 
       day2Temp.textContent = data.forecast.forecastday[2].day.condition.text;
       day3Temp.textContent = data.forecast.forecastday[3].day.condition.text;
       day4Temp.textContent = data.forecast.forecastday[4].day.condition.text;
       day5Temp.textContent = data.forecast.forecastday[5].day.condition.text;
       day6Temp.textContent = data.forecast.forecastday[6].day.condition.text;
       day7Temp.textContent = data.forecast.forecastday[0].day.condition.text;
    })
}