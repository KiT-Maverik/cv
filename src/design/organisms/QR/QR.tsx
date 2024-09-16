import React from "react";
import { Box, Typography } from "@mui/material";

import { QRcode } from "assets";

import style from "./QR.styles";

export const QR = () => {
  return (
    <Box sx={style.container}>
      <Box component="a" href="https://bit.ly/3Tn26vx" target="_blank">
        <QRcode />
      </Box>
      <Typography color="inherit" sx={style.label}>
        Video Presentation
      </Typography>
    </Box>
  );
};
