import { LOCALE } from "../constants";

interface Experience {
  start: string;
  end: string;
  company: string;
  position: string;
  responsibilities: Array<{ [key in LOCALE]: string }>;
}

export const experience: Experience[] = [
  {
    start: "2021",
    end: "Present",
    company: "By Owls",
    position: "Code Master",
    responsibilities: [
      {
        en: "Design and architect complex frontend solutions.",
        ua: "Проектування та створення складних рішень фронтенду з використанням React, забезпечуючи масштабованість, продуктивність та підтримуваність.",
      },
      {
        en: "Take a lead role in frontend development projects, guiding junior developers, ensuring best practices are followed.",
        ua: "Брати лідерську роль у проектах розробки фронтенду, надавати настанови молодшим розробникам, приймати технічні рішення та контролювати дотримання  кращих практик.",
      },
      {
        en: "Maintain and improve the codebase, ensuring code quality through code reviews, refactoring, and optimizing performance.",
        ua: "Підтримка та вдосконалення кодової бази, забезпечення якості коду через код ревʼю, рефакторинг та оптимізацію продуктивності.",
      },
    ],
  },
  {
    start: "2020",
    end: "2021",
    company: "Tacans",
    position: "Software Development Engineer",
    responsibilities: [
      {
        en: "Perform technical assessment of designs and specifications",
        ua: "Технічний аналіз макетів та прототипів, створення на їх основі архітектурних специфікацій",
      },
      {
        en: "Translate business requirements into technical specifications",
        ua:
          "Робота зі складними функціональними, технічними, архітектурними вимогами" +
          " та їх імплементація у архітектурних специфікаціяї",
      },
      {
        en: "Helping team members grow through code review, and mentoring",
        ua:
          "Підтримка розвитку інших членів команди через участь у код-ревʼю, парних активностях" +
          " та менторингу",
      },
    ],
  },
  {
    start: "2016",
    end: "2019",
    company: "Alteryx",
    position: "Software Development Engineer",
    responsibilities: [
      {
        en: "Participate in all SDLC stages",
        ua:
          "Приймати участь у розробці продукту на всіх етапах SDLC, " +
          "виконуючи оцінку, проектування та розробку нового функціоналу",
      },
      {
        en: "Participate in code review, document developed solutions",
        ua:
          "Вносити свій вклад у якість продукту: " +
          "проводити ревʼю коду, документувати новий функціонал та процеси",
      },
      {
        en: "Front End adjustment for testing needs",
        ua: "Підлаштування фронтенду для тестування",
      },
    ],
  },
];
