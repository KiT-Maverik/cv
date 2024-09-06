import {useMemo} from "react";

import {education, experience, personal, reference, contacts, skills, goals, portfolio} from "data";

export const useData = () => {
    return useMemo(() => ({
        contacts,
        education,
        experience,
        goals,
        personal,
        portfolio,
        reference,
        skills,
    }), []);
}
