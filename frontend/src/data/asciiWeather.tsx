import type {JSX} from "react";

const style = "text-yellow-500 w-[10ch] text-center leading-tight"

export const asciiWeather: Record<string, Record<number, JSX.Element[]>> = {
    sunny: {
        0: [
            <span key={1} className={style}>{`\\   /`}</span>,
            <span key={2} className={style}>{`.-.`}</span>,
            <span key={3} className={style}>{`― (   ) ―`}</span>,
            <span key={4} className={style}>{`\`-’`}</span>,
            <span key={5} className={style}>{`/   \\`}</span>
        ],
        1: [
            <span key={1} className={style}>{`.   |   .`}</span>,
            <span key={2} className={style}>{`. .-. .`}</span>,
            <span key={3} className={style}>{`(   )`}</span>,
            <span key={4} className={style}>{`. \`-’ .`}</span>,
            <span key={5} className={style}>{`.   |   .`}</span>
        ]
    }
};
