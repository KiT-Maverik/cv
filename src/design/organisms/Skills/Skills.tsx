import { Box, Chip, Typography } from "@mui/material";
import React from "react";

import { useData, useLocale } from "hooks";

import style from "./Skills.styles";

export const Skills = () => {
  const { skills } = useData();
  const { sections } = useLocale();

  return (
    <Box>
      <Typography variant="h2">{sections.skills}</Typography>
      <Box sx={style.container}>
        {skills.map((item) => (
          <Chip key={item} label={item} variant="outlined" />
        ))}
      </Box>
    </Box>
  );
};
