import { useInView } from "react-intersection-observer";

import HeroWrapper from "../ui/HeroWrapper";
import Container from "../ui/Container";

import MainTitle from "../ui/MainTitle";
import MainSubtitle from "../ui/MainSubtitle";

import { trackLead } from "../../helpers/trackLead";

const Hero = ({ content, theme, landingId }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const styles = content?.styles || {};

  const Button = content.button;

  const onHandleButtonClick = () => {
    trackLead("Дякуємо! Ваш запит отримано!", landingId);
  };

  return (
    <HeroWrapper
      ref={ref}
      style={{
        backgroundImage: `url(${content.imageUrl})`,
        fontFamily: theme.fonts.fontsFamily.regular,
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",

          ...styles?.container,
        }}
      >
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
          style={{
            color: theme.colors.TEXT_COLOR,
            backgroundColor: theme.colors.BUTTON_BG_COLOR,
            ...styles?.button,
          }}
          text={content.buttonText}
          theme={theme}
          onClick={onHandleButtonClick}
        />
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
