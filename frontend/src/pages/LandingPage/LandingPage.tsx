import type {JSX} from "react"
import {useEffect, useState} from "react";
import {asciiWeather} from '../../data/asciiWeather.tsx'

export default function LandingPage(): JSX.Element {
    const test = "storm"
    const frames: number = Object.keys(asciiWeather[test]).length;
    const [frameIndex, setFrameIndex] = useState<number>(0);

    useEffect(() => {
        async function fetchWeather(): Promise<void> {
            const response: Response = await fetch(
                `${import.meta.env.VITE_VISUAL_CROSSING_API_URL}73135/next7days` +
                `?key=${import.meta.env.VITE_VISUAL_CROSSING_API_KEY}` +
                `&lang=id`, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    mode: 'cors',
                }
            )

            if (!response.ok) {
                console.error(`Error fetching weather data: ${response.status}: ${response.statusText}`)
            }

            const data: unknown = await response.json()
            console.log(data)
        }

        console.log(asciiWeather.sunny)
        fetchWeather()
    }, [])

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
                {asciiWeather[test][frameIndex]}
            </pre>
        </>
    )
}