import {SxProps, Theme} from "@mui/material";

const page:SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: 5,
    overflow: 'hidden',
    borderRadius: 2,
} as const

const columns: { info: SxProps<Theme>; main: SxProps<Theme> } = {
    info: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        p: 5,
        background: theme => theme.palette.primary.main,
        color: theme => theme.palette.background.paper,
    },
    main: {},
} as const

export default { columns, page };
