import type {WeatherDay} from "../../types/weatherData.ts";

import {useEffect, useState} from "react";
import {asciiWeather} from "../../data/asciiWeather.tsx";
import {conditionMap} from "../../data/conditionMap.ts";
import decodeWeatherID from "../../utils/decodeWeatherID.ts";
import getArrowDirection from "../../utils/getArrowDirection.ts";
import Icon from "@mdi/react";

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

    const date = new Date(day.datetimeEpoch * 1000) // to ms
    const dateInfo = date.toLocaleDateString(undefined, {weekday: "short", month: "short", day: "numeric"});

    return (
        <>
            <div className="flex flex-col w-1/4 min-w-80 border-1 border-gray-600 p-4">
                <div className="mb-4">{dateInfo}</div>
                <div className="flex flex-rox justify-around">
                <pre className="flex flex-col w-1/2">
                    {asciiWeather[conditions][frameIndex]}
                </pre>
                    <div className="w-1/2">{decodeWeatherID(day.description)}</div>
                </div>
                <div className="flex flex-rox justify-around">
                    <div className="w-1/2">Max Temp: {day.tempmax}°F</div>
                    <div className="w-1/2">Feels Like: {day.feelslikemin}°F</div>
                </div>
                <div className="flex flex-row justify-around">
                    <div className="w-1/2">rain amount: {day.precip} in.</div>
                    <div className="w-1/2">rain prob: {day.precipprob}%</div>
                </div>
                <div className="flex flex-row justify-around">
                    <div className="flex flex-row w-1/2 justify-center">
                        <Icon path={getArrowDirection(day.winddir)} size={1}/>
                        <div>{day.windspeed} mph</div>
                    </div>
                    <div className="w-1/2">visibility: {day.visibility}</div>
                </div>
            </div>
        </>
    )
}