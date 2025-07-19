// import MediaDashImage from '../assets/MediaDash.png';
// import SmartShareLogoImage from '../assets/SmartShareLogo.png';
// import SnowyVillageImage from '../assets/SnowyVillage.png';

/**
 * @interface Project
 * @property {string} name
 * @property {string} image
 * @property {string} description
 * @property {string} github
 * @property {string} link
 * @property {string[]} tech
 * @property {string} devpost
 */

export const projects = [

  {
    name: "Mobile App",
    image: "", 
    description: "", 
    github: "", 
    tech: [], 
    height: "350px"
  },

  {
    name: "MCP Nutrition App",
    image: "",
    description: "Coming up: a server that uses Model-Context Protocol to integrate with LLMs and provide personalized nutrition advice. Used React to build a frontend for food logging.",
    github: "",
    tech: ['Python', 'FastMCP', 'AI'],
    height: "350px",
  },

  {
    name: "RealChat",
    description: `Real-time chat app made with Redis, Socket.IO, Express.js, PostgreSQL, React, TypeScript. Deployed to AWS EC2 with Docker.`,
    github: "https://github.com/emilykangdev/real-chat",
    tech: [],
    height: "350px"
  },
  {
    name: "MediaDash",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/MediaDash.png",
    description: `MediaDash lets you see all of your cross-platform recommendations and subscriptions in one app.
      This was made during a hackathon! See the full write-up in Github or Devpost.`,
    bold: "NextJS + TypeScript, Python + Flask, and Langchain.",
    github: "https://github.com/Emily-Kang77/Brainrot-MediaDash",
    link: "https://brainrot-media-dash.vercel.app/",
    tech: ['NextJS', 'TypeScript', 'Python', 'Flask'],
    devpost: "https://devpost.com/software/mediadash",
    height: "600px",
  },

  {
    name: "Website for Snowy Village Cafe",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/SnowyVillage.png",
    description: `This is a volunteer project and a demo for a local cafe. I made it with a team of 3 designers and 2 other developers 
      in a club called Web Impact.`,
    bold: "React, TypeScript, Vite.",
    github: "https://webimpactuw.github.io/snowy-village",
    link: "https://webimpactuw.github.io/snowy-village",
    tech: ['TypeScript', 'React'],
    height: "550px",
  },
]
