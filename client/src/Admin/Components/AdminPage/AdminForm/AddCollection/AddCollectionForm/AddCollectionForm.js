import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import firebase from 'firebase';
import uuid from 'uuid';

import { db } from '../../../../../../Services/Firebase/FirebaseService'

import DropZone from '../../DropZone/DropZone';

import * as routes from '../../../../../../Constants/routes'

import './AddCollectionForm.css'

const dbCollection = db.collection('collections')
let image = []

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
      upload_value: 0,
      image_download_url: [],
    }
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
    const { id } = this.props.match.params
    const { image_download_url } = this.state
    const storageRef = firebase.storage().ref(`/${id}/${image_file.name}`);
    const task = storageRef.put(image_file)
    await task.on('state_changed', snapshot => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        upload_value: percentage
      })}, error => {
        console.log(error.message)
      }, ()=> {
        return task.snapshot.downloadURL

      }
    );
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { cover_file, item_files, image_download_url } = this.state;
    const image_files = [ ...cover_file, ...item_files ]
    const images = image_files.map(image_file => {
        return this.uploadImage(image_file)
      })
    const url = await Promise.all(images)
    console.log(url)
    // this.setState({
    //   upload_value: 100,
    //   image_download_url: response
    // });
    // console.log(image_download_url)
  }

  render () {
    const { title, description, cover, cover_file, item_files, upload_value } = this.state

    return (
      <div className="add-collection-form__content">
        <div className="add-collection-form__form">
          <form onSubmit={this.handleSubmit}>
            <section>
              <h1>Input form</h1>
              <input
              value={title}
              name="title"
              onChange={this.handleChange}
              type="text"
              placeholder="Título de la colección"/>
              <textarea
                rows="4" cols="50"
                value={description}
                name="description"
                onChange={this.handleChange}
                type="text"
                placeholder="Descripción"/>
              <img src={cover_file && cover_file[0].preview} height="200" width="auto" alt={cover_file.name} />
              <DropZone onDropCover={this.handleDropCover} />
            </section>
            <section>
              <h1>Item form</h1>
              {item_files && item_files.map((image, index) => (
                <img key={index} src={image.preview} height="200" width="auto" alt={image.name} />
              ))}
              <DropZone onDropItems={this.handleDropItems} itemsForm={true}/>
              <progress value={upload_value} max="100"></progress>
            </section>
            <button type="submit">Crear</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddCollectionForm

    // console.log(title)
    // console.log(description)
    // console.log(files)
    // const file = files[0];
    // const storageRef = firebase.storage().ref(`/photos/${file.name}`);
    // const task = storageRef.put(file);
    // task.on('state_changed', snapshot => {
      //   const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   this.setState({
        //     uploadValue: percentage
        //   })}, error => {
          //     console.log(error.message)
          //   }, ()=> {
            //     this.setState({
              //       files: [file],
              //       uploadValue: 100,
              //       cover: task.snapshot.downloadURL
              //     });
              //     dbCollection.doc(title).set({
                //       id: uuid(),
                //       cover_image_url: task.snapshot.downloadURL
                //     });
                //   }
                // );

                /*{title && <textarea
                  rows="4" cols="50"
                  value={description}
                  name="description"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Descripción"/>
                  <Link to={`${match.url}/${routes.COLLECTION_COVER}`}>Add collection cover</Link>
                  <Link to={`${match.url}/${routes.COLLECTION_ITEMS}`}>Add collection items</Link>
                  <img src={cover} height="200" width="auto" alt={cover} />
                  <Route
                  exact path={`${match.url}/${routes.COLLECTION_COVER}`}
                  component={(props) =>
                    <DropZone
                    onDrop={this.handleDrop}
                    uploadValue={uploadValue}
                    {...this.props } />
                  }>
                  </Route>
                  <Route exact path={`${match.url}/${routes.COLLECTION_ITEMS}`} component={DropZone}></Route>
                    handleDrop = files => {
                      console.log(files)
                      this.setState({ files })
                    }
                }*/