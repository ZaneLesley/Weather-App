import type {WeatherDay} from "../../../types/weatherData.ts";

export default function TempWeatherDisplay({day, now}: { day: WeatherDay, now: number }) {
    return (
        <>
            <div className="flex flex-col w-1/2 p-2 border border-gray-300 text-center">
                <div>{day.hours[now].feelslike}°F</div>
                <small>{day.tempmin}°F | {day.tempmax}°F</small>
            </div>
        </>
    )
}