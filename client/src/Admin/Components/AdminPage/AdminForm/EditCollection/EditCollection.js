import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import DropZone from '../DropZone/DropZone';

import * as routes from '../../../../../Constants/routes'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class EditCollection extends Component {
  constructor (props) {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  render () {
    console.log(this.props)
    const { title, description } = this.state
    const { match } = this.props
    return (
      <div>
        <h1>EditCollection</h1>
        <h3>{title}</h3>
        <input
          value={title}
          onChange={e =>
            this.setState(updateByPropertyName("title", e.target.value))
          }
          type="text"
          placeholder="Title"/>
        <h3>{description}</h3>
        <input
          value={description}
          onChange={e =>
            this.setState(updateByPropertyName("description", e.target.value))
          }
          type="text"
          placeholder="Description"/>
          <Link to={`${match.url}/${routes.COLLECTION_COVER}`}>Add collection cover</Link>
          <Link to={`${match.url}/${routes.COLLECTION_ITEMS}`}>Add collection items</Link>
          <Route exact path={`${match.url}/${routes.COLLECTION_COVER}`} title={title} description={description} component={DropZone}></Route>
          <Route exact path={`${match.url}/${routes.COLLECTION_ITEMS}`} component={DropZone}></Route>
      </div>
    )
  }
}

export default EditCollection