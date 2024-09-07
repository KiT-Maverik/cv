import { LOCALE } from "../constants";

interface MessagesLocale {
  tooltip: {
    print: string;
    exportText: string;
    translate: string;
    copyEmail: string;
  };
}

export const messages: { [key in LOCALE]: MessagesLocale } = {
  [LOCALE.EN]: {
    tooltip: {
      print: "Print PDF",
      exportText: "Export as Text",
      translate: "Translate UA\\EN",
      copyEmail: "Click to Copy Email",
    },
  },
  [LOCALE.UA]: {
    tooltip: {
      print: "Експортувати як PDF",
      exportText: "Експортувати як текст",
      translate: "Перекласти UA\\EN",
      copyEmail: "Клацніть, щоб скопіювати email",
    },
  },
};
