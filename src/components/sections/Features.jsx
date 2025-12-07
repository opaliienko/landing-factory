const Features = ({ content, theme }) => {
  const customClasses = content.customClasses || {};

  return (
    <section
      className={customClasses.section}
      style={{ backgroundColor: theme.colors.SECONDARY_BG_COLOR }}
    >
      <div className={customClasses.container}>
        {content.title && (
          <h2
            className={customClasses.title}
            style={{ color: theme.colors.TEXT_COLOR }}
          >
            {content.title}
          </h2>
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
