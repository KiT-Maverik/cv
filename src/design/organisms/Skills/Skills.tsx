import {Box, Chip, Stack, Typography} from "@mui/material";
import React from "react";

import {useDataHook} from "hooks/useData.hook";

import style from './Skills.styles'

export const Skills = () => {
    const {skills} = useDataHook()

    return (
        <Box>
            <Typography variant='h3'>
                Skills
            </Typography>
            <Stack direction='row' flexWrap='wrap' gap={1}>
                {skills.map(item => <Chip label={item} variant="outlined"/>)}
            </Stack>
        </Box>
    )
}
