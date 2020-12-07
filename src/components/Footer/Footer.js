import React, { useState } from "react";
import firebase from "firebase";
import "./Footer.css";

function Footer(props) {
  const [userData, setUserData] = useState(null);
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
  function handleChatSignIn(e) {
    e.preventDefault();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        setUserData(result.user);
      })
      .catch(function (error) {});
  }
  return (
    <div>
      <form>
        {!userData ? (
          <button
            className="contact__chat__btn--signin"
            onClick={handleChatSignIn}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 48 48"
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg>{" "}
            Login with Google
          </button>
        ) : (
          "Hello, " + userData.displayName
        )}
      </form>
    </div>
  );
}

export default Footer;
<form>
  <button className="contact__chat__btn--signin">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      viewBox="0 0 48 48"
      class="abcRioButtonSvg"
    >
      <g>
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        ></path>
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        ></path>
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        ></path>
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        ></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </g>
    </svg>{" "}
    Login with Google
  </button>
</form>;
