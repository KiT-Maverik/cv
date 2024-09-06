import PrintIcon from '@mui/icons-material/LocalPrintshop';
import TranslateIcon from '@mui/icons-material/Translate';
import TextIcon from '@mui/icons-material/Assignment';
import {Box, Container, IconButton, Paper, Tooltip, Typography} from "@mui/material";
import React, {useContext, useRef} from 'react';
import ReactToPrint from 'react-to-print';

import {AppSettings} from "App";
import {LOCALE} from "../../../constants";
import {Contacts, Education, Experience, Portfolio, Profile, QR, Reference, Skills} from "design/organisms";
import {useData} from "hooks";

import style from './HomePage.styles'

export function HomePage() {
    const {personal, goals} = useData()
    const { locale, setLocale } = useContext(AppSettings)

    const cvRef = useRef<HTMLDivElement>(null);

    const handleLocaleChange = () => {
        if (locale === LOCALE.EN) setLocale(LOCALE.UA);
        else if (locale === LOCALE.UA) setLocale(LOCALE.EN);
    }

    return (
        <Container sx={style.container}>
            <Paper sx={style.cv} ref={cvRef}>
                <Box sx={style.header.container}>
                    <Typography variant='h1' sx={style.header.name}>
                        {`${personal.firstname} ${personal.lastname}`}
                    </Typography>
                    <Typography variant='h3' sx={style.header.goals}>
                        {goals.join(' / ')}
                    </Typography>
                    <Box sx={style.header.actions}>
                        <Tooltip title='Translate EN/UA' arrow onClick={handleLocaleChange}>
                            <IconButton><TranslateIcon/></IconButton>
                        </Tooltip>
                        <Tooltip title='Export as text' arrow>
                            <IconButton><TextIcon/></IconButton>
                        </Tooltip>
                        <ReactToPrint
                            trigger={() => (
                                <Tooltip title='Print PDF' arrow>
                                    <IconButton><PrintIcon/></IconButton>
                                </Tooltip>
                            )}
                            content={() => cvRef.current}
                        />
                    </Box>
                </Box>
                <Box sx={style.columns.info}>
                    <QR/>
                    <Skills/>
                    <Reference/>
                    <Contacts/>
                    <Education/>
                </Box>
                <Box sx={style.columns.main}>
                    <Profile/>
                    <Experience/>
                    <Portfolio/>
                </Box>
            </Paper>
        </Container>
    );
}
