import React, { useState, useEffect, useRef } from "react";
import "./ChatHeader.css";
import { FaEllipsisV, FaArrowLeft } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import about from "./../../assets/about.png";
import skills from "./../../assets/skills.png";
import education from "./../../assets/education.png";
import experience from "./../../assets/experience.png";
import works from "./../../assets/works.png";
import contact from "./../../assets/contact.png";
import assistant from "./../../assets/assistant.svg";
import { Link } from "react-router-dom";
export default function ChatHeader({
  data,
  showName,
  showButton,
  title,
  handleIntroClick,
  getNewZIndex,
  avatar,
  mobileResTitle,
  wip,
  logoutAction,
  showLogoutButton,
}) {
  const [dropdown, openDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        openDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="chat__header">
      {isMobile && getNewZIndex ? (
        <button
          className="chat__header__back"
          aria-label="Go back"
          onClick={goBack}
        >
          <FaArrowLeft />
        </button>
      ) : (
        <Link to="/">
          {!showName ? (
            <img className="avatar" src={data?.avatar} alt="Sairam Pasupuleti" />
          ) : (
            <img className="avatar" src={getRouteIcon(title)} alt={title} />
          )}
        </Link>
      )}
      <div className="chat__header__content">
        {showName ? <div className="title">{title}</div> : ""}
        {mobileResTitle ? <div className="title2">{mobileResTitle}</div> : ""}
        {wip ? <p className="wip">Implementing...</p> : ""}
      </div>
      {showButton ? (
        <div className="chat__header__menu">
          <div className="dropdown" ref={dropdownRef}>
            <span>
              <FaEllipsisV
                className="button"
                aria-label="Open menu"
                onClick={toggleDropdown}
              />
            </span>
            <ul
              className="dropdown-content"
              style={{ display: dropdown ? "block" : "" }}
            >
              <li>
                {" "}
                <span onClick={gotoIntro}>Home</span>
              </li>
              {showLogoutButton ? (
                <li>
                  <span onClick={fireSignout}>Sign out</span>
                </li>
              ) : (
                ""
              )}
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
  function fireSignout() {
    logoutAction(true)
  }   
  function getRouteIcon(param) {
    switch (param) {
      case "About Me":
        return about;
      case "Skills":
        return skills;
      case "Education":
        return education;
      case "Experience":
        return experience;
      case "Works":
        return works;
      case "Contact":
        return contact;
      case "My Assistant":
        return assistant;
      default:
        return about;
    }
  }
}
