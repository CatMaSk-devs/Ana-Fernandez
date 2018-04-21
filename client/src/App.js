import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { firebase } from "./Admin/Services/FIREBASE";

import Main from "./Main";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <Router>
        <Main authUser={this.state.authUser} />
      </Router>
    );
  }
}

export default App;
