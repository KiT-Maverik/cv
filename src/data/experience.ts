import { LOCALE } from "../constants";

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
}

export const experience: (locale: LOCALE) => Experience[] = (locale) => [
  {
    start: "2021",
    end: "Present",
    company: COMPANY.BY_OWLS,
    position: "Code Master",
    responsibilities: responsibilities[locale][COMPANY.BY_OWLS],
  },
  {
    start: "2020",
    end: "2021",
    company: COMPANY.TACANS,
    position: "Software Development Engineer",
    responsibilities: responsibilities[locale][COMPANY.TACANS],
  },
  {
    start: "2016",
    end: "2019",
    company: COMPANY.ALTERYX,
    position: "Software Development Engineer",
    responsibilities: responsibilities[locale][COMPANY.ALTERYX],
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
      "Maintain and improve the codebase, ensuring code quality through code reviews, refactoring, and optimizing performance",
    ],
    [COMPANY.TACANS]: [
      "Perform technical assessment of designs and specifications",
      "Translate business requirements into technical specifications",
      "Helping team members grow through code review, and mentoring",
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
      "Підтримка та вдосконалення кодової бази, забезпечення якості коду через код ревʼю, та оптимізацію продуктивності",
    ],
    [COMPANY.TACANS]: [
      "Технічний аналіз макетів та архітектурних специфікацій",
      "Робота з технічними вимогами",
      "Підтримка розвитку інших членів команди",
    ],
  },
};
