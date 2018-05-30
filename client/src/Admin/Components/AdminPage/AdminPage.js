import React from "react";
import { Route } from 'react-router-dom';

import AuthUserContext from "../../../Services/Session/AuthUserContext";
import withAuthorization from "../../../Services/Session/WithAuthorization";
import SignOutButton from '../SignOut/SignOut';
import AdminForm from './AdminForm/AdminForm';
import MyCollections from './AdminForm/MyCollections/MyCollections';
import AddCollection from './AdminForm/AddCollection/AddCollection';

import * as routes from '../../../Constants/routes'

import './AdminPage.css'

const AdminPage = () => {

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div className="admin_content">
          <div className="admin_header">
            <SignOutButton/>
          </div>
          <div className="admin_main">
            <Route exact path={`/${routes.ADMIN_PAGE}`} component={AdminForm} />
            <Route exact path={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`} component={MyCollections} />
            <Route path={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.ADD_COLLECTION}`} component={AddCollection} />
          </div>
          <div className="admin_footer"></div>
        </div>
      )}
    </AuthUserContext.Consumer>
  )
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AdminPage);
