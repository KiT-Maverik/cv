import CopyIcon from "@mui/icons-material/ContentCopy";
import TelegramIcon from "@mui/icons-material/SendRounded";
import EmailIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedinIcon from "@mui/icons-material/AccountBoxRounded";
import WebsiteIcon from "@mui/icons-material/LanguageRounded";
import { Box, Button, Fade, IconButton, Typography } from "@mui/material";
import React, { ReactNode, useMemo, useState } from "react";

import { CONTACTS } from "data";
import { useCopyToClipboard, useData, useLocale } from "hooks";

import style from "./Contacts.styles";
export const Contacts = () => {
  const [showCopyButton, setShowCopyButton] = useState(false);
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
        <>
          <Box
            key={item}
            sx={style.action.web}
            onMouseEnter={() => setShowCopyButton(true)}
            onMouseLeave={() => setShowCopyButton(false)}
          >
            <Button
              color="inherit"
              component="a"
              href={contacts[item].link}
              target="_blank"
              fullWidth
              startIcon={icon[item]}
            >
              {contacts[item].label}
            </Button>
            <Fade in={showCopyButton}>
              <Button
                key={item}
                color="inherit"
                sx={{ minWidth: 0 }}
                onClick={() => copy(contacts[item].link)}
              >
                <CopyIcon />
              </Button>
            </Fade>
          </Box>
        </>
      ))}
    </Box>
  );
};
