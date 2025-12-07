import { THEMES } from "./themes";

import { features, reviews } from "./fake-api";

import heroImage from "../landingB/images/hero.jpg";

import MainButton from "../../components/ui/MainButton";
import FeatureCard from "../../components/ui/FeatureCard";
import ReviewCard from "../../components/ui/ReviewCard";

export const landingB = {
  landingId: "landingB",
  theme: THEMES,
  sections: [
    {
      type: "Hero",
      data: {
        title: "Welcome to Our Landing A Page",
        subtitle: "Create amazing web experiences easily",
        buttonText: "Get Started",
        imageUrl: heroImage,
        button: MainButton,
        customClasses: {
          section:
            "w-full py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-16 flex flex-col justify-center items-center",
          container:
            "container flex flex-col text-center lg:text-left text-black",
          button: "self-center",
        },
      },
    },
    {
      type: "Features",
      data: {
        title: "Our Amazing Features",
        subtitle:
          "Discover what makes our product stand out from the competition",
        features: features,
        card: FeatureCard,
        customClasses: {
          section: "w-full py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-16",
          container: "container mx-auto",
          grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
        },
      },
    },
    {
      type: "Reviews",
      data: {
        title: "What Our Clients Say",
        subtitle:
          "Don't just take our word for it - hear from our satisfied customers",
        reviews: reviews,
        card: ReviewCard,
        customClasses: {
          section: "w-full py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-16",
          container: "w-full max-w-7xl mx-auto",
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
          section: `w-full pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 px-5 sm:px-8 md:px-16`,
          container:
            "flex flex-col items-center justify-center text-center text-white",
        },
      },
    },
  ],
};
