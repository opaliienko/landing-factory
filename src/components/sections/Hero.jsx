import { useInView } from "react-intersection-observer";

import { HeroWrapper, Container, MainTitle, MainSubtitle } from "../ui";

import { trackLead } from "../../helpers/trackLead";

const Hero = ({ content, theme, landingId }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const styles = content?.styles || {};

  const Button = content.button;

  const onHandleButtonClick = () => {
    trackLead(
      "Дякуємо! Ваш запит отримано!",
      landingId,
      theme.colors.MAIN_LIGHT_COLOR
    );
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
        <div className="md:w-[800px] pt-10">
          <MainTitle
            style={{
              textAlign: "center",
              background: theme.colors.gradients.title,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: theme.fonts.fontsFamily.bold,
            }}
            text={content.title}
            theme={theme}
            inView={inView}
            delay={100}
          />
        </div>

        <MainSubtitle
          style={{
            background: theme.colors.gradients.subtitle,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: theme.fonts.fontsFamily.medium,
          }}
          text={content.subtitle}
          theme={theme}
          inView={inView}
          delay={200}
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
