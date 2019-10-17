import React, { useRef, useEffect } from "react";

const Image = props => {
  const imageRef = useRef();

  function handleImageLoaded() {
    const image = imageRef.current;
    image.classList.add("image__loaded");
  }

  useEffect(() => {
    const image = imageRef.current;
    if (image.complete) {
      image.classList.add("image__loaded");
    }
  });

  return (
    props.src && (
      <div className="aspect__content">
        <img
          ref={imageRef}
          onLoad={handleImageLoaded}
          className="image__loading"
          src={props.src}
          alt={props.alt}
        />
      </div>
    )
  );
};

export default Image;
