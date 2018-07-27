import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import { GetCollection, RemoveCollection } from '../../../../../Services/Firebase/FirebaseDB';

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

  handleViewCollection = collection => {
    this.props.history.push({
      pathname: `/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.VIEW_COLLECTION}/${collection.id}`,
      state: { collection }
    })
  }

  handleEditCollection = collection => {
    this.props.history.push({
      pathname: `/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.EDIT_COLLECTION}/${collection.id}`,
      state: { collection }
    })
  }

  handleRemoveCollection = async collectionID => {
    await RemoveCollection(collectionID);
    const storageRef = await firebase.storage().ref(`/${collectionID}/`).delete();
    const collections = this.handleRemoveLocalCollection(collectionID);
    this.setState({ collections });
  }

  handleRemoveLocalCollection = collectionID => {
    const { collections } = this.state;
    return collections.filter(doc => doc.id !== collectionID)
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
                pathname: `/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.VIEW_COLLECTION}/${collection.id}`,
                state: { collection }
              }}>
              <img className="collection" src={collection.cover_image_url.url} alt={collection.cover_image_url.url} />
              <h2>{collection.title}</h2>
              <p>{collection.description}</p>
              </Link>
              <button onClick={() => this.handleEditCollection(collection)}>{TEXTS.MY_COLLECTIONS.EDIT_COLLECTION}</button>
              <button onClick={() => this.handleRemoveCollection(collection.id)}>{TEXTS.MY_COLLECTIONS.REMOVE_COLLECTION}</button>
              <button onClick={() => this.handleViewCollection(collection)}>{TEXTS.MY_COLLECTIONS.VIEW_COLLECTION}</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default MyCollections