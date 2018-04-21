import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginComponent from "./Admin/Components/LoginComponent/LoginComponent";
import AdminPage from "./Admin/Components/AdminPage/AdminPage";
import HomePage from "./User/Components/HomePage/HomePage";
import PrivateRoute from "./Routes/PrivateRoutesComponent";

import * as routes from "./CONSTANTS/routes";

const Main = ({ authUser }) => {
  return (
    <div>
      <Switch>
        <PrivateRoute auth={authUser} exact path={routes.ADMIN_PAGE} component={AdminPage} />
        <Route exact path={routes.HOME_PAGE} component={HomePage} />
        <Route exact path={routes.SIGN_IN} component={LoginComponent} />
      </Switch>
    </div>
  );
};

export default Main;
