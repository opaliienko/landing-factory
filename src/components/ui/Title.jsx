import FadeInWhenVisible from "./FadeInWhenVisible";

const Title = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <h2
        className="text-center mb-4 md:mb-6 lg:mb-6 text-3xl md:text-4xl font-bold"
        style={{
          ...style,
        }}
      >
        {text}
      </h2>
    </FadeInWhenVisible>
  );
};

export default Title;
