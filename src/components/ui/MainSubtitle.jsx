import FadeInWhenVisible from "./FadeInWhenVisible";

const MainSubtitle = ({ styles, text, theme, inView, delay = 0 }) => (
  <FadeInWhenVisible inView={inView} delay={delay} animation={theme.animation}>
    <p className={styles}>{text}</p>
  </FadeInWhenVisible>
);

export default MainSubtitle;
