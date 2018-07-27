import React, { Component } from 'react';

import { db } from '../../../../../../Services/Firebase/FirebaseService';
import Spinner from '../../../../../../Providers/Spinner/Spinner';

import * as routes from '../../../../../../Constants/routes';
import TEXTS from '../../../../../../Texts/Texts';

import './AddCollectionTitle.css';
import { firebaseService } from '../../../../../../Services/Firebase';

const dbCollection = db.collection('collections')

class AddCollectionTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      error: null,
      loading: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    this.setState({ loading: true })
    e.preventDefault()
    const { title } = this.state
    const { history, createCollection } = this.props
    await dbCollection.add({ title, created: firebaseService.timestamp })
    .then((docRef) => {
      this.setState({ loading: false })
      createCollection(title)
      history.push(`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.ADD_COLLECTION}/${routes.ADD_COLLECTION_FORM}/${docRef.id}`)
    })
    .catch(error => this.setState({ error, loading: false }))
  }

  render () {
    const { title, loading } = this.state

    return (
      <div className="add-collection-title__content">
        <div className="add-collection-title__form">
          <form onSubmit={this.handleSubmit}>
            <input
            value={title}
            name="title"
            onChange={this.handleChange}
            type="text"
            placeholder={TEXTS.ADD_COLLECTION.ADD_COLLECTION_TITLE.PLACEHOLDER.TITLE}/>
            <button type="submit">Crear</button>
          </form>
        </div>
        {loading && <Spinner/>}
      </div>
    )
  }
}

export default AddCollectionTitle
