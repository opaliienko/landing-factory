import FadeInWhenVisible from "./FadeInWhenVisible";

const MainTitle = ({ styles, text, theme, inView, delay = 0 }) => (
  <FadeInWhenVisible inView={inView} delay={delay} animation={theme.animation}>
    <h1 className={styles}>{text}</h1>
  </FadeInWhenVisible>
);

export default MainTitle;
