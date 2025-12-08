const SectionContainer = ({ style = {}, children }) => {
  return (
    <div
      className="container mx-auto"
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
