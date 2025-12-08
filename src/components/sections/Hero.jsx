import { useInView } from "react-intersection-observer";

import MainTitle from "../ui/MainTitle";
import MainSubtitle from "../ui/MainSubtitle";

import { trackLead } from "../../helpers/trackLead";

const Hero = ({ content, theme, landingId }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customClasses = content.customClasses || {};

  const Button = content.button;

  const onHandleButtonClick = () => {
    trackLead("Дякуємо! Ваш запит отримано!", landingId);
  };

  return (
    <section
      ref={ref}
      className={`min-h-screen bg-cover bg-center ${customClasses.section}`}
      style={{
        backgroundImage: `url(${content.imageUrl})`,
        fontFamily: theme.fonts.fontsFamily.regular,
      }}
    >
      <div className={customClasses.container}>
        <MainTitle
          style={{
            color: theme.colors.MAIN_TITLE_TEXT_COLOR,
            fontFamily: theme.fonts.fontsFamily.bold,
          }}
          text={content.title}
          theme={theme}
          inView={inView}
          delay={0}
        />

        <MainSubtitle
          style={{
            color: theme.colors.MAIN_SUB_TITLE_TEXT_COLOR,
            fontFamily: theme.fonts.fontsFamily.medium,
          }}
          text={content.subtitle}
          theme={theme}
          inView={inView}
          delay={100}
        />

        <Button
          styles={customClasses.button}
          text={content.buttonText}
          theme={theme}
          onClick={onHandleButtonClick}
        />
      </div>
    </section>
  );
};

export default Hero;
