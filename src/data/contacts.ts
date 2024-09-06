export enum CONTACTS {
    EMAIL = 'Email',
    LINKED_IN = 'Linked In',
    TELEGRAM = 'Telegram',
}

export const contactsList = Object.values(CONTACTS);

interface Contact {
    label: string
    link: string
}

export const contacts: {[key in CONTACTS]: Contact} = {
    [CONTACTS.EMAIL]: {
        label: 'mykola.orlov79@gmail.com',
        link: 'mykola.orlov79@gmail.com',
    },
    [CONTACTS.LINKED_IN]: {
        label: 'Linked In',
        link: 'https://linkedin.com/in/orlovn',
    },
    [CONTACTS.TELEGRAM]: {
        label: 'Telegram',
        link: 'https://t.me/@mykolaorlov',
    },
}
