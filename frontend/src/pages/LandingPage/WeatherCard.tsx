import type {WeatherDay} from "../../types/weatherData.ts";
import AsciiWeatherDisplay from "./weatherDisplays/AsciiWeatherDisplay.tsx";
import TempWeatherDisplay from "./weatherDisplays/TempWeatherDisplay.tsx";
import PrecpWeatherDisplay from "./weatherDisplays/PrecpWeatherDisplay.tsx";
import WindWeatherDisplay from "./weatherDisplays/WindWeatherDisplay.tsx";
import VisibWeatherDisplay from "./weatherDisplays/VisibWeatherDisplay.tsx";

export default function WeatherCard({day}: { day: WeatherDay }) {
    const now = new Date().getHours()
    const date = new Date(day.datetimeEpoch * 1000) // to ms
    const dateInfo = date.toLocaleDateString(undefined, {weekday: "short", month: "short", day: "numeric"});

    return (
        <>
            <div className="flex flex-col w-1/4 min-w-80 border-1 border-gray-600 p-4 gap-4">
                <div className="border-b-1 border-gray-300">{dateInfo}</div>
                <AsciiWeatherDisplay day={day} now={now}></AsciiWeatherDisplay>
                <div className="flex flex-row justify-around gap-4">
                    <TempWeatherDisplay day={day} now={now}/>
                    <PrecpWeatherDisplay day={day} now={now}/>
                </div>
                <div className="flex flex-row justify-around gap-4">
                    <WindWeatherDisplay day={day} now={now}/>
                    <VisibWeatherDisplay day={day} now={now}/>
                </div>
            </div>
        </>
    )
}