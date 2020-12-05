import React from "react";
import { Link } from "react-router-dom";
import about from "./../../assets/about.png";
import skills from "./../../assets/skills.png";
import education from "./../../assets/education.png";
import experience from "./../../assets/experience.png";import contact from "./../../assets/contact.png";
import works from "./../../assets/works.png";

import "./ChatRooms.css";
export default function ChatRooms({ getClickForMobileAction }) {
  const roomData = [
    {
      name: "About Me",
      message: "",
      timestamp: "",
      unread: 0,
      path: "about-me",
      icon: about,
    },
    {
      name: "Experience",
      message: "",
      timestamp: "",
      unread: 4,
      path: "experience",
      icon: experience,
    },
    {
      name: "Skills",
      message: "",
      timestamp: "",
      unread: 0,
      path: "skills",
      icon: skills,
    },
    {
      name: "Works",
      message: "",
      timestamp: "",
      unread: 0,
      path: "works",
      icon: works
    },
    {
      name: "Education",
      message: "",
      timestamp: "",
      unread: 0,
      path: "education",
      icon: education,
    },
    {
      name: "Contact",
      message: "",
      timestamp: "",
      unread: 0,
      path: "contact",
      icon: contact
    },
  ];
  return (
    <div className="chat__rooms">
      {roomData.map((data, i) => (
        <div key={i} className="user">
          <Link to={`/${data.path}`} onClick={handleClick}>
            <div className="info">
              <div className="avatar">
                <img src={data.icon} />
              </div>
              <div className="content">
                <div className="unknown__class">
                  <div className="name">{data.name}</div>
                  <div className="message">{data.message}</div>
                </div>
                <div className="notification">
                  <div className="timestamp">{data.timestamp}</div>
                  {data.unread > 0 && (
                    <div className="count">{data.unread}</div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
  function handleClick() {
    console.log("Menu Item Cliked");
    getClickForMobileAction(true);
  }
}
