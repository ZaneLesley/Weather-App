import {getWeather, displayCurrentConditions, displayForecast} from './weather.js'

const weatherForm = document.getElementById('weather-form')
const zip = document.getElementById('zip')

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const zipCode = zip.value
    if(!zipCode) {
        alert('Please enter a zip code');
        return;
    }

    try {
        const weatherData = await getWeather(zipCode);
        console.log(weatherData);
        await displayCurrentConditions(weatherData);
        await displayForecast(weatherData);

    } catch (error) {
        console.error("Error in fetching data" , error);
    }
})

