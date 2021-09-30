import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
export default function Works() {
  const data = [
    {
      qus: `ReactJS | Tesla Website Clone`,
      multiLine: true,
      ans: [ `<strong><a href="https://tesla-clone-by-sairam-zdbiar.stackblitz.io/" target="_blank">Click here</a> to navigate </strong>`, 
             `Skills: <a href="https://www.w3schools.com/html/" target="_blank"> HTML5 </a>, <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank"> CSS Flex Design <a/>,
               <a href="https://reactjs.org/" target="_blank"> React JS </a>, <a href="https://styled-components.com/" target="_blank"> React Styled Components </a>, Redux(Incomplete)`,
             `GitHub Repo URL: <a href="https://github.com/sairampasupuleti42/tesla-clone-by-sairam-zdbiar" target="_blank">Open with Stackblitz</a>`,
             `Comments: N/A`]
    }, {
       qus: `PHP |  Green Lines Logistics (Billing Management)`,
       multiLine: true,
       ans: [
          `<strong><a href="https://greenlineslogistics.com/admin/admin/" target="_blank">Click here</a> to visit portal </strong>`,
          `Skills: <a href="https://www.w3schools.com/html/" target="_blank"> HTML5 </a>,<a href="https://www.w3schools.com/css/default.asp" target="_blank">
           CSS </a>,<a href="https://jquery.com/" target="_blank"> jQuery </a>,<a href="https://getbootstrap.com/docs/3.3/" target="_blank"> Bootstrap 3 </a>,
           <a href="https://adminlte.io/themes/AdminLTE/index2.html" target="_blank"> AdminLTE 2.0 </a>,
           <a href="https://www.php.net/" target="_blank"> PHP5 </a>,<a href="https://www.mysql.com/" target="_blank"> MySQL </a>,<a href="https://codeigniter.com/" target="_blank"> CodeIgniter(MVC Framework) </a>,
           <a href="https://cpanel.net/" target="_blank"> cPanel </a> & <a href="https://www.phpmyadmin.net/" target="_blank"> phpMyAdmin</a>  `,
          `GitHub Repo URL: N/A`,
          `Comments:  Portal is live but not operating ( For more info Contact Me to enable LOGIN to check behavior of the application 
            <span style="color: #0969da">* Freelance Work</span>  & <span style="color: indianred"> *Login required</span>`
         
       ]
    },
     {
       qus: `PHP |  New Portal REST Framework |  CMS`,
       multiLine: true,
       ans: [
          `<strong>Ready to Configure & Deployment </strong>`,
          `Skills: <a href="https://www.php.net/" target="_blank"> PHP5 </a>,<a href="https://www.mysql.com/" target="_blank"> MySQL </a>, <a href="https://codeigniter.com/" target="_blank"> CodeIgniter(MVC Framework) </a>`,
          `GitHub Repo URL: <a href="https://github.com/sairampasupuleti42/news-cms-api" target="_blank"> Click here</a>`,
          `Comments:   <span style="color: #0969da"> Personal CMS Framework for learning & freelance works</span>`
         
       ]
    }
  ];
  return (
    <div>
      <ChatRoomArea data={data}/>
    </div>
  );
}
