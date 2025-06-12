import {asciiWeather} from "../../../data/asciiWeather.tsx";
import decodeWeatherID from "../../../utils/decodeWeatherID.ts";
import {useEffect, useState} from "react";
import {conditionMap} from "../../../data/conditionMap.ts";
import type {WeatherDay} from "../../../types/weatherData.ts";

export default function AsciiWeatherDisplay({day, now}: { day: WeatherDay, now: number }) {
    const conditions = conditionMap[day.hours[now].conditions.split(",")[0].trim()];
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
            <div className="flex flex-col justify-around mb-4">
                    <pre className="flex flex-col w-1/2 m-auto">
                        {asciiWeather[conditions][frameIndex]}
                    </pre>
                <div className="w-1/2 m-auto">{decodeWeatherID(day.description)}.</div>
            </div>
        </>
    )
}