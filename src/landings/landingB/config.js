import { THEMES } from "./themes";

import heroImage from "../landingB/images/hero.jpg";

import MainButton from "../../components/ui/MainButton";
import FeatureCard from "../../components/ui/FeatureCard";
import ReviewCard from "../../components/ui/ReviewCard";

import RocketIcon from "../../icons/RocketIcon";
import LightningIcon from "../../icons/LightningIcon";
import LockIcon from "../../icons/LockIcon";
import PaletteIcon from "../../icons/PaletteIcon";
import MobileIcon from "../../icons/MobileIcon";
import DiamondIcon from "../../icons/DiamondIcon";

import ClientAvatarIcon from "../../icons/ClientAvatarIcon";

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
            "w-full py-4 px-4 sm:py-6 sm:px-6 md:py-12 md:px-20 flex flex-col justify-center items-center",
          container: "container flex flex-col text-left text-black",
          title: "mb-4 text-4xl sm:text-5xl font-bold",
          subtitle: "mb-10 text-3xl sm:text-4xl",
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
        features: [
          {
            id: 1,
            icon: LightningIcon,
            title: "Lightning Fast",
            text: "Experience blazing fast performance with our optimized infrastructure",
          },
          {
            id: 2,
            icon: LockIcon,
            title: "Secure & Safe",
            text: "Your data is protected with enterprise-grade security measures",
          },
          {
            id: 3,
            icon: PaletteIcon,
            title: "Beautiful Design",
            text: "Modern and intuitive interface that users love to interact with",
          },
          {
            id: 4,
            icon: RocketIcon,
            title: "Mobile Ready",
            text: "Fully responsive design that works perfectly on all devices",
          },
          {
            id: 5,
            icon: MobileIcon,
            title: "Easy to Use",
            text: "Get started in minutes with our simple and intuitive platform",
          },
          {
            id: 6,
            icon: DiamondIcon,
            title: "Premium Quality",
            text: "Built with attention to detail and highest quality standards",
          },
        ],
        card: FeatureCard,
        customClasses: {
          section: "w-full py-4 px-4 sm:py-6 sm:px-6 md:py-12 md:px-20",
          container: "container mx-auto",
          title: "text-3xl md:text-4xl font-bold text-center mb-10",
          subtitle: "text-xl md:text-2xl text-center mb-12 opacity-80",
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
        reviews: [
          {
            id: 1,
            name: "Anna Johnson",
            position: "CEO at TechCorp",
            text: "This product completely transformed our workflow. Highly recommended!",
            icon: ClientAvatarIcon,
          },
          {
            id: 2,
            name: "Mark Williams",
            position: "Marketing Director",
            text: "The best investment we made this year. Amazing results!",
            icon: ClientAvatarIcon,
          },
          {
            id: 3,
            name: "Sarah Davis",
            position: "Product Manager",
            text: "Outstanding quality and excellent customer support. Five stars!",
            icon: ClientAvatarIcon,
          },
          {
            id: 4,
            name: "John Smith",
            position: "CTO",
            text: "Incredible performance and reliability. Our team loves it!",
            icon: ClientAvatarIcon,
          },
          {
            id: 5,
            name: "Emily Brown",
            position: "Designer",
            text: "Beautiful interface and so easy to use. Absolutely love it!",
            icon: ClientAvatarIcon,
          },
          {
            id: 6,
            name: "Michael Lee",
            position: "Developer",
            text: "Clean code and great documentation. Perfect for our needs!",
            icon: ClientAvatarIcon,
          },
          {
            id: 7,
            name: "Lisa Taylor",
            position: "Founder",
            text: "Game-changer for our business. Can't imagine working without it!",
            icon: ClientAvatarIcon,
          },
          {
            id: 8,
            name: "David Wilson",
            position: "Analyst",
            text: "Powerful features and intuitive design. Highly satisfied!",
            icon: ClientAvatarIcon,
          },
        ],
        card: ReviewCard,
        customClasses: {
          section: "py-16 px-4 md:py-24",
          container: "w-full max-w-7xl mx-auto",
          title: "text-4xl md:text-5xl font-bold text-center mb-4",
          subtitle: "text-xl md:text-2xl text-center mb-12 opacity-80",
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
