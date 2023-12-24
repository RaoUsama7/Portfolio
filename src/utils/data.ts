import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import postgreSql from '/public/asset/icons/postgreSql.png';
import bootstrap from '/public/asset/icons/bootstrap.png';
import docker from '/public/asset/icons/docker.png';
import express from '/public/asset/icons/express.png';
import mongoDB from '/public/asset/icons/mongoDB.png';
import neoVim from '/public/asset/icons/neoVim.png';
import next from '/public/asset/icons/next.png';
import node from '/public/asset/icons/node.png';
import react from '/public/asset/icons/react.png';
import redux from '/public/asset/icons/redux.png';
import sass from '/public/asset/icons/sass.png';
import tailwind from '/public/asset/icons/tailwind.png';
import typescript from '/public/asset/icons/typescript.png';
import vite from '/public/asset/icons/vite.png';

import fawflix from '/public/asset/projects/fawflix.webp';
import gbdc from '/public/asset/projects/gbdc.webp';
import LovelyMusic from '/public/asset/projects/lovelyMusic.webp';
import lovelytube from '/public/asset/projects/lovelytube.webp';
import lranslate from '/public/asset/projects/lranslate.webp';
import sumz from '/public/asset/projects/sumz.webp';
import fiverr from '/public/asset/fiverr.png';
import freelancer from '/public/asset/freelancer.jpeg';
import upwork from '/public/asset/upwork.png';

export {
  LovelyMusic,
  bootstrap,
  docker,
  express,
  fawflix,
  gbdc,
  lovelytube,
  lranslate,
  mongoDB,
  next,
  postgreSql,
  node,
  react,
  redux,
  sass,
  sumz,
  tailwind,
  typescript,
  vite,
};

export const mySkills = [
  {
    name: 'Next.js',
    icon: next,
  },
  {
    name: 'React.js',
    icon: react,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node.js',
    icon: node,
  },
  {
    name: 'Express.js',
    icon: express,
  },
  {
    name: 'MongoDB',
    icon: mongoDB,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Vite',
    icon: vite,
  },
  {
    name: 'PostgreSQL',
    icon: postgreSql,
  },

  {
    name: 'Docker',
    icon: docker,
  },
];

export const myExperiences = [
  {
    year: '2023 - Present',
    work: [
      {
        name: 'Software Engineer',
        company: 'TechClan',
        desc: 'optomization ,design artitechture, fisxing bugs',
      },
    ],
  },
  {
    year: '2022 - 2023',
    work: [
      {
        name: 'Associaite Software Engineer',
        company: 'Devsinc',
        desc: 'make REST APIs,construct database, backend+front-end ',
      },
    ],
  },
  {
    year: '2020 - 2022',
    work: [
      {
        name: 'Junior Web Developer',
        company: 'ITx Brain',
        desc: 'Make small fixes, alterations, testing',
      },
    ],
  },
];

export const sliderNavigation = [
  {
    name: 'Dashboard',

    icon: HomeIcon,
    current: true,
  },
  {
    name: 'Review',

    icon: UsersIcon,
    current: false,
  },
  {
    name: 'Projects',

    icon: FolderIcon,

    current: false,
  },
  {
    name: 'Skills',
    icon: CalendarIcon,

    current: false,
  },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];

export const projects = [
  {
    title: 'FawFlix',
    imgUrl: fawflix,
    projectLink: 'https://fawflix.vercel.app/',
    codeLink: 'https://fawflix.vercel.app/',
    description: 'FawFlix is a netflix clone website with  movie streaming ',
    tags: ['MERN', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'GBDC',
    imgUrl: gbdc,
    projectLink: 'https://gbdc.vercel.app/',
    codeLink: 'https://github.com/AariyanApu/gbdc',
    description: 'GBDC is a blood donation web App with admin panel.',
    tags: ['Next.js', 'Node JS', 'React.js', 'Tailwind CSS', 'Landing Page'],
  },
  {
    title: 'Lovely Tube',
    imgUrl: lovelytube,
    projectLink: 'https://lovelytube.vercel.app/',
    codeLink: 'https://lovelytube.vercel.app/',
    description: 'Lovely Tube is a youtube clone website',
    tags: ['API', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Lranslate',
    imgUrl: lranslate,
    projectLink: 'https://lranslate.vercel.app/',
    codeLink: 'https://lranslate.vercel.app/',
    description: 'Lranslate is Google Translate clone made with Api',
    tags: ['React.js', 'API', 'Node JS', 'MongoDB', 'Redux'],
  },
  {
    title: 'Lovely Music',
    imgUrl: LovelyMusic,
    projectLink: 'https://lovely-music.vercel.app/',
    codeLink: 'https://github.com/AariyanApu/',
    description: 'Lovely Music is a music streaming website',
    tags: ['React.js', 'Tailwind CSS', 'Redux', 'API'],
  },
  {
    name: 'Sumz',
    title: 'Article Summarizer',
    imgUrl: sumz,
    projectLink: 'https://sum-tau.vercel.app/',
    codeLink: 'https://sum-tau.vercel.app/',
    description: 'Sumz is Article summarizer made with Api',
    tags: ['React.js', 'API', 'Redux'],
  },
];
export const navigation = [
  { name: ' ALL ABOUT ME', href: '/about-me' },

  { name: 'RESUME', href: '/resume.pdf' },
];

export { fiverr, freelancer, upwork };

export const reviews = [
  {
    title: 'It really works.',
    body: ' It was really amazing working with  Usama. We look forward to working with her again on future projects.',
    author: 'MAGDA DU',
    imgSrc: fiverr,
  },
  {
    title: 'You need this app.',
    body: 'I enjoyed working on this project and hope to have the opportunity to work with him again.',
    author: 'Jarred Samuel B.',
    imgSrc: freelancer,
  },
  {
    title: 'On Landing Page.',
    body: 'Thanks for the experience..',
    author: ' Franklin U. ',

    imgSrc: freelancer,
  },
  {
    title: 'Help to fix bug.',
    body: '"Very grateful for the help. Professional content all around, very happy to work , thank you!"',
    author: 'Chris D. ',
    imgSrc: upwork,
  },
  {
    title: 'Figma Web Designer for Shopify/e-commerce',
    body: 'Usama was all round excellent to work with. From the work he did for my company,',
    author: 'Stanislav D. ',
    imgSrc: freelancer,
  },
  {
    title: 'Landing Page.',
    body: 'I enjoyed working on this project and hope to have the opportunity to work with him again.',
    author: 'Jarred Samuel B.',
    imgSrc: freelancer,
  },
  {
    title: 'On Landing Page.',
    body: 'Thanks for the experience..',
    author: ' Franklin U. ',

    imgSrc: freelancer,
  },
  {
    title: 'Help to fix bug.',
    body: '"Very grateful for the help. Professional content all around, very happy to work , thank you!"',
    author: 'Chris D. ',
    imgSrc: fiverr,
  },
  {
    title: 'Figma Web Designer for Shopify/e-commerce',
    body: 'Usama was all round excellent to work with. From the work he did for my company,',
    author: 'Stanislav D. ',
    imgSrc: fiverr,
  },
];

export const blogPosts = [
  {
    id: '1',
    title: 'How to use React Context API',
    imgUrl: '/asset/react.jpg',
    createdAt: '2023-11-12',
    slug: 'how-to-use-react-context-api',
    desc: 'React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on.',
  },
  {
    id: '2',
    title: 'How to use React Context API',
    imgUrl: '/asset/react.jpg',
    createdAt: '2023-11-12',
    slug: 'how-to-use-react-context-api',
    desc: 'React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on.',
  },
  {
    id: '3',
    title: 'How to use React Context API',
    imgUrl: '/asset/react.jpg',
    createdAt: '2023-11-12',
    slug: 'how-to-use-react-context-api',
    desc: 'React Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on.',
  },
];
