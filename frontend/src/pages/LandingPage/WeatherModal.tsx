import type {WeatherDay} from "../../types/weatherData.ts";
import type {SetStateAction} from "react";
import {Box, Modal} from "@mui/material";
import {motion} from "motion/react"

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
                    className="max-w-100 max-h-100 overflow-y-auto m-auto translate-y-1/2 bg-gray-400/70
                    rounded-lg p-4">
                    <div className="border-b-1 border-gray-300">{dateInfo}</div>
                    {data?.hours.map((hour) => (
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 0.3}}
                            viewport={{once: false, amount: 0.2}}
                        >{hour.datetime}: {hour.feelslike}°F</motion.div>
                    ))}
                </Box>
            </Modal>
        </>
    )
}