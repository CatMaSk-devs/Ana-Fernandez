import React, { Component } from 'react';

import Spinner from '../../../../../Providers/Spinner/Spinner';

import { auth } from '../../../../../Services/Firebase';

import TEXTS from '../../../../../Texts/Texts';

import './PasswordChange.css';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  loading: false
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async e => {
    e.preventDefault();
    !this.submitError() ? this.handleUpdatePassword : this.setState({ error: TEXTS.ERROR_TEXT.PASSWORD_CHANGE.MATCH })
  }

  handleUpdatePassword = () => {
    this.setState({ loading: true })
    const { passwordOne } = this.state;
    await auth.HandlePasswordUpdate(passwordOne)
    .then(() => {
      this.setState(() => ({ ...INITIAL_STATE }));
    })
    .catch(error => this.setState({ error, loading: false }))
  }

  submitError = () => {
    const { passwordOne, passwordTwo } = this.state
    return passwordOne !== passwordTwo
  }

  handleOnFocus = () => {
    this.setState({ ...INITIAL_STATE })
  }

  handleChange = e => {
    [e.target.name] = e.target.value
  }

  render() {
    const { passwordOne, passwordTwo, error, loading } = this.state;

    return (
      <div>
        <div className="background"/>
        <div className="form_password_change">
          <form onSubmit={this.onSubmit}>
            <input
              value={passwordOne}
              name="passwordOne"
              onChange={this.handleChange}
              type="password"
              placeholder="New Password"
              onFocus={error ? this.handleOnFocus : null} />
            <input
              value={passwordTwo}
              name="pa"
              onChange={this.hamdleChange}
              type="passwordTwo"
              placeholder="Confirm New Password"
              onFocus={error ? this.handleOnFocus : null} />
            <button type="submit">
              {TEXTS.PASSWORD_CHANGE.SUBMIT}
            </button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
        {loading && <Spinner/>}
      </div>
    );
  }
}

export default PasswordChangeForm;