import { useInView } from "react-intersection-observer";

import MainTitle from "../ui/MainTitle";
import MainSubtitle from "../ui/MainSubtitle";
import MainButton from "../ui/MainButton";

const Hero = ({ content, theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customClasses = content.customClasses || {};

  return (
    <section
      ref={ref}
      className={`min-h-screen bg-cover bg-center ${customClasses.section}`}
      style={{ backgroundImage: `url(${content.imageUrl})` }}
    >
      <div className={customClasses.container}>
        <MainTitle
          styles={customClasses.title}
          text={content.title}
          theme={theme}
          inView={inView}
          delay={0}
        />

        <MainSubtitle
          styles={customClasses.subtitle}
          text={content.subtitle}
          theme={theme}
          inView={inView}
          delay={100}
        />

        <MainButton
          styles={customClasses.button}
          text={content.buttonText}
          theme={theme}
        />
      </div>
    </section>
  );
};

export default Hero;
