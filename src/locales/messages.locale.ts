import { LOCALE } from "../constants";

interface MessagesLocale {
  forRecruiters: string;
  operations: {
    copyText: string;
  };
  status: {
    error: string;
    copied: string;
  };
  tooltip: {
    print: string;
    exportText: string;
    translate: string;
    copyEmail: string;
  };
}

export const messages: { [key in LOCALE]: MessagesLocale } = {
  [LOCALE.EN]: {
    forRecruiters: "For recruiters with care 😽",
    operations: {
      copyText: "Copy Text",
    },
    status: {
      copied: "Copied to Clipboard",
      error: "Something went wrong",
    },
    tooltip: {
      copyEmail: "Click to Copy Email",
      exportText: "Export as Text",
      print: "Print PDF",
      translate: "Translate UA\\EN",
    },
  },
  [LOCALE.UA]: {
    forRecruiters: "Рекрутерам, з турботою 😽",
    operations: {
      copyText: "Скопіювати Текст",
    },
    status: {
      copied: "Скопійовано!",
      error: "Щось пішло не так",
    },
    tooltip: {
      copyEmail: "Клацніть, щоб скопіювати email",
      exportText: "Експортувати як текст",
      print: "Експортувати як PDF",
      translate: "Перекласти UA\\EN",
    },
  },
};
