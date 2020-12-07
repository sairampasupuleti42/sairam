import React, { useState, useEffect } from "react";
import "./Contact.css";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
import firebase from "firebase";
function Contact({ user }) {
  const [queries, setQueries] = useState();
  useEffect(() => {
    const firestore = firebase.firestore();
    return firestore.collection("queries").onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setQueries(postData);
    });
  }, []);
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
            <ChatRoomArea user={user} data={queries} chat={true} />
          </div>
        </div>
      ) : (
        <h2 className="tempCSS"> Dummy text goes here </h2>
      )}
    </div>
  );
}

export default Contact;
