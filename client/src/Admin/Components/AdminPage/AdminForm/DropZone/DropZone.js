import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

class DropZone extends Component {
  constructor(props) {
    super()
    this.state = {
      files: []
    }
  }

  render() {

    return (
      <div className="dropzone">
        <Dropzone onDrop={this.props.itemsForm ? this.props.onDropItems : this.props.onDropCover}>
        </Dropzone>
      </div>
    );
  }
}

export default DropZone