import type {WeatherDay} from "../../types/weatherData.ts";
import AsciiWeatherDisplay from "./weatherDisplays/AsciiWeatherDisplay.tsx";
import TempWeatherDisplay from "./weatherDisplays/TempWeatherDisplay.tsx";
import PrecpWeatherDisplay from "./weatherDisplays/PrecpWeatherDisplay.tsx";
import WindWeatherDisplay from "./weatherDisplays/WindWeatherDisplay.tsx";
import VisibWeatherDisplay from "./weatherDisplays/VisibWeatherDisplay.tsx";
import type {SetStateAction} from "react";

export default function WeatherCard({day, index, setShowModal, setIndex}: {
    day: WeatherDay,
    index: number
    setShowModal: React.Dispatch<SetStateAction<boolean>>
    setIndex: React.Dispatch<SetStateAction<number>>
}) {

    const now = new Date().getHours()
    const date = new Date(day.datetimeEpoch * 1000) // to ms
    const dateInfo = date.toLocaleDateString(undefined, {weekday: "short", month: "short", day: "numeric"});

    function handleClick() {
        setIndex(index)
        setShowModal(true)
    }

    return (
        <>
            <button onClick={handleClick} className="flex flex-col w-1/6 min-w-90 border-1 border-gray-600 p-4 gap-4">
                <div className="border-b-1 border-gray-300 w-full">{dateInfo}</div>
                <AsciiWeatherDisplay day={day} now={now}></AsciiWeatherDisplay>
                <div className="flex flex-row justify-around gap-4 w-full">
                    <TempWeatherDisplay day={day} now={now}/>
                    <PrecpWeatherDisplay day={day} now={now}/>
                </div>
                <div className="flex flex-row justify-around gap-4 w-full">
                    <WindWeatherDisplay day={day} now={now}/>
                    <VisibWeatherDisplay day={day} now={now}/>
                </div>
            </button>
        </>
    )
}