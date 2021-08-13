import { nanoid } from 'nanoid';
import { createElement } from 'react';

// HEAD DATA
export const headData = {
  title: 'Brian Boylen', 
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi there, my name is',
  name: 'Brian Boylen',
  subtitle: "I'm a full stack web developer",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'bb.png',
  paragraphOne:
    'Hi there! My name is Brian, and I am a self-taught web developer. I graduated from the University of Notre Dame in 2019 with a bachelor’s in Chemical Engineering, and for the past couple years I have been working as an engineer in the Oil & Gas industry. While helping to design chemical plants across the globe has been a rewarding challenge, I quickly realized I am not passionate about the work or industry.',
  paragraphTwo:
    'It didn’t take long for me to realize that tech was where I wanted to be instead. Most recent innovations that make me excited about the future are in digital fields such as AI and crypto. I chose to learn web development specifically due to the ease with which one can build scalable, enjoyable products.',
  paragraphThree:
    "I’ve spent the last two years working every day and coding every night. I’ve completed introductory CS courses, a self paced full stack curriculum, and multiple passion projects. I wasn't sure if my excitement would last, but I’ve found that the more I learn, the more interesting projects I am able to build!",
  paragraphFour:
    'I would love to hear about what you are working on, and to chat about how I can help!',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'remixify-tablet.png',
    title: 'Remixify',
    info: "An app that remixes your existing Spotify playlists using Spotify's API. It keeps the same artists, but selects new, random songs by them!",
    highlights: [
      '-Spotify OAuth login',
      '-Web session stored via a browser cookie',
      '-Remixed playlists saved in MongoDB database',
      '-Remix algorithm minimizes the generation of duplicate songs',
    ],
    info2: 'Typescript, React, Express, MongoDB, Ant Design',
    url: 'https://still-peak-57686.herokuapp.com',
    repo: 'https://github.com/bboylen/Remixify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fakebook-tablet3.png',
    title: 'Fakebook',
    info: 'A Facebook clone built with Ruby on Rails. Users can create, like and comment on posts, as well as send and accept friend requests.',
    highlights: [
      '-Facebook OAuth login',
      '-Handles registration, authentication, session management and recovery',
      "-AWS S3 stores users' photos",
    ],
    info2: 'Ruby on Rails, PostgreSQL, HTML/CSS',
    url: 'https://lit-woodland-51918.herokuapp.com',
    repo: 'https://github.com/bboylen/Fakebook', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'battleship.png',
    title: 'Battleship',
    info: 'Implementation of the Battleship board game, built in React. Users can play against a (semi) intelligent AI.',
    highlights: [
      '-Responsive design - displays well on mobile and desktop',
      '-Full suite of unit tests for game logic',
      '-Grid highlighting indicates if ship placement is valid or not',
    ],
    info2: 'React, HTML, CSS',
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
