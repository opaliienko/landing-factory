import { THEMES } from "./themes";

import { features, reviews } from "./fake-api";

import heroImage from "../landingB/images/hero.jpg";

import MainButton from "../../components/ui/MainButton";
import FeatureCard from "../../components/ui/FeatureCard";
import ReviewCard from "../../components/ui/ReviewCard";

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
        styles: {
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
          button: {
            alignSelf: "center",
          },
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
        styles: {
          container: {
            textAlign: "center",
          },
        },
      },
    },
  ],
};
