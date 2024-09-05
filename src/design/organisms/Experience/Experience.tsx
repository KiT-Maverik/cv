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
            <Box sx={style.experience.container}>
                {experience.map(({start, end, responsibilities, company, position}) => (
                    <>
                        <Stack sx={style.experience.period.container}>
                            <Typography sx={style.experience.period.item}>{end}</Typography>
                            <Typography sx={style.experience.period.item}>-</Typography>
                            <Typography sx={style.experience.period.item}>{start}</Typography>
                        </Stack>
                        <Divider orientation='vertical' sx={style.experience.divider}/>
                        <Box>
                            <Typography variant='h3' fontWeight={700}>{`${company} || ${position}`}</Typography>
                            <Box component='ul' sx={style.experience.description.responsibility.list}>
                                {responsibilities.map(item => <Typography component='li' sx={style.experience.description.responsibility.item}>{item[locale]}</Typography>)}
                            </Box>
                        </Box>
                    </>
                ))
                }
            </Box>
        </Box>
    )
}
