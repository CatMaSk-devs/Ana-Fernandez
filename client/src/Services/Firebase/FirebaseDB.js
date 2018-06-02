import { db } from './FirebaseService';

import CONSTANTS from '../../Constants/constants';

const COLLECTION = CONSTANTS.DB.COLLECTION.DEFAULT;

const CollectionSet = async (id, description, images_download_url) => {
  const response = await db.collection(COLLECTION).doc(id).set({
    description,
    cover_image_url: images_download_url.shift(),
    collection_images_url: images_download_url
  }, { merge: true })
  return response
}

export default CollectionSet