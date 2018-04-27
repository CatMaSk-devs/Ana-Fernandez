import { db } from './index';

const snapshot = async (collection, file) => {
  const response = await db.ref(collection).on(file)
  return response
}

export default snapshot