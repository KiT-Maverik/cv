import { LOCALE } from "../constants";

interface Headers {
  contacts: string;
  education: string;
  goals: string;
  name: string;
  portfolio: string;
  profile: string;
  reference: string;
  skills: string;
  workExperience: string;
}

export const sections: { [key in LOCALE]: Headers } = {
  [LOCALE.EN]: {
    contacts: "Contacts",
    education: "Education",
    goals: "Goals",
    name: "Name",
    portfolio: "Portfolio",
    profile: "Profile",
    reference: "Reference",
    skills: "Skills",
    workExperience: "Work Experience",
  },
  [LOCALE.UA]: {
    contacts: "Контакти",
    education: "Освіта",
    goals: "Цілі",
    name: "Імʼя",
    portfolio: "Портфоліо",
    profile: "Профіль",
    reference: "Рекомендації",
    skills: "Навички",
    workExperience: "Досвід роботи",
  },
};
