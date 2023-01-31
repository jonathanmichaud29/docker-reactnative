import { initializeApp } from 'firebase/app';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth/react-native';
// import { getAnalytics } from "firebase/analytics";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

import { 
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_MESUREMENTID,
} from '@env';

// Initialize Firebase
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
  measurementId: REACT_APP_FIREBASE_MESUREMENTID
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
// export const firebaseAuth = getAuth(app);
