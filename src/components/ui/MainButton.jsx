import Text from "./Text";

const MainButton = ({ styles, text, theme, onClick }) => {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg border border-white 
        opacity-70 hover:opacity-100 hover:scale-105 
        transition-all duration-300 
        ${styles}
      `}
      style={{ backgroundColor: theme.colors.BUTTON_BG_COLOR }}
      onClick={onClick}
    >
      <Text
        text={text}
        style={{ color: theme.colors.TEXT_COLOR, textAlign: "center" }}
      />
    </button>
  );
};

export default MainButton;
