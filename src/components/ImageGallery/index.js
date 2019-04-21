import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TwoColumn = styled.div`
  display: flex;
  
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const Gallery = styled.div`
  display: flex;
  width: 50%;
  margin: -10px;
  margin-right: 14px;
  
  @media (max-width: 1024px) {
    width: 100%;
    margin-right: -10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: all 1s;
  &:hover {
    cursor: pointer;
  }
`;

const BigImage = styled.div`
  width: 100%;
  margin: 10px;
`;

const ImageThumbnail = styled.div`
  width: auto;
  margin: 10px;
  justify-content: space-between;
`;

const Caption = styled.div`
  width: 50%;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentImage: null
    };
    
    this.toggleImage = this.toggleImage.bind(this);
    this.showAllImages = this.showAllImages.bind(this);
  }

  toggleImage(image) {
    if (this.state.currentImage && this.state.currentImage.id === image.id) {
      this.setState({ currentImage: null });
    } else {
      this.setState({ currentImage: image });
    }
  }
  
  showAllImages(images) {
    return images.map(image => <ImageThumbnail><Image key={image.id} src={image.src} alt={image.alt} onClick={() => this.toggleImage(image)} /></ImageThumbnail>)
  }
  
  render() {
    const { images, CaptionRenderer } = this.props;
    
    return (
      <TwoColumn>
        <Gallery> 
          {!this.state.currentImage ? this.showAllImages(images)
            : <BigImage><Image key={this.state.currentImage.id} src={this.state.currentImage.src} alt={this.state.currentImage.alt} onClick={() => this.toggleImage(this.state.currentImage)} /></BigImage>}
        </Gallery>
        <Caption>
          <CaptionRenderer caption={this.state.currentImage ? this.state.currentImage.caption : null} />
        </Caption>
      </TwoColumn>
    );
  }
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  CaptionRenderer: PropTypes.func
};

ImageGallery.defaultProps = {
  images: [],
  CaptionRenderer: (<div>Caption goes here</div>)
}

export default ImageGallery;
