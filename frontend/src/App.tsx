import './App.css'
import LandingPage from './pages/LandingPage/LandingPage.tsx'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <LandingPage></LandingPage>
        </QueryClientProvider>
    )
}

export default App
