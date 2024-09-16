import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: 200,
  backgroundColor: "white",
  border: (theme) => `1px solid ${theme.palette.text.primary}`,
  borderRadius: 2,
  m: "0 auto",

  svg: {
    fill: (theme) => theme.palette.text.primary,
  },
} as const;

const label: SxProps<Theme> = {
  textDecoration: "none",
  textAlign: "center",
  textTransform: "uppercase",
  mt: "-15px",
} as const;

export default {
  container,
  label,
};
