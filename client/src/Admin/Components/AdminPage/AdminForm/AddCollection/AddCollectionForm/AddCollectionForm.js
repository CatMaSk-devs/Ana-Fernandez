import React, { Component } from 'react';

import firebase from 'firebase';
import uuid from 'uuid';

import { SetCollection } from '../../../../../../Services/Firebase/FirebaseDB';

import DropZone from '../../DropZone/DropZone';
import Spinner from '../../../../../../Providers/Spinner/Spinner';
import ScrollSmooth from '../../../../../../Providers/ScrollSmooth/ScrollSmooth';

import TEXTS from '../../../../../../Texts/Texts';
import * as routes from '../../../../../../Constants/routes';

import './AddCollectionForm.css';

class AddCollectionForm extends Component {
  constructor (props) {
    super()
    this.state = {
      id: '',
      title: '',
      description: '',
      cover: '',
      items: [],
      cover_file: '',
      item_files: [],
      images_download_url: [{
        url: '',
        id: ''
      }],
      error: null,
      loading: false
    }
  }

  componentDidMount() {
    const { title } = this.props
    const { id } = this.props.match.params
    this.setState({ title, id })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDropCover = cover_file => {
    this.setState({ cover_file })
  }

  handleDropItems = item_files => {
    this.setState({ item_files })
  }

  uploadImage = async image_file => {
    const { id } = this.state
    const storageRef = await firebase.storage().ref(`photo/${id}/${image_file.name}`);
    return new Promise((resolve, reject) => storageRef.put(image_file).then(resolve))
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true })
    ScrollSmooth()
    const { cover_file, item_files } = this.state;
    const image_files = [ ...cover_file, ...item_files ]
    const images = image_files.map(image_file => {
        return this.uploadImage(image_file)
      })
    const snapshots = await Promise.all(images);
    const imagesObject = snapshots.reduce((acc, snapshot, index) => {
      acc[index] = {
        url: snapshot.downloadURL,
        id: uuid()
      }
      return acc
    }, [{}])
    this.setState({
      images_download_url: imagesObject
    });
    this.uploadCollection()
  }

  uploadCollection = async () => {
    const { id, description, images_download_url } = this.state
    await SetCollection(id, description, images_download_url)
    .then(() => {
      this.setState({ loading: false })
      this.props.history.push(`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`)
    })
    .catch((error) => this.setState({ error, loading: false }))
  }

  render () {
    const { title, description, cover_file, item_files, loading } = this.state

    return (
      <div className="add-collection-form__content">
        <div className="add-collection-form__form">
          <form onSubmit={this.handleSubmit}>
            <section>
              <h2>{title}</h2>
              <input
                value={title}
                name="title"
                onChange={this.handleChange}
                type="text"
                placeholder={TEXTS.ADD_COLLECTION.ADD_COLLECTION_FORM.PLACEHOLDER.TITLE} />
              <textarea
                rows="4" cols="50"
                value={description}
                name="description"
                onChange={this.handleChange}
                type="text"
                placeholder={TEXTS.ADD_COLLECTION.ADD_COLLECTION_FORM.PLACEHOLDER.DESCRIPTION} />
              <h2>{TEXTS.ADD_COLLECTION.ADD_COLLECTION_FORM.COVER_IMAGE}</h2>
              {cover_file && <img src={cover_file[0].preview} height="200" width="auto" alt={cover_file.name} />}
              <DropZone onDropCover={this.handleDropCover} />
            </section>
            <section>
              <h2>{TEXTS.ADD_COLLECTION.ADD_COLLECTION_FORM.ITEM_IMAGES}</h2>
              {item_files && item_files.map((image, index) => (
                <img key={index} src={image.preview} height="200" width="auto" alt={image.name} />
              ))}
              <DropZone onDropItems={this.handleDropItems} itemsForm={true} />
            </section>
            <button type="submit">Crear</button>
          </form>
        </div>
        {loading && <Spinner/>}
      </div>
    )
  }
}

export default AddCollectionForm
