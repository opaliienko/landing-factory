export const THEMES = {
  colors: {
    MAIN_BG_COLOR: "#BACBD9",
    MAIN_LIGHT_COLOR: "#F0F5FA",
    SECONDARY_BG_COLOR: "#F2F2F2",

    MAIN_TITLE_TEXT_COLOR: "#030712",
    MAIN_SUB_TITLE_TEXT_COLOR: "#030712",

    TITLE_TEXT_COLOR: "#030712",
    TEXT_COLOR: "#030712",

    BUTTON_BG_COLOR: "#e5e7eb",

    ACCENT_COLOR: "#1D1340",

    white: {
      100: "#FFFFFF",
    },

    black: {
      100: "#000000",
    },

    gradients: {
      main: "linear-gradient(to bottom, #F2F2F2, #BACBD9)",
      title: "linear-gradient(10deg, #000000, #FFFFFF)",
      subtitle: "linear-gradient(90deg, #000000 , #ccc )",
    },
  },

  fonts: {
    fontsFamily: {
      regular: "Montserrat-Regular",
      medium: "Montserrat-SemiBold",
      bold: "Montserrat-Bold",
    },
  },

  animation: {
    transition: "transition-all duration-1000",
    fadeIn: {
      visible: "opacity-100 translate-y-0",
      hidden: "opacity-0 translate-y-10",
    },
  },
};
