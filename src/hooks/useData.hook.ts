import {useMemo} from "react";

import {education, experience, personal, reference, contacts, skills, goals} from "data";

export const useData = () => {
    return useMemo(() => ({
        contacts,
        education,
        experience,
        goals,
        personal,
        reference,
        skills,
    }), []);
}
