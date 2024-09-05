import { createTheme, PaletteMode } from '@mui/material/styles'

import * as components from './theme/components'
import { paletteLight } from './theme/paletteLight'
import { paletteDark } from './theme/paletteDark'
import { shape } from './theme/shape'
import { typography } from './theme/typography'

export const theme = (mode: PaletteMode) =>
    createTheme({
        components,
        palette: mode === 'light' ? paletteLight : paletteDark,
        shape,
        typography,
        spacing: 4,
    })
