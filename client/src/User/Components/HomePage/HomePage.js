import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <Navbar />
        <div className="container-padding">
          <h1>Hello World</h1>
        </div>
      </div>
    )
  }
}

export default HomePage;
