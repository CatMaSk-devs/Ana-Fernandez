import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../Services/Firebase';

import * as routes from '../../../Constants/routes';

import './PasswordForget.css'

const PasswordForgetPage = () =>
  <div>
    <PasswordForgetForm />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    const { email } = this.state;

    auth.HandlePasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    e.preventDefault();
  }

  handleOnFocus = () => {
    this.setState({ ...INITIAL_STATE })
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <input
            value={email}
            onChange={e => this.setState(updateByPropertyName('email', e.target.value))}
            onFocus={this.handleOnFocus}
            type="text"
            placeholder="Email Address"
          />
          <button disabled={isInvalid} type="submit">
            Reset My Password
          </button>

          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={`/${routes.PASSWORD_FORGET}`}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};