// https://github.com/jekrb/next-absolute-url
export const absoluteUrl = (req, setLocalhost) => {
  var protocol = "https:";
  var host = req
    ? req.headers["x-forwarded-host"] || req.headers["host"]
    : window.location.host;
  if (host.indexOf("localhost") > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = "http:";
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + "//" + host
  };
};

export const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.65, ease: [0.0, 0.0, 0.2, 1] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0.0, 1, 1] }
  }
};

export const scaleTransition = {
  initial: { scale: 1.025, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.0, 0.0, 0.2, 1] }
  },
  exit: {
    scale: 1.025,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0.0, 1, 1] }
  }
};

export const projectTransition = {
  initial: { scale: 0.975, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.0, 0.0, 0.2, 1] }
  },
  exit: {
    scale: 0.975,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0.0, 1, 1] }
  }
};

import { useState, useEffect, useRef } from "react";
// https://github.com/spaciecat/react-hooks-series/blob/master/src/useHover.js
// Hover state hook
// Returns a tuple of [ref, hovered]
// - ref: A react ref that you need to assign to an element
// - hovered: A boolean, true if hovered and false otherwise

export const useHover = () => {
  // Reference to the element we're listen for events from
  const ref = useRef();

  // Hover state management
  const [hovered, setHovered] = useState(false);

  // Event handlers
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  // Simple effect, just bind and unbind the event handlers
  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
};
