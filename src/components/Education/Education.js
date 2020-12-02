import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
import "./../conversation-style.css";
const data = [
  {
    qus: ` Bachelor of Technology
          `,
    multiLine: false,
    ans: `<strong>Computer Science Engineering</strong><br/>
    JNTUK, Kakinada`,
  },
  {
    qus: ` Intermediate /10+2
          `,
    multiLine: false,
    ans: `<strong>Mathematics, Physics and Chemistry</strong><br/>
    D.K.N.P Jr College, Board of Intermediate Education, Andhra Pradesh (BIEAP)`,
  },
  {
    qus: ` SSC / Metric
          `,
    multiLine: false,
    ans: `<strong>Maths, Social Science & Natural Science</strong><br/>
    Board of Secondary Education, Andhra Pradesh`,
  },
];
export default function Education() {
  return (
    <div>
      <ChatRoomArea data={data} />
    </div>
  );
}
