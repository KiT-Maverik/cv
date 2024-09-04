import style from './Skills.styles'
import {Box, Chip, Stack, Typography} from "@mui/material";
import {skills} from "../../../data/software-developer/skills";
import React from "react";

interface SkillsProps {
}

export const Skills = ({}: SkillsProps) => {
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
