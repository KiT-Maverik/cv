import {SxProps, Theme} from "@mui/material";

import {pageWidth, layout} from "../../../constants";

const page:SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    overflow: 'hidden',
    borderRadius: 2,
    position: "relative",
    maxWidth: pageWidth,

    [layout.printer]: {
        borderRadius: 0,
        boxShadow: "none",
    }
} as const

const header: {container: SxProps<Theme>; actions: SxProps<Theme>; name: SxProps<Theme>; goals: SxProps<Theme> } ={
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 150,
        backgroundColor: theme => theme.palette.background.accent,
    },
    actions: {
        position: "absolute",
        top: 10,
        right: 20,

        display: "flex",
        gap: 2,

        [layout.printer]: {
            display: 'none',
        }
    },
    name: {
        position: "absolute",
        bottom: 0,
        left: 315,
    },
    goals: {
        position: "absolute",
        bottom: -30,
        left: 320,
    }
} as const

const columns: { info: SxProps<Theme>; main: SxProps<Theme> } = {
    info: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        p: 5,
        border: '2px solid',
        m: 5,
        zIndex: 1,
    },
    main: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        p: 5,
        pt: '220px',
    },
} as const

export default { columns, header, page };
