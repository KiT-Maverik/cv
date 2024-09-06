import style from './Reference.styles'
import {Box, Button, Tooltip, Typography} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";

import {useCopyToClipboard, useData} from "hooks";

export const Reference = () => {
    const {reference} = useData()
    const {copy} = useCopyToClipboard()

    return (
        <Box sx={style.container}>
            <Typography variant='h2'>Reference</Typography>
            {reference.map(({name, company, position, email}) => (
                <Box key={company}>
                    <Typography pl={1} fontWeight={700}>{`${company} / ${position}`}</Typography>
                    <Tooltip title='Click to copy email' arrow placement='top'>
                        <Button
                            startIcon={<MailOutlineIcon/>}
                            color='inherit'
                            fullWidth
                            onClick={() => copy(email)}
                        >
                            {name}
                        </Button>
                    </Tooltip>
                </Box>
            ))}
        </Box>
    )
}
