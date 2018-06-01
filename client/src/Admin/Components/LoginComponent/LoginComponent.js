import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { auth } from "../../../Services/Firebase";
import Spinner from '../../../Providers/Spinner/Spinner';

import * as routes from "../../../Constants/routes";
import TEXTS from '../../../Texts/Texts';

import './LoginComponent.css'

const SignInPage = ({ history }) => (
  <div>
    <SignInForm history={history} />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  loading: false
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true })
    const { email, password } = this.state;
    const { history } = this.props;
    await auth.HandleLogin(email, password)
    .then((response) => {
      history.push(`${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`);
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });
  };

  componentWillUnmount() {
    this.setState({ loading: false })
  }

  render() {
    const { email, password, error, loading } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div>
        <div className="background-image" />
        <div className="login-page">
          <div className="form">
            <form onSubmit={this.onSubmit}>
              <input
                value={email}
                name="email"
                onChange={this.handleChange}
                type="text"
                placeholder={TEXTS.LOGIN.PLACEHOLDER.EMAIL}/>
              <input
                value={password}
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder={TEXTS.LOGIN.PLACEHOLDER.PASSWORD}/>
              <button disabled={isInvalid} type="submit">
                Sign In
              </button>
              <p className="message">
                {TEXTS.LOGIN.PASSWORD_FORGET.REQUEST}{" "}
                <span>
                  <Link to={routes.PASSWORD_FORGET}> {TEXTS.LOGIN.PASSWORD_FORGET.NEW}</Link>
                </span>
              </p>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
        {loading && <Spinner/>}
      </div>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };