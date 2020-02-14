import React, { useRef, useEffect } from "react";

const Image = props => {
  const imageRef = useRef();
  const cdnBase = "https://res.cloudinary.com/dzlgbk52d/image/upload";
  const imageSrc = props.src;
  const aspectRatio = props.aspectRatio;

  const aspectRatios = {
    landscape: {
      xs: "ar_1:1,c_fill,w_380",
      sm: "ar_1:1,c_fill,w_639",
      md: "ar_16:9,c_fill,w_853",
      lg: "ar_16:9,c_fill,w_1067",
      xl: "ar_16:9,c_fill,w_1067"
    },
    portrait: {
      xs: "ar_3:4,c_fill,w_380",
      sm: "ar_3:4,c_fill,w_639",
      md: "ar_3:4,c_fill,w_414",
      lg: "ar_3:4,c_fill,w_331",
      xl: "ar_3:4,c_fill,w_331"
    },
    square: {
      xs: "ar_1:1,c_fill,w_380",
      sm: "ar_1:1,c_fill,w_639",
      md: "ar_1:1,c_fill,w_414",
      lg: "ar_1:1,c_fill,w_339",
      xl: "ar_1:1,c_fill,w_339"
    }
  };

  const handleAspectRatio = (breakpoint, ratio = "landscape") => {
    return aspectRatios[ratio] && aspectRatios[ratio][breakpoint];
  };

  const transformation = {
    xs: `${handleAspectRatio("xs", aspectRatio)},f_auto`,
    sm: `${handleAspectRatio("sm", aspectRatio)},f_auto`,
    md: `${handleAspectRatio("md", aspectRatio)},f_auto`,
    lg: `${handleAspectRatio("lg", aspectRatio)},f_auto`,
    xl: `${handleAspectRatio("xl", aspectRatio)},f_auto`
  };

  const dimension = {
    landscape: {
      xs: "380",
      sm: "639",
      md: "853",
      lg: "1067",
      xl: "1067"
    },
    portrait: {
      xs: "380",
      sm: "639",
      md: "414",
      lg: "331",
      xl: "331"
    },
    square: {
      xs: "380",
      sm: "639",
      md: "414",
      lg: "339",
      xl: "339"
    }
  };

  const handleDimension = (breakpoint, ratio = "landscape") => {
    return dimension[ratio] && dimension[ratio][breakpoint];
  };

  const breakpoint = {
    xs: "480",
    sm: "544",
    md: "768",
    lg: "1024",
    xl: "1280"
  };
  const handleSrcSet = (breakpoint, dpr = 2) => {
    // dpr = Device Pixel Ratio

    // Define the pixel density from dpr
    const density = Array.from(Array(dpr).keys());

    // Create empty storage array
    let set = [];

    density.map((item, index) => {
      const transform = `${transformation[breakpoint]},dpr_${index + 1}.0`;
      const src = `${cdnBase}/${transform}/${imageSrc} ${index + 1}x`;
      return set.push(src);
    });

    // Return defined srcSet
    return set;
  };

  function handleImageLoaded() {
    const picture = imageRef.current;
    const image = picture.querySelector("img");
    picture.classList.remove("image__loaded");
    picture.classList.add("image__loading");
    if (image.complete) {
      picture.classList.add("image__loaded");
    }
  }

  useEffect(() => {
    handleImageLoaded();
  }, []);

  return (
    <>
      <div className="aspect__content">
        <picture ref={imageRef}>
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
            alt={props.alt}
            onLoad={handleImageLoaded}
            width={handleDimension("xs", aspectRatio)}
            height={handleDimension("xs", aspectRatio)}
            srcSet={handleSrcSet("xs")}
            src={handleSrcSet("xs")}
          />
        </picture>
      </div>
      <style jsx>{`
        picture {
          display: block;

          &.image__loading {
            transition: opacity 600ms ease-out;
            opacity: 0;
          }

          &.image__loaded {
            opacity: 1;
          }

          ${props.hoverable &&
            `
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: auto;
            overflow: hidden;
          `}
        }

        picture img {
          display: block;
          width: 100%;
          height: auto;
          position: relative;
          ${props.hoverable &&
            `
            transition: transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;
            transform: scale(1);
          `}
        }

        picture img {
          ${props.hovering
            ? `
            transform: scale(1.045);
          `
            : ""}
        }
      `}</style>
    </>
  );
};

export default Image;
