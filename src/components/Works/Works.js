import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
export default function Works() {
  const data = [
    {
      qus: `ReactJS | Tesla Website Clone`,
      multiLine: true,
      ans: [ `<strong><a href="https://tesla-clone-by-sairam-zdbiar.stackblitz.io/" target="_blank">Click here</a> to navigate </strong>`, 
             ` Skills: HTML5, CSS Flex Design, React JS, React Styled Components, Redux(Incomplete)`,
             `GitHub Repo URL: https://github.com/sairampasupuleti42/tesla-clone-by-sairam-zdbiar`]
    }
  ];
  return (
    <div>
      <ChatRoomArea data={data}/>
    </div>
  );
}
