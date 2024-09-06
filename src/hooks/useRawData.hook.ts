import {contactsList} from "data";
import {useData} from "hooks";

export const useRawData = () => {
    const data = useData()

    const rawData = [
        `Name: ${data.personal.firstname} ${data.personal.lastname}`,
        `Goals: ${data.goals.join(' / ')}`,
        `Contacts:\n${contactsList.map(item => `- ${data.contacts[item].link}`).join('\n')}`,
        `Skills: ${data.skills.join(', ')}`,
    ]

    return {rawText: rawData.join('\n\n')}
}
