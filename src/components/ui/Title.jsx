import FadeInWhenVisible from "./FadeInWhenVisible";

const Title = ({ styles, color, text, theme, inView, delay = 0 }) => (
  <FadeInWhenVisible inView={inView} delay={delay} animation={theme.animation}>
    <h2 className={styles} style={{ color }}>
      {text}
    </h2>
  </FadeInWhenVisible>
);

export default Title;
