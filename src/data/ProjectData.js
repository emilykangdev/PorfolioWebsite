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
    name: "MediaDash",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/MediaDash.png",
    description: `Instead of scrolling through infinite feeds of social media apps, 
      MediaDash lets you see all of your recommendations and subscriptions in one app. This was made during a hackathon.
      See the full write-up in Github or Devpost. Made with `,
    bold: "NextJS + TypeScript, Python + Flask, and Langchain.",
    github: "https://github.com/Emily-Kang77/Brainrot-MediaDash",
    link: "https://brainrot-media-dash.vercel.app/",
    tech: ['Python', 'TypeScript', 'NextJS'],
    devpost: "https://devpost.com/software/mediadash"
  },

  {
    name: "SmartShare",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/SmartShareLogo.png",
    description: `This is in development. It's a social media app for students
        on campus to exchange items and help each other out. I plan to finish up the MVP 
        and get user feedback soon, and I'm collaborating with a designer and PM. Made with `,
    bold: "TypeScript, React, Flask, SQL",
    github: "https://github.com/SumanthBellam/Smart-Share.io",
    link: "",
    tech: ['JavaScript', 'React']
  },

  {
    name: "Website for Snowy Village Cafe",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/SnowyVillage.png",
    description: `This is a volunteer project and a demo for a local cafe. I made it with a team of 3 designers and 2 other developers 
      in a club called Web Impact. In the end it wasn't passed onto the client, but I learned a lot about front-end development! Made with `,
    bold: "React, TypeScript, Vite.",
    github: "https://webimpactuw.github.io/snowy-village",
    link: "https://webimpactuw.github.io/snowy-village",
    tech: ['TypeScript', 'React']
  },
]
