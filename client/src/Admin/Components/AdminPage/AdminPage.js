import React, { Component } from "react";

import AuthUserContext from "../../../Services/Session/AuthUserContext";
import withAuthorization from "../../../Services/Session/WithAuthorization";
import SignOutButton from '../SignOut/SignOut';
import Sidebar from './Sidebar/Sidebar';
import AdminForm from './AdminForm/AdminForm';

import './AdminPage.css'

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  handleOnSelect = component => {
    this.setState({ component })
  }

  render() {
    const { component } = this.state

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="admin_content">
            <div className="admin_header">
              <SignOutButton/>
            </div>
            <div className="admin_sidebar">
              <Sidebar onSelect={this.handleOnSelect}/>
            </div>
            <div className="admin_main">
              <AdminForm onSelected={component}/>
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
