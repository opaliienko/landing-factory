import { FadeInWhenVisible } from "@/components/ui";

const MainTitle = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <h1
        className="mb-2 sm:mb-3 md:mb-3 text-4xl sm:text-5xl md:text-6xl font-bold"
        style={{
          textTransform: "uppercase",
          ...style,
        }}
      >
        {text}
      </h1>
    </FadeInWhenVisible>
  );
};

export default MainTitle;
