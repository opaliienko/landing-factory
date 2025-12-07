const MainButton = ({ styles, text, theme, onClick }) => {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg text-black border border-white 
        opacity-70 hover:opacity-100 hover:scale-105 
        transition-all duration-300 
        ${styles}
      `}
      style={{ backgroundColor: theme.colors.BUTTON_BG_COLOR }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
