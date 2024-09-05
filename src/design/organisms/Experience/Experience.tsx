import WorkIcon from '@mui/icons-material/WorkOutlineOutlined';
import {Box, Typography} from "@mui/material";

import style from './Experience.styles'

export const Experience = () => {
    return (
        <Box sx={style.container}>
            <Typography variant='h2' sx={style.header}><WorkIcon/>Work Experience</Typography>
            <Box>

            </Box>
        </Box>
    )
}
