import FadeInWhenVisible from "./FadeInWhenVisible";

const MainTitle = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <h1
        className="mb-3 sm:mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl font-bold"
        style={{
          ...style,
        }}
      >
        {text}
      </h1>
    </FadeInWhenVisible>
  );
};

export default MainTitle;
