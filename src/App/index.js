import React from 'react'
import { BrowserRouter } from "react-router-dom"
import Routes from './routes'

import Navigation from '../Navigation'

import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#587291',
            light: '#bfdbf7'
        },
        secondary: {
            main: '#a31621'
        }, 
        background: '#2b193d'
    }
})

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes />
        </BrowserRouter>
    )
}

export default App
