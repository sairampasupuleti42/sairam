import React from "react";
import "./Intro.css";

import { isMobile } from "react-device-detect";
export default function Intro(props) {
  return (
    <div className="intro__content">
      <div className="intro__top">
        <div className="intro__profile">
          <div className="title">
            I'm a creative <b>Java Script</b>Fullstack developer
          </div>
          <div className="extra">
            <ol>
              <li>Interested in the entire frontend spectrum</li>
              <li>I write code and improve my design and skills every day.</li>
            </ol>
          </div>
        </div>

        <div className="profile_qr">
          <img
            src="https://chart.googleapis.com/chart?chs=380x380&cht=qr&chl=Sairam+Pasupuleti%2C+Full+Stack+Developer+++++++++++++++++++++++++++++++++++++++++++++++++++++Contact%3A+9989938828%2C+sairampasupuleti.42%40gmail.com&choe=UTF-8"
            alt="Sairam"
          />
        </div>
      </div>{" "}
      <div className="intro__bottom">
        <div className="intro__getintouch">
          <div className="text">If you’d like to get in touch ?</div>
        </div>
        <div className="intro__continue" onClick={handleClick}>
          <div className="btn">More info ...</div>
        </div>
      </div>
    </div>
  );
  function handleClick(e) {
    e.preventDefault();
    props.onClick(true);
  }
}
