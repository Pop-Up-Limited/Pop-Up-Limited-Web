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
    id: 'floral',
    name: 'Floral',
    description:
      'A visual storytelling system that blends brand palettes with adaptive AI scenes for seasonal campaigns.', // TODO: replace with real Floral positioning
    link: '/floral/privacy',
    linkLabel: 'View Floral docs',
    badge: 'Compliance-ready',
    status: 'available'
  },
  {
    id: 'phoro',
    name: 'Phoro',
    description:
      'Mobile-first AI image generation that lets creators remix portraits using curated template packs.', // pulled from existing Privacy Notice
    link: 'https://popup.limited', // TODO: replace with official Phoro destination
    linkLabel: 'Explore Phoro',
    badge: 'AI imaging',
    status: 'beta'
  },
  {
    id: 'studio',
    name: 'Pop Up Studio',
    description:
      'An orchestration dashboard that centralises assets, approvals, and launch timelines across your product suite.', // TODO: replace with real product summary
    link: '/support',
    linkLabel: 'Request early access',
    badge: 'Coming next',
    status: 'coming-soon'
  }
];

