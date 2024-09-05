import {Box, Container, Paper, Typography} from "@mui/material";
import React from 'react';

import {Reference, Skills, Contacts, Education, QR} from "design/organisms";
import {useData} from "hooks";

import style from './HomePage.styles'

export function HomePage() {
    const {personal, goals} = useData()

    return (
        <Container>
            <Paper sx={style.page}>
                <Box sx={style.header.container}>
                    <Typography variant='h1' sx={style.header.name}>
                        {`${personal.firstname} ${personal.lastname}`}
                    </Typography>
                    <Typography variant='h2' sx={style.header.goals}>
                        {goals.join(' / ')}
                    </Typography>
                </Box>
                <Box sx={style.columns.info}>
                    <QR/>
                    <Skills/>
                    <Reference/>
                    <Contacts/>
                    <Education/>
                </Box>
                <Box>
                    <Box>
                        <Typography variant="h1" fontWeight={1000} textTransform='uppercase'>
                            {`Nick `}
                            <Typography component='span' variant="h1">Orlov</Typography>
                        </Typography>
                        <Typography variant="h2">Goal, Goal</Typography>
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
