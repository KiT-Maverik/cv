import { contactsList, portfolioTypes } from "data";
import { useData } from "hooks";

export const useRawData = () => {
  const data = useData();

  const rawData = [
    `Name: ${data.personal.firstname} ${data.personal.lastname}`,
    `Goals: ${data.goals.join(" / ")}`,
    `Profile: ${data.personal.profile}`,
    `Skills: ${data.skills.join(", ")}`,
    `Reference:\n${data.reference.map(({ email, name, company, position }) => `${name}, ${position} at ${company}. Email: ${email}`).join("\n")}`,
    `Portfolio:\n${portfolioTypes.map((item) => `${data.portfolio[item].label}: ${data.portfolio[item].link}`).join("\n")}`,
    `Experience:\n${data.experience.map(({ company, position, start, end }) => `${position} at ${company}, ${start} - ${end}`).join("\n")}`,
    `Education:\n${data.education.map(({ facility, specialisation }) => `${facility}, ${specialisation}`).join("\n")}`,
    `Contacts:\n${contactsList.map((item) => `${data.contacts[item].link}`).join("\n")}`,
  ];

  return { rawText: rawData.join("\n\n") };
};
