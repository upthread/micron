import React from 'react'
import { BrowserRouter, } from "react-router-dom"
import Routes from './routes'

import Data from './data'

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
            <Data />
        </BrowserRouter>
    )
}

export default App
