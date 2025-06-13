export default function Loading() {
    return (
        <div className="text-center w-full h-full m-auto flex flex-col justify-center items-center">
            <div
                className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4">
            </div>
            <p className="text-lg">Loading data, please wait...</p>
        </div>
    )
}