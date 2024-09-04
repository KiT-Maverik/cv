import {SxProps, Theme} from "@mui/material";

const page:SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr'
} as const

export default { page };
