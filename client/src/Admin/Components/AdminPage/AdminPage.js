import React, { Component } from "react";
import { Route } from 'react-router-dom';

import AuthUserContext from "../../../Services/Session/AuthUserContext";
import withAuthorization from "../../../Services/Session/WithAuthorization";
import SignOutButton from '../SignOut/SignOut';
import AdminForm from './AdminForm/AdminForm';
import MyCollections from './AdminForm/MyCollections/MyCollections';
import AddCollection from './AdminForm/AddCollection/AddCollection';
import ViewCollection from './AdminForm/MyCollections/ViewCollection/ViewCollection';

import * as routes from '../../../Constants/routes'

import './AdminPage.css'

class AdminPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: ''
    }
  }

  onSelectCollection(collection) {
    this.setState({ collection })
  }

  render() {
    const { collection } = this.state

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="admin_content">
            <div className="admin_header">
              <SignOutButton/>
            </div>
            <div className="admin_main">
              <Route exact path={`/${routes.ADMIN_PAGE}`} component={AdminForm} />
              <Route
                exact path={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`}
                selectCollection={this.onSelectCollection}
                component={MyCollections} />
              <Route
                exact path={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/:id`}
                component={(props) => <ViewCollection collection={collection} {...props} />} />
              <Route
                path={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.ADD_COLLECTION}`}
                component={AddCollection} />
            </div>
            <div className="admin_footer"></div>
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AdminPage);
