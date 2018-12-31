import React, { Component } from "react";

import { GetCollection } from '../../../../Services/Firebase/FirebaseDB';


class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    GetCollection()
    .then(querySnapshot => {
      let collections = [];
      querySnapshot.forEach(doc => {
        collections = [ ...collections, { id: doc.id, ...doc.data() }]
      });
      this.setState({ collections });
    })
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="carrousel-container">
        { collections && collections.map(collection => (
          <img className="carrousel-img" key={collection.cover_image_url.id} src={collection.cover_image_url.url} alt=""/>
        ))}
      </div>
    )
  }
}

export default Carrousel;
