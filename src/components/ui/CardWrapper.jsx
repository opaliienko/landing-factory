const CardWrapper = ({ style = {}, children }) => {
  return (
    <div
      className="
       flex 
       flex-col 
        p-4 sm:p-6 md:p-6 
        rounded-xl 
        shadow-md 
        hover:shadow-xl 
        transition-all 
        duration-300 
      "
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
