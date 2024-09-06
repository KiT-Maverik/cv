import {contactsList} from "data";
import {useData} from "hooks";

export const useRawData = () => {
    const data = useData()

    const rawData = [
        `Name: ${data.personal.firstname} ${data.personal.lastname}`,
        `Goals: ${data.goals.join(' / ')}`,
        `Contacts:\n${contactsList.map(item => `- ${data.contacts[item].link}`).join('\n')}`,
        `Skills: ${data.skills.join(', ')}`,
        `Education:\n${data.education.map(({facility, specialisation}) => `- ${facility}, ${specialisation}`).join('\n')}`,
        `Reference:\n${data.reference.map(({email, name, company, position}) => `- ${name}, ${position} at ${company}. Email: ${email}`).join('\n')}`,
    ]

    return {rawText: rawData.join('\n\n')}
}
