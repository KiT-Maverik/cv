import WorkIcon from '@mui/icons-material/WorkOutlineOutlined';
import {Box, Divider, Stack, Typography} from "@mui/material";
import {useContext} from "react";

import {AppSettings} from "App";
import {useData} from "hooks";

import style from './Experience.styles'

export const Experience = () => {
    const {experience} = useData()
    const { locale } = useContext(AppSettings)


    return (
        <Box sx={style.container}>
            <Typography variant='h2' sx={style.header}><WorkIcon/>Work Experience</Typography>
            {experience.map(({start, end, responsibilities, company, position}) => (
                    <Box sx={style.experience.container}>
                        <Stack sx={style.experience.period}>
                            <Typography>{end}</Typography>
                            <Typography>-</Typography>
                            <Typography>{start}</Typography>
                        </Stack>
                        <Divider orientation='vertical'/>
                        <Box>
                            <Typography>{`${company}, ${position}`}</Typography>
                            <Box component='ul' sx={style.responsibility.list}>
                                {responsibilities.map(item => <Typography component='li' sx={style.responsibility.item}>{item[locale]}</Typography>)}
                            </Box>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}
