import type {JSX} from "react"
import {useEffect, useState} from 'react'
import type {WeatherDay} from "../../types/weatherData.ts";
import {useWeather} from '../../hooks/useWeather'
import WeatherCard from "./WeatherCard.tsx";
import {getCurrentZipcode} from "../../api/weather.ts";

import Header from "./Header.tsx"
import Footer from "./Footer.tsx";
import Loading from "./Loading.tsx";
import ErrorDiv from "./ErrorDiv.tsx";
import WeatherModal from "./WeatherModal.tsx";

export default function LandingPage(): JSX.Element {
    const [inputZip, setInputZip] = useState("");
    const [zip, setZip] = useState('')
    const {data, isLoading, error} = useWeather(zip);
    const [index, setIndex] = useState<number>(0)
    const [showModal, setShowModal] = useState<boolean>(false)

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
            <div className="flex flex-col justify-between item-center min-h-screen w-full">
                <Header onSubmit={handleSubmit} inputZip={inputZip} setInputZip={setInputZip} currentZip={zip}></Header>
                {isLoading && <Loading></Loading>}
                {error && <ErrorDiv error={error}/>}
                <div className="flex flex-row justify-center w-full flex-wrap gap-4">
                    {data?.days.map((day: WeatherDay, i: number) => (
                        <WeatherCard index={i} day={day} setIndex={setIndex} setShowModal={setShowModal}
                                     key={day.datetime}/>
                    ))}
                </div>
                <Footer></Footer>
                {showModal &&
                    <WeatherModal data={data?.days[index]} showModal={showModal}
                                  setShowModal={setShowModal}></WeatherModal>}
            </div>
        </>
    )

}