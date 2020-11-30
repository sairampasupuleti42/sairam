import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
import "./../conversation-style.css";
const data = [
  {
    qus: `<i>Software Engineering Analyst</i>
          <br/><strong>Accenture</strong>`,
    multiLine: true,
    ans: [
      `My role is responsible for designing, coding and
deploying Google Chrome Extensions to large Enterprise
user base
`,
      `Hands on experience with Google Chrome Extension
development and programming languages such as
JavaScript & HTML
`,
      `Involving in Deep Code Reviewing with internal
applications by following reverse-engineering process`,
    ],
  },
  {
    qus: `<i>Programmer analyst</i>
          <br/><strong>Cognizant</strong>`,
    multiLine: true,
    ans: [
      `I have been working in association with Cognizant and
Wells Fargo at their Hyderabad office. My experience in
the organization has been in Wholesale Finance Lending
Technology domain , as a Angular Developer
`,
      `Responsibilities in this project is to develop the Loan
Availability Monitoring solution to support Wholesale
Lending capabilities
`,
      `LAM used by hundreds of concurrent users. Provides
complete end-to-end data capture and reporting, and
secure synchronization with other up/down streams. Written in Angular and Java. Responsible for
programming new modules and performance tuning of
existing ones
`,
      `It has diverse enterprise applications, servicing the
various Line of Business like Consumer Real Estate, Wholesale Business Technology, Investment Banking and
Capital Finance
`,
      `Developed functionality which involved interaction with
many proprietary and Vendor systems in the provisioning
of a service`,
      `Implemented initiative will re-engineer the wholesale
lending process model to apply standardization , simplify
the lending eco-system , optimize service delivery and
improve team member experience and engagement`,
      `Engineered dynamic components for the app with
behavior driven approach and Implemented lightweight
framework that enables faster delivery of software using
agile development`,
      `Coordinating with onsite development team for delivery
quality solutions`,
    ],
  },
  {
    qus: `<i>Software Engineer</i>
          <br/><strong>Sentios Systems Private Limite
d</strong>`,
    multiLine: true,
    ans: [
      `Implementation of an e commerce web application using latest technologies like Angular 5 for front-end,PHP (CodeIgniter) for back-end, CMS for Schools portals, News Portals`,
      `Tasked with building a fast, secure, SEO friendly, scalable and easy to maintain news platform, as well as design and implement software and template updates and manage and train authors`,
      `I played lead developer role in product implementation for client, to empower his services to customer`,
      `Worked with domain experts to ensure proper implementations and having good knowledge in UNIT Testing `,
      `Involved in design development and testing of multiple web applications.`,
      `Used Agile development methodology for maximum flexibility with changing client requirements `,
    ],
  },
  {
    qus: `<i>Software Developer</i>
            <br/><strong>Xplore Information Technology Pvt. Ltd</strong>`,
    multiLine: true,
    ans: [
      `Designing and developing custom in-house sites and CMS software, maintaining servers, designing and optimising MySQL
         databases and providing technical support  `,
      `Experienced in product development and User Interfaces of various websites for both commercials & individuals`,
      `Developed internal company web applications in PHP `,
      `Managed projects independently from start to finish`,
    ],
  },
];
export default function Experience() {
  return (
    <div>
      <ChatRoomArea data={data} />
    </div>
  );
}
