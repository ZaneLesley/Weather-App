export default function ErrorDiv({error}: { error: Error }) {
    return (
        <div>An error has occurred {error.message}</div>
    )
}