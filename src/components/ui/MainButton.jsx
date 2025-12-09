import { Text } from "@/components/ui";

const MainButton = ({ style, text, onClick }) => {
  return (
    <button
      className={
        "px-6 py-3 rounded-lg border border-white opacity-70 hover:opacity-100 hover:scale-105  transition-all duration-300"
      }
      style={{ ...style }}
      onClick={onClick}
    >
      <Text text={text} />
    </button>
  );
};

export default MainButton;
