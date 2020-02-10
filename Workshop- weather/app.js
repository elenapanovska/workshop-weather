let pages = document.getElementsByClassName('pages');
let welcomeMsg = document.querySelector('.welcome-msg');
let home = document.querySelector('#home');
let hourlyWeather = document.querySelector('#hourly-weather');
let about = document.querySelector('#about');
let homePage = document.querySelector('#home-page');
let hourlyWeatherPage = document.querySelector('#hourly-weather-page');
let aboutPage = document.querySelector('#about-page');


for(let i = 1; i < pages.length; i ++) {
    pages[i].style.display = 'none';
}

home.addEventListener('click', () => {
    homePage.style.display = 'block';
    hourlyWeatherPage.style.display ='none';
    aboutPage.style.display = 'none';
})

hourlyWeather.addEventListener('click', () => {
    hourlyWeatherPage.style.display = 'block';
    aboutPage.style.display = 'none';
    homePage.style.display = 'none';

})

about.addEventListener('click', () => {
    aboutPage.style.display = 'block';
    hourlyWeatherPage.style.display ='none';
    homePage.style.display = 'none';
})


async function getStatisctics(city){
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=41f14ef8a5c3cb4101da73fc81385f7a`);
        let dailyStatistics = await response.json()
        console.log(dailyStatistics)

        showStatistics(dailyStatistics)
    }catch {

    }
}
function showStatistics (dailyStatistics){
    let cityName = document.querySelector('#cityName').innerHTML = dailyStatistics.name;
    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${new Date(dailyStatistics.dt * 1000).toLocaleString('en-GB')}<br>
                            ${dailyStatistics.main.temp} &#8451 <br>
                             Highest temperature: ${dailyStatistics.main.temp_max} &#8451`

}

 let searchBtn = document.querySelector('#search-btn')
                        .addEventListener('click', () => {
                        city = document.querySelector('#search-city').value;
                        getStatisctics(city)
                        });

//getStatisctics('skopje')



async function getHourlyWeather(city){
    //let city = document.querySelector('#search-city').value;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=41f14ef8a5c3cb4101da73fc81385f7a`);
        let hourlyWeather = await response.json()
        console.log(hourlyWeather)

        showHourlyWeather(hourlyWeather)
    }catch {

    }
}

function showHourlyWeather(hourlyWeather){
   // let cityName = document.querySelector('#city-name').innerHTML= `Hourly weather for ${hourlyWeather.city.name}`
    let tbody = document.querySelector('#tbody');
    for(let i = 0; i < hourlyWeather.list.length; i++){
        let tr = document.createElement('tr')
        tbody.appendChild(tr);

        let tdTime = document.createElement('td');
        tr.appendChild(tdTime);
        let img = document.createElement("img");
        img.src = `http://openweathermap.org/img/w/${hourlyWeather.list[i].weather[0].icon}.png`;
        tdTime.appendChild(img)
        tdTime.innerHTML = new Date (hourlyWeather.list[i].dt * 1000).toLocaleString('en-GB');
                           
        let tdDes = document.createElement('td');
        tr.appendChild(tdDes);
        tdDes.innerHTML = hourlyWeather.list[i].weather[0].description;

        let tdTemp = document.createElement('td');
        tr.appendChild(tdTemp);
        tdTemp.innerHTML = hourlyWeather.list[i].main.temp + '&#8451';

        let tdWind = document.createElement('td');
        tr.appendChild(tdWind);
        tdWind.innerHTML = hourlyWeather.list[i].wind.speed + 'mph ';

        let tdHum = document.createElement('td');
        tr.appendChild(tdHum);
        tdHum.innerHTML = hourlyWeather.list[i].main.humidity +'%';  
        
        console.log(hourlyWeather.list[i].weather[0].icon)
    }
}

getHourlyWeather('skopje');




                       
            