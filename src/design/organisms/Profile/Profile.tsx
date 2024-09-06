import ProfileIcon from '@mui/icons-material/PersonOutlined';
import {Box, Typography} from "@mui/material";

import style from './Profile.styles'
import React from "react";
import {useData} from "../../../hooks";

export const Profile = () => {
    const {personal} = useData()

    return (
        <Box sx={style.container}>
            <Typography variant='h2' sx={style.header}>
                <ProfileIcon/>
                Profile
            </Typography>
            <Typography textAlign='justify'>
                {personal.profile}
            </Typography>
        </Box>
    )
}
