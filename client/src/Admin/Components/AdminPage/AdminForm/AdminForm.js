import React, { Component } from 'react';

import ViewCollection from './ViewCollection/ViewCollection';
import AddCollection from './AddCollection/AddCollection';
import EditCollection from './EditCollection/EditCollection';
import RemoveCollection from './RemoveCollection/RemoveCollection';
import PasswordChange from './PasswordChange/PasswordChange';

import TEXTS from '../../../../Texts/Texts';

import './AdminForm.css'

class AdminForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ component: nextProps.onSelected })
  }

  renderComponent() {
    const { component } = this.state;

    if (component === TEXTS.ASIDE_BUTTONS.VIEW_COLLECTION)  return <ViewCollection/>
    if (component === TEXTS.ASIDE_BUTTONS.ADD_COLLECTION) return <AddCollection/>
    if (component === TEXTS.ASIDE_BUTTONS.EDIT_COLECTION) return <EditCollection/>
    if (component === TEXTS.ASIDE_BUTTONS.REMOVE_COLLECTION) return <RemoveCollection/>
    if (component === TEXTS.ASIDE_BUTTONS.PASSWORD_CHANGE) return <PasswordChange/>
  }

  render() {
    return (
      <div className="admin_container">{this.renderComponent()}</div>
    )
  }
}

export default AdminForm