import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TransitionGroup, CSSTransitionGroup } from "react-transition-group"

import LoginComponent from "./Admin/Components/LoginComponent/LoginComponent";
import PasswordForgetPage from './Admin/Components/PasswordForget/PasswordForget';
import HomePage from "./User/Components/HomePage/HomePage";
import AdminPage from "./Admin/Components/AdminPage/AdminPage";
import withAuthentication from "./Services/Session/WithAuthentication";

import * as routes from "./Constants/routes";

const App = () => (
  <TransitionGroup>
    <Router>
      <div className="app">
      <CSSTransitionGroup
        transitionName="fade-in"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <Route exact path='/' component={() => <HomePage />} />
      </CSSTransitionGroup>
        <Route path={`/${routes.PASSWORD_FORGET}`} component={() => <PasswordForgetPage />} />
        <Route path={`/${routes.SIGN_IN}`} component={() => <LoginComponent />} />
        <Route path={`/${routes.ADMIN_PAGE}`} component={() => <AdminPage />} />
      </div>
    </Router>
  </TransitionGroup>
);
export default withAuthentication(App);
