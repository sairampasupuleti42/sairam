import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
import resume from "./../../assets/resume.JPG";
export default function About() {
  const data = [
    {
      qus: "Career objective",
      multiLine: false,
      ans: `Seeking a challenging career in reputed organization where i can
          upgrade my knowledge and skills as well as contribute to the growth of
          the organization by working with dedication, creative and smart work`,
    },
    {
      qus: "Profile Summary",
      multiLine: false,
      ans: `  Experienced Software engineer with proven background successfully
          managing all facets of site development, from initial design and
          architechture to site deployment and client managemet`,
    },
    {
      qus: "Resume",
      multiLine: false,
      attachment: true,
      attachment_preview: resume,
      ans :`<img style="opacity:0.2" src=${resume} alt="Sairam">
<a href="https://drive.google.com/file/d/1Y2J3DHUsc4j79OJx4dJjOUtc6ErS54rk/view?usp=drivesdk" target="_blank" style="position: absolute; padding:20px 30px;
background: #fff;border-radius: 99px; cursor: pointer;
font-weight:600;color: #585858"> Download </a>`
    },
    {
      qus: "Strengths",
      multiLine: true,
      ans: [
        "Smart working",
        " Flexibility",
        " Quick learner",
        "Stress tolerance",
        " Decision making",
        " Accountability",
        "Self Motivated",
        " Test driven approach",
      ],
    },
    {
      qus: "Interests",
      multiLine: true,
      ans: ["Technologies", "Travelling", " Cricket"],
    },
  ];
  return (
    <div>
      <ChatRoomArea data={data} />
    </div>
  );
}
