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
  designTier?: 'premium' | 'premium-plus'; // 'premium' = 优质设计（初级）, 'premium-plus' = 顶级设计（高级）
  details: {
    client?: string;
    services: string[];
    technologies?: string[];
    highlights: string[];
  };
};

export const cases: Case[] = [
  // 案例库已清空，等待白名单
  // 将根据用户提供的列表添加案例，并区分优质设计和顶级设计
];

