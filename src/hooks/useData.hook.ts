import {useMemo} from "react";

import * as data from 'data'
import {education, personal, reference} from "data";

export const useDataHook = () => {
    return useMemo(() => ({
        personal,
        education,
        reference,
    }), []);
}
