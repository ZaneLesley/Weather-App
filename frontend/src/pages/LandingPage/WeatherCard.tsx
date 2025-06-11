import {useEffect, useState} from "react";
import {asciiWeather} from "../../data/asciiWeather.tsx";
import type {WeatherDay} from "../../types/weatherData.ts";
import {conditionMap} from "../../data/conditionMap.ts";

export default function WeatherCard({day}: { day: WeatherDay }) {
    const conditions = conditionMap[day.conditions.split(",")[0]];
    
    const frames: number = Object.keys(asciiWeather[conditions]).length;
    const [frameIndex, setFrameIndex] = useState<number>(0);
    // Rotate every N milliseconds
    useEffect(() => {
        const interval: number = setInterval(() => {
            setFrameIndex((prev: number) => (prev + 1) % frames);
        }, 1000);

        return () => clearInterval(interval);
    }, [frames]);

    return (
        <>
            <pre className="m-0 flex flex-col justify-center flex-1">
                {asciiWeather[conditions][frameIndex]}
            </pre>
        </>
    )
}