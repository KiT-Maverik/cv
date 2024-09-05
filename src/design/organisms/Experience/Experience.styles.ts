import {SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

import {commonStyles} from "styles";

const container: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
} as const

const header: SxProps<Theme> = commonStyles.header

const experience: { container: SxProps<Theme>; period: SxProps<Theme> } = {
    container: {
        display: "flex",
        gap: 3,
    },
    period: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
} as const

const responsibility: { list: SxProps<Theme>; item: SxProps<Theme> } = {
    list: {
        pl: 5,
    },
    item: {
        listStyleType: 'disc',
    }
} as const

export default {
    container,
    header,
    responsibility,
    experience,
}
