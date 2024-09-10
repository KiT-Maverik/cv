import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

const container: SxProps<Theme> = {
  display: "block",
  height: 200,
  aspectRatio: 1,
  backgroundColor: "white",
  border: (theme) => `1px solid ${theme.palette.text.primary}`,
  borderRadius: 2,
  m: "0 auto",

  svg: {
    fill: (theme) => theme.palette.text.primary,
  },
} as const;

const qr: SxProps<Theme> = {} as const;

export default {
  container,
  qr,
};
