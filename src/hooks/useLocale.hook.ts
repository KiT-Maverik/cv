import { useContext, useMemo } from "react";

import { sections, messages } from "locales";
import { AppSettings } from "../App";

export const useLocale = () => {
  const { locale } = useContext(AppSettings);

  return useMemo(
    () => ({
      sections: sections[locale],
      messages: messages[locale],
    }),
    [locale],
  );
};
