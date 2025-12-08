import { FadeInWhenVisible } from "../ui";

const Title = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <h2
        className="text-center mb-6 md:mb-8 lg:mb-10 text-3xl md:text-4xl font-bold"
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
