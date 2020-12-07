import React, { useState, useEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
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
export default function App() {
  const [home, showHome] = useState(false);
  const [zIndexValue, setZIndexValue] = useState(0);
  const [leftHeader, setLeftHeader] = useState(null);
  useEffect(() => {
    localStorage["c2FpcmFtLXBhc3VwdWxldGk="] === "true"
      ? showHome(true)
      : false;
    setLeftHeader({
      avatar:
        "https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-1/cp0/p74x74/125879863_520913138867927_6648996237882099823_o.jpg?_nc_cat=103&ccb=2&_nc_sid=dbb9e7&_nc_ohc=JzuYLHhoPlUAX8R7PR1&_nc_ht=scontent.fhyd6-1.fna&tp=27&oh=96b2c97a207a20aaea603425a9dae54b&oe=5FE5DA9D",
      icon: "",
      sideMenu: {
        
      },
    });
  }, [localStorage]);
  return (
    <div>
      <Router>
        <div className="app">
          <header className="app__header">
            <div className="unknown__class_in_header">
              <div className="intro__quote__div">
                {!home  ? (
                  <h1 className="intro__quote">Sairam Pasupuleti</h1>
                ) : (
                  isMobile ? <h1 className="intro__quote">Sairam Pasupuleti</h1>:""
                )}
              </div>
            </div>
          </header>
          <div className="app__body"  style={home ? { height: "92vh", width: "90vw", top: "0" } : {}}>
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
                    />{" "}
                    <div className="app__conversation">
                      <Contact />
                      <input placeholder="Enter you input"/>
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
  function moveToHome(e) {
    localStorage["c2FpcmFtLXBhc3VwdWxldGk="] = e;
    showHome(e);
  }
  function catchIntroClick(e) {
    showHome(e);
    if (localStorage["c2FpcmFtLXBhc3VwdWxldGk="]) {
      localStorage["c2FpcmFtLXBhc3VwdWxldGk="] = e;
       window.location.href="/";
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
