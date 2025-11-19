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
  // 产品列表为空，如有新产品可在此添加
];

