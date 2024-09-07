import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import { useData, useLocale } from "hooks";

import style from "./Education.styles";

export const Education = () => {
  const { education } = useData();
  const { sections } = useLocale();

  return (
    <Box sx={style.container}>
      <Typography variant="h2">{sections.education}</Typography>
      <Stack gap={1}>
        {education.map(({ facility, specialisation }) => (
          <Box key={facility}>
            <Typography fontWeight={700}>{facility}</Typography>
            <Typography>{specialisation}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
