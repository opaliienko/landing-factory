const Footer = ({ content, theme }) => {
  const customClasses = content.customClasses || {};

  return (
    <section
      className={`w-full ${customClasses.section}`}
      style={{ backgroundColor: theme.colors.ACCENT_COLOR }}
    >
      <div className="">Footer</div>
    </section>
  );
};

export default Footer;
