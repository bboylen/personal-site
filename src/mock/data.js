import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brian Boylen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi there, my name is',
  name: 'Brian Boylen',
  subtitle: "I'm a full stack web developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'bb.png',
  paragraphOne: 'Hello! I am a ',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'remixify-tablet.png',
    title: 'Remixify',
    info: "An app that remixes your existing Spotify playlists using Spotify's API. It keeps the same artists, but selects new, random songs by them!",
    info2: 'Built with Typescript, React, Express, MongoDB, Ant Design',
    url: 'https://still-peak-57686.herokuapp.com',
    repo: 'https://github.com/bboylen/Remixify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fakebook-tablet3.png',
    title: 'Fakebook',
    info: '',
    info2: '',
    url: 'https://lit-woodland-51918.herokuapp.com',
    repo: 'https://github.com/bboylen/Fakebook', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'battleship.png',
    title: 'Battleship',
    info: '',
    info2: '',
    url: 'https://bboylen.github.io/battleship/',
    repo: 'https://github.com/bboylen/battleship', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in hearing more about what I have to offer? Please reach out!',
  btn: "Let's talk",
  email: 'bbbrianboylen@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brian-boylen-3bbb8a146/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bboylen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
