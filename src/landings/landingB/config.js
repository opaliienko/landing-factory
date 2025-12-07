import { THEMES } from "./themes";

import heroImage from "../landingB/images/hero.jpg";

import RocketIcon from "../../icons/RocketIcon";
import LightningIcon from "../../icons/LightningIcon";
import LockIcon from "../../icons/LockIcon";
import PaletteIcon from "../../icons/PaletteIcon";
import MobileIcon from "../../icons/MobileIcon";
import DiamondIcon from "../../icons/DiamondIcon";

export const landingB = {
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
            "w-full py-4 px-4 sm:py-6 sm:px-6 md:py-12 md:px-20 flex flex-col justify-center items-center",
          container: "container flex flex-col text-center text-black",
          title: "mb-4 text-4xl sm:text-5xl font-bold",
          subtitle: "mb-10 text-3xl sm:text-4xl",
          button:
            "self-center px-6 py-3 rounded-lg text-black border border-white opacity-70",
        },
      },
    },
    {
      type: "Features",
      data: {
        title: "Our Amazing Features",
        subtitle:
          "Discover what makes our product stand out from the competition",
        features: [
          {
            icon: LightningIcon,
            title: "Lightning Fast",
            text: "Experience blazing fast performance with our optimized infrastructure",
          },
          {
            icon: LockIcon,
            title: "Secure & Safe",
            text: "Your data is protected with enterprise-grade security measures",
          },
          {
            icon: PaletteIcon,
            title: "Beautiful Design",
            text: "Modern and intuitive interface that users love to interact with",
          },
          {
            icon: RocketIcon,
            title: "Mobile Ready",
            text: "Fully responsive design that works perfectly on all devices",
          },
          {
            icon: MobileIcon,
            title: "Easy to Use",
            text: "Get started in minutes with our simple and intuitive platform",
          },
          {
            icon: DiamondIcon,
            title: "Premium Quality",
            text: "Built with attention to detail and highest quality standards",
          },
        ],
        customClasses: {
          section: "w-full py-4 px-4 sm:py-6 sm:px-6 md:py-12 md:px-20",
          container: "container mx-auto",
          title: "text-3xl md:text-4xl font-bold text-center mb-10",
          featuresGrid:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
          featureCard:
            "p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-2",
          featureIcon: "flex justify-center items-center mb-4",
          featureTitle: "text-2xl font-bold mb-4 text-center",
          featureText: "text-base text-center leading-relaxed",
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
            "w-full py-4 px-4 sm:py-6 sm:px-6 md:py-12 md:px-20 flex items-center justify-center",
          container: "",
          title: "text-3xl md:text-4xl font-bold text-center mb-10",
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
          section: "w-full py-4 px-4 sm:py-6 sm:px-6 md:py-12 md:px-20",
          container:
            "flex flex-col items-center justify-center text-center text-white",
          title: "text-2xl font-bold mb-4",
          list: "space-y-2 text-lg opacity-90",
          copyright: "mt-6 text-sm opacity-60",
        },
      },
    },
  ],
};
