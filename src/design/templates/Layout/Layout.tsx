import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
    AppBar,
    Box,
    Button,
    Stack,
    Toolbar,
} from "@mui/material";
import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Layout.styles'

export function Layout() {
    return (
            <Stack sx={style.container}>
                    <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit" startIcon={<MenuRoundedIcon />}>Movie Catalog</Button>
                        </Toolbar>
                    </AppBar>
                <Box component='main' sx={style.main}>
                    <Outlet/>
                </Box>
            </Stack>
    );
}
