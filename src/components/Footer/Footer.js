import React, { useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import "./Footer.css";
import glogo from "./../../assets/g-logo.png";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
function Footer({ user, onClick }) {
  const firestore = firebase.firestore();
  const queriesRef = firestore.collection("queries");
  const [queryValue, setQueryValue] = useState("");
  function handleChatSignIn(e) {
    e.preventDefault();
    onClick();
  }
  return (
    <div>
      {!user ? (
        <div>
          <button className="btn--signin" onClick={handleChatSignIn}>
            <img src={glogo} alt="Google Logo" className="btn--icon" />
            Sign in with Google
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={sendQuery}>
            <input
              placeholder="Enter your query here "
              value={queryValue}
              onChange={queryChangeEvent}
              className="input"
            />
            <button type="submit" className="btn--send">Send</button>
          </form>
        </div>
      )}
    </div>
  );
  function queryChangeEvent(e) {
    e.preventDefault();
    setQueryValue(e.target.value);
  }
  async function sendQuery(e) {
    e.preventDefault();
    const { uid, photoURL, displayName } = user;
    await queriesRef.add({
      text: queryValue,
      uid,
      photoURL,
      displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(res=>{
      setQueryValue("");
    })

  }
}

export default Footer;
