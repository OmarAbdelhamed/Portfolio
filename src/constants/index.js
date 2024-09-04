import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  threejs,
  pinsoft,
  huawei,
  upwork,
  bravo,
  innowareai,
  simplecart,
  dogcat,
  flybilet,
  ecommerce2,
  electree,
  electreeev2,
  bravoweb,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Developer',
    icon: web,
  },
  {
    title: 'React & React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Graphic Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Developer Intern',
    company_name: 'Pinsoft - IT Solutions',
    icon: pinsoft,
    iconBg: '#E6DEDD',
    date: 'Jul 2023 - Oct 2023',
    points: [
      'My internship experience was exceptionally enriching, marked by the successful completion of three distinct projects.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'The overall experience not only allowed me to deepen my technical skills but also exposed me to a diverse range of professionals, each contributing their unique insights and expertise. ',
    ],
  },
  {
    title: 'Data Annotator',
    company_name: 'Huawei',
    icon: huawei,
    iconBg: '#E6DEDD',
    date: 'Aug 2023 - Oct 2023',
    points: [
      'Successfully completed multiple data annotation projects, enhancing the precision and effectiveness of machine learning models.',
      'Collaborated closely with data scientists, engineers, and project managers to ensure that annotations were aligned with specific algorithmic requirements.',
      'Gained in-depth experience with various annotation tools and platforms, optimizing the annotation process for speed and accuracy.',
      'Worked on refining data labeling strategies, which led to improved model training and validation.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Bravo furniture',
    icon: bravo,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining the website using Web technologies',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Ful-Stack Developer',
    company_name: 'UpWork',
    icon: upwork,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Great Work! I definitely recommend Omar for anyone who wants to build a great website.',
    name: 'Kevin',
    designation: 'CEO',
    company: 'ElectreeNYC',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

const projects = [
  {
    name: 'FlyBilet',
    description:
      'Web-based platform that allows users to search, book, and manage plane tickets from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: flybilet,
    source_code_link: 'https://github.com/OmarAbdelhamed/pinsoft-fly-app',
  },
  {
    name: 'Electree',
    description:
      'Web application that shows the services and the history of electric provider company',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'green-text-gradient',
      },
    ],
    image: electree,
    source_code_link: 'https://github.com/OmarAbdelhamed/electree-upwork',
  },
  {
    name: 'Anon Online Store',
    description:
      'A comprehensive online shopping platform with a focus on user-friendly design and exceptional service.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce2,
    source_code_link: 'https://github.com/OmarAbdelhamed/Anon',
  },
  {
    name: 'Bravo Furniture',
    description:
      'A full Web Application for furniture store with products from different categories.',
    tags: [
      {
        name: 'Wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'PHP',
        color: 'pink-text-gradient',
      },
    ],
    image: bravoweb,
    source_code_link: 'https://bravofurniture.com.tr',
  },
  {
    name: 'pet store',
    description:
      'Pet store web application with a focus on user-friendly design and exceptional service.',
    tags: [
      {
        name: 'React JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: dogcat,
    source_code_link: 'https://github.com/OmarAbdelhamed/petStore',
  },
  {
    name: 'PLANTEX',
    description: 'a website for an online Plants store .',
    tags: [
      {
        name: 'Html',
        color: 'blue-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: innowareai,
    source_code_link:
      'https://github.com/OmarAbdelhamed/Plants-Store?tab=readme-ov-file',
  },
  {
    name: 'Electree V2',
    description:
      'Web application that shows the services and the history of electric provider company.',
    tags: [
      {
        name: 'Html',
        color: 'blue-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: electreeev2,
    source_code_link: 'https://github.com/OmarAbdelhamed/electree-v2',
  },
];

export { services, technologies, experiences, testimonials, projects };
