let pages = document.getElementsByClassName('pages');
let welcomeMsg = document.querySelector('.welcome-msg');
let home = document.querySelector('#home');
let hourlyWeather = document.querySelector('#hourly-weather');
let about = document.querySelector('#about');
let homePage = document.querySelector('#home-page');
let hourlyWeatherPage = document.querySelector('#hourly-weather-page');
let aboutPage = document.querySelector('#about-page');

//welcomeMsg.style.display = 'block';

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





