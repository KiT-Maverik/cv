import React from "react";
import { Box } from "@mui/material";

import { QRcode } from "assets";

import style from "./QR.styles";

export const QR = () => {
  return (
    <Box>
      <Box
        sx={style.container}
        component="a"
        href="https://bit.ly/3Tn26vx"
        target="_blank"
      >
        <QRcode />
      </Box>
    </Box>
  );
};
