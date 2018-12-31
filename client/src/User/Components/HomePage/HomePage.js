import React, { Component } from "react";

import Navbar from "./Navbar/Navbar";
import Carrousel from "./Carrousel/Carrousel";
import Collections from "./Collections/Collections";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <Navbar />
        <Carrousel />
        <div className="container-padding home-description">
          <h3 className="s1"><span>Ana Fernández</span>, propuestas innovadoras llenas de color, llenas de vida, llenas de tí.</h3>
          <h3 className="s1">Todos mis diseños están hechos a mano, con cariño y con pasión.</h3>
        </div>
        <Collections />
      </div>
    )
  }
}

export default HomePage;
