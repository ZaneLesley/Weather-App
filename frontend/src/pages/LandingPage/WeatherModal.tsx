import type {WeatherDay} from "../../types/weatherData.ts";
import type {SetStateAction} from "react";
import {Box, Modal} from "@mui/material";
import {motion} from "motion/react"
import Icon from '@mdi/react';
import {mdiWeatherRainy} from '@mdi/js';

export default function WeatherModal({data, showModal, setShowModal}: {
    data: WeatherDay | undefined
    showModal: boolean,
    setShowModal: React.Dispatch<SetStateAction<boolean>>
}) {

    if (data == null) {
        return (<></>)
    }

    const date = new Date(data?.datetimeEpoch * 1000) // to ms
    const dateInfo = date.toLocaleDateString(undefined, {weekday: "short", month: "short", day: "numeric"});
    console.log(data)

    const handleClose = () => {
        setShowModal(false)
    }
    return (
        <>
            <Modal
                open={showModal}
                onClose={handleClose}
            >
                <Box
                    className="max-w-100 max-h-100 overflow-y-auto m-auto translate-y-1/2 bg-gray-400
                    rounded-lg p-4">
                    <div className="border-b-1 border-gray-300 text-center">{dateInfo}</div>
                    {data?.hours.map((hour) => (
                        <motion.div
                            className="flex flex-row justify-between w-full text-center"
                            initial={{opacity: 0, scale: 0.8}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 0.3}}
                            viewport={{once: false, amount: 0.2}}
                        >
                            <div className="w-1/3">{
                                (new Date(hour.datetimeEpoch * 1000)).toLocaleString("en-us", {
                                    hour: "numeric"
                                })
                            }: {hour.feelslike}°F
                            </div>
                            <div className="flex flex-row justify-center gap-2">
                                <Icon path={mdiWeatherRainy} size={1}/>
                                <div>{hour.precipprob}%</div>
                            </div>
                            <div className="w-1/3">{hour.conditions}</div>

                        </motion.div>
                    ))}

                </Box>
            </Modal>
        </>
    )
}