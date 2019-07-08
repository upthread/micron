// import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = () => {

    const styles = createMuiTheme({
        palette: {
            primary: '#eeeeff',
        },
        shape: {
            borderRadius: 8
        },
        overrides: {
            MuiDrawer: {
                paper: {
                    background: '#2b193d'
                    
                }
            }
        }
    })

    return (
        styles
    )
}

export default theme
