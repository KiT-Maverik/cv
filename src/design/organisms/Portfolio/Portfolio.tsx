import PortfolioIcon from '@mui/icons-material/DiamondOutlined';
import {Box, Typography} from "@mui/material";

import style from './Portfolio.styles'

export const Portfolio = () => {
    return (
        <Box sx={style.container}>
            <Typography variant='h2' sx={style.header}><PortfolioIcon/>Portfolio</Typography>
            <Box>

            </Box>
        </Box>
    )
}
