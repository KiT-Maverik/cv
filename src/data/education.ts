import { LOCALE } from "../constants";

interface Education {
  facility: string;
  specialisation: string;
}

export const educationData: { [key in LOCALE]: Education[] } = {
  [LOCALE.EN]: [
    {
      facility: "Technological College",
      specialisation: "Bachelor of Computer Engineering",
    },
    {
      facility: "Foreign Philology University",
      specialisation: "Master of English philology",
    },
  ],
  [LOCALE.UA]: [
    {
      facility: "Технологічний Коледж",
      specialisation: "Спеціаліст, Компʼютерна Інженерія",
    },
    {
      facility: "Інститут іноземної філології",
      specialisation: "Бакалавр, Англійська Філологія",
    },
  ],
};
