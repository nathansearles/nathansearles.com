import React, { useRef, useState, useEffect } from "react";
import { classNames } from "@lib/utilities";
import styles from "./image.module.scss";

const Image = ({ src, aspectRatio, className, alt, width }) => {
  const [cached, setCached] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageRef = useRef();
  const cdnBase = "https://res.cloudinary.com/dzlgbk52d/image/upload";
  const imageSrc = src;

  const aspectRatios = {
    square: {
      xs: `ar_1:1,c_fill,w_${width}`,
      sm: `ar_1:1,c_fill,w_${width}`,
      md: `ar_1:1,c_fill,w_${width}`,
      lg: `ar_1:1,c_fill,w_${width}`,
      xl: `ar_1:1,c_fill,w_${width}`,
      xxl: `ar_1:1,c_fill,w_${width}`,
    },
  };

  const handleAspectRatio = (breakpoint, ratio = "landscape") => {
    return aspectRatios[ratio] && aspectRatios[ratio][breakpoint];
  };

  const transformation = {
    xs: `${handleAspectRatio("xs", aspectRatio)},f_auto`,
    sm: `${handleAspectRatio("sm", aspectRatio)},f_auto`,
    md: `${handleAspectRatio("md", aspectRatio)},f_auto`,
    lg: `${handleAspectRatio("lg", aspectRatio)},f_auto`,
    xl: `${handleAspectRatio("xl", aspectRatio)},f_auto`,
    xxl: `${handleAspectRatio("xxl", aspectRatio)},f_auto`,
  };

  const dimension = {
    square: {
      xs: width,
      sm: width,
      md: width,
      lg: width,
      xl: width,
      xxl: width,
    },
  };

  const handleDimension = (breakpoint, ratio = "landscape") => {
    return dimension[ratio] && dimension[ratio][breakpoint];
  };

  const breakpoint = {
    xs: "512",
    sm: "720",
    md: "1024",
    lg: "1280",
    xl: "1440",
    xxl: "1680",
  };

  const handleSrcSet = (breakpoint, dpr = 3) => {
    // dpr = Device Pixel Ratio

    // Define the pixel density from dpr
    const density = Array.from(Array(dpr).keys());

    // Create empty storage array
    let set = [];

    density.map((_, index) => {
      const transform = `${transformation[breakpoint]},dpr_${index + 1}.0`;
      const src = `${cdnBase}/${transform}/${imageSrc} ${index + 1}x`;
      return set.push(src);
    });

    // Return defined srcSet
    return set;
  };

  function handleImageLoaded() {
    const image = imageRef.current;
    if (!image.complete) {
      setLoading(true);
    } else {
      setLoaded(true);
    }
  }

  useEffect(() => {
    const image = imageRef.current;
    if (image.complete) {
      setCached(true);
    } else {
      setLoading(true);
    }
  }, []);

  const handleAspectRatioClasses = (ratio = "landscape") => {
    const classes = [styles.AspectRatio, styles[ratio]].join(" ");
    return classes;
  };

  return (
    <div className={handleAspectRatioClasses(aspectRatio)}>
      <picture
        className={classNames([
          styles.picture,
          styles[className],
          cached ? styles.cached : "",
          loading ? styles.loading : "",
          loaded ? styles.loaded : "",
        ])}
      >
        <source
          media={`(min-width: ${breakpoint.xl}px)`}
          width={handleDimension("xl", aspectRatio)}
          height={handleDimension("xl", aspectRatio) * 0.5625}
          srcSet={handleSrcSet("xl")}
        />
        <source
          media={`(min-width: ${breakpoint.lg}px)`}
          width={handleDimension("lg", aspectRatio)}
          height={handleDimension("lg", aspectRatio) * 0.5625}
          srcSet={handleSrcSet("lg")}
        />
        <source
          media={`(min-width: ${breakpoint.md}px)`}
          width={handleDimension("md", aspectRatio)}
          height={handleDimension("md", aspectRatio)}
          srcSet={handleSrcSet("md")}
        />
        <source
          media={`(min-width: ${breakpoint.sm}px)`}
          width={handleDimension("sm", aspectRatio)}
          height={handleDimension("sm", aspectRatio)}
          srcSet={handleSrcSet("sm")}
        />
        <img
          ref={imageRef}
          alt={alt}
          onLoad={handleImageLoaded}
          width={handleDimension("xs", aspectRatio)}
          height={handleDimension("xs", aspectRatio)}
          srcSet={handleSrcSet("xs")}
          src={handleSrcSet("xs")}
        />
      </picture>
    </div>
  );
};

export default Image;
