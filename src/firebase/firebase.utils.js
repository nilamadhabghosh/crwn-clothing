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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
