const FooterWrapper = ({ style = {}, children }) => {
  return (
    <footer
      className="w-full pt-8 pb-6 sm:pt-8 sm:pb-8 md:pt-10 md:pb-8 px-5 sm:px-8 md:px-16"
      style={{
        ...style,
      }}
    >
      {children}
    </footer>
  );
};

export default FooterWrapper;
