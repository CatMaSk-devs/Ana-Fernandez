import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';

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
          color={'#687bcd'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default Spinner
