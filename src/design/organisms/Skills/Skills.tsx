import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";

import { useData } from "hooks";

import style from "./Skills.styles";

export const Skills = () => {
  const { skills } = useData();

  return (
    <Box>
      <Typography variant="h2">Skills</Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {skills.map((item) => (
          <Chip label={item} variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
};
