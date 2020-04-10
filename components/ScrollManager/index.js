import { useEffect, useState } from "react";
import { withRouter } from "next/router";

const ScrollManager = ({ children, router }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const pathname = router.pathname;
  useEffect(() => {
    if (pathname !== "/") {
      setScrollPos(window.scrollY);
    }

    if (pathname === "/") {
      setTimeout(() => {
        window.scrollTo(0, scrollPos);
      }, 280);
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 280);
    }
  }, [pathname, scrollPos]);

  return children || null;
};

export default withRouter(ScrollManager);
