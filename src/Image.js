import React from 'react';

export default class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.imageRef = React.createRef();
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    const image = this.imageRef.current;
    if (!this.state.loaded) {
      this.setState({ loaded: true });
      if (image.classList.contains('image__loading')) {
        // console.log('loaded image: ', image.alt);
        image.classList.add('image__loaded');
      }
    }
  }

  componentDidMount() {
    const image = this.imageRef.current;
    if (image.complete) {
      this.handleImageLoaded();
    } else {
      // console.log('loading image: ', image.alt);
      image.classList.add('image__loading')
    }
  }

  render() {
    if (this.props.image) {
      const image = this.props.image;

      const breakpointSm = image;
      const breakpointMd = image.md;
      const breakpointLg = image.lg;
      const breakpointXl = image.xl;
      const breakpointXxl = image.xxl;

      return (
        <picture className="aspect__content">
          <source media="(min-width: 1600px)" srcSet={breakpointXxl.url} />
          <source media="(min-width: 1280px)" srcSet={breakpointXl.url} />
          <source media="(min-width: 1024px)" srcSet={breakpointLg.url} />
          <source media="(min-width: 768px)" srcSet={breakpointMd.url} />
          <source srcSet={breakpointSm.url} />
          <img
            ref={this.imageRef}
            onLoad={this.handleImageLoaded}
            src={breakpointSm.url}
            alt={breakpointSm.alt} />
        </picture>
      );
    } else {
      return null;
    }
  }
}
