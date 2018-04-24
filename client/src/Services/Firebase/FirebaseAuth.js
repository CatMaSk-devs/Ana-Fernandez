import { auth } from "./FirebaseService";

export const HandleLogin = async (email, password) => {
  const response = await auth.signInAndRetrieveDataWithEmailAndPassword(
    email,
    password
  );
  return response;
};

export const HandleSignOut = async () => {
  const response = await auth.signOut();
  return response;
}

export const HandlePasswordReset = async email => {
  const response = await auth.sendPasswordResetEmail(email);
  return response;
}

export const HandlePasswordUpdate = async password => {
  const response = await auth.currentUser.updatePassword(password);
  return response;
}
