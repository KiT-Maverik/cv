import { LOCALE } from "../constants";

interface Headers {
  contacts: string;
  education: string;
  portfolio: string;
  profile: string;
  reference: string;
  skills: string;
  workExperience: string;
}

export const headers: { [key in LOCALE]: Headers } = {
  [LOCALE.UA]: {
    contacts: "Контакти",
    education: "Освіта",
    portfolio: "Портфоліо",
    profile: "Профіль",
    reference: "Рекомендації",
    skills: "Навички",
    workExperience: "Досвід роботи",
  },
  [LOCALE.EN]: {
    contacts: "Contacts",
    education: "Education",
    portfolio: "Portfolio",
    profile: "Profile",
    reference: "Reference",
    skills: "Skills",
    workExperience: "Work Experience",
  },
};

