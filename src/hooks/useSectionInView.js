import { useInView } from "react-intersection-observer";

export const useSectionInView = (options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  };

  const { ref, inView } = useInView(defaultOptions);

  return { ref, inView };
};
