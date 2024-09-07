import { contactsList, portfolioTypes } from "data";
import { useData, useLocale } from "hooks";

export const useRawData = () => {
  const data = useData();
  const { sections } = useLocale();

  const rawData = [
    `${sections.name}: ${data.personal.firstname} ${data.personal.lastname}`,
    `${sections.goals}: ${data.goals.join(" / ")}`,
    `${sections.profile}: ${data.personal.profile}`,
    `${sections.skills}: ${data.skills.join(", ")}`,
    `${sections.reference}:\n${data.reference.map(({ email, name, company, position }) => `${name} || ${company} \\\\ ${position}. Email: ${email}`).join("\n")}`,
    `${sections.portfolio}:\n${portfolioTypes.map((item) => `${data.portfolio[item].label}: ${data.portfolio[item].link}`).join("\n")}`,
    `${sections.workExperience}:\n${data.experience.map(({ company, position, start, end, responsibilities }) => `${position} || ${company}, ${start} - ${end}\n${responsibilities.map((item) => item).join("\n")}`).join("\n")}`,
    `${sections.education}:\n${data.education.map(({ facility, specialisation }) => `${facility}, ${specialisation}`).join("\n")}`,
    `${sections.contacts}:\n${contactsList.map((item) => `${data.contacts[item].link}`).join("\n")}`,
  ];

  return { rawText: rawData.join("\n\n") };
};
