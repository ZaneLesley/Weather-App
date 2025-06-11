import type {WeatherData} from '../types/weatherData.ts'

export const fetchWeather = async (): Promise<WeatherData> => {
    console.log("Fetching weather...");
    const response = await fetch(
        `${import.meta.env.VITE_VISUAL_CROSSING_API_URL}73135/next6days` +
        `?key=${import.meta.env.VITE_VISUAL_CROSSING_API_KEY}` +
        `&lang=id`)
    if (!response.ok) {
        throw new Error("Failed to fetch weather data from Visual Crossing")
    }
    return response.json()
}