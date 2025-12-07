const Text = ({ text, style = {} }) => {
  return (
    <p
      className="text-sm md:text-base"
      style={{
        ...style,
      }}
    >
      {text}
    </p>
  );
};

export default Text;
