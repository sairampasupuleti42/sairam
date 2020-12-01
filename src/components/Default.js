import React from "react";
import default_profile from './../assets/default_profile.jpg';
function Default(props) {
  return (
    <div className="default__grid">
      <div className="default__image">
        <img src={default_profile} alt="Sairam" />
      </div>
      <div className="default__title">
        <h1>Sairam Pasupuleti</h1>
      </div>
    </div>
  );
}

export default Default;
