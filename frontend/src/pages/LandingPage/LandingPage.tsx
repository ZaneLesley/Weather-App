import type {JSX} from "react"
import {useEffect, useState} from 'react'
import {useWeather} from '../../hooks/useWeather'
import WeatherCard from "./WeatherCard.tsx";
import type {WeatherDay} from "../../types/weatherData.ts";

import Header from "./Header.tsx"
import Footer from "./Footer.tsx";
import {getCurrentZipcode} from "../../api/weather.ts";

export default function LandingPage(): JSX.Element {
    const [inputZip, setInputZip] = useState("");
    const [zip, setZip] = useState('')
    const {data} = useWeather(zip);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setZip(inputZip)
    }

    useEffect(() => {
        async function getZipCode() {
            const result = await getCurrentZipcode()
            console.log(result)
            if (result) {
                setZip(result)
            } else {
                setZip('73135')
            }
        }

        getZipCode()
    }, [])

    //console.log(data)
    return (
        <>
            <Header onSubmit={handleSubmit} inputZip={inputZip} setInputZip={setInputZip} currentZip={zip}></Header>
            <div className="flex flex-row justify-center w-full m-auto flex-wrap gap-4">
                {data?.days.map((day: WeatherDay) => (
                    <WeatherCard day={day} key={day.datetime}/>
                ))}
            </div>
            <Footer></Footer>
        </>
    )

}