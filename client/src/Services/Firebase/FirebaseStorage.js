import { storage } from './index';

const storageRef = async file => {
  const response = await storage.ref(`/photos/${file.name}`);
  return response
}

const StorageRefDelete = async id => {
  const storagemec = storage.ref();
  const imagesRef = storagemec.child(id);
  const response = await imagesRef.delete()
  .then(()=> console.log('ok...'))
  .catch(error => console.log(error))
  return response
}

export { storageRef, StorageRefDelete }