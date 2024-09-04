import { createTheme, PaletteMode } from '@mui/material'

import { paletteLight } from './theme/paletteLight'
import { paletteDark } from './theme/paletteDark'
import { breakpoints } from './theme/breakpoints'
import { shape } from './theme/shape'
import { typography } from './theme/typography'

export const theme = (mode: PaletteMode) =>
    createTheme({
        breakpoints,
        palette: mode === 'light' ? paletteLight : paletteDark,
        shape,
        typography,
        spacing: 4,
    })
