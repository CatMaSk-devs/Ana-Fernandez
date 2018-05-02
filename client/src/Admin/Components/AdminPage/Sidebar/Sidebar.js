import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ViewCollection from '../AdminForm/ViewCollection/ViewCollection';
import AddCollection from '../AdminForm/AddCollection/AddCollection';
import EditCollection from '../AdminForm/EditCollection/EditCollection';
import RemoveCollection from '../AdminForm/RemoveCollection/RemoveCollection';
import PasswordChange from '../AdminForm/PasswordChange/PasswordChange';

import TEXTS from '../../../../Texts/Texts';
import * as routes from '../../../../Constants/routes'

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  handleOnClick = component => this.props.onSelect(component)

  render() {

    return (
      <div>
        <button onClick={()=> this.handleOnClick(ViewCollection)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.VIEW_COLLECTION}`}>{TEXTS.ASIDE_BUTTONS.VIEW_COLLECTION}</Link>
        </button>
        <button onClick={()=> this.handleOnClick(AddCollection)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.ADD_COLLECTION}`}>{TEXTS.ASIDE_BUTTONS.ADD_COLLECTION}</Link>
        </button>
        <button onClick={()=> this.handleOnClick(EditCollection)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.EDIT_COLLECTION}`}>{TEXTS.ASIDE_BUTTONS.EDIT_COLLECTION}</Link>
        </button>
        <button onClick={()=> this.handleOnClick(RemoveCollection)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.REMOVE_COLLECTION}`}>{TEXTS.ASIDE_BUTTONS.REMOVE_COLLECTION}</Link>
        </button>
        <button onClick={()=> this.handleOnClick(PasswordChange)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.PASSWORD_CHANGE}`}>{TEXTS.ASIDE_BUTTONS.PASSWORD_CHANGE}</Link>
        </button>
      </div>
    )
  }
}

export default Sidebar