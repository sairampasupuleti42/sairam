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
          <p>More sections are on the way 🤘</p>
          <p style={{marginTop: 30 +'px'}}> Get in touch on <a target="_blank" href="https://www.linkedin.com/in/sairampasupuleti">
               <strong>LinkedIn</strong> </a></p>
      </div>
         
    </div>
  );
}

export default Default;
