import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../Services/Firebase';
import Spinner from '../../../Providers/Spinner/Spinner';

import * as routes from '../../../Constants/routes';

import './PasswordForget.css'

const PasswordForgetPage = () =>
  <div>
    <PasswordForgetForm />
  </div>

const INITIAL_STATE = {
  email: '',
  error: null,
  loading: false
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async e => {
    e.preventDefault();
    const { email } = this.state;
    this.setState({ loading: true })
    await auth.HandlePasswordReset(email)
    .then(() => {
      this.setState(() => ({ ...INITIAL_STATE }));
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnFocus = () => {
    this.setState({ ...INITIAL_STATE })
  }

  render() {
    const { email, error, loading } = this.state;
    const isInvalid = email === '';

    return (
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <input
            value={email}
            name="email"
            onChange={this.handleChange}
            onFocus={this.handleOnFocus}
            type="text"
            placeholder="Email Address"/>
          <button disabled={isInvalid} type="submit">
            Reset My Password
          </button>
          { error && <p>{error.message}</p> }
        </form>
        {loading && <Spinner/>}
      </div>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={`/${routes.PASSWORD_FORGET}`}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };