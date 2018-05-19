import React from 'react';
import { Link, Route } from 'react-router-dom';

import ViewCollection from './ViewCollection/ViewCollection';

import './MyCollections.css';

const IMAGES = [
  { id: 0, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" },
  { id: 1, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" },
  { id: 2, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" },
  { id: 3, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" }
]

const MyCollections = ({ match }) => {
  console.log(match.url)

  return (
    <div className="collections_gallery">
    <Route exact path={`${match.url}/:id`} component={ViewCollection}></Route>
      {IMAGES.map(image => (
        <Link className="collection"
          key={image.id}
          to={{
            pathname: `${match.url}/${image.id}`,
            state: { modal: true }
          }}>
          <img className="collection" src={image.url} alt={image.alt}/>
          <p>{image.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default MyCollections