// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOrl6nK8NFwTfzlDeiW47E8L8tuesy95c",
  authDomain: "realtor-clone-dffbb.firebaseapp.com",
  projectId: "realtor-clone-dffbb",
  storageBucket: "realtor-clone-dffbb.appspot.com",
  messagingSenderId: "423843255833",
  appId: "1:423843255833:web:2e1f6dd431b82a4e023c88",
  measurementId: "G-7SNBHZ75QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();