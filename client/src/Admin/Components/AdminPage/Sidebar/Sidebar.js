import React, { Component } from 'react';

import TEXTS from '../../../../Texts/Texts';

import './Sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = component => this.props.onSelect(component)

  render() {
    return (
      <div className="sidebar_container">
        <button className="btn" onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.MY_COLLECTIONS)}>{TEXTS.ASIDE_BUTTONS.MY_COLLECTIONS}</button>
        <button className="btn" onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.ADD_COLLECTION)}>{TEXTS.ASIDE_BUTTONS.ADD_COLLECTION}</button>
        <button className="btn" onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.EDIT_COLECTION)}>{TEXTS.ASIDE_BUTTONS.EDIT_COLECTION}</button>
        <button className="btn" onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.REMOVE_COLLECTION)}>{TEXTS.ASIDE_BUTTONS.REMOVE_COLLECTION}</button>
        <button className="btn" onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.PASSWORD_CHANGE)}>{TEXTS.ASIDE_BUTTONS.PASSWORD_CHANGE}</button>
      </div>
    )
  }
}

export default Sidebar