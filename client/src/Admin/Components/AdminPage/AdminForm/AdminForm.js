import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import * as routes from '../../../../Constants/routes';

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

  render() {
    const { component } = this.state;

    return (
      <div>
        { component && <Route path={`/${routes.ADMIN_PAGE}/:component`} component={component}></Route> }
      </div>
    )
  }
}

export default AdminForm