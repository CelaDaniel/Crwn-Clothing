import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAyWAVwZWBDtTTEdeZhOxE9C72UEPXQIdA",
  authDomain: "crwn-db-db.firebaseapp.com",
  projectId: "crwn-db-db",
  storageBucket: "crwn-db-db.appspot.com",
  messagingSenderId: "874208165735",
  appId: "1:874208165735:web:d9f3d09c9b75abfc2d79c2",
  measurementId: "G-RE9MJWE7W6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
