import React from "react";
import { Route, Redirect } from "react-router";

import { getToken } from "../Admin/Services/storage.service";

import * as routes from "../CONSTANTS/routes";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.SIGN_IN,
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
