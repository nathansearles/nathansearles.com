import React from 'react';
import { Link } from 'react-router-dom';
import {RichText} from 'prismic-reactjs';
import Image from './Image'
import Video from './Video'

export default class Slices extends React.Component {
  render() {
    if (this.props.doc) {
      const doc = this.props.doc;
      const props = this.props;

      const pageContent = doc.data.body.map(function(slice, index){
        // Text Slice
        if (slice.slice_type === 'text') {
          return (
            <div className="row justify-center" key={index}>
              <div className="span-10 span-offset-1 span-8@lg module module__text" key={index}>
                {RichText.render(slice.primary.text, props.prismicCtx.linkResolver)}
              </div>
            </div>
          );
        }
        // Image
        else if (slice.slice_type === 'image') {
          return (
            <div className="module module__image aspect aspect__square aspect__wide@lg" key={index}>
              <Image image={slice.primary.image} />
            </div>
          );
        // Image Gallery Slice
      } else if (slice.slice_type === 'gallery') {
          const galleryContent = slice.items.map(function(image, imageIndex){
            return <img src={image.gallery_image.url} alt={image.gallery_image.alt} key={imageIndex} width="25%"/>;
          });
          return (
            <div className="image-gallery" key={index}>
              {galleryContent}
            </div>
          );
        }
        // Video Embed
        else if (slice.slice_type === 'video_embed') {
          const embedContent = slice.items.map(function(video, embedIndex){
            return <div className="media" dangerouslySetInnerHTML={{ __html: video.embed.html }} />
          });
          return (
            <div className="module module__video" key={index}>
              <div className="embed-container">
              {embedContent}
              </div>
            </div>
          );
        }
        // Video Autoplay
        else if (slice.slice_type === 'video_autoplay') {
          const autoplayContent = slice.items.map(function(item, itemIndex){
            // return <video muted autoPlay loop src={item.video.url} key={itemIndex}></video>
            // return <Video video={item.video.url}/>
            return (
              <div className="autoplay-container aspect__content" key={itemIndex}>
                <Video video={item.video.url} />
              </div>
            )
          });
          return (
            <div className="module module__video--autoplay aspect aspect__square aspect__wide@lg" key={index}>
              {autoplayContent}
            </div>
          );
        }
        // Project
        else if (slice.slice_type === 'project') {
          const projectContent = slice.items.map(function(item, itemIndex){
            return (
              <div className="col span-12 span-6@md span-4@xl" key={itemIndex}>
                <div className="module__grid--item">
                  <Link to={'/projects/' + item.project_link.slug}>
                    <div className="module__grid--image">
                      <div className="hover-pop"></div>
                      <Image image={item.project_image} />
                    </div>
                    <div className="module__grid--content">
                      {RichText.render(item.project_title, props.prismicCtx.linkResolver)}
                      {RichText.render(item.project_description, props.prismicCtx.linkResolver)}
                    </div>
                  </Link>
                </div>
              </div>
            );
          });
          return (
            <div className="module module__grid" key={index}>
              <div className="row">
                {projectContent}
              </div>
            </div>
          );
        // Return null by default
        } else {
          return null;
        }
      });

      return(
        <div className="page-content">
          {pageContent}
        </div>
      );
    } else {
      return null;
    }
  }
}
