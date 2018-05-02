import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MyCollections from '../AdminForm/MyCollections/MyCollections';
import AddCollection from '../AdminForm/AddCollection/AddCollection';
import EditCollection from '../AdminForm/EditCollection/EditCollection';
import RemoveCollection from '../AdminForm/RemoveCollection/RemoveCollection';
import PasswordChange from '../AdminForm/PasswordChange/PasswordChange';

import TEXTS from '../../../../Texts/Texts';
import * as routes from '../../../../Constants/routes'

import './Sidebar.css'

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
      <div className="sidebar_container">
        <button className="btn" onClick={()=> this.handleOnClick(MyCollections)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`}>{TEXTS.ASIDE_BUTTONS.MY_COLLECTIONS}</Link>
        </button>
        <button className="btn" onClick={()=> this.handleOnClick(AddCollection)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.ADD_COLLECTION}`}>{TEXTS.ASIDE_BUTTONS.ADD_COLLECTION}</Link>
        </button>
        <button className="btn" onClick={()=> this.handleOnClick(EditCollection)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.EDIT_COLLECTION}`}>{TEXTS.ASIDE_BUTTONS.EDIT_COLLECTION}</Link>
        </button>
        <button className="btn" onClick={()=> this.handleOnClick(RemoveCollection)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.REMOVE_COLLECTION}`}>{TEXTS.ASIDE_BUTTONS.REMOVE_COLLECTION}</Link>
        </button>
        <button className="btn" onClick={()=> this.handleOnClick(PasswordChange)}>
          <Link to={`/${routes.ADMIN_PAGE}/${routes.PASSWORD_CHANGE}`}>{TEXTS.ASIDE_BUTTONS.PASSWORD_CHANGE}</Link>
        </button>
      </div>
    )
  }
}

export default Sidebar