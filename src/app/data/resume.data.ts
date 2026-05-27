export interface NavLink {
  id: string;
  label: string;
  icon: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  role: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  stack: string[];
  description: string;
  points: string[];
}

export interface EducationInfo {
  degree: string;
  school: string;
  affiliation: string;
  period: string;
  location: string;
}

export const profile = {
  name: 'Abhijith C S',
  title: 'Full Stack .NET Developer',
  email: 'abhijithcsg8@gmail.com',
  phone: '+91 9778052807',
  location: 'Kerala, India',
  linkedin: 'https://linkedin.com/in/abhijith-cs-',
  github: 'https://github.com/abhijithcsgo',
  // Relative URL so it works on GitHub Pages subpath (/Portfolio/) and locally.
  resumeUrl: 'Abhijith_C_S_Resume.pdf',
  resumeFileName: 'Abhijith_C_S_Resume.pdf',
  summary:
    'Passionate .NET Full Stack Developer building web applications with ASP.NET, C#, Angular, JavaScript, SQL Server, and REST APIs—focused on responsive UIs, solid backends, and real-world solutions.',
};

export const aboutContent = {
  paragraphs: [
    "Hi, I'm Abhijith C S — a passionate .NET Full Stack Developer with experience in building web applications using ASP.NET, ASP.NET Core, C#, Angular, JavaScript, SQL Server, HTML, CSS, REST APIs, and .NET Core Web API development.",
    'Currently working at Wipro Linecraft AI, I focus on developing responsive user interfaces, backend functionalities, database integration, API integration, transactional replication, and improving application performance. I enjoy creating practical and user-friendly applications that solve real-world problems.',
    'I have worked on projects including e-commerce platforms, trip planner systems, transaction tracking applications, and service booking platforms. I am continuously learning new technologies and improving my skills in full-stack development, scalable backend systems, and database management.',
  ],
};

export const expertise: string[] = [
  'C# Programming',
  'ASP.NET & Web API Development',
  '.NET Core Development',
  'Angular Development',
  'DevExtreme Front-End Development',
  'Microsoft SQL Server & Query Optimization',
  'RESTful API Design & Integration',
  'Entity Framework & ORM',
  'Azure DevOps',
  'Software Architecture & System Design',
  'Agile & Scrum',
  'Problem Solving & Performance Optimization',
];

export const experience: ExperienceItem[] = [
  {
    company: 'Wipro Linecraft AI',
    location: 'Pune, India',
    period: 'Dec 2024 – Present',
    role: 'Software Developer',
    highlights: [
      'Developed enterprise project management applications using C#, ASP.NET Web API, and SQL Server.',
      'Built high-performance REST APIs for Salesforce CRM JSON payloads and database operations.',
      'Consolidated 11 global instance databases into a centralized Enterprise database with schema mapping, relationship alignment, and ID standardization.',
      'Optimized queries and indexing—reduced API response time from 5 minutes to 3 seconds.',
      'Implemented SQL Server Transactional Replication for real-time synchronization across instances.',
      'Designed automated replication failure monitoring with email alerts to minimize downtime.',
      'Developed a database backup & restore app with a one-click dashboard using remote shared paths.',
      'Migrated legacy DevExpress pages to DevExtreme for better responsiveness and maintainability.',
      'Upgraded UI framework from Bootstrap 3 to 5.2.2.',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Database Backup & Restore Management System',
    stack: ['ASP.NET Core', 'C#', 'SQL Server', 'Bootstrap', 'REST API'],
    description:
      'Centralized database administration platform with one-click backup and restore, interactive dashboards, and automated validation.',
    points: [
      'One-click backup and restore via server credentials and remote shared paths.',
      'Interactive dashboard for operations and restore status monitoring.',
      'Automated validation, exception handling, and logging for reliability.',
    ],
  },
  {
    title: 'MealTime Mate',
    stack: ['Angular', 'TypeScript', 'Bootstrap', 'REST API'],
    description:
      'A responsive food-ordering platform for a store offering Breakfast, Lunch, Dinner, and Snacks—with category-wise menus, cut-off times, and scheduled orders.',
    points: [
      'Browse menus by category and place orders within specific cut-off windows.',
      'Login, cart, order history, and live order status updates for customers.',
      'Admin panel to manage menu items and order statuses for smooth operations.',
    ],
  },
  {
    title: 'Planora',
    stack: ['Angular 21', 'TypeScript', 'Standalone Components', 'localStorage'],
    description:
      'A modern, frontend-only productivity web app combining To-Do management, Calendar views, Reminders, and Notes in a responsive SaaS-style UI.',
    points: [
      'Unified workspace for tasks, calendar, reminders, and notes—no backend required.',
      'All data persisted in localStorage with instant load and offline-friendly usage.',
      'Clean, responsive interface designed for everyday personal productivity.',
    ],
  },
  {
    title: 'Trip Planner Web Application',
    stack: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    description:
      'Travel planning web app delivering customized tour packages based on destination, time, and landscape preferences.',
    points: [
      'Interactive maps, itinerary suggestions, and location-based travel info.',
      'Restaurant and accommodation recommendations.',
      'Community-driven reviews and tourist spot contributions.',
    ],
  },
  {
    title: 'WeatherVue',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'OpenWeather API'],
    description:
      'A real-time weather application with a simple search interface to find live weather updates for any location worldwide.',
    points: [
      'Quick location search with dynamic OpenWeather API integration.',
      'Live temperature, conditions, and essential weather details in a clear layout.',
      'Responsive Bootstrap UI for fast access on any device.',
    ],
  },
  {
    title: 'Drum Kit',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'An interactive web application that lets users play drum sounds using keyboard keys or on-screen buttons with smooth animations.',
    points: [
      'Play drums via keyboard shortcuts or clickable on-screen pads.',
      'Smooth visual feedback and responsive controls for an engaging experience.',
      'Lightweight, fun musical demo suitable for all ages.',
    ],
  },
];

export const education: EducationInfo = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Kodiyeri Balakrishnan Memorial Govt. College Thalassery',
  affiliation: 'Affiliated to Kannur University',
  period: '2021 – 2024',
  location: 'Kannur, Kerala',
};

export const certifications: string[] = [
  'Advanced Web APIs with ASP.NET Core 8 — LinkedIn Learning',
  'Microsoft SQL Server 2022 Essential Training — LinkedIn Learning',
  'SQL (Advanced) — HackerRank',
  'Software Engineer Certification — HackerRank',
];

export const tools: Record<string, string[]> = {
  Languages: ['C#', 'Java', 'C', 'Python', 'JavaScript', 'HTML', 'CSS'],
  Frameworks: ['.NET Core', 'ASP.NET', 'Angular', 'Entity Framework', 'DevExtreme', 'Django'],
  Frontend: ['Angular', 'DevExtreme', 'Bootstrap', 'jQuery', 'AJAX', 'TypeScript'],
  Backend: ['ASP.NET Web API', 'REST API Development', 'Django'],
  Databases: ['Microsoft SQL Server', 'SQL Optimization'],
  'Version Control': ['Git', 'GitHub'],
  Other: [
    'Azure DevOps',
    'Agile',
    'Scrum',
    'System Design',
    'Software Architecture',
    'Data Security',
    'RBAC',
  ],
};

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About', icon: 'pi pi-user' },
  { id: 'skills', label: 'Skills', icon: 'pi pi-code' },
  { id: 'experience', label: 'Experience', icon: 'pi pi-briefcase' },
  { id: 'projects', label: 'Projects', icon: 'pi pi-folder' },
  { id: 'education', label: 'Education', icon: 'pi pi-book' },
  { id: 'contact', label: 'Contact', icon: 'pi pi-envelope' },
];

export const heroStats = [
  { value: '1.5+', label: 'Years Experience', icon: 'pi pi-clock' },
  { value: '5m → 3s', label: 'API Optimization', icon: 'pi pi-bolt' },
  { value: '11', label: 'DBs Consolidated', icon: 'pi pi-database' },
];
