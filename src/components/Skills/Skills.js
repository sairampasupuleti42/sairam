import React from "react";
import ChatRoomArea from "./../ChatRoomArea/ChatRoomArea";
export default function Skills() {
  const data = [
    {
      qus: "JavaScript Frameworks/ Libraries / Supersets",
      multiLine: true,
      fontWeight: 500,
      ans: ["Angular, React,  Vue.js, JavaScript, AJAX, jQuery, TypeScript",
      "Bootstrap, Angular Material, PrimeNG UI components for Angular, AdminLTE, CodeIgniter"]
    },{
      qus: "Web Technologies",
      multiLine: false,
      fontWeight: 500,
      ans: "HTML5, CSS3, XML, JavaScript, AJAX, jQuery"
    },
    {
      qus: "Database",
      multiLine: false,
      fontWeight: 500,
      ans: "MySQL, NoSQL, Oracle 11g"
    }, {
      qus: "Programming Languages ",
      multiLine: false,
      fontWeight: 500,
      ans: "Java, C#, PHP"
    },{
      qus:"Graphical/visualization",
      multiLine: false,
      fontWeight: 500,
      ans: "Chart.js, D3.js, Google Charts, Highcharts"      
    }, {
      qus: "Cloud Platforms /Build tools /DevOps/ Others",
      multiLine: true,
      fontWeight: 500,
      ans: ["Google Cloud, Google APIs, facebook APIs", "Git, JIRA, Confluence, Jenkins, JFrog Artifactory, IBM UrbanCode Deploy, HP ALM Tool", "Content Management System, News web applications, e-commerce solutions", "CCAvenue Payment integration, Invoice/Billing applications, Banking, Financial services"]
    },{
      qus: "IDE/ Editors",
      multiLine: false,
      fontWeight: 500,
      ans: "PhpStrom, Visual Studio Code, IntelliJ IDEA Community Edition, Notepad++ "
    }
  ];
  return (
    <div>
      <ChatRoomArea data={data} />
    </div>
  );
}
