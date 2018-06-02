import { db } from './FirebaseService';

import CONSTANTS from '../../Constants/constants';

const COLLECTION = CONSTANTS.DB.COLLECTION.DEFAULT;

const SetCollection = async (id, description, images_download_url) => {
  const response = await db.collection(COLLECTION).doc(id).set({
    description,
    cover_image_url: images_download_url.shift(),
    collection_images_url: images_download_url
  }, { merge: true })
  return response
}

const GetCollection = async () => {
  const response = await db.collection(COLLECTION).get()
  return response
}

export { SetCollection, GetCollection }