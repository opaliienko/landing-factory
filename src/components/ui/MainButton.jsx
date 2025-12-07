const MainButton = ({ styles, text, theme }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg text-black border border-white opacity-70 ${styles}`}
      style={{ backgroundColor: theme.colors.BUTTON_BG_COLOR }}
    >
      {text}
    </button>
  );
};

export default MainButton;
