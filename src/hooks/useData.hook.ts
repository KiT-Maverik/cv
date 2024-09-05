import {useMemo} from "react";

import {education, personal, reference, contacts, skills, goals} from "data";

export const useDataHook = () => {
    return useMemo(() => ({
        goals,
        skills,
        contacts,
        education,
        personal,
        reference,
    }), []);
}
