import React, { Component } from "react";
import Carrousel from "./Carrousel/Carrousel";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="container-padding">
          <h1>Ana Fernández</h1>
          <Carrousel></Carrousel>
        </div>
      </div>
    )
  }
}

export default Navbar;
