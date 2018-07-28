import React, { Component } from "react";
import { GetCollection } from '../../../../Services/Firebase/FirebaseDB';

import Lightbox from 'react-images';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      lightboxIsOpen: false,
      currentImage: 0,
      images: []
    };
  }

  componentDidMount = async() => {
    try {
      const collections = await this.getCollection();
      const images = this.getImageURLS(collections);
      this.setState({ images, collections });
    } catch(error) {
      console.log(error);
    }
  }

   async getCollection() {
    try {
      const collection = await GetCollection()
      let collections = [];
      collection.forEach(doc => {
        const { id } = doc;
        collections = [ ...collections, { id, ...doc.data() }]
      });
      return collections
    } catch(error) {
      console.log(error)
    }
  }

  getImageURLS(collections) {
    let images = [];
    collections.forEach(collection => images = [...images, { src: collection.cover_image_url.url }])
    return images;
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
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
  }

	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
  }

	gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
  }

	handleClickImage = () => {
		if (this.state.currentImage === this.props.images.length - 1) return;
		this.gotoNext();
  }

  handleOnClickImage = () => {
    this.setState({ lightboxIsOpen: true })
  }

  render() {
    const { images, collections, currentImage, lightboxIsOpen, } = this.state;
      return (
        <div>
          <div className="collection-container">
            { collections && collections.map(collection => (
              <img
                className="collection-image"
                key={collection.cover_image_url.id}
                src={collection.cover_image_url.url}
                alt={collection.cover_image_url.id}
                onClick={this.handleOnClickImage}/>
            ))}
          </div>
          <Lightbox
            currentImage={currentImage}
            images={images}
            isOpen={lightboxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
          />
        </div>
      )
    }


}

export default Collections;
