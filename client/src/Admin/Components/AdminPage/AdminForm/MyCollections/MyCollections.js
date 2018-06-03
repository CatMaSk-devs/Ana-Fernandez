import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { GetCollection } from '../../../../../Services/Firebase/FirebaseDB';

import TEXTS from '../../../../../Texts/Texts';

import * as routes from '../../../../../Constants/routes'

import './MyCollections.css';

class MyCollections extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    GetCollection()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const { collections } = this.state
        this.setState({
          collections: [ ...collections, { id: doc.id, ...doc.data() } ]
        })
      });
    })
  }

  render() {
    const { collections } = this.state

    return (
      <div>
        <Link to={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.ADD_COLLECTION}/${routes.ADD_COLLECTION_TITLE}`}>
          {TEXTS.MY_COLLECTIONS.ADD_COLLECTION}
        </Link>
        <div className="collections_gallery">
          {collections.map(collection => (
            <div key={collection.id}>
              <Link className="collection"
              to={{
                pathname: `/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${collection.id}`,
                state: { collection }
              }}>
              <img className="collection" src={collection.cover_image_url} alt={collection.cover_image_url} />
              <h2>{collection.title}</h2>
              <p>{collection.description}</p>
              </Link>
              <button>{TEXTS.MY_COLLECTIONS.EDIT_COLLECTION}</button>
              <button>{TEXTS.MY_COLLECTIONS.REMOVE_COLLECTION}</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default MyCollections