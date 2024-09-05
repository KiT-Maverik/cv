import style from './Reference.styles'
import {Box, Button, Tooltip, Typography} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";

import {useData} from "hooks";

interface ReferenceProps {
}

export const Reference = () => {
    const {reference} = useData()

    return (
        <Box sx={style.container}>
            <Typography variant='h2'>Reference</Typography>
            {reference.map(({name, company, position, email}) => (
                <Box key={company}>
                    <Typography fontWeight='bold'>{company}</Typography>
                    <Typography>{`${name}, ${position}`}</Typography>
                    <Tooltip title='Click to copy' arrow placement='top'>
                        <Button startIcon={<MailOutlineIcon/>} color='inherit'>{email}</Button>
                    </Tooltip>
                </Box>
            ))}
        </Box>
    )
}
