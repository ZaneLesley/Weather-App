import type {WeatherData} from '../types/weatherData.ts'

export const fetchWeather = async (zipcode: string): Promise<WeatherData> => {
    console.log("Fetching weather...");
    const response = await fetch(
        `${import.meta.env.VITE_VISUAL_CROSSING_API_URL}${zipcode}/next6days` +
        `?key=${import.meta.env.VITE_VISUAL_CROSSING_API_KEY}` +
        `&lang=id`)
    if (!response.ok) {
        throw new Error("Failed to fetch weather data from Visual Crossing")
    }
    return response.json()
}

export const getCurrentZipcode = async () => {
    return new Promise<string>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const {latitude, longitude} = position.coords;
                    const response = await fetch(
                        `${import.meta.env.VITE_OPEN_CAGE_API_URL}q=${latitude}+${longitude}&key=${import.meta.env.VITE_OPEN_CAGE_API_KEY}`
                    );

                    const data = await response.json();
                    const zip = data.results?.[0]?.components?.postcode;
                    resolve(zip);
                } catch (err) {
                    console.error(err);
                    reject(err);
                }
            },
            (error) => {
                console.error("Geolocation Error: ", error);
                reject(error);
            }
        );
    });
};
