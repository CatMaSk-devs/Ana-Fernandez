import React from 'react';
import { Link, Route } from 'react-router-dom';

import ViewCollection from './ViewCollection/ViewCollection';

import * as routes from '../../../../../Constants/routes'

import './MyCollections.css';

const IMAGES = [
  { id: 0, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" },
  { id: 1, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" },
  { id: 2, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" },
  { id: 3, url: "https://images.pexels.com/photos/1029929/pexels-photo-1029929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Mountain View", title: "Mountain View" }
]

const MyCollections = (props) => {
  console.log(props)

  return (
    <div className="collections_gallery">
      {IMAGES.map(image => (
        <div>
          <Link className="collection"
            key={image.id}
            to={{
              pathname: `/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${image.id}`,
              state: { modal: true }
            }}>
            <img className="collection" src={image.url} alt={image.alt}/>
            <p>{image.title}</p>
          </Link>
          <button>Editar colección</button>
          <button>Eliminar colección</button>
        </div>
      ))}
      <Link to={`/${routes.ADMIN_PAGE}/${routes.MY_COLLECTIONS}/${routes.ADD_COLLECTION}`}>Forgot Password?</Link>
    </div>
  )
}

export default MyCollections