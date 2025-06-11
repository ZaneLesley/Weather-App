import type {JSX} from "react"
import {useWeather} from '../../hooks/useWeather'
import WeatherCard from "./WeatherCard.tsx";
import type {WeatherDay} from "../../types/weatherData.ts";

export default function LandingPage(): JSX.Element {
    const {data, isLoading, error} = useWeather();

    if (isLoading) return <p>Loading weather...</p>
    if (error) return <p>Error loading weather</p>

    data?.days.map((day, index) => {
        console.log(index, day);
    })
    return (
        <>
            <div className="flex flex-row justify-center w-full m-4 flex-wrap gap-4">
                {data?.days.map((day: WeatherDay) => (
                    <WeatherCard day={day} key={day.datetime}/>
                ))}
            </div>
        </>
    )

}