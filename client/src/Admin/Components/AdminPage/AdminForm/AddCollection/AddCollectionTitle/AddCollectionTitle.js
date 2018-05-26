import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import firebase from 'firebase';
import uuid from 'uuid';

import { db } from '../../../../../../Services/Firebase/FirebaseService'

import * as routes from '../../../../../../Constants/routes'

import './AddCollectionTitle.css'

const dbCollection = db.collection('collections')

class AddCollectionTitle extends Component {
  constructor (props) {
    super()
    this.state = {
      title: '',
      id: uuid()
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    const { match, history } = this.props
    e.preventDefault()
    const { title, id } = this.state
    dbCollection.doc(id).set({
      title
    })
    .then((data) => {
      this.props.history.push(`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.ADD_COLLECTION}/${routes.ADD_COLLECTION_FORM}/${id}`)
    })
    .catch(err => console.log(err))
  }

  render () {
    const { title } = this.state

    return (
      <div className="add-collection-title__content">
        <div className="add-collection-title__form">
          <form onSubmit={this.handleSubmit}>
            <input
            value={title}
            name="title"
            onChange={this.handleChange}
            type="text"
            placeholder="Título de la colección"/>
            <button type="submit">Crear</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddCollectionTitle

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