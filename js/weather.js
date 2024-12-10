export async function getWeather(zipCode) {
    try {
        const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
        const api_key = '?key=W2XEKW3Y38KXAWL369RP994SN'
        // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY
        const full_url = url + zipCode + api_key
        const response = await fetch(full_url, {mode: 'cors'});
        const weatherData = await response.json();
        return {
            currentConditions: {
                conditions: weatherData.currentConditions.conditions,
                datetime: weatherData.currentConditions.datetime,
                description: weatherData.currentConditions.description,
                dew: weatherData.currentConditions.dew,
                feelslike: weatherData.currentConditions.feelslike,
                feelslikemax: weatherData.currentConditions.feelslikemax,
                feelslikemin: weatherData.currentConditions.feelslikemin,
                humidity: weatherData.currentConditions.humidity,
                icon: weatherData.currentConditions.icon,
                precip: weatherData.currentConditions.precip,
                precipprob: weatherData.currentConditions.precipprob,
                severerisk: weatherData.currentConditions.severerisk,
                snow: weatherData.currentConditions.snow,
                sunrise: weatherData.currentConditions.sunrise,
                sunset: weatherData.currentConditions.sunset,
                temp: weatherData.currentConditions.temp,
                tempmax: weatherData.currentConditions.tempmax,
                tempmin: weatherData.currentConditions.tempmin,
                visibility: weatherData.currentConditions.visibility,
                winddir: weatherData.currentConditions.winddir,
                windgust: weatherData.currentConditions.windgust,
                windspeed: weatherData.currentConditions.windspeed,
            },
            days: weatherData.days.map(day => ({
                conditions: day.conditions,
                datetime: day.datetime,
                description: day.description,
                dew: day.dew,
                feelslike: day.feelslike,
                feelslikemax: day.feelslikemax,
                feelslikemin: day.feelslikemin,
                humidity: day.humidity,
                icon: day.icon,
                precip: day.precip,
                precipprob: day.precipprob,
                severerisk: day.severerisk,
                snow: day.snow,
                sunrise: day.sunrise,
                sunset: day.sunset,
                temp: day.temp,
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
