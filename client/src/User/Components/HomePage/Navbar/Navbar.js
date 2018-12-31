import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <ul className="navbar--list">
          <li className="navbar--list--item"><Link to={'/collections'} className="navbar--list--item--link">Colecciones</Link></li>
          <li className="navbar--list--item"><Link to={'/last'} className="navbar--list--item--link">Últimas creaciones</Link></li>
          <li className="navbar--list--item"><Link to={'/about'} className="navbar--list--item--link">Conóceme</Link></li>
          <li className="navbar--list--item"><Link to={'/contact'} className="navbar--list--item--link">Contacto</Link></li>
          
        </ul>
      </div>
    )
  }
}

export default Navbar;


