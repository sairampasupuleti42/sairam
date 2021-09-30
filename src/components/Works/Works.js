import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
export default function Works() {
  const data = [
    {
      qus: `ReactJS | Tesla Website Clone`,
      multiLine: true,
      ans: [ `<strong><a href="https://tesla-clone-by-sairam-zdbiar.stackblitz.io/" target="_blank">Click here</a> to navigate </strong>`, 
             `Skills: HTML5, CSS Flex Design, React JS, React Styled Components, Redux(Incomplete)`,
             `GitHub Repo URL: https://github.com/sairampasupuleti42/tesla-clone-by-sairam-zdbiar`,
             `Comments: N/A`]
    }, {
       qus: `PHP |  Green Lines Logistics (Billing Management) |  Freelance Work | <span style="color: indianred">Login required</span>`,
       multiLine: true,
       ans: [
          `<strong><a href="https://greenlineslogistics.com/admin/admin/" target="_blank">Click here</a> to visit portal </strong>`
          `Skills: HTML5, CSS, jQuery, Bootstrap 3, AdminLTE 2.0, PHP5, MySQL, CodeIgniter(MVC Framework), cPanel & phpMyAdmin ( BigRock) `,
          `GitHub Repo URL: N/A`,
          `Comments:  Portal is live but not operating ( For more info Contact Me to enable LOGIN to check behavior of the application`
         
       ]
    }
  ];
  return (
    <div>
      <ChatRoomArea data={data}/>
    </div>
  );
}
