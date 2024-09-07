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
      "Experienced Software Development Engineer with over 12 years in IT, specializing in building scalable front-end architectures. Proficient in React, TypeScript, and various modern libraries and frameworks like NextJS, Material UI, and Tailwind. AI enthusiast obsessed with optimising performance with cutting edge prompts.",
  },
  [LOCALE.UA]: {
    firstname: "Нік",
    lastname: "Орлов",
    profile:
      "Досвідчений спеціаліст з понад 12-річним досвідом в ІТ. Спеціалізуюсь на створенні масштабованих фронтенд-архітектур. Володію React, TypeScript та сучасними бібліотеками і фреймворками, такими як NextJS, Material UI та Tailwind. AI ентузіаст, захоплююсь оптимізацією продуктивності через розробку помічників.",
  },
};
