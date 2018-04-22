import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { firebase } from "./Admin/Services/FIREBASE";
import { saveToken } from "./Admin/Services/storage.service";

import Main from "./Main";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      user
        ? (
          this.setState({ user }),
          saveToken(user.uid))
        : this.setState({ user: null });
    });
  }

  render() {
    return (
      <Router>
        <Main user={this.state.user}/>
      </Router>
    );
  }
}

export default App;
