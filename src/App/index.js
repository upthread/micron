import React from 'react'
import { BrowserRouter } from "react-router-dom"
import Routes from './routes'

import Navigation from '../Navigation'


const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes />
        </BrowserRouter>
    )
}

export default App
