import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
export default function About() {
  const data = [
    {
      qus: "Career objective",
      multiLine: false,
      ans: `Seeking a challenging career in reputed organization where i can
          upgrade my knowledge and skills as well as contribute to the growth of
          the organization by working with dedication, creative and smart work`
    },
    {
      qus: "Profile Summary",
      multiLine: false,
      ans: `  Experienced Software engineer with proven background successfully
          managing all facets of site development, from initial design and
          architechture to site deployment and client managemet`
    },
    {
      qus: "Interests",
      multiLine: true,
      ans: ["Technologies", "Travelling", " Cricket"]
    }
  ];
  return (
    <div>
      <ChatRoomArea data={data} />
    </div>
  );
}
