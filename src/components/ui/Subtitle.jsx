import FadeInWhenVisible from "./FadeInWhenVisible";

const Subtitle = ({ styles, color, text, theme, inView, delay = 0 }) => (
  <FadeInWhenVisible inView={inView} delay={delay} animation={theme.animation}>
    <h1 className={styles} style={{ color }}>
      {text}
    </h1>
  </FadeInWhenVisible>
);

export default Subtitle;
