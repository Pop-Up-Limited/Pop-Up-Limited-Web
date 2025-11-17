export type Case = {
  id: string;
  name: string;
  description: string;
  url?: string;
  image: string;
  category: string;
  year: string;
  tags: string[];
  isLive: boolean; // true = 已上线，false = 设计稿
  details: {
    client?: string;
    services: string[];
    technologies?: string[];
    highlights: string[];
  };
};

export const cases: Case[] = [
  {
    id: 'mapier',
    name: 'Mapier.ai',
    description: 'AI-powered mapping and location intelligence platform',
    url: 'https://mapier.ai/',
    image: '/images/projects/vision-fitness.png',
    category: 'Web Development',
    year: '2024',
    tags: ['AI', 'SaaS', 'Mapping'],
    isLive: true,
    details: {
      services: ['Web Design', 'Frontend Development', 'API Integration'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Responsive design for all devices',
        'Real-time data visualization',
        'Advanced search and filtering',
        'Clean and modern UI/UX'
      ]
    }
  },
  {
    id: 'popup-limited',
    name: 'Popup.limited',
    description: 'Creative agency portfolio and service showcase',
    url: 'https://popup.limited/',
    image: '/images/projects/islemark.png',
    category: 'Web Design',
    year: '2024',
    tags: ['Portfolio', 'Creative', 'Agency'],
    isLive: true,
    details: {
      services: ['Brand Design', 'Web Development', 'Content Strategy'],
      technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
      highlights: [
        'Modern neobrutalist design',
        'Fast static site generation',
        'SEO optimized',
        'Dark mode support'
      ]
    }
  },
  {
    id: 'ljystudio',
    name: 'LJY Studio',
    description: 'Professional design portfolio and case studies',
    url: 'https://www.ljystudio.com/',
    image: '/images/projects/gameme-data.png',
    category: 'Portfolio',
    year: '2024',
    tags: ['Design', 'Portfolio', 'Creative'],
    isLive: true,
    details: {
      services: ['UI/UX Design', 'Web Development', 'Brand Identity'],
      technologies: ['Framer', 'React', 'Custom CSS'],
      highlights: [
        'Interactive portfolio showcase',
        'Smooth animations and transitions',
        'Case study presentations',
        'Responsive grid layouts'
      ]
    }
  },
  {
    id: 'islemark',
    name: 'IsleMark',
    description: 'Dynamic Island customization app for iPhone',
    image: '/images/projects/islemark.png',
    category: 'Mobile App',
    year: '2024',
    tags: ['iOS', 'Product Management', 'UI Design'],
    isLive: false,
    details: {
      services: ['Product Design', 'iOS Development', 'User Experience'],
      technologies: ['Swift', 'SwiftUI', 'iOS SDK'],
      highlights: [
        'Dynamic Island integration',
        'Customizable widgets',
        'Smooth animations',
        'User-friendly interface'
      ]
    }
  },
  {
    id: 'bubble-memo',
    name: 'Bubble Memo',
    description: 'Animated interactive checklist application',
    image: '/images/projects/bubble-memo.png',
    category: 'Mobile App',
    year: '2024',
    tags: ['iOS', 'Animation', 'Productivity'],
    isLive: false,
    details: {
      services: ['UI/UX Design', 'Animation Design', 'App Development'],
      technologies: ['Rive', 'Swift', 'SwiftUI'],
      highlights: [
        'Game-like interaction design',
        'Rive animation integration',
        'Engaging user experience',
        'Intuitive checklist management'
      ]
    }
  },
  {
    id: 'gameme-data',
    name: 'Gameme Data',
    description: 'Data visualization and analytics platform for gaming',
    image: '/images/projects/gameme-data.png',
    category: 'Web Application',
    year: '2024',
    tags: ['Data', 'Analytics', 'Gaming'],
    isLive: false,
    details: {
      services: ['UI Design', 'Data Visualization', 'Web Development'],
      technologies: ['React', 'D3.js', 'TypeScript'],
      highlights: [
        'Real-time data dashboards',
        'Interactive charts and graphs',
        'Comprehensive analytics',
        'Modern data visualization'
      ]
    }
  },
  {
    id: 'hoarding-disorder',
    name: 'Hoarding Disorder',
    description: 'Mobile app for managing hoarding behaviors',
    image: '/images/projects/hoarding-disorder.png',
    category: 'Mobile App',
    year: '2023',
    tags: ['iOS', 'Health', 'UI Design'],
    isLive: false,
    details: {
      services: ['App Design', 'User Research', 'Mobile Development'],
      technologies: ['Swift', 'SwiftUI', 'HealthKit'],
      highlights: [
        'User-centered design approach',
        'Accessible interface',
        'Health data integration',
        'Supportive user experience'
      ]
    }
  },
  {
    id: 'vision-fitness',
    name: 'Vision Fitness',
    description: 'Fitness tracking and workout planning platform',
    image: '/images/projects/vision-fitness.png',
    category: 'Web Application',
    year: '2024',
    tags: ['Fitness', 'E-Commerce', 'Portfolio'],
    isLive: false,
    details: {
      services: ['Web Design', 'E-Commerce Integration', 'Frontend Development'],
      technologies: ['React', 'Next.js', 'Stripe'],
      highlights: [
        'Product showcase',
        'E-commerce functionality',
        'Responsive design',
        'Modern fitness branding'
      ]
    }
  }
];

