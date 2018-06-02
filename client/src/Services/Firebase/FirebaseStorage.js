import { storage } from './index';

const storageRef = async file => {
  const response = await storage.ref(`/photos/${file.name}`);
  return response
}

export default storageRef