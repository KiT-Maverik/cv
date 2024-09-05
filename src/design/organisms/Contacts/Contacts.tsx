import EmailIcon from '@mui/icons-material/MailOutlineRounded';
import {Box, Button, Stack, Typography} from "@mui/material";
import React, {ReactNode, useMemo} from "react";

import {CONTACTS} from "data";
import {LinkedinIcon, TelegramIcon} from "design/atoms";
import {useData} from "hooks";

import style from './Contacts.styles'

export const Contacts = () => {
    const {contacts} = useData()

    const icon = useMemo<{[key in CONTACTS] : ReactNode}>(() => ({
        [CONTACTS.EMAIL]: <EmailIcon/>,
        [CONTACTS.LINKED_IN]: <LinkedinIcon/>,
        [CONTACTS.TELEGRAM]: <TelegramIcon/>,
    }), []);

    return (
        <Box>
            <Typography variant='h2'>
                Contacts
            </Typography>
            <Stack gap={1}>
                {Object.values(CONTACTS).map(item =>
                    <Button startIcon={icon[item]} color='inherit'>{contacts[item].label}</Button>
                )}
            </Stack>
        </Box>
    )
}
