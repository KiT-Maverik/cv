export enum CONTACTS {
  EMAIL = "Email",
  LINKED_IN = "Linked In",
  TELEGRAM = "Telegram",
  WEBSITE = "Web site",
}

export const contactsList = Object.values(CONTACTS);

interface Contact {
  label: string;
  link: string;
}

export const contacts: { [key in CONTACTS]: Contact } = {
  [CONTACTS.EMAIL]: {
    label: "Email",
    link: "mailto:mykola.orlov79@gmail.com",
  },
  [CONTACTS.LINKED_IN]: {
    label: "Linked In",
    link: "https://bit.ly/3XBLbHY",
  },
  [CONTACTS.TELEGRAM]: {
    label: "Telegram",
    link: "https://bit.ly/4d4UEMq",
  },
  [CONTACTS.WEBSITE]: {
    label: "WWW",
    link: "https://bit.ly/4eztte3",
  },
};
