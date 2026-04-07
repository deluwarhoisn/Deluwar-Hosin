// Portfolio Data - Easy to edit and customize
import school2Img from '../../image/school 2.jpg'
import versityImg from '../../image/versity.jpg'
import profileImg from '../../image/488050958_1169285871542985_8711692882018533997_n.jpg'
import img from '../../image/online.png'
import lon from '../../image/app.png'
import lon2 from '../../image/lon2s.png'
import img2 from '../../image/download.jpg'
import img3 from '../../image/Screenshot 2026-04-07 214912.png'


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
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 88 },
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
      "A modern and responsive UI for a microloan approval platform. Features clean layout, smooth interactions, and a mobile-first design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: lon2, // Placeholder - replace with actual screenshot
    liveLink: "https://microloan-reques.web.app/",
    githubLink: "https://github.com/deluwarhoisn/Microloan-Request-",
    // Detailed project information
    mainTech: ["React.js", "Tailwind CSS", "Framer Motion", "Firebase"],
    detailedDescription: "A comprehensive microloan management system UI that provides a seamless experience for loan applicants and administrators. The platform features a modern design with smooth animations, responsive layouts, and intuitive user flows. Built with React.js for component-based architecture, styled with Tailwind CSS for rapid UI development, and enhanced with Framer Motion for engaging animations.",
    challenges: [
      "Creating a user-friendly loan application flow",
      "Implementing responsive design for mobile-first approach",
      "Integrating smooth animations without affecting performance",
      "Designing an intuitive dashboard for loan management"
    ],
    improvements: [
      "Add real-time loan status tracking",
      "Implement advanced filtering and search functionality",
      "Add multi-language support",
      "Integrate with payment gateways for loan disbursement"
    ],
    features: [
      "Responsive loan application form",
      "Interactive dashboard with loan statistics",
      "Smooth page transitions and micro-interactions",
      "Mobile-optimized user interface"
    ]
  },

  {
    id: 2,
    title: "Online Learning Platform",
    description:
      "A user-friendly frontend for managing courses, instructors, and student interactions with a strong focus on usability.",
    tags: ["React", "Tailwind", "Context API"],
    image: img, // Placeholder - replace with actual screenshot
    liveLink: "https://cheerful-brigadeiros-0acc0f.netlify.app/",
    githubLink: "https://github.com/deluwarhoisn/My-Online-Learning-Platform",
    // Detailed project information
    mainTech: ["React.js", "Context API", "Tailwind CSS", "React Router"],
    detailedDescription: "A comprehensive online learning platform that connects students with instructors through an intuitive interface. The platform features course management, student enrollment, progress tracking, and interactive learning modules. Built with React.js using Context API for state management and React Router for seamless navigation.",
    challenges: [
      "Managing complex state across multiple components",
      "Creating an intuitive course browsing experience",
      "Implementing responsive design for various devices",
      "Optimizing performance for large course catalogs"
    ],
    improvements: [
      "Add video streaming capabilities",
      "Implement real-time chat between students and instructors",
      "Add quiz and assessment features",
      "Integrate with payment systems for course purchases"
    ],
    features: [
      "Course catalog with search and filtering",
      "Student dashboard with progress tracking",
      "Instructor profile and course management",
      "Responsive design for all devices"
    ]
  },

  {
    id: 3,
    title: "HERO.IO",
    description:
      "We craft innovative apps designed to make everyday life simpler, smarter, and more exciting—turning ideas into impactful digital experiences.",
    tags: ["React", "API", "Tailwind"],
    image: lon, // Placeholder - replace with actual screenshot
    liveLink: "https://dainty-sherbet-407741.netlify.app/",
    githubLink: "https://github.com/deluwarhoisn/my-Hero-Apps",
    // Detailed project information
    mainTech: ["React.js", "REST API", "Tailwind CSS", "Axios"],
    detailedDescription: "HERO.IO is a collection of innovative web applications designed to simplify everyday tasks. The platform showcases various mini-applications and tools that demonstrate modern web development techniques and user-centered design principles. Each app within the platform serves a specific purpose while maintaining a cohesive design language.",
    challenges: [
      "Creating a unified design system across multiple apps",
      "Integrating various APIs efficiently",
      "Ensuring consistent performance across different app types",
      "Maintaining code reusability between different applications"
    ],
    improvements: [
      "Add user authentication and personalization",
      "Implement offline functionality with service workers",
      "Add analytics and usage tracking",
      "Create a plugin system for third-party integrations"
    ],
    features: [
      "Multiple integrated applications",
      "Clean and modern user interface",
      "API integration for dynamic content",
      "Responsive design across all apps"
    ]
  },

  {
    id: 4,
    title: "Inventory Management System",
    description:
      "A complete inventory management web app for tracking products, stock levels, suppliers, and sales records in real time.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image:img3,
    liveLink: "https://stockifyone.vercel.app/",
    githubLink: "#",
    mainTech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    detailedDescription: "This Inventory Management System helps businesses manage products, categories, suppliers, and stock movement from a single dashboard. It includes inventory updates, low-stock monitoring, and sales history tracking. The interface is designed for quick daily operations, while the backend supports reliable CRUD operations and scalable data management.",
    challenges: [
      "Keeping stock quantity consistent across create, update, and sales operations",
      "Designing efficient filters and search for large product lists",
      "Handling role-based access between admin and staff users",
      "Maintaining fast response times with growing inventory data"
    ],
    improvements: [
      "Add barcode and QR code scanning support",
      "Generate downloadable inventory and sales reports",
      "Integrate email and SMS alerts for low-stock products",
      "Add multi-warehouse inventory support"
    ],
    features: [
      "Product, category, and supplier management",
      "Real-time stock tracking and low-stock alerts",
      "Sales and stock movement history",
      "Role-based dashboard for inventory operations"
    ]
  },
],

  social: {
    github: 'https://github.com/deluwarhoisn',
    linkedin: 'https://www.linkedin.com/in/deluwar-hosin/',
    email: 'babuhossen301@gmail.com',
    facebook: 'https://web.facebook.com/deluwarhossenbabu/',
    phone: '01754505815', // Add your actual phone number
    whatsapp: '01932210502', // Add your actual WhatsApp number
  },
  contact: {
    email: 'babuhossen301@gmail.com',
    phone: '01754505815', // Add your actual phone number
    whatsapp: '01932210502', // Add your actual WhatsApp number
    address: 'kolmakanda,Netrakona, Bangladesh', // Add your location
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
      image: img2,
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
  experience: [
    {
      id: 1,
      company: "Freelance Web Developer",
      position: "Frontend Developer",
      duration: "2024 - Present",
      location: "Remote",
      description: "Working on various client projects focusing on React.js applications, responsive web design, and modern UI/UX implementations.",
      responsibilities: [
        "Developed responsive web applications using React.js and Tailwind CSS",
        "Collaborated with clients to understand requirements and deliver solutions",
        "Implemented modern UI/UX designs with smooth animations",
        "Optimized applications for performance and accessibility"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      id: 2,
      company: "Programming Hero",
      position: "Web Development Student",
      duration: "2024 - 2025",
      location: "Online",
      description: "Completed comprehensive web development course covering frontend and backend technologies.",
      responsibilities: [
        "Learned modern web development technologies and best practices",
        "Built multiple projects using React.js, Node.js, and MongoDB",
        "Participated in coding challenges and collaborative projects",
        "Gained experience in full-stack development"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"]
    }
  ],
  stats: [
    { number: 10, suffix: '+', label: 'Projects Completed', icon: '🚀' },
    { number: 5, suffix: '+', label: 'Technologies Mastered', icon: '💻' },
    { number: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { number: 6, suffix: '+', label: 'Months of Experience', icon: '🎯' },
  ],
}

