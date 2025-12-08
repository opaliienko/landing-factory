import { FadeInWhenVisible } from "../ui";

const Subtitle = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <p
        className="text-center mb-4 md:mb-6 lg:mb-6 text-xl md:text-2xl"
        style={{
          ...style,
        }}
      >
        {text}
      </p>
    </FadeInWhenVisible>
  );
};

export default Subtitle;
