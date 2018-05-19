import React from 'react';

import './ViewCollection.css'

const IMAGES = [
  { id: 0, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "0" },
  { id: 1, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "1" },
  { id: 2, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "2" },
  { id: 3, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "3" }
]

const ViewCollection = ({ match, history }) => {
  console.log(match.url)
  console.log(match.params)

  const image = IMAGES[parseInt(match.params.id, 10)];
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="modal">
      <div className="view">
        <img src={image.url} alt={image.alt}/>
        <button className="btn_modal" type="button" onClick={back}>
          X
        </button>
      </div>
    </div>
  );
}

export default ViewCollection