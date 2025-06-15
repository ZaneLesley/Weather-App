import type {JSX} from "react";
import Icon from "@mdi/react";
import {
    mdiSnowflake,
    mdiWeatherCloudy,
    mdiWeatherLightningRainy,
    mdiWeatherPartlyCloudy,
    mdiWeatherPouring,
    mdiWeatherRainy,
    mdiWeatherSnowy,
    mdiWeatherSunny
} from "@mdi/js";

export const conditionMapIcon: Record<string, JSX.Element> = {
        cloudy: <Icon path={mdiWeatherCloudy} size={1}/>,
        ice: <Icon path={mdiSnowflake} size={1}/>,
        lightRain: <Icon path={mdiWeatherRainy} size={1}/>,
        partlyCloudy: <Icon path={mdiWeatherPartlyCloudy} size={1}/>,
        rain: <Icon path={mdiWeatherPouring} size={1}/>,
        snow: <Icon path={mdiWeatherSnowy} size={1}/>,
        storm: <Icon path={mdiWeatherLightningRainy} size={1}/>,
        clear: <Icon path={mdiWeatherSunny} size={1}/>,
    }
;
