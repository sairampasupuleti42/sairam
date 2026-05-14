import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyDLMiQu-IrXiTsrEvFB5xZ4K50H7uZRrY0",
  authDomain: "p-sairam.firebaseapp.com",
  databaseURL: "https://p-sairam.firebaseio.com",
  projectId: "p-sairam",
  storageBucket: "p-sairam.appspot.com",
  messagingSenderId: "588750147667",
  appId: "1:588750147667:web:1e5846afc127d1db6ff6a6",
  measurementId: "G-NFTF2EBC3H",
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
