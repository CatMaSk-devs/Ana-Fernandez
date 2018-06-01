import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';
import CONSTANTS from '../../Constants/constants';

import './Spinner.css';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className='spinner-loading'>
        <ScaleLoader
          color={CONSTANTS.SPINNER_COLOR}
          loading={this.state.loading}/>
      </div>
    )
  }
}

export default Spinner
