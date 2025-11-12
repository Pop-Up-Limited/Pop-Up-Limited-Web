export type Product = {
  id: string;
  name: string;
  description: string;
  link: string;
  linkLabel: string;
  badge?: string;
  status?: 'available' | 'beta' | 'coming-soon';
};

export const products: Product[] = [
  {
    id: 'islemark',
    name: 'IsleMark',
    description:
      'Custom your dynamic island - A mobile application that allows users to personalize their iPhone Dynamic Island with custom designs and interactive elements.',
    link: 'https://www.ljystudio.com/work/islemark',
    linkLabel: 'View Project Details',
    badge: 'Product Management',
    status: 'available'
  },
  {
    id: 'bubble-memo',
    name: 'Bubble Memo',
    description:
      'Animated Interactive Checklist App - A game-like interactive checklist application that combines Rive animation in UI design to redefine the original checklist experience.',
    link: 'https://www.ljystudio.com/work/bubblememo',
    linkLabel: 'View Project Details',
    badge: 'Indie Development',
    status: 'available'
  },
  {
    id: 'phoro',
    name: 'Phoro',
    description:
      'Mobile-first AI image generation that lets creators remix portraits using curated template packs.',
    link: 'https://popup.limited',
    linkLabel: 'Explore Phoro',
    badge: 'AI imaging',
    status: 'beta'
  }
];

