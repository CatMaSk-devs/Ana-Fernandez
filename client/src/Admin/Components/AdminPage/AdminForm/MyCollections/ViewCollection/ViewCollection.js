import React from 'react';

import './ViewCollection.css'

const ViewCollection = ({ location }) => {

  // const image = IMAGES[parseInt(match.params.id, 10)];
  // const back = e => {
  //   e.stopPropagation();
  //   history.goBack();
  // };
const { collection } = location.state

  return (
    <div>
      <img src={collection.cover_image_url} height="200" width="auto" alt={collection.title}/>
      {collection.collection_images_url.map(image => (
        <img src={image} height="100" width="auto" alt=''/>
      ))}
    </div>
    // <div className="modal">
    //   <div className="view">
    //     <button className="btn_modal" type="button" onClick={back}>
    //       X
    //     </button>
    //   </div>
    // </div>
  );
}

export default ViewCollection