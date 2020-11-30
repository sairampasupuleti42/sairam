import React, { useState } from "react";
import "./ChatHeader.css";
import { FaEllipsisV } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import about from "./../../assets/about.png"
import skills from "./../../assets/skills.png"
import education from "./../../assets/education.png"
import experience from "./../../assets/experience.png"
export default function ChatHeader({
  data,
  showName,
  showButton,
  title,
  handleIntroClick,
  getNewZIndex
}) {
  const [dropdown, openDropdown] = useState(false);
  return (
    <div className="chat__header">
     { !showName ? 
      <img className="avatar" src={data?.avatar} /> : <img className="avatar" src={getRouteIcon(title)} />}
      <div className="chat__header__content">
        {showName ? <div className="title">{title}</div> : ""}
      </div>
      {showButton ? (
        <div className="chat__header__menu">
          <div className="dropdown">
            <span>
              <FaEllipsisV className="button" onClick={toggleDropdown} />
            </span>
            <ul
              className="dropdown-content"
              style={{ display: dropdown ? "block" : "" }}
            >
              {isMobile && getNewZIndex ? (
                <li>
                  {" "}
                  <span onClick={goBack}>Go Back</span>
                </li>
              ) : (
                ""
              )}
              <li>
                {" "}
                <span onClick={gotoIntro}>Go to Intro page</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
  function toggleDropdown(e) {
    e.preventDefault();
    openDropdown(!dropdown);
  }
  function gotoIntro() {
    handleIntroClick(false);
  }
  function goBack() {
    getNewZIndex(false);
  }
  function getRouteIcon(param) {
    switch(param) {
      case 'About Me':
        return about;
        case 'Skills':
          return skills;
        case 'Education':
        return education;
        case 'Experience':
          return experience;
      default:
        return about;
    }
  }
  
}
