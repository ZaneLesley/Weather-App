import type {WeatherDay} from "../../../types/weatherData.ts";
import Icon from "@mdi/react";
import getArrowDirection from "../../../utils/getArrowDirection.ts";

export default function WindWeatherDisplay({day, now}: { day: WeatherDay, now: number }) {
    return (
        <>
            <div className="flex flex-col w-1/2 p-2 border border-gray-300 text-center">
                <div className="flex flex-row justify-center">
                    <Icon path={getArrowDirection(day.hours[now].winddir)} size={1}/>
                    <div>{day.hours[now].windspeed}mph</div>
                </div>
                <small>wind</small>
            </div>
        </>
    )
}