import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADPITFAr61he53-g-2RahhJmZCJ1o9bq0",
  authDomain: "social-media-web-cd027.firebaseapp.com",
  projectId: "social-media-web-cd027",
  storageBucket: "social-media-web-cd027.appspot.com",
  messagingSenderId: "1010316473435",
  appId: "1:1010316473435:web:fb330e3183e433b5377b7e",
  measurementId: "G-2HWHSJQLNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);
export const storage=getStorage(app);