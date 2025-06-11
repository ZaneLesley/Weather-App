import {conditionMap} from "../data/conditionMap.ts"

export default function decodeWeatherID(input: string): string {
    // Match only words
    const tokens = input.match(/\w+/g) || []
    const decodedTokens = tokens.map(token => {
        const lower = token.toLowerCase()
        return conditionMap[lower] ?? token
    })

    return decodedTokens.join(" ")
}
