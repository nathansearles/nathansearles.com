import React, {useState, useRef, useEffect} from 'react';

const Video = (props) => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef();

  function handleVideoLoaded() {
    const video = videoRef.current;
    if (!loaded) {
      setLoaded(true);
      if (video.classList.contains('video__loading')) {
        video.classList.add('video__loaded');
      }
    }
  }

  useEffect(()=>{
    const video = videoRef.current;
    if (video.oncanplay) {
      handleVideoLoaded();
    } else {
      video.classList.add('video__loading')
    }
  });

  return (
    props.video &&
    <video
        muted
        autoPlay
        playsInline
        loop
        src={props.video}
        ref={videoRef}
        onCanPlay={handleVideoLoaded}
      />
  );
}

export default Video;

