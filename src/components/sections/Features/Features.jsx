import {
  SectionWrapper,
  Container,
  GridContainer,
  Title,
  Subtitle,
  FadeInWhenVisible,
} from "@/components/ui";

import { useSectionInView } from "@/hooks/useSectionInView";

const Features = ({ content, theme }) => {
  const { ref, inView } = useSectionInView();

  const Card = content.card;

  return (
    <SectionWrapper
      ref={ref}
      style={{
        backgroundColor: theme.colors.SECONDARY_BG_COLOR,
        fontFamily: theme.fonts.fontsFamily.regular,
      }}
    >
      <Container>
        {content.title && (
          <Title
            text={content.title}
            style={{ color: theme.colors.TITLE_TEXT_COLOR }}
            theme={theme}
            inView={inView}
            delay={100}
          />
        )}

        {content.title && (
          <Subtitle
            text={content.subtitle}
            style={{ color: theme.colors.TEXT_COLOR }}
            theme={theme}
            inView={inView}
            delay={200}
          />
        )}

        <FadeInWhenVisible
          animation={theme.animation}
          inView={inView}
          delay={300}
        >
          <GridContainer>
            {content.features.map((feature, index) => {
              const IconComponent = feature.icon;

              const backgroundColor =
                index % 2 === 0
                  ? theme.colors.white[100]
                  : theme.colors.MAIN_LIGHT_COLOR;

              return (
                <Card
                  key={feature.id}
                  data={feature}
                  icon={IconComponent}
                  theme={theme}
                  backgroundColor={backgroundColor}
                />
              );
            })}
          </GridContainer>
        </FadeInWhenVisible>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
