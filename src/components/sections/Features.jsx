import { useInView } from "react-intersection-observer";

import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import FadeInWhenVisible from "../ui/FadeInWhenVisible";

const Features = ({ content, theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customClasses = content.customClasses || {};
  const Card = content.card;

  return (
    <section
      ref={ref}
      className={customClasses.section}
      style={{ backgroundColor: theme.colors.SECONDARY_BG_COLOR }}
    >
      <div className={customClasses.container}>
        {content.title && (
          <Title
            styles={customClasses.title}
            color={theme.colors.TEXT_COLOR}
            text={content.title}
            theme={theme}
            inView={inView}
            delay={0}
          />
        )}

        {content.title && (
          <Subtitle
            styles={customClasses.subtitle}
            color={theme.colors.TEXT_COLOR}
            text={content.subtitle}
            theme={theme}
            inView={inView}
            delay={100}
          />
        )}

        <FadeInWhenVisible
          animation={theme.animation}
          inView={inView}
          delay={200}
        >
          <div className={customClasses.grid}>
            {content.features.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <Card
                  key={feature.id}
                  feature={feature}
                  icon={IconComponent}
                  theme={theme}
                />
              );
            })}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Features;
