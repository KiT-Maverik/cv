import {SxProps, Theme} from "@mui/material";

const page:SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: 5,
    overflow: 'hidden',
    borderRadius: 2,
    position: "relative",
} as const

const header: {container: SxProps<Theme>; name: SxProps<Theme>; goals: SxProps<Theme> } ={
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 150,
        backgroundColor: theme => theme.palette.background.accent,
    },
    name: {
        position: "absolute",
        bottom: 0,
        left: 400,
    },
    goals: {
        position: "absolute",
        bottom: -30,
        left: 400,
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
    main: {},
} as const

export default { columns, header, page };
