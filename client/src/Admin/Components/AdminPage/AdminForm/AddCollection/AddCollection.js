import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AddCollectionTitle from './AddCollectionTitle/AddCollectionTitle';
import AddCollectionForm from './AddCollectionForm/AddCollectionForm';

import * as routes from '../../../../../Constants/routes'

class AddCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  onCreateCollection = (title) => {
    this.setState({ title })
  }

  render() {
    const { match } = this.props
    const { title } = this.state

    return (
      <div>
        <Route
          exact path={`${match.url}/${routes.ADD_COLLECTION_TITLE}`}
          component={(props) => <AddCollectionTitle { ...props } createCollection={this.onCreateCollection} />}>
        </Route>
        <Route exact path={`${match.url}/${routes.ADD_COLLECTION_FORM}`} component={AddCollectionForm}></Route>
        <Route
          exact path={`${match.url}/${routes.ADD_COLLECTION_FORM}/:id`}
          component={(props) => <AddCollectionForm { ...props } title={title} />}>
        </Route>
      </div>
    )
  }
}

export default AddCollection