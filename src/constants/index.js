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
  education,
  
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
    title: 'Bachelor of Computer Engineering',
    company_name: 'Tekirdag namik kemal University',
    icon: education,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - Jun 2025',
    points: [
      'Fresh Graduate Computer Engineer',
      
    ],
  },
  {
    title: 'FullStack development Scholarship',
    company_name: 'Udacity with Egyptian Ministry of technology',
    icon: education,
    iconBg: '#E6DEDD',
    date: 'Aug 2021 - Sep 2022',
    points: [
      'I got a NanoDegree in FullStack Development From Udacity.',
      'It was 3 levels of courses challenger professional and advanced where I learned HTML CSS JavaScript TypeScript & NodeJS with ExpressJS.',
      'On top of it I learned ReactJS and got a Cross-Skilling Certificate from Udacity as will.',
      'I got a Total of 4 Courses with a lot of Experiences and projects it was a great experience. ',
    ],
  },
  {
    title: 'Software Developer Intern',
    company_name: 'Pinsoft - IT Solutions',
    icon: pinsoft,
    iconBg: '#E6DEDD',
    date: 'Jul 2023 - Oct 2023',
    points: [
      'My internship experience was exceptionally enriching, marked by the successful completion of three distinct projects.',
      'Developed and maintained responsive web and mobile applications using React.js and React Native, optimizing for maximum speed and scalability',
      'Collaborated with backend developers to integrate RESTful APIs, improving application performance by 40% and reducing API response times by 25%',
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
      'Annotated 10,000+ Arabic audio files, improving the accuracy of NLP models by 15%.',
      'Collaborated with a team of annotators and linguists, maintaining 95% consistency in annotations and achieving a 98% accuracy rate.',
      'Recognized as the "Best Annotator" for exceptional accuracy and consistency, receiving a formal certificate of achievement.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Bravo furniture',
    icon: bravo,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining the website using Web technologies as a Freelancer',
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
      'Gain experience through smaller freelance gigs or personal projects to demonstrate your problem-solving abilities.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Develop excellent communication and client management skills to build trust and maintain long-term relationships.',
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
    live_link: 'https://pinsoft-fly-app-wine.vercel.app/'
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
    live_link: 'https://electree-upwork.vercel.app/'
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
    live_link: 'https://ecommerceses.netlify.app/'
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
    source_code_link: 'https://bravofurniture.com',
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
    live_link: 'https://kittenseses.netlify.app/'
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
    live_link: 'https://plantsst.netlify.app/',
  },
  {
    name: 'Meriem hattab',
    description: 'a website for a psychologist',
    tags: [
      {
        name: 'React JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Hosting',
        color: 'pink-text-gradient',
      },
    ],
    image: innowareai,
    source_code_link:
      'https://github.com/OmarAbdelhamed/mariemhattab',
    live_link: 'https://www.hattab-meriem.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
