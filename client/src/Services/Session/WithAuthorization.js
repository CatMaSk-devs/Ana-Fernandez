import React from "react";
import { withRouter } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import { firebaseService } from "../Firebase";

import * as routes from "../../Constants/routes";

const withAuthorization = (condition) => Component => {
  class WithAuthorization extends React.Component {

    componentDidMount() {
      firebaseService.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(`/${routes.SIGN_IN}`);
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {(authUser) => (authUser ? <Component /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
