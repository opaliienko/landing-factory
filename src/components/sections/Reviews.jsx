const Reviews = ({ content, theme }) => {
  const customClasses = content.customClasses || {};

  return (
    <section
      className={`w-full ${customClasses.section}`}
      style={{ backgroundColor: theme.colors.MAIN_BG_COLOR }}
    >
      <div className="">Секція Reviews</div>
    </section>
  );
};

export default Reviews;
