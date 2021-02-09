import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
import "./../conversation-style.css";
const data = [
  {
    qus: `Software Engineering Analyst
          <br/><strong>Accenture</strong>`,
    multiLine: true,
    ans: [
      `Reverse engineer potentially harmful chrome extensions<br/> to understand their operation and impact on Chrome ecosystem`,
      `Design soluions that enable identification of malware, spam, <br/>and other harmful content and perform data analysis`,
      `Deriving
insight from our vast data stores and <br/> collaborate with cross-functional groups to increase automation, <br/>update policies,
 fix product loopholes, and provide better experience to Chrome users`,
      `Improve tools through data analysis, technical expertise and presentations to key stackholders`,
      `Designing, coding and
deploying Google Chrome Extensions to large Enterprise<br/>
user base
`,
      `Hands on experience with Google Chrome Extension<br/>
development and programming languages such as<br/>
JavaScript & HTML
`,
      `Involving in Deep Code Reviewing with internal<br/>
applications by following reverse-engineering process`,
      `Conducting investigations to catch, enfore our product policies,<br/> abuse patterns, and identifying product vulnerabilities`,
    ],
    optional: {
      exp_stamp: "Latest",exp_text:"Dec 2019 to Present"},
  },
  {
    qus: `Programmer Analyst
          <br/><strong>Cognizant</strong>`,
    multiLine: true,
    ans: [
      `Programmed a business intelligence solution for a banking industry client, which helped the client use its capital and manage risk
more effectively.
`,
      `Responsibilities in this project is to develop the Loan
Availability Monitoring solution to <br/>support Wholesale
Lending capabilities
`,
      `LAM used by hundreds of concurrent users. <br/>Provides
complete end-to-end data capture and reporting, and<br/>
secure synchronization with other up/down streams. <br/>Written in Angular and Java. Responsible for
programming new modules and performance tuning of<br/>
existing ones
`,
      `It has diverse enterprise applications, servicing the
various Line of Business<br/> like Consumer Real Estate, Wholesale Business Technology,<br/> Investment Banking and
Capital Finance
`,
      `Developed functionality which involved interaction with
many proprietary<br/> and Vendor systems in the provisioning
of a service`,
      `Implemented initiative will re-engineer the wholesale<br/>
lending process model to apply standardization , simplify<br/>
the lending eco-system , optimize service delivery and<br/>
improve team member experience and engagement`,
      `Engineered dynamic components for the app with<br/>
behavior driven approach and Implemented lightweight<br/>
framework that enables faster delivery of software using<br/>
agile development`,
      `Coordinating with onsite development team for delivery<br/>
quality solutions`,
    ],
    optional: {
      exp_stamp: "1 Year ago",
      exp_text: "Oct 2018 – Dec 2019",
    },
  },
  {
    qus: `<i>Software Engineer</i>
          <br/><strong>Sentios Systems Private Limited</strong>`,
    multiLine: true,
    ans: [
      `Implementation of an e commerce web application <br/>using latest technologies like Angular 5<br/> for front-end,PHP (CodeIgniter) for back-end, CMS for Schools portals, News Portals`,
      `Tasked with building a fast, secure, SEO friendly,<br/> scalable and easy to maintain news platform, as well as design<br/> and implement software and template updates and manage and train authors`,
      `I played lead developer role in product implementation<br/> for client, to empower his services to customer`,
      `Worked with domain experts to ensure proper<br/> implementations and having good knowledge in UNIT Testing `,
      `Involved in design development and<br/> testing of multiple web applications.`,
      `Used Agile development methodology<br/> for maximum flexibility with changing client requirements `,
    ],
    optional: {
      exp_stamp: "2 Year ago",
      exp_text: "12/2016 – 09/2018",
    },
  },
  {
    qus: `<i>Software Developer</i>
            <br/><strong>Xplore Information Technology Pvt. Ltd</strong>`,
    multiLine: true,
    ans: [
      `Designing and developing custom in-house sites <br/>and CMS software, maintaining servers, designing and optimising MySQL<br/>
         databases and providing technical support  `,
      `Experienced in product development and User<br/> Interfaces of various websites for both commercials & individuals`,
      `Developed internal company web applications in PHP `,
      `Managed projects independently from start to finish`,
    ],
    optional: { exp_stamp: "4 years ago", exp_text: "06/2016 – 11/2016" },
  },
];
export default function Experience() {
  return (
    <div>
      <ChatRoomArea data={data} />
    </div>
  );
}
