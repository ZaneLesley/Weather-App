import Icon from '@mdi/react';
import {mdiEmailPlus, mdiGithub} from '@mdi/js';

export default function Footer() {
    return (
        <>
            <div className="flex flex-col justify-around items-center text-center w-full m-4 sm:flex-row">
                <div className="flex flex-row justify-center w-1/8">
                    <a href={"mailto:zanelesley@outlook.com"} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiEmailPlus} size={1.5}></Icon>
                    </a>
                    <a href={"https://github.com/ZaneLesley/Weather-App"} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiGithub} size={1.5}></Icon>
                    </a>
                </div>
                <div className="m-auto">Website Created by
                    <a href={"https://zanelesley.com/"} target="_blank" rel="noopener noreferrer"> Zane Lesley</a>
                </div>
                <div className="w-1/8"></div>
            </div>
        </>
    );
}