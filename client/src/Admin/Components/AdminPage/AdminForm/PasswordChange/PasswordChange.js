import React, { Component } from 'react';

import { auth } from '../../../../../Services/Firebase';

import './PasswordChange.css';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    const { passwordOne } = this.state;

    auth.HandlePasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => this.setState(updateByPropertyName('error', error)))
  }

  handleOnFocus = () => {
    console.log(this.state.error)
    this.setState({ ...INITIAL_STATE })
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    return (
      <div>
        <div className="background"/>
        <div className="form">
          <form onSubmit={this.onSubmit}>
            <input
              value={passwordOne}
              onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
              type="password"
              placeholder="New Password"
              onFocus={error ? this.handleOnFocus : null}
            />
            <input
              value={passwordTwo}
              onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
              type="password"
              placeholder="Confirm New Password"
              onFocus={error ? this.handleOnFocus : null}
            />
            <button type="submit">
              Reset My Password
            </button>

            { error && <p>{error.message}</p> }
          </form>
        </div>
      </div>
    );
  }
}

export default PasswordChangeForm;