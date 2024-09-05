import ProfileIcon from '@mui/icons-material/PersonOutlined';
import {Box, Typography} from "@mui/material";

import style from './Profile.styles'
import React from "react";

export const Profile = () => {
    return (
        <Box sx={style.container}>
            <Typography variant='h2' sx={style.header}>
                <ProfileIcon/>
                Profile
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.
            </Typography>
        </Box>
    )
}
