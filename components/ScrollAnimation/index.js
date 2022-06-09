import { useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { useRect } from "@hooks/useRect";

const options = {
  viewport: [1, 0.5], // [start, end] a number between 0 and 1 indicating the percentage where in the viewport the animation should start and end.
  element: [0, 0], // [start, end] a number between 0 and 1 indicating the element percentage the animation should start and end.
};

export default function ScrollAnimation({ children }) {
  const ref = useRef();
  const { height: windowHeight } = useWindowDimensions();
  const { top, bottom, height } = useRect(ref);

  const [viewportStart, viewportEnd] = options.viewport;
  const [elementStart, elementEnd] = options.element;

  const { scrollY } = useViewportScroll();

  const primaryMotionValue = [
    top + height * elementStart - windowHeight * viewportStart,
    bottom - height * elementEnd - windowHeight * viewportEnd,
  ];

  const opacity = useTransform(scrollY, [...primaryMotionValue], [0, 1]);

  return (
    <motion.span ref={ref} style={{ opacity }}>
      {children}
    </motion.span>
  );
}
