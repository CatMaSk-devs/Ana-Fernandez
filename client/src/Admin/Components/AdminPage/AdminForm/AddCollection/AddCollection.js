import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import AddCollectionTitle from './AddCollectionTitle/AddCollectionTitle';
import AddCollectionForm from './AddCollectionForm/AddCollectionForm';

import * as routes from '../../../../../Constants/routes'

const AddCollection = ({ match, history }) => {
  console.log(match.url)

  return (
    <div>
      <Route exact path={`${match.url}/${routes.ADD_COLLECTION_TITLE}`} component={AddCollectionTitle}></Route>
      <Route exact path={`${match.url}/${routes.ADD_COLLECTION_FORM}`} component={AddCollectionForm}></Route>
      <Route exact path={`${match.url}/${routes.ADD_COLLECTION_FORM}/:id`} component={AddCollectionForm}></Route>
    </div>
  )
}

export default AddCollection