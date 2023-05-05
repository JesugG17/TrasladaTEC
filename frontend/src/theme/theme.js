import { createTheme } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#6571DD'  
        },
        secondary: {
            main: '#F1F1F9'
        },
        error: {
            main: red.A400
        },
        success: {
            main: green.A100
        },
        warning: {
            main: yellow.A200
        }

    }
})