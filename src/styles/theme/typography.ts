import { TypographyOptions } from '@mui/material/styles/createTypography'
import { converter } from 'utils/converters/pxToRem.utils'

const fontSize = 16

export const { pxToRem } = converter(fontSize)

export const typography: TypographyOptions = {
    fontFamily: 'Roboto',
    htmlFontSize: fontSize,
    body1: {
        fontSize: pxToRem(16),
        lineHeight: '150%',
        letterSpacing: '0.15px',
    },
    body2: {
        fontSize: pxToRem(14),
        lineHeight: '143%',
        letterSpacing: 'unset',
    },
    subtitle1: {
        fontSize: pxToRem(18),
        lineHeight: '152%',
    },
    subtitle2: {
        fontSize: pxToRem(16),
        lineHeight: '175%',
        letterSpacing: '0.15px',
    },
    overline: {
        fontSize: pxToRem(12),
        lineHeight: '266%',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    caption: {
        fontSize: pxToRem(12),
        lineHeight: '166%',
        letterSpacing: '0.4px',
    },
    h1: {
        fontSize: pxToRem(96),
        lineHeight: '116.7%',
        letterSpacing: '-1.5px',
    },
    h2: {
        fontSize: pxToRem(60),
        lineHeight: '120%',
        letterSpacing: '-0.5px',
    },
    h3: {
        fontSize: pxToRem(48),
        lineHeight: '116.7%',
        textTransform: 'uppercase',
        borderBottom: '1px solid red',
    },
    h4: {
        fontSize: pxToRem(34),
        lineHeight: '123.5%',
    },
    h5: {
        fontSize: pxToRem(30),
        lineHeight: '126.5%',
    },
    h6: {
        fontSize: pxToRem(24),
        lineHeight: '133.5%',
    },
}
