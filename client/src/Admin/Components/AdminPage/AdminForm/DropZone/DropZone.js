import React, { Component } from 'react';

import TEXTS from '../../../../../Texts/Texts';

import Dropzone from 'react-dropzone';

class DropZone extends Component {
  constructor(props) {
    super()
    this.state = {
      files: []
    }
  }

  render() {

    const { itemsForm, onDropItems, onDropCover } = this.props;

    return (
      <div className="dropzone">
        <Dropzone onDrop={itemsForm ? onDropItems : onDropCover} multiple={itemsForm ? true : false}>
          <p>{itemsForm ? TEXTS.DROPZONE.ITEM_IMAGES : TEXTS.DROPZONE.COVER_IMAGE}</p>
        </Dropzone>
      </div>
    );
  }
}

export default DropZone