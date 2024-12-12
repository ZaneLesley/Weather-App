export async function getWeather(zipCode) {
    try {
        const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
        const api_key = '?key=W2XEKW3Y38KXAWL369RP994SN'
        // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY
        const full_url = url + zipCode + '/next9days' + api_key
        const response = await fetch(full_url, {mode: 'cors'});
        const weatherData = await response.json();
        return {
            currentConditions: {
                //conditions: weatherData.currentConditions.conditions,
                datetime: weatherData.currentConditions.datetime,
                dew: weatherData.currentConditions.dew,
                feelslike: weatherData.currentConditions.feelslike,
                humidity: weatherData.currentConditions.humidity,
                icon: weatherData.currentConditions.icon,
                precip: weatherData.currentConditions.precip,
                precipprob: weatherData.currentConditions.precipprob,
                snow: weatherData.currentConditions.snow,
                // Use a random date to get AM/PM
                sunrise: new Date(`1970-01-01T${weatherData.currentConditions.sunrise}`).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                }),
                sunset: new Date(`1970-01-01T${weatherData.currentConditions.sunset}`).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                }),
                temp: weatherData.currentConditions.temp,
                visibility: weatherData.currentConditions.visibility,
                winddir: weatherData.currentConditions.winddir,
                windgust: weatherData.currentConditions.windgust,
                windspeed: weatherData.currentConditions.windspeed,
            },
            days: weatherData.days.map(day => ({
                conditions: day.conditions,
                datetime: day.datetime,
                //description: day.description,
                dew: day.dew,
                humidity: day.humidity,
                icon: day.icon,
                precip: day.precip,
                precipprob: day.precipprob,
                severerisk: day.severerisk,
                snow: day.snow,
                sunrise: new Date(`1970-01-01T${day.sunrise}`).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                }),
                sunset: new Date(`1970-01-01T${day.sunset}`).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                }),
                tempmax: day.tempmax,
                tempmin: day.tempmin,
                visibility: day.visibility,
                winddir: day.winddir,
                windgust: day.windgust,
                windspeed: day.windspeed
            })),
            description: weatherData.description,
            resolvedAddress: weatherData.resolvedAddress,
            timezone: weatherData.timezone
        };
    } catch (error) {
        console.error("Error fetching and parsing data", error)
        throw error;
    }
}

export async function displayCurrentConditions(weatherData) {
    const weatherContainer = document.getElementById('weather-current')
    try {
        weatherContainer.innerHTML = ""

        for (let key in weatherData.currentConditions) {
            if (key === 'icon') {
                // Do Nothing
            } else {
                let div = document.createElement('div');
                div.id = `${key}`
                let value = weatherData.currentConditions[key];
                div.innerHTML = `${key}: ${value}`;
                weatherContainer.appendChild(div);
            }
        }
    } catch (error) {
        console.error("Error in generating weather HTML", error);
    }

    let video = document.createElement('video');
    video.className = "weather-container-video";
    video.src = "img/raining.mp4"
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    weatherContainer.appendChild(video);
}

export async function displayForecast(weatherData) {
    const weatherForecast = document.getElementById('weather-forecast')
    // Used to map for weatherData for divs.
    const categories = {
        temperature: ["tempmax", "tempmin"],
        weather: ["conditions", "sunset", "sunrise"],
        rain: ["dew", "humidity", "precip", "precipprob"],
        wind: ["visibility", "winddir", "windgust", "windspeed"]
    }

    try {
        weatherForecast.innerHTML = ""
        weatherData.days.forEach(day => {
            let weatherCard = document.createElement('div');
            weatherCard.className = "weather-card"
            weatherCard.id = `day-${day.datetime}`
            let categoryDivs = {};
            for (let category in categories) {
                let categoryDiv = document.createElement('div')
                categoryDiv.className = `weather-category-${category}`
                categoryDivs[category] = categoryDiv;
            }
            for (let key in day) {
                if (key === "icon") {
                    // Do Nothing
                } else {
                    // Div for API call from earlier
                    let div = document.createElement('div');
                    div.id = `${key}`
                    div.className = "weather-card-values"
                    let value = typeof day[key] === "number" ? Math.round(day[key]) : day[key];
                    div.innerHTML = `${value}`;
                    if (key === "temp" || key === "feelslike" || key === "tempmax" || key === "tempmin") {
                        div.insertAdjacentHTML("beforeend", `°`)
                    }

                    // Div for description of each item
                    let div2 = document.createElement('div');
                    div2.id = `${key}-details`
                    div2.className = "weather-card-details"
                    if (key === "tempmax") {
                        div2.innerHTML = "max"
                    } else if (key === "tempmin") {
                        div2.innerHTML = "min"
                    } else if (key === "sunset") {
                        div2.innerHTML = "sunset"
                    } else if (key === "sunrise") {
                        div2.innerHTML = "sunset"
                    } else if (key === "dew") {
                        div2.innerHTML = "dew"
                    } else if (key === "humidity") {
                        div2.innerHTML = "humidity"
                    } else if (key === "precip") {
                        div2.innerHTML = "precipitation"
                    } else if (key === "precipprob") {
                        div2.innerHTML = "precipitation chance"
                    } else if (key === "visibility") {
                        div2.innerHTML = "visibility"
                    } else if (key === "winddir") {
                        div2.innerHTML = "wind direction"
                    } else if (key === "windgust") {
                        div2.innerHTML = "wind gust"
                    } else if (key === "windspeed") {
                        div2.innerHTML = "wind speed"
                    }

                    for (let category in categories) {
                        if (categories[category].includes(key)) {
                            let div3 = document.createElement('div');
                            div3.className = `${category}-category-container`;
                            div3.appendChild(div);
                            div3.appendChild(div2);
                            categoryDivs[category].appendChild(div3);
                        }
                    }
                }
            }
            for (let category in categories) {
                weatherCard.appendChild(categoryDivs[category]);
            }
            weatherForecast.appendChild(weatherCard);
        })
    } catch (error) {
        console.error("Error in generating weather forecast HTML", error);
    }
}
