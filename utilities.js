export const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.65, ease: [0.0, 0.0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0.0, 1, 1] },
  },
};
