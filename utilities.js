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

export const dropInTransition = {
  initial: { opacity: 0, scale: 1.15 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.85, type: "spring", damping: 100, mass: 6 },
  },
  exit: {
    // opacity: 0,
    // y: "-100%",
    // transition: { type: "spring", damping: 100, mass: 1 },
  },
};

export const fadeUpInTransition = {
  initial: { opacity: 0, y: -20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.25, type: "spring", damping: 100, mass: 1 },
  },
  exit: {},
};
