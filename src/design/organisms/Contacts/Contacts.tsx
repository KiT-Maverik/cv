import TelegramIcon from "@mui/icons-material/SendRounded";
import EmailIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedinIcon from "@mui/icons-material/AccountBoxRounded";
import WebsiteIcon from "@mui/icons-material/LanguageRounded";
import { Box, Button, Typography } from "@mui/material";
import React, { ReactNode, useMemo } from "react";

import { CONTACTS } from "data";
import { useCopyToClipboard, useData, useLocale } from "hooks";

import style from "./Contacts.styles";
export const Contacts = () => {
  const { contacts } = useData();
  const { sections } = useLocale();
  const { copy } = useCopyToClipboard();
  const icon = useMemo<{ [key in CONTACTS]: ReactNode }>(
    () => ({
      [CONTACTS.EMAIL]: <EmailIcon />,
      [CONTACTS.LINKED_IN]: <LinkedinIcon />,
      [CONTACTS.TELEGRAM]: <TelegramIcon />,
      [CONTACTS.WEBSITE]: <WebsiteIcon />,
    }),
    [],
  );
  return (
    <Box sx={style.container}>
      <Typography variant="h2">{sections.contacts}</Typography>
      {Object.values(CONTACTS).map((item) => (
        <Button
          key={item}
          startIcon={icon[item]}
          color="inherit"
          onClick={() => copy(contacts[item].link)}
        >
          {contacts[item].label}
        </Button>
      ))}
    </Box>
  );
};
