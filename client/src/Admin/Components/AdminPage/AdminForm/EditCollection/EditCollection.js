import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import uuid from 'uuid';

import DropZone from '../DropZone/DropZone';
import { db } from '../../../../../Services/Firebase/FirebaseService'

import * as routes from '../../../../../Constants/routes'

import './EditCollection.css'

const dbCollection = db.collection('collections')

class EditCollection extends Component {
  constructor (props) {
    super()
    this.state = {
      title: '',
      description: '',
      cover: '',
      uploadValue: 0,
      files: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, description } = this.state
    dbCollection.doc(title).set({
      id: uuid(),
      title,
      description
    })
    .then(() => console.log('Succesfull'))
    .catch(err => console.log(err))
  }

  handleDrop = files => {
    console.log(files)
    this.setState({ files })
  }

  render () {
    const { title, description, cover, uploadValue } = this.state
    const { match } = this.props

    return (
      <div className="edit-page">
        <div className="edit-form">
          <form onSubmit={this.handleSubmit}>
            <img src={cover} height="200" width="auto" alt={cover} />
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
            <button type="submit">Crear</button>
            <Link to={`${match.url}/${routes.COLLECTION_COVER}`}>Add collection cover</Link>
            <Link to={`${match.url}/${routes.COLLECTION_ITEMS}`}>Add collection items</Link>
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
          </form>
        </div>
      </div>
    )
  }
}

export default EditCollection