import { SxProps, Theme } from "@mui/material";
import { layout } from "../../../constants";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const action: { print: SxProps<Theme>; web: SxProps<Theme> } = {
  print: {
    display: "none",

    [layout.printer]: {
      display: "initial",
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
