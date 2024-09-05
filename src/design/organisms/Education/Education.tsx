import {Box, Stack, Typography} from "@mui/material";
import React from "react";

import {useData} from "hooks";

import style from './Education.styles'

export const Education = () => {
    const {education} = useData()

    return (
        <Box>
            <Typography variant='h2'>
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
