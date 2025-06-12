type HeaderProps = {
    inputZip: string
    setInputZip: (val: string) => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Header({onSubmit, inputZip, setInputZip}: HeaderProps) {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    name="search"
                    type="text"
                    placeholder="Zip Code..."
                    value={inputZip}
                    onChange={(e => setInputZip(e.target.value))}/>
                <button type="submit">Search</button>
            </form>
        </>
    )
}