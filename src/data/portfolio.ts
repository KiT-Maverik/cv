export enum PORTFOLIO {
  AI = "AI",
  GITHUB = "GitHub",
  I_CODE_THIS = "I code this",
  LEET_CODE = "Leet Code",
}

export const portfolioTypes = Object.values(PORTFOLIO);

interface Portfolio {
  link: string;
  label: string;
}

export const portfolio: { [key in PORTFOLIO]: Portfolio } = {
  [PORTFOLIO.AI]: {
    label: "AI Prompts",
    link: "https://bit.ly/3XAjEGN",
  },
  [PORTFOLIO.GITHUB]: {
    label: "GitHub",
    link: "https://bit.ly/3AVV9v7",
  },
  [PORTFOLIO.I_CODE_THIS]: {
    label: "I Code This",
    link: "https://bit.ly/3AZ68Uw",
  },
  [PORTFOLIO.LEET_CODE]: {
    label: "Leet Code",
    link: "https://bit.ly/3AWvP89",
  },
};
