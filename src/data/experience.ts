import {LOCALE} from "../constants";

interface Experience {
    start: string
    end: string
    company: string
    position: string
    responsibilities: Array<{ [key in LOCALE]: string}>
}

export const experience: Experience[] = [
        {
            start: '2022',
            end: 'Present',
            company: 'By Owls',
            position: 'Code Master',
            responsibilities: [
                {
                    en : 'Design and architect complex frontend solutions using React, ensuring scalability, performance, and maintainability.',
                    ua : 'Проектування та створення складних рішень фронтенду з використанням React, забезпечуючи масштабованість, продуктивність та підтримуваність.',
                },
                {
                    en : 'Take a lead role in frontend development projects, guiding junior developers, making technical decisions, and ensuring best practices are followed.',
                    ua : 'Брати лідерську роль у проектах розробки фронтенду, надавати настанови молодшим розробникам, приймати технічні рішення та контролювати дотримання  кращих практик.',
                },
                {
                    en : 'Maintain and improve the codebase, ensuring code quality through code reviews, refactoring, and optimizing performance.',
                    ua : 'Підтримка та вдосконалення кодової бази, забезпечення якості коду через код ревʼю, рефакторинг та оптимізацію продуктивності.',
                },
            ],
        },
]
