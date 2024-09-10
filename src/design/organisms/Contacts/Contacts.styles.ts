import { SxProps, Theme } from "@mui/material";

import { layout } from "../../../constants";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const action: { print: SxProps<Theme>; web: SxProps<Theme> } = {
  print: {
    display: "none",
    textDecoration: "none",
    color: (theme) => theme.palette.text.primary,

    [layout.printer]: {
      display: "flex",
    },
  },
  web: {
    display: "flex",
    gap: 1,

    [layout.printer]: {
      display: "none",
    },
  },
};

export default {
  container,
  action,
};
