import { useEffect, useState } from "react";

export function useHoverSupport() {
  const [isHoverSupported, setIsHoverSupported] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const match: MediaQueryList = window.matchMedia("(hover: hover)");
    setIsHoverSupported(match.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsHoverSupported(e.matches);
    };

    match.addEventListener("change", handler);
    return () => match.removeEventListener("change", handler);
  }, []);

  return isHoverSupported ?? false;
}
