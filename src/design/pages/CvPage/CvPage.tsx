import CloseIcon from "@mui/icons-material/CloseRounded";
import CopyIcon from "@mui/icons-material/ContentCopyRounded";
import PrintIcon from "@mui/icons-material/LocalPrintshop";
import TranslateIcon from "@mui/icons-material/Translate";
import TextIcon from "@mui/icons-material/Assignment";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import { AppSettings } from "App";
import { LOCALE } from "../../../constants";
import {
  Contacts,
  Education,
  Experience,
  Portfolio,
  Profile,
  QR,
  Reference,
  Skills,
} from "design/organisms";
import { useCopyToClipboard, useData, useLocale, useRawData } from "hooks";

import style from "./CvPage.styles";

export function CvPage() {
  const [showModal, setShowModal] = useState(false);
  const { personal, goals } = useData();
  const { rawText } = useRawData();
  const { copy } = useCopyToClipboard();
  const { locale, setLocale } = useContext(AppSettings);
  const { messages } = useLocale();

  const cvRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = () => {
    if (locale === LOCALE.EN) setLocale(LOCALE.UA);
    else if (locale === LOCALE.UA) setLocale(LOCALE.EN);
  };

  return (
    <Box sx={style.container}>
      <Paper sx={style.cv} ref={cvRef}>
        <Box sx={style.header.container}>
          <Typography variant="h1" sx={style.header.name}>
            {`${personal.firstname} ${personal.lastname}`}
          </Typography>
          <Typography variant="h3" sx={style.header.goals}>
            {goals.join(" / ")}
          </Typography>
          <Box sx={style.header.actions}>
            <Tooltip
              title={messages.tooltip.translate}
              arrow
              onClick={handleLocaleChange}
            >
              <IconButton>
                <TranslateIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={messages.tooltip.exportText}
              arrow
              onClick={() => setShowModal(true)}
            >
              <IconButton>
                <TextIcon />
              </IconButton>
            </Tooltip>
            <ReactToPrint
              trigger={() => (
                <Tooltip title={messages.tooltip.print} arrow>
                  <IconButton>
                    <PrintIcon />
                  </IconButton>
                </Tooltip>
              )}
              content={() => cvRef.current}
            />
          </Box>
        </Box>
        <Box sx={style.columns.info}>
          <QR />
          <Skills />
          <Reference />
          <Contacts />
          <Education />
        </Box>
        <Box sx={style.columns.main}>
          <Profile />
          <Experience />
          <Portfolio />
        </Box>
      </Paper>
      <Modal
        open={showModal}
        sx={style.modal.overlay}
        onClose={() => setShowModal(false)}
      >
        <Box sx={style.modal.container}>
          <Box sx={style.modal.header.container}>
            <Alert severity="info" sx={style.modal.header.alert}>
              {messages.forRecruiters}
            </Alert>
            <IconButton onClick={() => setShowModal(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="textarea" disabled sx={style.modal.content}>
            {rawText}
          </Box>
          <Box sx={style.modal.actions}>
            <Button
              variant="contained"
              startIcon={<CopyIcon />}
              onClick={() => copy(rawText)}
            >
              {messages.operations.copyText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
