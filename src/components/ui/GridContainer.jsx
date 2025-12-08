const GridContainer = ({
  children,
  cols = 1,
  mdCols = 2,
  lgCols = 3,
  gap = "6",
  mdGap = "8",
  lgGap = "8",
  style = {},
}) => {
  return (
    <div
      className={`grid grid-cols-${cols} md:grid-cols-${mdCols} lg:grid-cols-${lgCols} gap-${gap} md:gap-${mdGap} lg:gap-${lgGap}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
