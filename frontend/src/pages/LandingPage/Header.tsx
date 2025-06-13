type HeaderProps = {
    inputZip: string
    setInputZip: (val: string) => void
    currentZip: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

import Icon from '@mdi/react';
import {mdiMapMarker} from '@mdi/js';

export default function Header({onSubmit, inputZip, setInputZip, currentZip}: HeaderProps) {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center items-center my-4 w-full gap-2">
                <div className="w-1/8"></div>
                <form onSubmit={onSubmit} className="flex flex-row items-center gap-2 m-0 sm:ml-auto">
                    <input
                        name="search"
                        type="text"
                        placeholder="Zip Code..."
                        value={inputZip}
                        onChange={(e => setInputZip(e.target.value))}/>
                    <button type="submit" className="max-w-30 mx-auto">Search</button>
                </form>
                <div className="flex flex-row ml-0 sm:ml-auto w-1/8">
                    <Icon path={mdiMapMarker} size={1}/>
                    <div>{currentZip}</div>
                </div>
            </div>
        </>
    )
}