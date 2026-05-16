import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import "./style.css";
import ChatRooms from "./components/ChatRooms/ChatRooms";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import Default from "./components/Default";
import { isMobile } from "react-device-detect";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth"; 
import MyAssistant from "./components/MyAssistant/MyAssistant";
import default_profile from './assets/default_profile.jpg';
import { auth, googleProvider } from "./firebase";

const PORTFOLIO_HOME_PREFERENCE_KEY = "c2FpcmFtLXBhc3VwdWxldGk=";

function getStoredHomePreference() {
  try {
    return localStorage.getItem(PORTFOLIO_HOME_PREFERENCE_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function hasStoredHomePreference() {
  try {
    return localStorage.getItem(PORTFOLIO_HOME_PREFERENCE_KEY) !== null;
  } catch (error) {
    return false;
  }
}

function setStoredHomePreference(value) {
  try {
    localStorage.setItem(PORTFOLIO_HOME_PREFERENCE_KEY, value);
  } catch (error) {}
}

export default function App() {
  const [user] = useAuthState(auth);
  async function requestSignIn() {
    await auth.signInWithPopup(googleProvider);
  }
  
  const [home, showHome] = useState(getStoredHomePreference);
  const [zIndexValue, setZIndexValue] = useState(0);
  const [leftHeader, setLeftHeader] = useState(null);
  useEffect(() => {
    setLeftHeader({
      avatar:
      default_profile,
      icon: ""
    });
  }, []);

  return (
    <div>
      <Router>
        <div className="app">
          <header className="app__header">
            <div className="unknown__class_in_header">
              <div className="intro__quote__div">
                {!home ? (
                  <h1 className="intro__quote">Sairam Pasupuleti</h1>
                ) : isMobile ? (
                  <h1 className="intro__quote">Sairam Pasupuleti</h1>
                ) : (
                  ""
                )}
              </div>
            </div>
          </header>
          <div
            className="app__body"
            style={home ? { height: "92vh", width: "90vw", top: "0" } : {}}
          >
            {home ? (
              <div className="app__container">
                <div className="app__rooms">
                  <ChatHeader
                    data={leftHeader}
                    showName={false}
                    mobileResTitle="Sairam Pasupuleti"
                    showButton={true}
                    handleIntroClick={catchIntroClick}
                  />
                  <ChatRooms getClickForMobileAction={handleMobileTouch} />
                </div>
                <div
                  className="app__room_area"
                  style={{
                    zIndex: zIndexValue,
                  }}
                >
                  <Route path="/" exact>
                    <div className="app__conversation">
                      <Default />
                    </div>
                  </Route>
                  <Route path="/about-me">
                    <ChatHeader
                      data={leftHeader}
                      showName={true}
                      showButton={true}
                      title="About me"
                      handleIntroClick={catchIntroClick}
                      getNewZIndex={handleMobileTouch}
                    />
                    <div className="app__conversation">
                      <About />
                    </div>
                  </Route>
                  <Route path="/experience">
                    <ChatHeader
                      data={leftHeader}
                      showName={true}
                      showButton={true}
                      title="Experience"
                      handleIntroClick={catchIntroClick}
                      getNewZIndex={handleMobileTouch}
                    />
                    <div className="app__conversation">
                      <Experience />
                    </div>
                  </Route>
                  <Route path="/my-assistant">
                    <ChatHeader
                      data={leftHeader}
                      showName={true}
                      showButton={true}
                      title="My Assistant"
                      handleIntroClick={catchIntroClick}
                      getNewZIndex={handleMobileTouch}
                    />
                    <div className="app__conversation">
                      <MyAssistant />
                    </div>
                  </Route>
                  <Route path="/education">
                    <ChatHeader
                      data={leftHeader}
                      showName={true}
                      showButton={true}
                      title="Education"
                      handleIntroClick={catchIntroClick}
                      getNewZIndex={handleMobileTouch}
                    />{" "}
                    <div className="app__conversation">
                      <Education />
                    </div>
                  </Route>

                  <Route path="/skills">
                    <ChatHeader
                      data={leftHeader}
                      showName={true}
                      showButton={true}
                      title="Skills"
                      handleIntroClick={catchIntroClick}
                      getNewZIndex={handleMobileTouch}
                    />{" "}
                    <div className="app__conversation">
                      <Skills />
                    </div>
                  </Route>

                  <Route path="/works">
                    <ChatHeader
                      data={leftHeader}
                      showName={true}
                      showButton={true}
                      title="Works"
                      handleIntroClick={catchIntroClick}
                      getNewZIndex={handleMobileTouch}
                      wip={true}
                    />{" "}
                    <div className="app__conversation">
                      <Works />
                    </div>
                  </Route>
                  <Route path="/contact">
                    <ChatHeader
                      data={leftHeader}
                      showName={true}
                      showButton={true}
                      title="Contact"
                      handleIntroClick={catchIntroClick}
                      getNewZIndex={handleMobileTouch}
                      wip={true}
                      showLogoutButton = {user?.uid ? true :  false}
                      logoutAction={handleLogout}
                    />
                    <div
                      className="app__conversation"
                      style={
                        window.location.pathname == "/contact"
                          ? { height: "80%" }
                          : {}
                      }
                    >
                      <Contact user={user} />
                    </div>
                    <div className="footer">
                      <Footer onClick={requestSignIn} user={user} />
                    </div>
                  </Route>
                </div>
              </div>
            ) : (
              <div className="app__intro">
                <Intro onClick={moveToHome} />
              </div>
            )}
          </div>
        </div>
      </Router>
    </div>
  );
  function handleLogout() {
    auth.signOut();
  }
  function moveToHome(e) {
    setStoredHomePreference(e);
    showHome(e);
  }
  function catchIntroClick(e) {
    showHome(e);
    if (hasStoredHomePreference()) {
      setStoredHomePreference(e);
      window.location.href = "/";
    }
  }
  function handleMobileTouch(e) {
    if (!e) {
      setZIndexValue("0");
    } else {
      setZIndexValue("10");
    }
  }
}
