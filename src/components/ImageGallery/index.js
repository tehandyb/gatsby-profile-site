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
  margin: -5px;
  margin-right: 19px;
  flex-wrap: wrap;
  
  @media (max-width: 1024px) {
    width: 100%;
    margin-right: -5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const BigImage = styled.div`
  width: 100%;
  padding: 5px;
`;

const ImageThumbnail = styled.div`
  width: 50%;
  padding: 5px;
  justify-content: space-between;
  box-sizing: border-box;
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
    const { imagesWithCaptions, CaptionRenderer } = this.props;
    
    return (
      <TwoColumn>
        <Gallery> 
          {!this.state.currentImage ? this.showAllImages(imagesWithCaptions)
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
  imagesWithCaptions: PropTypes.array,
  CaptionRenderer: PropTypes.func
};

ImageGallery.defaultProps = {
  imagesWithCaptions: [],
  CaptionRenderer: (<div>Caption goes here</div>)
}

export default ImageGallery;
