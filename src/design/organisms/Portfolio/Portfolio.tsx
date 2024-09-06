import PortfolioIcon from '@mui/icons-material/DiamondOutlined';
import {Box, Typography} from "@mui/material";

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
                <Box>
                <Box component='a' href={portfolio[item].link} sx={{display: 'flex', gap: 3, alignItems: 'center'}}>
                    <Box sx={{width: 36, aspectRatio: 1}}>
                        {icons[item]}
                    </Box>
                    <Typography variant='h2'>{portfolio[item].label}</Typography>
                </Box>
            </Box>
            ))
            }
        </Box>
    )
}
