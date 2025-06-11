import type {WeatherDay} from "../../types/weatherData.ts";

import {useEffect, useState} from "react";
import {asciiWeather} from "../../data/asciiWeather.tsx";
import {conditionMap} from "../../data/conditionMap.ts";
import decodeWeatherID from "../../utils/decodeWeatherID.ts";

export default function WeatherCard({day}: { day: WeatherDay }) {
    const conditions = conditionMap[day.conditions.split(",")[0].trim()];
    const [frameIndex, setFrameIndex] = useState<number>(0);
    const frames: number = Object.keys(asciiWeather[conditions]).length;
    // Rotate every N milliseconds
    useEffect(() => {
        const interval: number = setInterval(() => {
            setFrameIndex((prev: number) => (prev + 1) % frames);
        }, 1000);

        return () => clearInterval(interval);
    }, [frames]);

    return (
        <>
            <div className="flex flex-col w-1/4 border-1 border-gray-600">
                <div className="flex flex-rox justify-between">
                <pre className="m-2 flex flex-col">
                    {asciiWeather[conditions][frameIndex]}
                </pre>
                    <div>{decodeWeatherID(day.description)}</div>
                </div>
                <div className="flex flex-rox justify-between">
                    <div>{day.tempmax}</div>
                    <div>{day.feelslikemin}</div>
                </div>
            </div>
        </>
    )
}