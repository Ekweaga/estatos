// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW8Rv8LJvWoMQ6-g7r9ez2u4bSxdm3SGY",
  authDomain: "estatos-b5a91.firebaseapp.com",
  projectId: "estatos-b5a91",
  storageBucket: "estatos-b5a91.appspot.com",
  messagingSenderId: "333637840657",
  appId: "1:333637840657:web:e14860b691fde6000e26b0",
  measurementId: "G-9Y8SNL7Y5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth}