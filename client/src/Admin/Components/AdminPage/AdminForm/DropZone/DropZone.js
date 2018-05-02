import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import firebase from 'firebase';

import storageRef from '../../../../../Services/Firebase/FirebaseStorage';
import snapshot from '../../../../../Services/Firebase/FirebaseDB';

class DropZone extends Component {
  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  onDrop(files) {
    console.log(files)
    const file = files[0];
    const storageRef = firebase.storage().ref(`/photos/${file.name}`);
    const task = storageRef.put(file);
    task.on('state_changed', snapshot => {
      console.log(snapshot)
        const record = {
          image: task.snapshot.downloadURL
        };
        const dbRef = firebase.database().ref('pictures');
        const newPicture = dbRef.push();
        newPicture.set(record);
      }
    );
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            { this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>) }
          </ul>
        </aside>
      </section>
    );
  }
}

export default DropZone