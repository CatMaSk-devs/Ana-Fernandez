import React, { Component } from 'react';
import { awsUpload } from '../Services/AWSservices'

class AWSupload extends Component {
  constructor() {
    super()
  }
  uploadPhoto(file) {
    awsUpload(file)
  }
  render() {
    return (
      <div className="input__margin-top">
        <input type="file" onChange={(e) => this.uploadPhoto(e.target.files)}/>
      </div>
    );
  }
}
export default AWSupload;