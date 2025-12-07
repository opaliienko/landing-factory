const Hero = ({ content, theme }) => {
  const customClasses = content.customClasses || {};

  return (
    <section
      className={`min-h-screen bg-cover bg-center ${customClasses.section}`}
      style={{ backgroundImage: `url(${content.imageUrl})` }}
    >
      <div className={customClasses.container}>
        <h1 className={`${customClasses.title}`}>{content.title}</h1>
        <p className={`${customClasses.subtitle}`}>{content.subtitle}</p>

        <button
          className={`${customClasses.button}`}
          style={{ backgroundColor: theme.colors.BUTTON_BG_COLOR }}
        >
          {content.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
