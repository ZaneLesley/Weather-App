import type {JSX} from "react";

const style = "w-[10ch] text-center leading-tight"
const yellow = "text-yellow-500"
const gray = "text-gray-500"
const lightBlue = "text-blue-300"
const blue = "text-blue-600"

export const asciiWeather: Record<string, Record<number, JSX.Element[]>> = {
    cloudy: {
        0: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
        ],
        1: [
            <span key={1} className={`${gray} ${style}`}>{` `}</span>,
            <span key={2} className={`${gray} ${style}`}>{`  .--.`}</span>,
            <span key={3} className={`${gray} ${style}`}>{` .-(    )..`}</span>,
            <span key={4} className={`${gray} ${style}`}>{` (___.__)__)`}</span>,
        ],
        2: [
            <span key={1} className={`${gray} ${style}`}>{` `}</span>,
            <span key={2} className={`${gray} ${style}`}>{` `}</span>,
            <span key={3} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={4} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={5} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
        ],
        3: [
            <span key={1} className={`${gray} ${style}`}>{` `}</span>,
            <span key={2} className={`${gray} ${style}`}>{`  .--.`}</span>,
            <span key={3} className={`${gray} ${style}`}>{` .-(    )..`}</span>,
            <span key={4} className={`${gray} ${style}`}>{` (___.__)__)`}</span>,
        ],
    },

    fog: {
        0: [
            <span key={1} className={`${gray} ${style}`}>{`-    -    -    -`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`  -    -    -    -`}</span>,
            <span key={3} className={`${gray} ${style}`}>{` -    -    -    -`}</span>,
            <span key={4} className={`${gray} ${style}`}>{`   -    -    -    -`}</span>,
        ],
        1: [
            <span key={1} className={`${gray} ${style}`}>{` -    -    -    -`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`   -    -    -    -`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`  -    -    -    -`}</span>,
            <span key={4} className={`${gray} ${style}`}>{`    -    -    -    -`}</span>,
        ],
        2: [
            <span key={1} className={`${gray} ${style}`}>{`  -    -    -    -`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`    -    -    -    -`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`   -    -    -    -`}</span>,
            <span key={4} className={`${gray} ${style}`}>{`-    -    -    -`}</span>,
        ],
        3: [
            <span key={1} className={`${gray} ${style}`}>{`   -    -    -    -`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`-    -    -    -`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`    -    -    -    -`}</span>,
            <span key={4} className={`${gray} ${style}`}>{` -    -    -    -`}</span>,
        ],
        4: [
            <span key={1} className={`${gray} ${style}`}>{`    -    -    -    -`}</span>,
            <span key={2} className={`${gray} ${style}`}>{` -    -    -    -`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`-    -    -    -`}</span>,
            <span key={4} className={`${gray} ${style}`}>{`  -    -    -    -`}</span>,
        ],
    },

    ice: {
        0: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${lightBlue} ${style}`}>{` *   *  *  *`}</span>,
            <span key={5} className={`${lightBlue} ${style}`}>{`  *    *  *`}</span>,
            <span key={6} className={`${lightBlue} ${style}`}>{`    *    *`}</span>
        ],
        1: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${lightBlue} ${style}`}>{`    *    *`}</span>,
            <span key={5} className={`${lightBlue} ${style}`}>{` *   *  *  *`}</span>,
            <span key={6} className={`${lightBlue} ${style}`}>{`  *    *  *`}</span>,
        ],
        2: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${lightBlue} ${style}`}>{`  *    *  *`}</span>,
            <span key={5} className={`${lightBlue} ${style}`}>{`    *    *`}</span>,
            <span key={6} className={`${lightBlue} ${style}`}>{` *   *  *  *`}</span>,
        ],
    },

    lightRain: {
        0: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${blue} ${style}`}>{` :  .  : .`}</span>,
            <span key={5} className={`${blue} ${style}`}>{`  . .  .  :`}</span>,
            <span key={6} className={`${blue} ${style}`}>{`   .    .`}</span>
        ],
        1: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${blue} ${style}`}>{`   .    .`}</span>,
            <span key={5} className={`${blue} ${style}`}>{` :     : .`}</span>,
            <span key={6} className={`${blue} ${style}`}>{`  . .  .  :`}</span>,
        ],
        2: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${blue} ${style}`}>{`  .    .  :`}</span>,
            <span key={5} className={`${blue} ${style}`}>{`   .    .`}</span>,
            <span key={6} className={`${blue} ${style}`}>{` :  .  : .`}</span>,
        ],
    },

    partlyCloudy: {
        0: [
            <div key={1}>
                <span className={`${yellow} ${style}`}>{`\\   /`}</span>
            </div>,
            <div key={2}>
                <span className={`${yellow} ${style}`}>{`.-.`}</span>
            </div>,
            <div key={3}>
                <span className={`${yellow} ${style}`}>{`―(`}</span>
                <span className={`${gray} ${style}`}>{`   ,-.`}</span>
            </div>,
            <div key={4}>
                <span className={`${yellow} ${style}`}>{`    \`-`}</span>
                <span className={`${gray} ${style}`}>{`(   ).`}</span>
            </div>,
            <div key={5}>
                <span className={`${yellow} ${style}`}>{`   /`}</span>
                <span className={`${gray} ${style}`}>{` (___(__)`}</span>
            </div>
        ],
    },

    rain: {
        0: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${blue} ${style}`}>{` |   |  |  |`}</span>,
            <span key={5} className={`${blue} ${style}`}>{`  |    |  |`}</span>,
            <span key={6} className={`${blue} ${style}`}>{`    |    |`}</span>
        ],
        1: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={6} className={`${blue} ${style}`}>{`    |    |`}</span>,
            <span key={4} className={`${blue} ${style}`}>{` |   |  |  |`}</span>,
            <span key={5} className={`${blue} ${style}`}>{`  |    |  |`}</span>,
        ],
        2: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={5} className={`${blue} ${style}`}>{`  |    |  |`}</span>,
            <span key={6} className={`${blue} ${style}`}>{`    |    |`}</span>,
            <span key={4} className={`${blue} ${style}`}>{` |   |  |  |`}</span>,
        ],

    },

    snow: {
        0: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${lightBlue} ${style}`}>{` *   *  *  *`}</span>,
            <span key={5} className={`${lightBlue} ${style}`}>{`  *    *  *`}</span>,
            <span key={6} className={`${lightBlue} ${style}`}>{`    *    *`}</span>
        ],
        1: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${lightBlue} ${style}`}>{`    *    *`}</span>,
            <span key={5} className={`${lightBlue} ${style}`}>{` *   *  *  *`}</span>,
            <span key={6} className={`${lightBlue} ${style}`}>{`  *    *  *`}</span>,
        ],
        2: [
            <span key={1} className={`${gray} ${style}`}>{`.--.`}</span>,
            <span key={2} className={`${gray} ${style}`}>{`.-(    )..`}</span>,
            <span key={3} className={`${gray} ${style}`}>{`(___.__)__)`}</span>,
            <span key={4} className={`${lightBlue} ${style}`}>{`  *    *  *`}</span>,
            <span key={5} className={`${lightBlue} ${style}`}>{`    *    *`}</span>,
            <span key={6} className={`${lightBlue} ${style}`}>{` *   *  *  *`}</span>,
        ],
    },

    storm: {
        0: [
            <span key={1} className={`${yellow} ${style}`}>{` \\ \\`}</span>,
            <span key={2} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={3} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={4} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={5} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={6} className={`${yellow} ${style}`}>{` `}</span>
        ],
        1: [
            <span key={1} className={`${yellow} ${style}`}>{` \\ \\`}</span>,
            <span key={2} className={`${yellow} ${style}`}>{`__\\ \\`}</span>,
            <span key={3} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={4} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={5} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={6} className={`${yellow} ${style}`}>{` `}</span>
        ],
        2: [
            <span key={1} className={`${yellow} ${style}`}>{` \\ \\`}</span>,
            <span key={2} className={`${yellow} ${style}`}>{`__\\ \\`}</span>,
            <span key={3} className={`${yellow} ${style}`}>{` \\  __\\`}</span>,
            <span key={4} className={`${yellow} ${style}`}>{`\\ \\`}</span>,
            <span key={5} className={`${yellow} ${style}`}>{` `}</span>,
            <span key={6} className={`${yellow} ${style}`}>{` `}</span>
        ],
        3: [
            <span key={1} className={`${yellow} ${style}`}>{` \\ \\`}</span>,
            <span key={2} className={`${yellow} ${style}`}>{`__\\ \\`}</span>,
            <span key={3} className={`${yellow} ${style}`}>{` \\  __\\`}</span>,
            <span key={4} className={`${yellow} ${style}`}>{`\\ \\`}</span>,
            <span key={5} className={`${yellow} ${style}`}>{` \\ \\`}</span>,
            <span key={6} className={`${yellow} ${style}`}>{`   \\`}</span>
        ],
    },

    clear: {
        0: [
            <span key={1} className={`${yellow} ${style}`}>{`\\   /`}</span>,
            <span key={2} className={`${yellow} ${style}`}>{`.-.`}</span>,
            <span key={3} className={`${yellow} ${style}`}>{`― (   ) ―`}</span>,
            <span key={4} className={`${yellow} ${style}`}>{`\`-’`}</span>,
            <span key={5} className={`${yellow} ${style}`}>{`/   \\`}</span>
        ],
        1: [
            <span key={1} className={`${yellow} ${style}`}>{`.   |   .`}</span>,
            <span key={2} className={`${yellow} ${style}`}>{`. .-. .`}</span>,
            <span key={3} className={`${yellow} ${style}`}>{`(   )`}</span>,
            <span key={4} className={`${yellow} ${style}`}>{`. \`-’ .`}</span>,
            <span key={5} className={`${yellow} ${style}`}>{`.   |   .`}</span>
        ]
    }
};
