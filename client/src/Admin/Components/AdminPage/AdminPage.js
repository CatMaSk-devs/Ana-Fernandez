import React, { Component } from "react";

import AuthUserContext from "../../../Services/Session/AuthUserContext";
import withAuthorization from "../../../Services/Session/WithAuthorization";
import SignOutButton from '../SignOut/SignOut';
import Sidebar from './Sidebar/Sidebar';
import AdminForm from './AdminForm/AdminForm'

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  handleOnSelect = component => this.setState({ component })

  render() {
    const { component } = this.state

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <SignOutButton/>
            <Sidebar onSelect={this.handleOnSelect}/>
            <AdminForm onSelected={component} />
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AdminPage);
