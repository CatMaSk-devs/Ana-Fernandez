import React, { Component } from "react";
import { GetCollection } from '../../../../Services/Firebase/FirebaseDB';

import LightBoxComponent from '../../LightBoxComponent/LightBoxComponent';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount = async() => {
    try {
      const collections = await this.getCollection();
      this.setState({ collections });
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

  getImageURLS(index) {
    const { collections } = this.state;
    let images = [];
    collections[index].collection_images_url.map(image => images = [...images, { src: image.url }])
    return images;
  }

  handleOnClickCoverImage = (index) => {
    const images = this.getImageURLS(index);
    this.setState({ images, lightboxIsOpen: true })
  }

  render() {
    const { images, collections, lightboxIsOpen } = this.state;
    console.log(images)

      return (
        <div>
          <div className="collection-container">
            { collections && collections.map((collection, index) => (
              <img
                className="collection-image"
                key={collection.cover_image_url.id}
                src={collection.cover_image_url.url}
                alt={collection.cover_image_url.id}
                onClick={() => this.handleOnClickCoverImage(index)}/>
            ))}
          </div>
          {images && <LightBoxComponent
            images={images}
            isOpen={lightboxIsOpen}
          />}
        </div>
      )
    }


}

export default Collections;
