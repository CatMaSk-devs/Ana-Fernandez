import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MyCollections from './MyCollections/MyCollections';

import * as routes from '../../../../Constants/routes';

import './AdminForm.css'

class AdminForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.onSelected) return { component: nextProps.onSelected }

    return null
  }

  render() {
    const { component } = this.state;

    return (
      <div>
        <Route path={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}`} component={MyCollections}></Route>
      </div>
    )
  }
}

export default AdminForm

/*{ component && <Route path={`/${routes.ADMIN_PAGE}/:component`} component={component}></Route> }*/