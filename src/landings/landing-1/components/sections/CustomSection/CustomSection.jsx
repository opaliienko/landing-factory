import { SectionWrapper, Container } from "../../../../../components/ui";

import { CustomTitle, CustomText } from "../../ui";

import { useSectionInView } from "../../../../../hooks/useSectionInView";

const CustomSection = ({ content, theme }) => {
  const { ref, inView } = useSectionInView();

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
          <CustomTitle
            text={content.title}
            style={{ color: theme.colors.TITLE_TEXT_COLOR }}
            theme={theme}
            inView={inView}
            delay={100}
          />
        )}

        {content.text && (
          <CustomText
            text={content.text}
            style={{ color: theme.colors.TEXT_COLOR, textAlign: "center" }}
            theme={theme}
            inView={inView}
            delay={200}
          />
        )}
      </Container>
    </SectionWrapper>
  );
};

export default CustomSection;
