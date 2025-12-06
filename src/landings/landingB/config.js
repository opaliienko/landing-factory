import heroImage from "../landingB/images/hero.jpg";

export const landingB = {
  sections: [
    {
      type: "Hero",
      data: {
        title: "Welcome to Our Landing B Page",
        subtitle: "Create amazing web experiences easily",
        buttonText: "Get Started",
        imageUrl: heroImage,
      },
    },
    {
      type: "Features",
      data: [
        { title: "", text: "" },
        { title: "", text: "" },
      ],
    },
    {
      type: "Reviews",
      data: [
        { name: "", feedback: "" },
        { name: "", feedback: "" },
      ],
    },
    {
      type: "Footer",
      data: {
        contacts: { email: "", phone: "", address: "" },
      },
    },
  ],
};
