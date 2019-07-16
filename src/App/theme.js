import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles( theme => ({
    palette: {
        primary: '#2b193d',
    },
    shape: {
        borderRadius: 8
    },
    // overrides: {
    //     MuiDrawer: {
    //         paper: {
    //             background: '#2b193d'
                
    //         }
    //     }
    // }
}))

export default useStyles
