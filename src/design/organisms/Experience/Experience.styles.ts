import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { commonStyles } from "styles";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
} as const;

const header: SxProps<Theme> = commonStyles.header;

const experience: {
  container: SxProps<Theme>;
  divider: SxProps<Theme>;
  period: { container: SxProps<Theme>; item: SxProps<Theme> };
  description: {
    container: SxProps<Theme>;
    skills: SxProps<Theme>;
    responsibility: { list: SxProps<Theme>; item: SxProps<Theme> };
  };
} = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    rowGap: 5,
    columnGap: 5,
  },
  period: {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    item: {
      fontWeight: 700,
    },
  },
  divider: {
    background: "#b37f56",
  },
  description: {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
    },
    skills: {
      display: "flex",
      gap: 1,
    },
    responsibility: {
      list: {
        pl: 5,
        m: 0,
      },
      item: {
        listStyleType: "disc",
        textAlign: "justify",
      },
    },
  },
} as const;

export default {
  container,
  header,
  experience,
};
