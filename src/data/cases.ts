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
    image: '',
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
    image: '',
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
    image: '',
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
    id: 'popup-limited-website',
    name: 'Pop Up Limited Website',
    description: 'Pop Up Limited official website and service showcase',
    url: 'https://pop-up-limited.github.io/pop-up-limited-website/',
    image: '',
    category: 'Web Design',
    year: '2024',
    tags: ['Portfolio', 'Agency', 'Website'],
    isLive: true,
    details: {
      services: ['Web Design', 'Web Development', 'Brand Identity'],
      technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
      highlights: [
        'Clean and modern design',
        'Responsive layout',
        'Service showcase',
        'Case studies presentation'
      ]
    }
  },
  {
    id: 'popup-limited-landing',
    name: 'Pop Up Limited Landing',
    description: 'Neobrutalist event landing page with immersive design',
    url: 'https://pop-up-limited.github.io/popup-limited-landing/',
    image: '',
    category: 'Web Design',
    year: '2024',
    tags: ['Landing Page', 'Event', 'Neobrutalism'],
    isLive: true,
    details: {
      services: ['Landing Page Design', 'Web Development', 'Interactive Design'],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Neobrutalist design aesthetic',
        'Immersive user experience',
        'Interactive elements',
        'Responsive design'
      ]
    }
  }
];

