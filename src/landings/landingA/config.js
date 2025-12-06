import { THEMES } from "./themes";

import heroImage from "../landingA/images/hero.jpg";

export const landingA = {
  theme: THEMES,
  sections: [
    {
      type: "Hero",
      data: {
        title: "Welcome to Our Landing A Page",
        subtitle: "Create amazing web experiences easily",
        buttonText: "Get Started",
        imageUrl: heroImage,
        customClasses: {
          section:
            "py-4 px-4 sm:py-6 sm:px-6 md:py-16 md:px-20 flex items-center justify-center",
          title: "mb-4 text-4xl sm:text-5xl font-bold ",
          subtitle: "mb-4 text-3xl sm:text-4xl",
          button:
            "px-6 py-3 rounded-lg text-black border border-white opacity-70",
        },
      },
    },
    {
      type: "Features",
      data: {
        features: [
          { title: "", text: "" },
          { title: "", text: "" },
        ],
        customClasses: {
          section:
            "py-4 px-4 sm:py-6 sm:px-6 md:py-16 md:px-20 flex items-center justify-center",
        },
      },
    },
    {
      type: "Reviews",
      data: {
        features: [
          { name: "", feedback: "" },
          { name: "", feedback: "" },
        ],
        customClasses: {
          section:
            "py-4 px-4 sm:py-6 sm:px-6 md:py-16 md:px-20 flex items-center justify-center",
        },
      },
    },
    {
      type: "Footer",
      data: {
        contacts: { email: "", phone: "", address: "" },
        customClasses: {
          section:
            "py-4 px-4 sm:py-6 sm:px-6 md:py-16 md:px-20 flex items-center justify-center",
        },
      },
    },
  ],
};
