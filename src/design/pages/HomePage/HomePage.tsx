import {Box, Container, Paper, Typography} from "@mui/material";
import React from 'react';

import {Reference, Skills, Contacts, Education} from "design/organisms";

import style from './HomePage.styles'

export function HomePage() {
    return (
        <Container>
            <Paper sx={style.page}>
                <Box>
                    <Skills/>
                    <Reference/>
                    <Contacts/>
                    <Education/>
                </Box>
                <Box>
                    <Box>
                        <Typography variant="h3" fontWeight={1000} textTransform='uppercase'>
                            {`Nick `}
                            <Typography component='span' variant="h3">Orlov</Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography textTransform='uppercase'>
                            Profile
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
