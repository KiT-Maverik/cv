import WorkIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

import { useData, useLocale } from "hooks";

import style from "./Experience.styles";

export const Experience = () => {
  const { experience } = useData();
  const { sections } = useLocale();

  return (
    <Box sx={style.container}>
      <Typography variant="h2" sx={style.header}>
        <WorkIcon />
        {sections.workExperience}
      </Typography>
      <Box sx={style.experience.container}>
        {experience.map(
          ({ start, end, responsibilities, company, position }) => (
            <>
              <Divider orientation="vertical" sx={style.experience.divider} />
              <Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Typography variant="h3" fontWeight={700}>
                    {`${company} || `}
                  </Typography>
                  <Typography>{`${position}, ${start} - ${end}`}</Typography>
                </Box>
                <Box
                  component="ul"
                  sx={style.experience.description.responsibility.list}
                >
                  {responsibilities.map((item) => (
                    <Typography
                      key={item}
                      component="li"
                      sx={style.experience.description.responsibility.item}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </>
          ),
        )}
      </Box>
    </Box>
  );
};
