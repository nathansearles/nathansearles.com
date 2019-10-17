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

export const pageTransitions = {
  initial: { scale: 1.025, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.0, 0.0, 0.2, 1] }
  },
  exit: {
    scale: 1.025,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.4, 0.0, 1, 1] }
  }
};
