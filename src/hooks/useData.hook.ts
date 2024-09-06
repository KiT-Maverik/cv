import {useContext, useMemo} from "react";

import {educationData, experience, personalData, reference, contacts, skills, goals, portfolio} from "data";
import {AppSettings} from "../App";

export const useData = () => {
    const { locale } = useContext(AppSettings)

    return useMemo(() => ({
        contacts,
        education: educationData[locale],
        experience,
        goals,
        personal: personalData[locale],
        portfolio,
        reference,
        skills,
    }), [locale]);
}
