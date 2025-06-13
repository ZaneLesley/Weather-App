import type {WeatherDay} from "../../../types/weatherData.ts";

export default function PrecpWeatherDisplay({day, now}: { day: WeatherDay, now: number }) {
    return (
        <>
            <div className="flex flex-col w-1/2 p-2 border border-gray-300 text-center">
                <div>{day.hours[now].precipprob}% <small>|
                    ({day.precip}'')</small></div>
                <small>precipitation</small>
            </div>
        </>
    )
}
