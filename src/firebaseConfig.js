import firebase from "firebase/app";
import "firebase/firestore";

// firebase init
const config = {
  apiKey: "AIzaSyA74uIdCqGMWNzVxooevHYRjq-BfPRF-eA",
  authDomain: "felixbecquart-cv.firebaseapp.com",
  databaseURL: "https://felixbecquart-cv.firebaseio.com",
  projectId: "felixbecquart-cv",
  storageBucket: "felixbecquart-cv.appspot.com",
  messagingSenderId: "1028129625066",
  appId: "1:1028129625066:web:15d4dd30a82e091ada1893"
};
firebase.initializeApp(config);

// firebase utils
const firestore = firebase.firestore();

export { firestore };
