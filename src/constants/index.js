import { animations, color } from "framer-motion";
import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesla,
  businessSite,
  Portfolio,
  tripguide,
  threejs,
  starbucks,
  design,
  responsive,
  quote,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Design",
    icon: design,
  },
  {
    title: "Web Animation",
    icon: mobile,
  },
  {
    title: "Responsive Design",
    icon: responsive,
  },
];

const technologies = [
  {
    name: "cpp",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Secondary School",
    company_name: "V.L. Memorial School,Alwar",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2014 - March 2015",
    points: ["From CBSE Board", "Secured 9.2 CGPA"],
  },
  {
    title: "Higher Secondary School,Alwar",
    company_name: "Children's Academy Sr. Sec. School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2016 - March 2017",
    points: [
      "From RBSE Board",
      "Subject Physics,Chemistry And Maths",
      "Secured 71%",
    ],
  },
  {
    title: "Graduation",
    company_name: "Modern Institute of Technology And Research Center",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2018 - July 2022",
    points: [
      "Bikaner Technical University",
      "Branch - Computer Science Engineering",
      "Secured 8 CGPA",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "This is portfolio project .There are some amazing things in this like Dark and Ligth mode as well there are 5 types of different colour themes, which makes it amazing.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/",
    live_link: "https://sahil-github-io.vercel.app",
  },
  {
    name: "Business Site",
    description:
      "This application is about Business in this there is home page And services provided and also contact form with Map.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: businessSite,
    source_code_link: "https://github.com/",
    live_link: "https://business-github-io.vercel.app",
  },
  {
    name: "Quote Generator",
    description:
      "This is simple application which is creted by using React . It gives us randaom quotes . In this we used a API .",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quote,
    source_code_link: "https://github.com/",
    live_link: "https://quote-gen-github-io.vercel.app",
  },
];

export { services, technologies, experiences, projects };
