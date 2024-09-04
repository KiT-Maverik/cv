import React from 'react';
import {CssBaseline} from "@mui/material";

import {ThemeProvider} from "./utilitary/ThemeProvider/ThemeProvider";
import {Router} from './utilitary/Router/Router'

export const App = () => {
  return (
      <ThemeProvider>
          <CssBaseline/>
          <Router/>
      </ThemeProvider>
  );
}
