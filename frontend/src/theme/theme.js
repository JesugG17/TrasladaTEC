import { createTheme } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            // main: '#6571DD'
            main: '#3C4384',
            light: '#4A4F9F'
        },
        secondary: {
            // main: '#F1F1F9'
            main: '#E2E3F1',
            light: '#F0F1F9'
        },
        error: {
            main: red.A700
        },
        success: {
            main: green.A700
        },
        warning: {
            main: yellow.A200
        },
    },
    typography: {
        fontFamily: [
            'Paytone One'
        ].join(',')
    }
})