type HeaderProps = {
    inputZip: string
    setInputZip: (val: string) => void
    currentZip: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Header({onSubmit, inputZip, setInputZip, currentZip}: HeaderProps) {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center w-auto mx-8 my-4 min-w-80 gap-2">
                <form onSubmit={onSubmit} className="flex flex-row items-center gap-2 ml-auto">
                    <input
                        name="search"
                        type="text"
                        placeholder="Zip Code..."
                        value={inputZip}
                        onChange={(e => setInputZip(e.target.value))}/>
                    <button type="submit" className="max-w-30 mx-auto">Search</button>
                </form>
                <div className="flex items-center mx-auto sm:ml-auto sm:mx-0">{currentZip}</div>
            </div>
        </>
    )
}