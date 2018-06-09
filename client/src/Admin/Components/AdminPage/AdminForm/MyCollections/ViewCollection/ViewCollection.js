import React from 'react';

import './ViewCollection.css'

const ViewCollection = ({ location }) => {
  console.log(location)

  const { collection } = location.state
  console.log(collection)

  return (
    <div>
      <img src={collection.cover_image_url.url} height="200" width="auto" alt={collection.title}/>
      {collection.collection_images_url.map(image => (
        <img key={image.id} src={image.url} height="100" width="auto" alt={image.id}/>
      ))}
    </div>
  );
}

export default ViewCollection