import { FadeInWhenVisible } from "@/components/ui";

const CustomTitle = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <h2
        className="text-center mb-3 md:mb-4 lg:mb-6 text-3xl md:text-4xl font-bold"
        style={{
          ...style,
        }}
      >
        {text}
      </h2>
    </FadeInWhenVisible>
  );
};

export default CustomTitle;
