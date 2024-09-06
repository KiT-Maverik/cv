import PortfolioIcon from '@mui/icons-material/DiamondOutlined';
import {Box, Button, SvgIcon, Typography} from "@mui/material";

import {PORTFOLIO, portfolioTypes} from "data";
import {GithubIcon, AIIcon, ICodeThisIcon, LeetCodeIcon} from "design/atoms";
import style from './Portfolio.styles'
import {useData} from "hooks";
import {useMemo} from "react";

export const Portfolio = () => {
    const {portfolio} = useData()

    const icons = useMemo(() => ({
        [PORTFOLIO.AI]: <AIIcon/>,
        [PORTFOLIO.GITHUB]: <GithubIcon/>,
        [PORTFOLIO.I_CODE_THIS]: <ICodeThisIcon/>,
        [PORTFOLIO.LEET_CODE]: <LeetCodeIcon/>,
    }), []);

    return (
        <Box sx={style.container}>
            <Typography variant='h2' sx={style.header}><PortfolioIcon/>Portfolio</Typography>
            {portfolioTypes.map(item => (
                <Button
                    color='inherit'
                    startIcon={<SvgIcon>{icons[item]}</SvgIcon>}
                    onClick={() => console.log(portfolio[item].link)}
                >
                     {portfolio[item].label}
                </Button>
            ))
            }
        </Box>
    )
}
