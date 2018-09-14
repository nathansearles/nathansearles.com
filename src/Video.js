import React from 'react';

export default class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.videoRef = React.createRef();
    this.handleVideoLoaded = this.handleVideoLoaded.bind(this);
  }

  handleVideoLoaded() {
    const video = this.videoRef.current;
    if (!this.state.loaded) {
      this.setState({ loaded: true });
      if (video.classList.contains('video__loading')) {
        video.classList.add('video__loaded');
      }
    }
  }

  componentDidMount() {
    const video = this.videoRef.current;
    if (video.oncanplay) {
      this.handleVideoLoaded();
    } else {
      video.classList.add('video__loading')
    }
  }

  render() {
    if (this.props.video) {
      const video = this.props.video;

      return (
        <video
          muted
          autoPlay
          playsInline
          loop
          src={video}
          ref={this.videoRef}
          onCanPlay={this.handleVideoLoaded}
        />
      );
    } else {
      return null;
    }
  }
}
