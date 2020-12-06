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
    }, {
      qus: "Cloud Platforms",
      multiLine: true,
      fontWeight: 500,
      ans: ["Google Platforms-Authentication,  Maps, Charts, Analytics, firebase Hosting",
      "facebook- Login, Instant Articles, Social sharing"]
    }, {
      qus: "Build tools/ DevOps",
      multiLine: true,
      fontWeight: 500,
      ans: [
      "Git, JIRA, Confluence, Jenkins, JFrog Artifactory, IBM UrbanCode Deploy, HP ALM Tool",]
    },{
      qus:"Graphical/visualization",
      multiLine: false,
      fontWeight: 500,
      ans: "Chart.js, D3.js, Google Charts, Highcharts"      
    }, {
      qus: "Content Management Systems",
      multiLine: true,
      fontWeight: 500,
      ans: [
       "Content Management System, News web applications, e-commerce solutions, Wordpress"]
    }, {
      qus: "Others",
      multiLine: true,
      fontWeight: 500,
      ans: [
       "Agile Scrum Methodology, Environment Categorization, CCAvenue Payment integration, Invoice/Billing applications, Banking, Financial services",
      "cPanel- Domains, Webmail, ftp"]
    },{
      qus: "IDE/ Editors",
      multiLine: false,
      fontWeight: 500,
      ans: "PhpStrom, Visual Studio Code, IntelliJ IDEA Community Edition, FileZilla, Notepad++ "
    }
  ];
  return (
    <div>
      <ChatRoomArea data={data} />
    </div>
  );
}
