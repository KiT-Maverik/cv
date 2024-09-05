import { PaletteOptions } from '@mui/material/styles'
import {grey} from "@mui/material/colors";

export const paletteLight: PaletteOptions = {
    mode: 'light',
    text: {
        primary: '#545454',
    },
    background: {
        surface: grey['200'],
    },
    primary: {
        main: '#163853',
        dark: '#112C41',
        light: '#2C70A5',
        contrastText: '#FFF',
    },
}
