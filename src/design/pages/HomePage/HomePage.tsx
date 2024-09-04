import React from 'react';
import {Box, Button, Chip, Container, Paper, Stack, Tooltip, Typography} from "@mui/material";
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {skills} from "../../../data/software-developer/skills";
import {reference} from "../../../data/reference";

import style from './HomePage.styles'

export function HomePage() {
    return (
        <Container>
            <Paper sx={style.page}>
                <Box>
                    <Typography textTransform='uppercase'>
                        Skills
                    </Typography>
                    <Stack direction='row' flexWrap='wrap' gap={1}>
                        {skills.map(item => <Chip label={item} variant="outlined"/>)}
                    </Stack>
                    <Box>
                        <Typography textTransform='uppercase'>
                            Reference
                        </Typography>
                    </Box>
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
