import { THEMES } from "./themes";

import { features, reviews } from "./fake-api";

import heroImage from "../landingB/images/hero.jpg";

import MainButton from "../../components/ui/MainButton";
import FeatureCard from "../../components/ui/FeatureCard";
import ReviewCard from "../../components/ui/ReviewCard";

const sectionPadding = "w-full py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-16";
const footerPadding =
  "w-full pt-8 pb-6 sm:pt-8 sm:pb-8 md:pt-10 md:pb-8 px-5 sm:px-8 md:px-16";

export const landingB = {
  landingId: "LandingB",
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
          section: `${sectionPadding} flex flex-col justify-center items-center`,
          container: "container flex flex-col text-center lg:text-left",
          button: "self-center",
        },
      },
    },
    {
      type: "Features",
      data: {
        title: "Our Amazing Features",
        features: features,
        card: FeatureCard,
        customClasses: {
          grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
        },
      },
    },
    {
      type: "Reviews",
      data: {
        title: "What Our Clients Say",
        reviews: reviews,
        card: ReviewCard,
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
          section: `${footerPadding}`,
          container: "flex flex-col items-center justify-center text-center",
        },
      },
    },
  ],
};
