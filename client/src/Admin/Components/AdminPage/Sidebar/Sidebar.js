import React, { Component } from 'react';

import TEXTS from '../../../../Texts/Texts';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = component => this.props.onSelect(component)

  render() {
    return (
      <div>
        <button onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.VIEW_COLLECTION)}>{TEXTS.ASIDE_BUTTONS.VIEW_COLLECTION}</button>
        <button onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.ADD_COLLECTION)}>{TEXTS.ASIDE_BUTTONS.ADD_COLLECTION}</button>
        <button onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.EDIT_COLECTION)}>{TEXTS.ASIDE_BUTTONS.EDIT_COLECTION}</button>
        <button onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.REMOVE_COLLECTION)}>{TEXTS.ASIDE_BUTTONS.REMOVE_COLLECTION}</button>
        <button onClick={() => this.handleOnClick(TEXTS.ASIDE_BUTTONS.PASSWORD_CHANGE)}>{TEXTS.ASIDE_BUTTONS.PASSWORD_CHANGE}</button>
      </div>
    )
  }
}

export default Sidebar