import { useState, useEffect } from "react";

export function useTimer(delay: number) {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return active;
}
