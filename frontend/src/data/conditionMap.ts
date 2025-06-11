export const conditionMap: Record<string, string> = {
    // Light Rain
    type_2: "rain",         // Drizzle
    type_4: "rain",         // Light Drizzle
    type_6: "rain",         // Light Drizzle/Rain
    type_26: "rain",        // Light Rain
    type_20: "rain",        // Precipitation In Vicinity

    // Rain
    type_3: "lightRain",   // Heavy Drizzle
    type_5: "lightRain",   // Heavy Drizzle/Rain
    type_21: "lightRain",  // Rain
    type_24: "lightRain",  // Rain Showers
    type_25: "lightRain",  // Heavy Rain

    // Snow
    type_1: "snow",         // Blowing/Drifting Snow
    type_31: "snow",        // Snow
    type_32: "snow",        // Snow and Rain Showers
    type_33: "snow",        // Snow Showers
    type_34: "snow",        // Heavy Snow
    type_35: "snow",        // Light Snow
    type_39: "snow",        // Diamond Dust
    type_22: "snow",        // Heavy Rain and Snow
    type_23: "snow",        // Light Rain and Snow

    // Ice
    type_9: "ice",          // Freezing Drizzle/Freezing Rain
    type_13: "ice",	        // Heavy Freezing Rain
    type_14: "ice",         // Light Freezing Rain
    type_17: "ice",         // Ice
    type_10: "ice",         // Heavy Freezing Drizzle
    type_11: "ice",         // Light Freezing Drizzle

    // Storm
    type_15: "storm",       // Funnel Cloud/Tornado
    type_16: "storm",       // Hail Showers
    type_18: "storm",       // Lightning Without Thunder
    type_36: "storm",       // Squalls
    type_37: "storm",       // Thunderstorm
    type_38: "storm",       // Thunderstorm Without Precipitation
    type_40: "storm",       // Hail

    // Fog
    type_8: "fog",          // Fog
    type_12: "fog",         // Freezing Fog
    type_19: "fog",         // Mist
    type_30: "fog",         // Smoke Or Haze
    type_7: "fog",	        // Dust storm

    // Party-Cloudy
    type_27: "partlyCloudy",      // Sky Coverage Decreasing
    type_29: "partlyCloudy",      // Sky Unchanged
    type_42: "partlyCloudy",      // Partially Cloudy

    // Cloudy
    type_28: "cloudy",      // Sky Coverage Increasing
    type_41: "cloudy",      // Overcast
    // CLear
    type_43: "clear",       // Clear

    // OTHER PARSINGS

    clear: "clear conditions throughout the day",
    clearingpm: "clearing in the afternoon",
    cloudcover: "Cloud Cover",
    cloudierpm: "becoming cloudy in the afternoon",
    coolingdown: "cooling down",
    dew: "Dew Point",
    dow1: "Monday",
    dow2: "Tuesday",
    dow3: "Wednesday",
    dow4: "Thursday",
    dow5: "Friday",
    dow6: "Saturday",
    dow7: "Sunday",
    estprecip: "Estimated precipitation",
    heatindex: "Heat Index",
    humidity: "Relative Humidity",
    id: "desc",
    latlon: "Latitude & Longitude",
    maxt: "Maximum Temperature",
    mint: "Minimum Temperature",
    mostdays: "multiple days",
    norain: "no rain expected",
    overcast: "cloudy skies throughout the day",
    pop: "Chance Precipitation (%)",
    precip: "Precipitation",
    precipcover: "Precipitation Cover",
    rainallday: "a chance of rain throughout the day",
    rainam: "morning rain",
    rainampm: "rain in the morning and afternoon",
    rainchance: "a chance of rain",
    rainclearinglater: "rain clearing later",
    raindays: "a chance of rain",
    raindefinite: "rain",
    rainearlyam: "early morning rain",
    rainlatepm: "late afternoon rain",
    rainpm: "afternoon rain",
    rainsnowallday: "a chance of rain or snow throughout the day",
    rainsnowam: "morning rain or snow",
    rainsnowampm: "rain or snow in the morning and afternoon",
    rainsnowchance: "a chance of rain or snow",
    rainsnowclearinglater: "rain or snow clearing later",
    rainsnowdefinite: "rain or snow",
    rainsnowearlyam: "early morning snow or rain",
    rainsnowlatepm: "late afternoon rain or snow",
    rainsnowpm: "afternoon rain or snow",
    sealevelpressure: "Sea Level Pressure",
    similartemp: "similar temperatures continuing",
    sky: "Sky cover",
    skyprecip: "%s with %s.",
    skytempprecip: "%s and %s with %s.",
    snow: "Snow",
    snowallday: "a chance of snow throughout the day",
    snowam: "morning snow",
    snowampm: "snow in the morning and afternoon",
    snowchance: "a chance of snow",
    snowclearinglater: "snow clearing later",
    snowdays: "a chance of snow",
    snowdefinite: "snow",
    snowdepth: "Snow Depth",
    snowearlyam: "early morning snow",
    snowlatepm: "late afternoon snow",
    snowpm: "afternoon snow",
    solarenergy: "Solar Energy",
    solarradiation: "Solar Radiation",
    stationdistance: "Mean Station Distance",
    stationInfo: "Contributing Stations",
    stormspossible: "storms possible",
    stormsstrong: "strong storms possible",
    sunshine: "Sunshine",
    temp: "Temperature",
    tempprecipweek: "%s with %s.",
    tempweek: "%s.",
    today: "today",
    tomorrow: "tomorrow",
    variablecloud: "partly cloudy throughout the day",
    visibility: "Visibility",
    warmingup: "warming up",
    wdir: "Wind Direction",
    weatherType: "Weather Type",
    wgust: "Wind Gust",
    windchill: "Wind Chill",
    wspd: "Wind Speed"
};


