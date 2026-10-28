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
  lovable,
  zapier,
  gemini,
  claudecode,
  notion,
  evernote,
  todoist,
  linear,
  claude,
  slack,
  chatgpt,
  asana,
  pinsoft,
  huawei,
  upwork,
  innowareai,
  dogcat,
  ecommerce2,
  electree,
  bravoweb,
  education,
  meriem,
  cv,
  retinal,
  imagecaptioning,
  me,
  statProjects,
  statData,
  statExperience,
  statSeo,
  dashboard,
  beyond
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'ai',
    title: 'AI',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'cv',
    title: 'CV',
  },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/OmarAbdelhamed' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/omar-abdelhamed-b85a45221/' },
  { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~0161e28e4f2f904b8c' },
];

export const heroStats = [
  { value: 60, suffix: '+', label: 'Successful Projects', icon: statProjects },
  { value: 100, suffix: '%', label: 'Data driven designs', icon: statData },
  { value: 3, suffix: '+', label: 'Years of experience', icon: statExperience },
  { value: 100, suffix: '%', label: 'SEO Optimised Websites', icon: statSeo },
];

export const companyLogos = [
  { name: 'Bee2 AI', logo: '/bee2_ai_logo.jpg' },
  { name: 'Pinsoft', logo: pinsoft },
  { name: 'Huawei', logo: huawei },
  { name: 'Upwork', logo: upwork },
];

const services = [
  {
    title: 'Software Development',
    icon: web,
    description:
      'Fast, responsive web applications built with modern tooling and clean, maintainable code.',
    points: [
      'React & Next.js Apps',
      'Responsive UI',
      'Performance Tuning',
      'Cross-Browser Support',
    ],
  },
  {
    title: 'React & React Native Development',
    icon: mobile,
    description:
      'Mobile and web products designed in Figma and shipped end to end, from first screen to store release.',
    points: [
      'Figma to Code',
      'React Native & Expo',
      'Games & Rewards UX',
      'Progress Tracking',
    ],
  },
  {
    title: 'Backend Development',
    icon: backend,
    description:
      'APIs and services that keep your product fast and reliable as it grows.',
    points: [
      'Node.js & Express',
      'REST API Integration',
      'Databases & Auth',
      'Docker Deployments',
    ],
  },
  {
    title: 'ML & DL Engineering',
    icon: creator,
    description:
      'AI features that work in production, from speech analysis to computer vision models.',
    points: [
      'Speech-to-Text & Pronunciation',
      'LLM Answer Evaluation',
      'Computer Vision',
      'Model Training & Evaluation',
    ],
  },
];

const faqs = {
  services: [
    {
      question: 'What kind of projects do you take on?',
      answer:
        'Web apps, mobile apps and AI features. That ranges from company websites and eCommerce stores to full products like TOFY Go, where I owned the mobile app and its AI pipeline.',
    },
    {
      question: 'Can you design as well as build?',
      answer:
        'Yes. I design interfaces in Figma and then implement them myself, so the shipped product matches the design.',
    },
    {
      question: 'Do you build mobile apps?',
      answer:
        'Yes, with React Native and Expo. I handle everything from the UI to API integration and release.',
    },
    {
      question: 'Can you add AI to an existing product?',
      answer:
        'Yes. I have integrated speech-to-text, pronunciation scoring and LLM-based evaluation into production apps, and trained deep learning models for vision tasks.',
    },
  ],
  about: [
    {
      question: 'Where are you based?',
      answer:
        'I work remotely with clients and teams across different time zones.',
    },
    {
      question: 'What is your background?',
      answer:
        'I hold a Bachelor of Computer Engineering and a Udacity Full-Stack NanoDegree. I currently work as an AI & Machine Learning Engineer at Bee2 AI.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Send me a message through the contact form with a short description of your project and I will get back to you.',
    },
  ],
};

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
    invert: true,
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

const integrations = [
  {
    name: 'Lovable',
    icon: lovable,
  },
  {
    name: 'Zapier',
    icon: zapier,
  },
  {
    name: 'Gemini',
    icon: gemini,
  },
  {
    name: 'Claude Code',
    icon: claudecode,
  },
  {
    name: 'Notion',
    icon: notion,
  },
  {
    name: 'Evernote',
    icon: evernote,
  },
  {
    name: 'Todoist',
    icon: todoist,
  },
  {
    name: 'Linear',
    icon: linear,
  },
  {
    name: 'Claude',
    icon: claude,
  },
  {
    name: 'Slack',
    icon: slack,
  },
  {
    name: 'ChatGPT',
    icon: chatgpt,
  },
  {
    name: 'Asana',
    icon: asana,
  },
];

const experiences = [
  {
    title: 'FullStack development Scholarship',
    company_name: 'Udacity with Egyptian Ministry of technology',
    icon: education,
    iconBg: '#E6DEDD',
    date: 'jul 2021 - Sep 2022',
    points: [
      'I got a NanoDegree in FullStack Development From Udacity.',
      'It was 3 levels of courses challenger professional and advanced where I learned HTML CSS JavaScript TypeScript & NodeJS with ExpressJS.',
      'On top of it I learned ReactJS and got a Cross-Skilling Certificate from Udacity as will.',
      'I got a Total of 4 Courses with a lot of Experiences and projects it was a great experience. ',
    ],
  },
  {
    title: 'Bachelor of Computer Engineering',
    company_name: 'Tekirdag namik kemal University',
    icon: education,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - Jul 2025',
    points: [
      'Fresh Graduate Computer Engineer',
      '1. Capstone: Retinal Vessel Segmentation Using U-Net, Attention U-Net, and Spatial Attention U-Net: Developed and compared deeplearning models for retinal vessel segmentation, achieving a 97% accuracy rate with Attention U-Net.',
      '2. Capstone: Image captioning project CNN-LSTM with Attention VS Transformer VIT-GPT2 comparison: Developed and TrainedCNN-LSTM with Attention model from scratch and compared it with the new in field Transformer models',
    ],
  },
  {
    title: 'Ful-Stack Freelancer',
    company_name: 'UpWork',
    icon: upwork,
    iconBg: '#E6DEDD',
    date: 'May 2023 - 2025',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Gain experience through smaller freelance gigs or personal projects to demonstrate your problem-solving abilities.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Develop excellent communication and client management skills to build trust and maintain long-term relationships.',
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
    title: 'Full-Stack Developer',
    company_name: 'NanoSoft',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'Feb 2024 - Aug 2024',
    points: [
      'Developed and delivered custom web and mobile applications for various clients.',
      'Utilized React and Redux for state management in complex applications.',
      'Focused on high-quality code and user-centric design.',
      'Managed multiple projects simultaneously, including eCommerce platforms and mobile apps.',
      'Maintained effective communication and ensured timely delivery.',
    ],
  },
  {
    title: 'AI & Machine Learning Engineer',
    company_name: 'Bee2 AI',
    icon: '/bee2_ai_logo.jpg',
    iconBg: '#FFFFFF',
    date: '2026 - Present',
    points: [
      'Owned the AI and end-to-end mobile development of TOFY Go, a TOEFL-aligned English learning app for learners aged 8 and above.',
      'Integrated AI to analyze students\' voices, evaluate pronunciation and phonetics, convert speech to text, and use LLMs to assess whether their answers are correct.',
      'Designed the complete mobile UI in Figma and implemented it with React Native and Expo, including learning activities, games, rewards, and progress tracking.',
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
    name: 'TOFY Go! Mobile App',
    description:
      'Designed the complete TOFY Go mobile experience in Figma and implemented it end to end with React Native and Expo while working at Bee2 AI. Built child-friendly learning flows, educational games, rewards, and progress tracking for TOEFL-aligned English practice.',
    tags: [
      {
        name: 'Figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'React Native',
        color: 'green-text-gradient',
      },
      {
        name: 'Expo',
        color: 'pink-text-gradient',
      },
    ],
    image: me,
    source_code_link: '',
    live_link: 'https://www.tofygo.com/',
  },
  {
    name: 'Admin Dashboard',
    description:
      'Web-based dashboard for data analyzing.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Material Ui',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard,
    source_code_link: 'https://github.com/OmarAbdelhamed/admin-dashboard-react',
    live_link: 'https://admin-dashboard-react-lemon.vercel.app/',
  },
  {
    name: 'Beyond figma web design and code',
    description:
      'Web-based dashboard for data analyzing.',
    tags: [
      {
        name: 'Design',
        color: 'blue-text-gradient',
      },
      {
        name: 'Figma',
        color: 'green-text-gradient',
      },
      {
        name: 'ReactJs',
        color: 'pink-text-gradient',
      },
    ],
    image: beyond,
    source_code_link: 'https://github.com/OmarAbdelhamed/beynod_test-main',
    live_link: 'https://www.figma.com/design/zFpEvP4XrEa6vMVWcszabH/Beyond-Website---Arabic--Copy-?node-id=0-1&t=KVdRoQ05OsvvzcU1-1',
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
    live_link: 'https://electree-upwork.vercel.app/',
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
    live_link: 'https://ecommerceses.netlify.app/',
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
    live_link: 'https://bravofurniture.com',
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
    live_link: 'https://kittenseses.netlify.app/',
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
    image: meriem,
    source_code_link: 'https://github.com/OmarAbdelhamed/mariemhattab',
    live_link: 'https://www.hattab-meriem.com/',
  },
];

const AiProjects = [
  {
    name: 'TOFY Go!',
    description:
      'Built and integrated TOFY Go\'s AI pipeline while working at Bee2 AI. It analyzes students\' voices, evaluates pronunciation and phonetics, converts speech to text, and uses LLMs to assess their answers for correctness.',
    tags: [
      {
        name: 'Speech AI',
        color: 'blue-text-gradient',
      },
      {
        name: 'Speech-to-Text',
        color: 'green-text-gradient',
      },
      {
        name: 'LLMs',
        color: 'pink-text-gradient',
      },
    ],
    image: me,
    source_code_link: '',
    project_link: 'https://www.tofygo.com/',
    demo_link: '',
  },
  {
    name: 'Retinal Vessel Segmentation',
    description:
      'Developed and compared advanced U-Net models with attention mechanisms (Att-UNet & SA-UNet) for accurate blood vessel segmentation in retinal images, achieving up to 97% accuracy on benchmark datasets like DRIVE, STARE, and CHASE-DB1.',
    tags: [
      {
        name: 'Deep Learning',
        color: 'blue-text-gradient',
      },
      {
        name: 'Medical Imaging',
        color: 'green-text-gradient',
      },
      {
        name: 'U-Net',
        color: 'pink-text-gradient',
      },
    ],
    image: retinal,
    source_code_link:
      'https://github.com/OmarAbdelhamed/Compartment-between-attention-based-Unet-Models',
    demo_link: '', // Optional: add a hosted version or paper link if available
  },
  {
    name: 'Image Captioning with Attention and Transformers',
    description:
      'Built and evaluated two models for automatic image description: a custom CNN-LSTM with attention and a ViT-GPT2 Transformer model, using the MS COCO dataset. Gained insights into trade-offs between speed and accuracy in multimodal AI.',
    tags: [
      {
        name: 'Deep Learning',
        color: 'blue-text-gradient',
      },
      {
        name: 'Computer Vision',
        color: 'green-text-gradient',
      },
      {
        name: 'Transformers',
        color: 'pink-text-gradient',
      },
    ],
    image: imagecaptioning, // Replace with your actual image path
    source_code_link:
      'https://github.com/omar792001/image-captioning-transformers', // Replace with your GitHub link
    demo_link: '', // Optional: add a demo video or notebook viewer if available
  },
];

export {
  faqs,
  services,
  technologies,
  integrations,
  experiences,
  testimonials,
  projects,
  cv,
  AiProjects,
};
