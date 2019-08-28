import React, {useState, useRef, useEffect} from 'react';

const Image = (props) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef();

  const image = props.image;
  const breakpointSm = image;
  const breakpointMd = image.md;
  const breakpointLg = image.lg;
  const breakpointXl = image.xl;
  const breakpointXxl = image.xxl;

  function handleImageLoaded() {
    const image = imageRef.current;
    if (!loaded) {
      setLoaded(true);
      if (image.classList.contains('image__loading')) {
        image.classList.add('image__loaded');
      }
    }
  }

  useEffect(()=>{
    const image = imageRef.current;
    if (image.complete) {
      handleImageLoaded();
    } else {
      image.classList.add('image__loading')
    }
  });

  return (
    props.image &&
    <picture className="aspect__content">
      <source media="(min-width: 1600px)" srcSet={breakpointXxl.url} />
      <source media="(min-width: 1280px)" srcSet={breakpointXl.url} />
      <source media="(min-width: 1024px)" srcSet={breakpointLg.url} />
      <source media="(min-width: 768px)" srcSet={breakpointMd.url} />
      <source srcSet={breakpointSm.url} />
      <img
        ref={imageRef}
        onLoad={handleImageLoaded}
        src={breakpointSm.url}
        alt={breakpointSm.alt} />
    </picture>
  );
}

export default Image;