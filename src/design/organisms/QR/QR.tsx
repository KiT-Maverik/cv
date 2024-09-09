import React from "react";
import { Box } from "@mui/material";

import { QRcode } from "assets";

import style from "./QR.styles";

export const QR = () => {
  return (
    <Box>
      <Box sx={style.container}>
        <QRcode />
      </Box>
    </Box>
  );
};
