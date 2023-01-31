import { signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

import { firebaseAuth } from '../datas/firebaseConfig';

const generateMessageFromFirebaseErrorCode = (err: any) => {
  let sError = "Unknown error validating user credential";
  switch(err.code){
    case "auth/invalid-email":
    case "auth/wrong-password":
    case "auth/user-not-found":
      sError = "Invalid user or password";
      break;
    case "auth/too-many-requests":
      sError = "Too many attempts to login with this user. Please try again later.";
      break;
    default:
      break;
  }
  return sError;
}
export interface EUserLogin {
  message: string;
}
export const makeUserSignIn = async (email: string, password: string): Promise<UserCredential | EUserLogin> => {
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password)
    return Promise.resolve(result);
  } catch(err:any){
    return Promise.reject({
      message: generateMessageFromFirebaseErrorCode(err),
      code: err.code
    });
  }
}
/* 
export const makeUserSignUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
} */
