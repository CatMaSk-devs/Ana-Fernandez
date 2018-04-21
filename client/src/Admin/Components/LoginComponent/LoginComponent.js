import React, { Component } from "react";

import { auth } from "../../Services/FIREBASE";

import "./LoginComponent.css";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    const { email, password } = this.state
    e.preventDefault();
    try {
      const response = await auth.HandleLogin(email, password);
      console.log(`Logged as ${response.user.email}`)
    } catch (err) {
      console.log(err);
    }
  };

  handleResetPassword = async () => {
    console.log('reset password...')
  };

  render() {
    return (
      <div>
        <div className="background-image" />
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <input
                type="email"
                placeholder="username"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                required
              />
              <button type="submit">login</button>
              <p className="message">
                Has olvidado la contraseña?{" "}
                <span onClick={this.handleResetPassword}>
                  Solicita una nueva
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
