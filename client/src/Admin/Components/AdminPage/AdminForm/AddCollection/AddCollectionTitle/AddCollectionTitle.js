import React, { Component } from 'react';

import { db } from '../../../../../../Services/Firebase/FirebaseService'

import * as routes from '../../../../../../Constants/routes'

import './AddCollectionTitle.css'

const dbCollection = db.collection('collections')

class AddCollectionTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { title } = this.state
    const { history, createCollection } = this.props
    dbCollection.add({
      title
    })
    .then((docRef) => {
      createCollection(title)
      history.push(`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.ADD_COLLECTION}/${routes.ADD_COLLECTION_FORM}/${docRef.id}`)
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
