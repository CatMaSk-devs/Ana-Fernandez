import React, { Component } from "react";

import { auth } from '../../Services/FIREBASE';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await auth.HandleLogin(this.state.email, this.state.password)
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Login Page</h1>
        </header>
        <form onSubmit={this.handleSubmit} >
          <input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <button type="submit">login</button>

        </form>
      </div>
    );
  }
}

export default LoginComponent;