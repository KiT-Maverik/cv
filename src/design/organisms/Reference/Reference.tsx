import style from './Reference.styles'
import {Box, Button, Stack, Tooltip, Typography} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";
import {useDataHook} from "hooks/useData.hook";

interface ReferenceProps {
}

export const Reference = () => {
    const {reference} = useDataHook()

    return (
        <Box sx={style.container}>
            <Typography variant='h3'>Reference</Typography>
            {reference.map(({name, company, position, email}) => (
                <Box key={company}>
                    <Typography fontWeight='bold'>{company}</Typography>
                    <Typography>{`${name}, ${position}`}</Typography>
                    <Tooltip title='Click to copy' arrow placement='top'>
                        <Button startIcon={<MailOutlineIcon/>}>{email}</Button>
                    </Tooltip>
                </Box>
            ))}
        </Box>
    )
}
