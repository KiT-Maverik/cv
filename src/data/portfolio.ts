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
    link: "https://gist.github.com/KiT-Maverik",
  },
  [PORTFOLIO.GITHUB]: {
    label: "GitHub",
    link: "https://github.com/KiT-Maverik",
  },
  [PORTFOLIO.I_CODE_THIS]: {
    label: "I Code This",
    link: "https://icodethis.com/KiT_Gart",
  },
  [PORTFOLIO.LEET_CODE]: {
    label: "Leet Code",
    link: "https://leetcode.com/u/KiT_Koval/",
  },
};
