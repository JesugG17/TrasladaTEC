import { createTheme } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#6571DD'
        },
        secondary: {
            main: '#F1F1F9'
            // main: '#a0bbded9'
        },
        error: {
            main: red.A700
        },
        success: {
            main: green.A700
        },
        warning: {
            main: yellow.A200
        }
    },
    typography: {
        fontFamily: [
            'Raleway'
        ].join(',')
    }
})