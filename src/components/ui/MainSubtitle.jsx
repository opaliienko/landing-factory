import FadeInWhenVisible from "./FadeInWhenVisible";

const MainSubtitle = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <h1
        className="mb-10 text-3xl sm:text-4xl"
        style={{
          ...style,
        }}
      >
        {text}
      </h1>
    </FadeInWhenVisible>
  );
};

export default MainSubtitle;
