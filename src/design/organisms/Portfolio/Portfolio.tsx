import PortfolioIcon from "@mui/icons-material/DiamondOutlined";
import { Box, ButtonBase, Typography } from "@mui/material";

import { PORTFOLIO, portfolioTypes } from "data";
import { GithubIcon, AIIcon, ICodeThisIcon, LeetCodeIcon } from "design/atoms";
import style from "./Portfolio.styles";
import { useData } from "hooks";
import { useMemo } from "react";

export const Portfolio = () => {
  const { portfolio } = useData();

  const icons = useMemo(
    () => ({
      [PORTFOLIO.AI]: <AIIcon />,
      [PORTFOLIO.GITHUB]: <GithubIcon />,
      [PORTFOLIO.I_CODE_THIS]: <ICodeThisIcon />,
      [PORTFOLIO.LEET_CODE]: <LeetCodeIcon />,
    }),
    [],
  );

  return (
    <Box sx={style.container}>
      <Typography variant="h2" sx={style.header}>
        <PortfolioIcon />
        Portfolio
      </Typography>
      <Box sx={style.portfolio.container}>
        {portfolioTypes.map((item) => (
          <ButtonBase
            color="inherit"
            sx={style.portfolio.item}
            onClick={() => console.log(portfolio[item].link)}
          >
            <Box sx={style.portfolio.icon}>{icons[item]}</Box>
            {portfolio[item].label}
          </ButtonBase>
        ))}
      </Box>
    </Box>
  );
};
