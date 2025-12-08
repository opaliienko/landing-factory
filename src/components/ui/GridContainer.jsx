const GridContainer = ({ children, style = {} }) => {
  return (
    <div
      className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-6 
        md:gap-8 
        lg:gap-8
      "
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
