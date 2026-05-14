import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    "AIzaSyDLMiQu-IrXiTsrEvFB5xZ4K50H7uZRrY0",
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "p-sairam.firebaseapp.com",
  databaseURL:
    process.env.REACT_APP_FIREBASE_DATABASE_URL ||
    "https://p-sairam.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "p-sairam",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "p-sairam.appspot.com",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "588750147667",
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ||
    "1:588750147667:web:1e5846afc127d1db6ff6a6",
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-NFTF2EBC3H",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const functions = firebase.app().functions("us-central1");
const googleProvider = new firebase.auth.GoogleAuthProvider();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, firebase, firestore, functions, googleProvider, serverTimestamp };

export default firebase;
