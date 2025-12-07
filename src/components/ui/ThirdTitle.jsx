const ThirdTitle = ({ text, style }) => (
  <h3
    className="text-xl md:text-2xl font-bold"
    style={{
      ...style,
    }}
  >
    {text}
  </h3>
);

export default ThirdTitle;
