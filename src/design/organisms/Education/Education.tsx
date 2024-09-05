import {Box, Stack, Typography} from "@mui/material";
import React from "react";

import {useData} from "hooks/useData";

import style from './Education.styles'

export const Education = () => {
    const {education} = useData()

    return (
        <Box>
            <Typography variant='h3'>
                Education
            </Typography>
            <Stack gap={1}>
                {education.map(({facility, specialisation}) =>
                    (
                        <Box>
                            <Typography>{facility}</Typography>
                            <Typography>{specialisation}</Typography>
                        </Box>
                    )
                )}
            </Stack>
        </Box>
    )
}
