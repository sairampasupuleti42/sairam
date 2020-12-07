import React, { useState, useEffect } from "react";
import "./Contact.css";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
// firebase
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
var provider = new firebase.auth.GoogleAuthProvider();
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
// End firebase

function Contact({ user }) {
  function getQueries() {
    const snapshot = firebase.firestore().collection("queries").get();
    console.log(snapshot);
  }
  getQueries();
  return (
    <div className="contact">
      {user ? (
        <div>
          <div className="luser">
            <img
              className="luser__photoURL"
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <h1 className="luser__displayName">Hello, {user?.displayName}</h1>
          </div>
          <div>
            <ChatRoomArea data={[]} chat={true} />
          </div>
        </div>
      ) : (
        <h2 className="tempCSS"> Dummy text goes here </h2>
      )}
    </div>
  );
}

export default Contact;
