import ProfileIcon from "@mui/icons-material/PersonOutlined";
import { Box, Typography } from "@mui/material";
import React from "react";

import { useData, useLocale } from "hooks";

import style from "./Profile.styles";

export const Profile = () => {
  const { personal } = useData();
  const { sections } = useLocale();

  return (
    <Box sx={style.container}>
      <Typography variant="h2" sx={style.header}>
        <ProfileIcon />
        {sections.profile}
      </Typography>
      <Typography textAlign="justify">{personal.profile}</Typography>
    </Box>
  );
};
