import {useQuery} from '@tanstack/react-query'
import {fetchWeather} from '../api/weather'

export const useWeather = (zipcode: string) => {
    return useQuery({
        queryKey: ['weather', zipcode],
        queryFn: () => fetchWeather(zipcode),
        gcTime: 1000 * 60 * 5,                  // 5 Minutes
        refetchInterval: 1000 * 60 * 60,     // 1 Hour
        staleTime: 1000 * 60 * 60,           // 1 Hour
    })
}
