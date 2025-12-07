const MainButton = ({ styles, text, theme }) => {
  return (
    <button
      className={styles}
      style={{ backgroundColor: theme.colors.BUTTON_BG_COLOR }}
    >
      {text}
    </button>
  );
};

export default MainButton;
