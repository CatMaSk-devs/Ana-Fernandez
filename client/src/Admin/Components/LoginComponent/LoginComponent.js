import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { auth } from "../../Services/FIREBASE";
import * as routes from "../../../CONSTANTS/routes";

const SignInPage = ({ history }) => (
  <div>
    <h1>SignIn</h1>
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
      .then(() => {
        console.log(this.state)
        history.push(routes.HOME_PAGE);
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

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
