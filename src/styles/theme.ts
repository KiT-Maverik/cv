import { createTheme, PaletteMode } from '@mui/material'

import { paletteLight } from './theme/paletteLight'
import { paletteDark } from './theme/paletteDark'
import { shape } from './theme/shape'
import { typography } from './theme/typography'

export const theme = (mode: PaletteMode) =>
    createTheme({
        palette: mode === 'light' ? paletteLight : paletteDark,
        shape,
        typography,
        spacing: 4,
    })
