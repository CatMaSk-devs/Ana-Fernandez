import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import MyCollections from './MyCollections/MyCollections';

import * as routes from '../../../../Constants/routes';

import './AdminForm.css'

const AdminForm = () => {

    return (
      <div>
        <Redirect to={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`} />
        <Route path={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`} component={MyCollections} />
      </div>
    )
}

export default AdminForm
