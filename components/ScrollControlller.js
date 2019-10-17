import { useEffect, useState } from "react";
import { withRouter } from "next/router";

const ScrollToTopControlller = ({ children, router }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const pathname = router.pathname;
  useEffect(() => {
    if (pathname !== "/") {
      setScrollPos(window.scrollY);
    }

    if (pathname === "/") {
      setTimeout(() => {
        window.scrollTo(0, scrollPos);
      }, 360);
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 360);
    }
  }, [pathname, scrollPos]);

  return children || null;
};

export default withRouter(ScrollToTopControlller);
