import { useContext, useMemo } from "react";

import { AppSettings } from "App";
import {
  educationData,
  experience,
  personalData,
  reference,
  contacts,
  skills,
  goalsData,
  portfolio,
} from "data";

export const useData = () => {
  const { locale } = useContext(AppSettings);

  return useMemo(
    () => ({
      contacts,
      education: educationData[locale],
      experience: experience(locale),
      goals: goalsData[locale],
      personal: personalData[locale],
      portfolio,
      reference,
      skills,
    }),
    [locale],
  );
};
