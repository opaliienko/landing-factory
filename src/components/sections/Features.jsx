import { useInView } from "react-intersection-observer";

import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";

const Features = ({ content, theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customClasses = content.customClasses || {};

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

        <div className={customClasses.featuresGrid}>
          {content.features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className={customClasses.featureCard}
                style={{
                  backgroundColor: theme.colors.white[100],
                }}
              >
                {IconComponent && (
                  <div className={customClasses.featureIcon}>
                    <IconComponent
                      width={28}
                      height={28}
                      fill={theme.colors.ACCENT_COLOR}
                    />
                  </div>
                )}

                <h3
                  className={customClasses.featureTitle}
                  style={{ color: theme.colors.ACCENT_COLOR }}
                >
                  {feature.title}
                </h3>

                <p
                  className={customClasses.featureText}
                  style={{ color: theme.colors.TEXT_COLOR }}
                >
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
