import React, {createContext, useMemo, useState} from 'react';
import {CssBaseline} from "@mui/material";

import {ThemeProvider} from "./utilitary/ThemeProvider/ThemeProvider";
import {ToastProvider} from "./utilitary/ToastProvider/ToastProvider";
import {Router} from './utilitary/Router/Router'
import {LOCALE} from "../constants";

interface AppSettings {
    locale: LOCALE
    setLocale: (locale: LOCALE) => void
}
export const AppSettings = createContext({} as AppSettings)

export const App = () => {
    const [locale, setLocale] = useState<LOCALE>(LOCALE.EN)

    const contextValue = useMemo<AppSettings>(
        () => ({
            locale,
            setLocale: (locale: LOCALE) => setLocale(locale),
        }),
        [locale],
    )

  return (
      <AppSettings.Provider value={contextValue}>
          <CssBaseline/>
          <ThemeProvider>
              <ToastProvider>
                <Router/>
              </ToastProvider>
          </ThemeProvider>
      </AppSettings.Provider>
  );
}
