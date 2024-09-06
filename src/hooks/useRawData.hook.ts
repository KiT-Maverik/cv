import {contactsList, portfolioTypes} from "data";
import {useData} from "hooks";

export const useRawData = () => {
    const data = useData()

    const rawData = [
        `Name: ${data.personal.firstname} ${data.personal.lastname}`,
        `Goals: ${data.goals.join(' / ')}`,
        `Profile: ${data.personal.profile}`,
        `Contacts:\n${contactsList.map(item => `${data.contacts[item].link}`).join('\n')}`,
        `Skills: ${data.skills.join(', ')}`,
        `Education:\n${data.education.map(({facility, specialisation}) => `${facility}, ${specialisation}`).join('\n')}`,
        `Reference:\n${data.reference.map(({email, name, company, position}) => `${name}, ${position} at ${company}. Email: ${email}`).join('\n')}`,
        `Portfolio:\n${portfolioTypes.map((item) => `${data.portfolio[item].label}: ${data.portfolio[item].link}`).join('\n')}`
    ]

    return {rawText: rawData.join('\n\n')}
}
