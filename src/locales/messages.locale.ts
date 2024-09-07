import { LOCALE } from "../constants";

interface MessagesLocale {
  tooltip: {
    print: string;
    exportText: string;
    translate: string;
    copyEmail: string;
  };
  operations: {
    copyText: string;
  };
  forRecruiters: string;
}

export const messages: { [key in LOCALE]: MessagesLocale } = {
  [LOCALE.EN]: {
    tooltip: {
      print: "Print PDF",
      exportText: "Export as Text",
      translate: "Translate UA\\EN",
      copyEmail: "Click to Copy Email",
    },
    operations: {
      copyText: "Copy Text",
    },
    forRecruiters: "For recruiters with care 😽",
  },
  [LOCALE.UA]: {
    tooltip: {
      print: "Експортувати як PDF",
      exportText: "Експортувати як текст",
      translate: "Перекласти UA\\EN",
      copyEmail: "Клацніть, щоб скопіювати email",
    },
    operations: {
      copyText: "Скопіювати Текст",
    },
    forRecruiters: "Рекрутерам, з турботою 😽",
  },
};
