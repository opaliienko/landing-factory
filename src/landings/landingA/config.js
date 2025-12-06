import heroImage from "../landingA/images/hero.jpg";

export const landingA = {
  sections: [
    {
      type: "Hero",
      data: {
        title: "Welcome to Our Landing A Page",
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
