import React from 'react'
import {createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette:{
        primary:{
           main: '#5c9ead',
           dark: '#326273',
        },
        secondary:{
            light: '#ffffff',
            main: '#eeeeee',
            dark: '#e39774',
        },
    },
});

export default theme;

