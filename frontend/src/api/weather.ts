import type {WeatherData} from '../types/weatherData.ts'

export const fetchWeather = async (zipcode: string): Promise<WeatherData> => {
    console.log("Fetching weather...");
    if (zipcode === '') {
        throw new Error("zipcode is required");
    }
    const response = await fetch(
        `${import.meta.env.VITE_VISUAL_CROSSING_API_URL}${zipcode}/next9days` +
        `?key=${import.meta.env.VITE_VISUAL_CROSSING_API_KEY}` +
        `&lang=id`)
    if (!response.ok) {
        throw new Error("Failed to fetch weather data from Visual Crossing")
    }
    return response.json()
}

export const getCurrentZipcode = async (): Promise<string | null> => {
    return new Promise<string | null>((resolve) => {
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
                    resolve(null)
                }
            },
            (error) => {
                console.warn("Geolocation Error: ", error);
                resolve(null);
            }
        );
    });
};
