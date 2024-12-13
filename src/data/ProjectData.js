import MediaDashImage from '../assets/MediaDash.png';
import SmartShareLogoImage from '../assets/SmartShareLogo.png';
import SnowyVillageImage from '../assets/SnowyVillage.png';

/**
 * @interface Project
 * @property {string} name
 * @property {string} image
 * @property {string} description
 * @property {string} github
 * @property {string} link
 * @property {string[]} tech
 */

export const projects = [

  {
    name: "MediaDash",
    image: MediaDashImage,
    description: `Instead of scrolling through infinite feeds of social media apps, 
      MediaDash lets you see all of your recommendations and subscriptions in one app.
      This was created for the Brain Rot hackathon in 4 days.
      View the full post here: https://devpost.com/software/mediadash. The repo also has a readme.`,
    github: "https://github.com/Emily-Kang77/Brainrot-MediaDash",
    link: "https://brainrot-media-dash.vercel.app/",
    tech: ['Python', 'TypeScript', 'NextJS']
  },

  {
    name: "SmartShare",
    image: SmartShareLogoImage,
    description: `This is in development. It's a social media app for students
        on campus to exchange items and help each other out. I plan to finish up the MVP 
        and get user feedback soon, and I'm collaborating with a designer and PM.`,
    github: "https://github.com/SumanthBellam/Smart-Share.io",
    link: "",
    tech: ['JavaScript', 'React']
  },

  {
    name: "Website for Snowy Village Cafe",
    image: SnowyVillageImage,
    description: `This is a volunteer project and a demo for a local cafe. I made it with a team of 3 designers and 2 other developers 
      in a club called Web Impact. In the end it wasn't passed onto the client, but I learned a lot about front-end development! `,
    github: "https://webimpactuw.github.io/snowy-village",
    link: "https://webimpactuw.github.io/snowy-village",
    tech: ['TypeScript', 'React']
  }
]
