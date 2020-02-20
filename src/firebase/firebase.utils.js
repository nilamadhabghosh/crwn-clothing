import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAZq3mOeToR-cx-tRpkpRyRYYbNMpVVug",
  authDomain: "crwn-db-7e72d.firebaseapp.com",
  databaseURL: "https://crwn-db-7e72d.firebaseio.com",
  projectId: "crwn-db-7e72d",
  storageBucket: "crwn-db-7e72d.appspot.com",
  messagingSenderId: "47115180316",
  appId: "1:47115180316:web:0c2aacc2ad8b8a1f3cc2d9",
  measurementId: "G-DYD43V14E6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestor = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
