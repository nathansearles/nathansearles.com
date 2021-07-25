export const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.85, ease: [0.0, 0.0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0 },
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
  },
};
