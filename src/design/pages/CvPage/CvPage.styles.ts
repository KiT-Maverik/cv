import { SxProps, Theme } from "@mui/material";

import { a4, layout } from "../../../constants";

const container: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
  p: 5,
  background: (theme) => theme.palette.background.surface,
} as const;

const modal: {
  overlay: SxProps<Theme>;
  container: SxProps<Theme>;
  header: { container: SxProps<Theme>; alert: SxProps<Theme> };
  content: SxProps<Theme>;
  actions: SxProps<Theme>;
} = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: (theme) => theme.palette.background.paper,
    borderRadius: 3,
    p: 5,
    width: "90%",
    maxWidth: 800,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  header: {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
    },
    alert: {
      flexGrow: 1,
    },
  },
  content: {
    width: 1,
    height: 300,
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
} as const;

const cv: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  overflow: "hidden",
  borderRadius: 2,
  position: "relative",
  maxWidth: a4.width,
  maxHeight: a4.height,
  userSelect: "none",

  [layout.printer]: {
    borderRadius: 0,
    boxShadow: "none",
  },
} as const;

const header: {
  container: SxProps<Theme>;
  actions: SxProps<Theme>;
  name: SxProps<Theme>;
  goals: SxProps<Theme>;
} = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: (theme) => theme.palette.background.accent,
  },
  actions: {
    position: "absolute",
    top: 10,
    right: 20,

    display: "flex",
    gap: 2,

    [layout.printer]: {
      display: "none",
    },
  },
  name: {
    position: "absolute",
    bottom: 0,
    left: 315,
  },
  goals: {
    position: "absolute",
    bottom: -30,
    left: 320,
  },
} as const;

const columns: { info: SxProps<Theme>; main: SxProps<Theme> } = {
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    p: 5,
    border: (theme) => `2px solid ${theme.palette.text.primary}`,
    borderRadius: 2,
    m: 5,
    zIndex: 1,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    p: 5,
    pt: "220px",
  },
} as const;

export default { columns, container, header, cv, modal };
