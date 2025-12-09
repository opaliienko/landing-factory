import { FadeInWhenVisible } from "@/components/ui";

const MainSubtitle = ({ text, style = {}, theme, inView, delay = 0 }) => {
  return (
    <FadeInWhenVisible
      inView={inView}
      delay={delay}
      animation={theme.animation}
    >
      <h1
        className="mb-10 text-xl sm:text-2xl"
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
