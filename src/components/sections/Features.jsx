const Features = ({ content, theme }) => {
  const customClasses = content.customClasses || {};

  return (
    <section
      className={`w-full ${customClasses.section}`}
      style={{ backgroundColor: theme.colors.SECONDARY_BG_COLOR }}
    >
      <div className="">Секція Features</div>
    </section>
  );
};

export default Features;
