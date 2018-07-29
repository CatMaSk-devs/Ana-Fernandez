import React, { Component } from "react";

import Lightbox from 'react-images';

class LightBoxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      images: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.images !== state.images) {
      return {
        images: props.images,
        lightboxIsOpen: props.isOpen
      };
    }

    return null;
  }

  closeLightbox = () => {
    this.setState({ lightboxIsOpen: false})
  }

	openLightbox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
  }

	gotoPrevious = () => {
    const { currentImage } = this.state;
		this.setState({ currentImage: currentImage - 1 });
  }

	gotoNext = () => {
    const { currentImage } = this.state;
		this.setState({ currentImage: currentImage + 1 });
  }

	gotoImage = (index) => {
		this.setState({ currentImage: index });
  }

	handleClickImage = () => {
		if (this.state.currentImage === this.props.images.length - 1) return;
		this.gotoNext();
  }

  render() {
    const { currentImage, lightboxIsOpen, } = this.state;
    const { images } = this.props;
    console.log(images)

    return (
      <Lightbox
        currentImage={currentImage}
        images={images}
        isOpen={lightboxIsOpen}
        showThumbnails={true}
        onClickImage={this.handleClickImage}
        onClickNext={this.gotoNext}
        onClickPrev={this.gotoPrevious}
        onClickThumbnail={this.gotoImage}
        onClose={this.closeLightbox}
      />
    )
  }
}

export default LightBoxComponent;
