import { sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential, sendEmailVerification } from "firebase/auth";

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
export interface IFirebaseResponse {
  message: string;
  code: string;
  data?: any;
}

export const makeUserSignIn = async (email: string, password: string): Promise<IFirebaseResponse> => {
  const defaultReturn: IFirebaseResponse = {
    message: 'Sign in success!',
    code: '200',
    data: null
  }
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password)
    return Promise.resolve({...defaultReturn});
  } catch(err:any){
    return Promise.reject({
      ...defaultReturn,
      message: generateMessageFromFirebaseErrorCode(err),
      code: err.code
    });
  }
}

export const makeUserForgetPassword = async (email: string): Promise<IFirebaseResponse> => {
  const defaultReturn: IFirebaseResponse = {
    message: 'Password recovery sent successfully',
    code: '200',
    data: null
  }
  try {
    const result = await sendPasswordResetEmail(firebaseAuth, email)
    return Promise.resolve({...defaultReturn});
  } catch(err:any){
    return Promise.reject({
      ...defaultReturn,
      message: generateMessageFromFirebaseErrorCode(err),
      code: err.code
    });
  }
}

export const makeUserSignUp = async (email: string, password: string): Promise<IFirebaseResponse> => {
  const defaultReturn: IFirebaseResponse = {
    message: 'Registration complete!',
    code: '200',
    data: null
  }
  try {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await sendEmailVerification(result.user)
    return Promise.resolve({...defaultReturn})
  } catch(err:any) {
    return Promise.reject({
      ...defaultReturn,
      message: generateMessageFromFirebaseErrorCode(err),
      code: err.code
    });
  };
}
