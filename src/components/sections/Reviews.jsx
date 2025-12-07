const Reviews = ({ content, theme }) => {
  const customClasses = content.customClasses || {};

  return (
    <section
      className={customClasses.section}
      style={{ backgroundColor: theme.colors.MAIN_BG_COLOR }}
    >
      <div className={customClasses.container}>
        <div className="">Секція Reviews</div>
      </div>
    </section>
  );
};

export default Reviews;
