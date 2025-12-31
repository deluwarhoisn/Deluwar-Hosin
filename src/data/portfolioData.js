// Portfolio Data - Easy to edit and customize
import school2Img from '../../image/school 2.jpg'
import versityImg from '../../image/versity.jpg'
import profileImg from '../../image/488050958_1169285871542985_8711692882018533997_n.jpg'
import img from'../../image/download.jpg'

export const portfolioData = {
  personal: {
    name: 'Deluwar Hosin',
    title: 'Frontend Developer',
    headline: "Hi, I'm Deluwar Hosin",
    subheadline: 'Crafting Beautiful & Scalable Web Experiences',
    about: `I'm a passionate Frontend Developer who loves creating beautiful and functional web experiences. 
    My journey in web development started with curiosity and has grown into a genuine passion. 
    I enjoy transforming design concepts into responsive, interactive websites that users love to interact with. 
    When I'm not coding, I'm exploring new technologies, working on personal projects, or contributing to open source. 
    I believe in writing clean, maintainable code and always strive to follow best practices.`,
  },
  skills: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 88 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'React.js', level: 82 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Next.js', level: 75 },
    { name: 'Git', level: 80 },
  ],
  projects: [
    {
      id: 1,
      title: "MicroLoan System UI",
      description:
        "A modern and responsive UI for a microloan approval platform. Features clean layout, smooth interactions, and mobile-first design.",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/image/download.jpg", // file is in `public/download.jpg`
      liveLink: "https://microloan-reques.web.app/",
      githubLink: "https://github.com/your-username/project-1"
    },


    {
      id: 2,
      title: "Learning Platform UI",
      description:
        "Frontend interface for managing courses, instructors, and student interactions. Designed for clarity and high usability.",
      tags: ["React", "Tailwind", "Context API"],
      liveLink: "https://zesty-duckanoo-b59fa2.netlify.app/",
      githubLink: "https://github.com/your-username/project-2"
    },
    {
      id: 3,
      title: "Weather Tracker UI",
      description:
        "Weather search interface displaying live temperature, conditions, and city-based queries. Clean typography & animations.",
      tags: ["React", "API", "Tailwind"],
      liveLink: "https://dainty-sherbet-407741.netlify.app/",
      githubLink: "https://github.com/your-username/project-3"
    },
  ],
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'deluwar.hosin@example.com',
    facebook: 'https://www.facebook.com/deluwarhossenbabu/',
    instagram: 'https://www.instagram.com/deluwar695',
    whatsapp: 'https://www.whatsapp.com/',
  },
  education: [
    {
      image: school2Img,
      alt: 'Govindpur Mohammadia Dakhil Madrasah',
      title: 'Govindpur Mohammadia Dakhil Madrasah',
      degree: 'SSC (Secondary School Certificate)',
      details: [
        { label: 'Duration', value: '2013 - 2018' },
        { label: 'GPA', value: '3.05' },
      ],
      link: 'https://web.facebook.com/profile.php?id=100041341965993&sk=about',
      linkText: 'Visit School',
    },
    {
      image: versityImg,
      alt: 'Mohua Technical And Business College',
      title: 'Mohua Technical And Business College',
      degree: 'HSC (Higher Secondary Certificate)',
      details: [
        { label: 'Duration', value: '2018 - 2020' },
        { label: 'GPA', value: '4.17' },
      ],
      link: '#',
      linkText: 'Visit College',
    },
    {
      image: profileImg,
      alt: 'Kalmakanda Government College',
      title: 'Kalmakanda Government College',
      degree: "Bachelor's Degree (3rd Year)",
      details: [
        { label: 'Started', value: '2020/2021' },
        { label: 'Status', value: 'Ongoing' },
      ],
      link: 'https://web.facebook.com/groups/266844113421840/',
      linkText: 'Visit College',
    },
    {
      image: img,
      alt: 'Programming Hero Batch 12',
      title: 'Programming Hero Batch 12',
      degree: 'Batch 12 - Web Development Course',
      details: [
        { label: 'Course', value: 'Full Stack Web Development' },
        { label: 'Batch', value: 'Batch 12' },
         { label: 'Started', value: '2025' },
        { label: 'Status', value: 'Completed' },
      ],
      link: 'https://web.programming-hero.com/dashboard',
      linkText: 'View Certificate',
    },

  ],
  stats: [
    { number: 10, suffix: '+', label: 'Projects Completed', icon: '🚀' },
    { number: 5, suffix: '+', label: 'Technologies Mastered', icon: '💻' },
    { number: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { number: 6, suffix: '+', label: 'Months of Experience', icon: '🎯' },
  ],
}

