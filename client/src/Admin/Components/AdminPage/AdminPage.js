import React from "react";

import AuthUserContext from "../../../Services/Session/AuthUserContext";
import withAuthorization from "../../../Services/Session/WithAuthorization";
import SignOutButton from '../SignOut/SignOut';
import PasswordChangeForm from '../PasswordChange/PasswordChange';

const AdminPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <SignOutButton/>
        <PasswordChangeForm/>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AdminPage);
