import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginComponent from "./Admin/Components/LoginComponent/LoginComponent";
import PasswordForgetPage from './Admin/Components/PasswordForget/PasswordForget';
import HomePage from "./User/Components/HomePage/HomePage";
import AdminPage from "./Admin/Components/AdminPage/AdminPage";
import withAuthentication from "./Services/Session/WithAuthentication";

import * as routes from "./Constants/routes";

import "./index.css";

const App = () => (
  <Router>
    <div className="app">
      <Route exact path='/' component={() => <HomePage />} />
      <Route path={`/${routes.PASSWORD_FORGET}`} component={() => <PasswordForgetPage />} />
      <Route path={`/${routes.SIGN_IN}`} component={() => <LoginComponent />} />
      <Route path={`/${routes.ADMIN_PAGE}`} component={() => <AdminPage />} />
    </div>
  </Router>
);
export default withAuthentication(App);
