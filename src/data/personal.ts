import { LOCALE } from "../constants";

interface PersonalData {
  firstname: string;
  lastname: string;
  profile: string;
}

export const personalData: { [key in LOCALE]: PersonalData } = {
  [LOCALE.EN]: {
    firstname: "Nick",
    lastname: "Orlov",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.",
  },
  [LOCALE.UA]: {
    firstname: "Нік",
    lastname: "Орлов",
    profile: "А баба галамага.",
  },
};
