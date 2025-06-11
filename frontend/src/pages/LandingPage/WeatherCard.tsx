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
            <div className="flex flex-col w-1/4 border-1 border-gray-600">
                <div>{dateInfo}</div>
                <div className="flex flex-rox justify-between">
                <pre className="m-2 flex flex-col">
                    {asciiWeather[conditions][frameIndex]}
                </pre>
                    <div>{decodeWeatherID(day.description)}</div>
                </div>
                <div className="flex flex-rox justify-between">
                    <div>Max Temp: {day.tempmax}°F</div>
                    <div>Feels Like: {day.feelslikemin}°F</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>rain amount: {day.precip} in.</div>
                    <div>rain prob: {day.precipprob}%</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Icon path={getArrowDirection(day.winddir)} size={1}/>
                        <div>{day.windspeed} mph</div>
                    </div>
                    <div>Visbility: {day.visibility}</div>
                </div>
            </div>
        </>
    )
}