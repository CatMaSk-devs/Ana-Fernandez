import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { auth } from "../../../Services/Firebase";
import * as routes from "../../../Constants/routes";

import './LoginComponent.css'

const SignInPage = ({ history }) => (
  <div>
    <SignInForm history={history} />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    const { email, password } = this.state;
    const { history } = this.props;
    auth.HandleLogin(email, password)
      .then((response) => {
        console.log(`Logged as ${response.user.email}`)
        history.push(routes.ADMIN_PAGE);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });
    e.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div>
        <div className="background-image" />
        <div className="login-page">
          <div className="form">
            <form onSubmit={this.onSubmit}>
              <input
                value={email}
                onChange={event =>
                  this.setState(updateByPropertyName("email", event.target.value))
                }
                type="text"
                placeholder="Email Address"
              />
              <input
                value={password}
                onChange={event =>
                  this.setState(updateByPropertyName("password", event.target.value))
                }
                type="password"
                placeholder="Password"
              />
              <button disabled={isInvalid} type="submit">
                Sign In
              </button>
              <p className="message">
                Has olvidado la contraseña?{" "}
                <span onClick={this.handleResetPassword}>
                  Solicita una nueva
                </span>
              </p>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };