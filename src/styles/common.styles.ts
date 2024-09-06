import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

const header: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  alignItems: "center",
} as const;

export const commonStyles = { header };
