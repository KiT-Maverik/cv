import EmailIcon from '@mui/icons-material/MailOutlineRounded';
import {Box, Button, Chip, Stack, Typography} from "@mui/material";
import React, {ReactNode, useMemo} from "react";

import {CONTACTS} from "data";
import {LinkedinIcon, TelegramIcon} from "design/atoms";
import {useDataHook} from "hooks/useData.hook";

import style from './Education.styles'

export const Education = () => {
    const {education} = useDataHook()

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
