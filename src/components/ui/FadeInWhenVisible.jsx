const FadeInWhenVisible = ({ inView, children, delay = 0, animation }) => {
  return (
    <div
      className={`
        ${animation.transition} 
        ${inView ? animation.fadeIn.visible : animation.fadeIn.hidden} 
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
export default FadeInWhenVisible;
