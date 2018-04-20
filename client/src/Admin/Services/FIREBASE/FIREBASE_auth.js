import { auth } from './FIREBASE.service'

export const HandleLogin = async (email, password) => {
  const response = await auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
  return response
}
