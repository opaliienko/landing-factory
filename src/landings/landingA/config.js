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
            "py-4 px-4 sm:py-6 sm:px-6 md:py-16 md:px-20 flex flex-col justify-start",
          title: "mb-4 text-4xl sm:text-5xl font-bold text-start",
          subtitle: "mb-24 text-3xl sm:text-4xl text-start",
          button:
            "mx-auto px-6 py-3 rounded-lg text-black border border-white opacity-70",
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
        title: "Contact Us",
        contacts: {
          email: "info@company.com",
          phone: "+1 (555) 234-9876",
          address: "125 Green Street, San Francisco, CA 94107, USA",
        },
        copyright: "All rights reserved.",
        customClasses: {
          section:
            "py-4 px-4 sm:py-6 sm:px-6 md:py-12 md:px-20 flex items-center justify-start",
          container: "text-left text-white",
          title: "text-2xl font-bold mb-4",
          list: "space-y-2 text-lg opacity-90",
          copyright: "mt-6 text-sm opacity-60",
        },
      },
    },
  ],
};
