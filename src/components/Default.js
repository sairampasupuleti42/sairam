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
      <div className="impl__soon">
          <p> More, will be implemented in the way 🤘</p>
          <p> Get in touch on <a href="https://www.linkedin.com/in/sairampasupuleti">
               LinkedIn </a></p>
      </div>
         
    </div>
  );
}

export default Default;
