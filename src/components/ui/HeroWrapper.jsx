const HeroWrapper = ({ ref, style = {}, children }) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-screen flex py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-16 bg-cover bg-center"
      style={{
        ...style,
      }}
    >
      {children}
    </section>
  );
};

export default HeroWrapper;
