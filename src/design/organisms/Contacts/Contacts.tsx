import EmailIcon from '@mui/icons-material/MailOutlineRounded';
import {Box, Chip, Stack, Typography} from "@mui/material";
import React, {ReactNode, useMemo} from "react";

import {CONTACTS} from "data";
import {LinkedinIcon, TelegramIcon} from "design/atoms";
import {useDataHook} from "hooks/useData.hook";

import style from './Contacts.styles'

export const Contacts = () => {
    const {contacts} = useDataHook()

    const icon = useMemo<{[key in CONTACTS] : ReactNode}>(() => ({
        [CONTACTS.EMAIL]: <EmailIcon/>,
        [CONTACTS.LINKED_IN]: <LinkedinIcon/>,
        [CONTACTS.TELEGRAM]: <TelegramIcon/>,
    }), []);

    return (
        <Box>
            <Typography variant='h3'>
                Contacts
            </Typography>
            <Stack direction='row' flexWrap='wrap' gap={1}>
                {Object.values(CONTACTS).map(item => <Box>{icon[item]}</Box>)}
            </Stack>
        </Box>
    )
}
