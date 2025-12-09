import { THEMES } from "./themes";

import { features, reviews } from "./fake-api";

import heroImage from "./images/hero.jpg";

import { MainButton, FeatureCard, ReviewCard } from "@/components/ui";

export const config = {
  landingId: "landing-2",
  theme: THEMES,
  sections: [
    {
      type: "Hero",
      data: {
        title: "Welcome to Our Landing A Page",
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
