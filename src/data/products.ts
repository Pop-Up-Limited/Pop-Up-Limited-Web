export type Product = {
  id: string;
  name: string;
  description: string;
  link: string;
  linkLabel: string;
  badge?: string;
  status?: 'available' | 'beta' | 'coming-soon';
  image?: string;
};

export const products: Product[] = [
  {
    id: 'phoro',
    name: 'Phoro',
    description:
      'Mobile-first AI image generation that lets creators remix portraits using curated template packs.',
    link: 'https://popup.limited',
    linkLabel: 'Explore Phoro',
    badge: 'AI imaging',
    status: 'beta',
    image: '/images/projects/vision-fitness.png' // 使用一个占位图片
  }
];

