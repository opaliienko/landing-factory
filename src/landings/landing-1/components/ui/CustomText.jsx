import { FadeInWhenVisible } from "../../../../components/ui";

const CustomText = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <p
        className="text-sm md:text-base"
        style={{
          ...style,
        }}
      >
        {text}
      </p>
    </FadeInWhenVisible>
  );
};

export default CustomText;
