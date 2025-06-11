export interface WeatherDay {
    datetime: string;
    datetimeEpoch: number;
    tempmax: number;
    tempmin: number;
    temp: number;
    feelslike: number;
    feelslikemax: number;
    feelslikemin: number;
    icon: string;
    conditions: string;
    description: string;
    sunrise: string;
    sunset: string;
    precip: number;
    precipprob: number;
    winddir: number;
    windgust: number;
    windspeed: number;
    humidity: number;
    uvindex: number;
    visibility: number;
    cloudcover: number;
    pressure: number;
    severerisk: number;
    solarenergy: number;
    solarradiation: number;
    snow: number;
    snowdepth: number;
}

export interface CurrentConditions {
    datetime: string;
    datetimeEpoch: number;
    temp: number;
    feelslike: number;
    icon: string;
    conditions: string;
    dew: number;
    humidity: number;
    pressure: number;
    winddir: number;
    windgust: number;
    windspeed: number;
    uvindex: number;
    visibility: number;
    solarenergy: number;
    solarradiation: number;
    cloudcover: number;
    sunrise: string;
    sunset: string;
}

export interface WeatherData {
    address: string;
    resolvedAddress: string;
    description: string;
    timezone: string;
    tzoffset: number;
    latitude: number;
    longitude: number;
    queryCost: number;
    currentConditions: CurrentConditions;
    days: WeatherDay[];
    alerts: unknown[];  // you could type this later
    stations: Record<string, unknown>; // you could improve this too
}
