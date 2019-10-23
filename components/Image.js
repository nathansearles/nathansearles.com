import React, { useRef, useEffect } from "react";

const Image = props => {
  const imageRef = useRef();
  const cdnBase = "https://res.cloudinary.com/dzlgbk52d/image/upload";
  const imageSrc = props.src;
  const aspectRatio = props.aspectRatio;

  const aspectRatios = {
    landscape: {
      sm: "ar_1:1,c_fill,w_639",
      md: "ar_16:9,c_fill,w_853",
      lg: "ar_16:9,c_fill,w_1067",
      xl: "ar_16:9,c_fill,w_1067"
    },
    portrait: {
      sm: "ar_3:4,c_fill,w_639",
      md: "ar_3:4,c_fill,w_414",
      lg: "ar_3:4,c_fill,w_331",
      xl: "ar_3:4,c_fill,w_331"
    },
    square: {
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
    sm: `${handleAspectRatio("sm", aspectRatio)},f_auto,q_auto:best`,
    md: `${handleAspectRatio("md", aspectRatio)},f_auto,q_auto:best`,
    lg: `${handleAspectRatio("lg", aspectRatio)},f_auto,q_auto:best`,
    xl: `${handleAspectRatio("xl", aspectRatio)},f_auto,q_auto:best`
  };

  const dimension = {
    sm: "544",
    md: "768",
    lg: "1024",
    xl: "1280"
  };

  const handleSrcSet = (breakpoint, dpr = 3) => {
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
            media={`(min-width: ${dimension.xl}px)`}
            width={dimension.xl}
            height={dimension.xl * 0.5625}
            srcSet={handleSrcSet("xl")}
          />
          <source
            media={`(min-width: ${dimension.lg}px)`}
            width={dimension.lg}
            height={dimension.lg * 0.5625}
            srcSet={handleSrcSet("lg")}
          />
          <source
            media={`(min-width: ${dimension.md}px)`}
            width={dimension.md}
            height={dimension.md}
            srcSet={handleSrcSet("md")}
          />
          <img
            alt={props.alt}
            onLoad={handleImageLoaded}
            width={dimension.sm}
            height={dimension.sm}
            srcSet={handleSrcSet("sm")}
            src={handleSrcSet("sm")}
          />
        </picture>
      </div>
      <style jsx>{`
        picture {
          &.image__loading {
            transition: opacity 600ms ease-out;
            opacity: 0;
          }

          &.image__loaded {
            opacity: 1;
          }
        }

        picture img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default Image;
