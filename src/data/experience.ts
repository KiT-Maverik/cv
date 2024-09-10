import { LOCALE } from "../constants";
import { skills as skillsArray } from "./skills";

enum COMPANY {
  ALTERYX = "Alteryx",
  BY_OWLS = "By Owls",
  TACANS = "Tacans",
}
interface Experience {
  start: string;
  end: string;
  company: COMPANY;
  position: string;
  responsibilities: string[];
  skills: Array<(typeof skillsArray)[number]>;
}

export const experience: (locale: LOCALE) => Experience[] = (locale) => [
  {
    start: "2021",
    end: "Present",
    company: COMPANY.BY_OWLS,
    position: "Code Master",
    responsibilities: responsibilities[locale][COMPANY.BY_OWLS],
    skills: [
      "AI",
      "React",
      "Redux",
      "Typescript",
      "NodeJs",
      "Material UI",
      "Emotion",
    ],
  },
  {
    start: "2020",
    end: "2021",
    company: COMPANY.TACANS,
    position: "Software Development Engineer",
    responsibilities: responsibilities[locale][COMPANY.TACANS],
    skills: ["NextJs", "Redux", "Typescript", "NodeJs", "GraphQL", "SASS/LESS"],
  },
  {
    start: "2016",
    end: "2019",
    company: COMPANY.ALTERYX,
    position: "Software Development Engineer",
    responsibilities: responsibilities[locale][COMPANY.ALTERYX],
    skills: ["React", "Redux", "Typescript", "Tailwind", "NodeJs", "Recharts"],
  },
];

type Responsibilities = {
  [key in LOCALE]: {
    [key in COMPANY]: string[];
  };
};

const responsibilities: Responsibilities = {
  [LOCALE.EN]: {
    [COMPANY.ALTERYX]: [
      "Participate in all SDLC stages",
      "Participate in code review, document developed solutions",
      "Front End adjustment for testing needs",
    ],
    [COMPANY.BY_OWLS]: [
      "Design and architect complex frontend solutions",
      "Take a lead role in frontend development projects, guiding junior developers, ensuring best practices are followed",
    ],
    [COMPANY.TACANS]: [
      "Perform technical assessment of designs and specifications",
      "Translate business requirements into technical specifications",
    ],
  },
  [LOCALE.UA]: {
    [COMPANY.ALTERYX]: [
      "Приймати участь у розробці продукту на всіх етапах SDLC",
      "Проводити ревʼю коду, документувати новий функціонал",
      "Підлаштування фронтенду для тестування",
    ],
    [COMPANY.BY_OWLS]: [
      "Проектування та створення складних рішень фронтенду",
      "Брати лідерську роль у проектах, менторити молодших розробників, контролювати дотримання кращих практик",
    ],
    [COMPANY.TACANS]: [
      "Технічний аналіз макетів та архітектурних специфікацій",
      "Робота з технічними вимогами",
    ],
  },
};
