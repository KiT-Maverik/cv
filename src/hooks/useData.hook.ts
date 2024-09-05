import {useMemo} from "react";

import {education, personal, reference, contacts, skills, goals} from "data";

export const useData = () => {
    return useMemo(() => ({
        goals,
        skills,
        contacts,
        education,
        personal,
        reference,
    }), []);
}
