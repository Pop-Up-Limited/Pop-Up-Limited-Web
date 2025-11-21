export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    nav: {
      home: '首页',
      services: '服务方案',
      cases: '案例库',
      support: '支持中心',
      contactSupport: '联系客服'
    },
    hero: {
      badge: '专业的网站开发服务',
      title: '我们打造专业、美观、高效的网站解决方案。',
      subtitle: '专注于网站设计、前端开发、UI/UX设计和品牌设计。用精准和创意将您的业务愿景转化为出色的在线体验。',
      primaryCta: '查看服务',
      secondaryCta: '联系客服',
      features: {
        title: '快速交付，专业品质',
        description: 'Pop Up Limited 提供从设计到部署的一站式网站开发服务，首次交付平均只用三天，让您的网站快速上线。',
        item1: '专业设计，确保品牌形象一致',
        item2: '响应式设计，适配所有设备',
        item3: '持续支持，提供长期维护服务'
      }
    },
    portfolio: {
      badge: '作品集',
      title: '服务经验',
      subtitle: '探索我们为不同行业客户打造的专业网站解决方案，从大学网站到创新的Web应用和数据可视化。',
      viewMore: '查看更多案例 →',
      premiumDesign: '顶级设计',
      qualityDesign: '优质设计'
    },
    stats: {
      badge: '数据统计',
      title: '我们的成果',
      subtitle: '用数据说话，展示我们的专业能力和服务成果',
      cases: '服务经验',
      satisfaction: '客户满意度',
      delivery: '平均交付周期',
      support: '平均响应时间',
      charts: {
        designTier: '设计分级分布',
        serviceType: '服务类型分布',
        delivery: '交付周期统计',
        feedback: '客户反馈评分',
        designQuality: '设计质量',
        developmentEfficiency: '开发效率',
        communication: '沟通服务',
        avgDelivery: '平均交付周期',
        days: '天',
        hours: '小时'
      }
    },
    whyUs: {
      badge: '为什么选择我们',
      title: '为什么选择我们',
      points: [
        {
          title: '以人为本的自动化',
          description: '我们将AI加速与周密的保障措施相结合，确保您的品牌保持一致性和信息传达的准确性。'
        },
        {
          title: '安全设计',
          description: '我们的基础设施和审查流程尊重隐私期望和不断发展的法规要求。'
        },
        {
          title: '启动合作伙伴',
          description: '专业的成功团队让您的创意引擎持续运转——从入门到活动回顾。'
        }
      ]
    },
    about: {
      title: '关于 Pop Up Limited',
      description1: '我们是一家专注于UI/UX设计、产品管理、iOS开发和数字营销的产品工作室。我们的使命是用精准和创意将概念转化为现实。',
      description2: 'Pop Up Limited 提供专业的网站开发服务。我们用可扩展的设计和数据驱动的解决方案将您的愿景变为现实。',
      quote: '"我专注于将概念转化为现实产品。无论是软件还是游戏，我的作品集旨在让产品成熟。',
      quoteAuthor: '— ailian jiang, 创始人'
    },
    cta: {
      title: '准备与 Pop Up Limited 共同创造？',
      subtitle: '与我们合作开发移动应用、设计用户体验或发布数字产品。让我们一起创造非凡！',
      support: '访问支持中心',
      services: '查看服务方案'
    },
    support: {
      title: '我们能为您提供什么帮助？',
      subtitle: '浏览常见问题或直接联系我们获取帮助。',
      faqTitle: '常见问题',
      needHelp: '需要更多帮助？',
      contactText: '直接联系我们，我们会尽快回复您。',
      contactUs: '联系我们'
    },
    footer: {
      description: '我们专注于产品管理、UI/UX设计、iOS开发和数字营销。用精准和创意将概念转化为现实。',
      support: '支持',
      helpCenter: '帮助中心',
      copyright: `© ${new Date().getFullYear()} Pop Up Limited. 保留所有权利。`
    },
    cases: {
      title: '案例库',
      subtitle: '探索我们为不同行业客户打造的专业网站解决方案，从初创企业到大型企业的服务经验',
      viewAll: '查看所有案例',
      all: '全部',
      allDesigns: '全部设计',
      premiumDesign: '优质设计（初级）',
      premiumPlusDesign: '顶级设计（高级）',
      viewDetails: '查看详情',
      visitSite: '访问网站 →',
      comingSoon: '即将上线',
      count: '个案例',
      noCases: '暂无该分类的案例'
    },
    services: {
      title: '网站开发服务方案',
      subtitle: '选择适合您需求的网站开发服务，从标准方案到全定制解决方案，我们为您提供专业的网站开发服务。',
      designTier: {
        title: '设计分级说明',
        premium: {
          badge: '优质设计',
          title: '优质设计（初级）',
          description: '适用于标准套餐和标准 Pro 套餐。提供专业、实用的网页设计，注重功能性和用户体验，确保网站美观且易于使用。',
          features: [
            '现代化、简洁的设计风格',
            '响应式布局，适配所有设备',
            '优化的用户体验和交互设计'
          ],
          viewCases: '查看案例'
        },
        premiumPlus: {
          badge: '顶级设计',
          title: '顶级设计（高级）',
          description: '适用于全定制套餐。提供卓越的视觉设计和创新体验，结合品牌特色和行业趋势，打造独特且令人印象深刻的网站。',
          features: [
            '定制化、独特的视觉设计',
            '高级动画和交互效果',
            '品牌形象深度整合'
          ],
          viewCases: '查看案例'
        }
      },
      plans: {
        standard: '标准',
        standardPro: '标准 Pro',
        custom: '全定制',
        popular: '推荐',
        oneTime: '一次性付费',
        contactSupport: '联系专属客服支持',
        representativeCase: '代表案例',
        clickToVisit: '点击跳转',
        viewDetails: '查看详细对比',
        viewCases: '查看案例区块',
        contact: '立即咨询',
        contactService: '联系客服'
      },
      features: {
        delivery: '交付',
        design: '设计',
        responsive: '响应式设计',
        mobileFirst: '移动优先设计',
        crossBrowser: '跨浏览器兼容',
        deployment: '部署',
        pageCount: '页面数量',
        maintenance: '维护',
        deliveryCycle: '交付周期',
        revisions: '修改',
        analysis: '分析支持',
        support: '客服与语言',
        compliance: '合规与政策',
        tracking: '数据追踪',
        branding: '品牌设计'
      },
      comparison: {
        title: '详细对比',
        serviceItem: '服务项'
      },
      optional: {
        title: '可选服务',
        subtitle: '增强您的网站功能',
        description: '根据您的业务需求，我们可以为您提供以下可选服务，让您的网站更加完善和强大。',
        form: {
          title: '表单功能',
          description: '添加联系表单、询价表单、预约表单等，让客户可以直接在网站上提交信息和咨询。',
          features: ['联系表单', '询价表单', '预约表单']
        },
        consultation: {
          title: '客户咨询服务',
          description: '集成在线客服系统，支持实时聊天、留言板等功能，让客户可以随时与您取得联系。',
          features: ['在线客服系统', '实时聊天功能', '留言板功能']
        },
        products: {
          title: '商品管理',
          description: '添加商品展示和管理功能，支持商品分类、详情页、库存管理等，适合需要展示产品或服务的网站。',
          features: ['商品分类管理', '商品详情页', '库存管理']
        },
        cms: {
          title: 'CMS 内容管理系统',
          description: '集成内容管理系统，让您可以轻松管理网站内容，无需技术背景即可更新文章、页面等信息。',
          features: ['文章管理', '页面管理', '媒体库管理']
        },
        info: {
          title: '信息管理',
          description: '提供完整的信息管理功能，包括数据收集、存储、查询和导出，帮助您更好地管理和分析业务数据。',
          features: ['数据收集与存储', '数据查询与筛选', '数据导出功能']
        },
        custom: {
          title: '其他定制服务',
          description: '根据您的具体需求，我们可以提供更多定制化服务，包括第三方集成、API 开发等。',
          features: ['第三方系统集成', 'API 接口开发', '功能定制开发']
        },
        contact: '需要了解更多可选服务详情？请联系我们的客服团队获取详细报价。',
        contactBtn: '联系客服咨询'
      },
      terms: {
        title: '服务条款备注',
        delivery: {
          title: '*¹ (关于交付周期):',
          content: '交付周期（首次交付平均只用三天）指我方交付首个完整预览版本（V1）所需的平均工作时间。此周期的起算点为客户方提供了所有必要的、符合要求的资料（包括但不限于最终文案、图片、Logo、及明确的需求文档）之后。因客户方资料延迟或中途提出新需求导致的时间延长，不在此承诺时限内。'
        },
        satisfaction: {
          title: '*² (关于"直到满意"):',
          content: '"直到满意"条款适用于项目首版交付后的 60天 集中修改期内。在此期间，客户可就原始需求范围内的设计和功能提出不限次数的修改意见。',
          points: [
            '集中修改期结束后，服务将视为"满意"并自动关闭。后续的额外修改需求，将视为新的维护或迭代工作，可能产生额外费用。',
            '超出原始需求范围的修改（如增加新页面、新功能模块），即使在修改期内，也需另行评估和报价。'
          ]
        },
        tracking: {
          title: '*³ (关于数据追踪):',
          content: '"可选数据追踪服务"为附加高级服务。如客户选择此项，其具体需求（如埋点方案、报表配置）将另行沟通，且相关开发与部署时间不计入上述基础交付周期（*¹）内。'
        },
        branding: {
          title: '*⁴ (关于品牌设计):',
          content: '"品牌设计"服务（如 Logo、VI、配色方案）为独立于网站部署的专业服务。如果客户选择此服务包，网站的"交付周期"(*¹) 将从品牌设计方案最终确认后开始计算。'
        }
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      cases: 'Cases',
      support: 'Support',
      contactSupport: 'Contact Support'
    },
    hero: {
      badge: 'Professional Web Development Services',
      title: 'We craft professional, beautiful, and efficient website solutions.',
      subtitle: 'Specialized in web design, frontend development, UI/UX design, and brand design. Transforming your business vision into exceptional online experiences with precision and creativity.',
      primaryCta: 'See Services',
      secondaryCta: 'Contact Support',
      features: {
        title: 'Fast Delivery, Professional Quality',
        description: 'Pop Up Limited provides end-to-end web development services from design to deployment, with an average first delivery time of just 3 days, getting your website online quickly.',
        item1: 'Professional design ensuring consistent brand identity',
        item2: 'Responsive design adapting to all devices',
        item3: 'Ongoing support providing long-term maintenance services'
      }
    },
    portfolio: {
      badge: 'Portfolio',
      title: 'Service Experience',
      subtitle: 'Explore our portfolio of successful projects, from university websites to innovative web applications and data visualizations.',
      viewMore: 'View More Cases',
      premiumDesign: 'Premium Design',
      qualityDesign: 'Quality Design'
    },
    stats: {
      badge: 'Statistics',
      title: 'Our Results',
      subtitle: 'Data-driven insights showcasing our professional capabilities and service achievements',
      cases: 'Service Experience',
      satisfaction: 'Client Satisfaction',
      delivery: 'Average Delivery Cycle',
      support: 'Average Response Time',
      charts: {
        designTier: 'Design Tier Distribution',
        serviceType: 'Service Type Distribution',
        delivery: 'Delivery Cycle Statistics',
        feedback: 'Client Feedback Ratings',
        designQuality: 'Design Quality',
        developmentEfficiency: 'Development Efficiency',
        communication: 'Communication Service',
        avgDelivery: 'Average Delivery Cycle',
        days: 'days',
        hours: 'hours'
      }
    },
    whyUs: {
      badge: 'Why us',
      title: 'Why teams choose Pop Up Limited',
      points: [
        {
          title: 'Human-first automation',
          description: 'We fuse AI acceleration with thoughtful guardrails so your brand stays consistent and on-message.'
        },
        {
          title: 'Secure by design',
          description: 'Our infrastructure and review workflows respect privacy expectations and evolving regulations.'
        },
        {
          title: 'Partners in launch',
          description: 'A dedicated success team keeps your creative engine flowing—from onboarding to campaign retros.'
        }
      ]
    },
    about: {
      title: 'About Pop Up Limited',
      description1: 'We are a product studio specializing in UI/UX design, product management, iOS development, and digital marketing. Our mission is to transform concepts into reality with precision and creativity.',
      description2: 'Pop Up Limited provides professional web development services. We bring your vision to life with scalable design and data-driven solutions.',
      quote: '"I specialize in transforming concepts into realistic products. Whether it\'s software or games, my portfolio is designed to mature the product."',
      quoteAuthor: '— ailian jiang, Founder'
    },
    cta: {
      title: 'Ready to co-create with Pop Up Limited?',
      subtitle: 'Partner with us to develop your mobile applications, design user experiences, or launch your digital products. Let\'s create something extraordinary together!',
      support: 'Visit Support Center',
      services: 'View Services'
    },
    support: {
      title: 'How can we help?',
      subtitle: 'Explore quick answers or contact us directly for assistance.',
      faqTitle: 'Frequently asked questions',
      needHelp: 'Need more help?',
      contactText: 'Contact us directly and we\'ll get back to you as soon as possible.',
      contactUs: 'Contact Us'
    },
    footer: {
      description: 'We specialize in product management, UI/UX design, iOS development, and digital marketing. Transforming concepts into reality with precision and creativity.',
      support: 'Support',
      helpCenter: 'Help Center',
      copyright: `© ${new Date().getFullYear()} Pop Up Limited. All rights reserved.`
    },
    cases: {
      title: 'Case Library',
      subtitle: 'Explore our professional website solutions for clients across different industries, from startups to large enterprises',
      viewAll: 'View All Cases',
      all: 'All',
      allDesigns: 'All Designs',
      premiumDesign: 'Quality Design (Basic)',
      premiumPlusDesign: 'Premium Design (Advanced)',
      viewDetails: 'View Details',
      visitSite: 'Visit Site →',
      comingSoon: 'Coming Soon',
      count: 'cases',
      noCases: 'No cases in this category'
    },
    services: {
      title: 'Web Development Service Plans',
      subtitle: 'Choose the web development service that fits your needs, from standard plans to fully customized solutions, we provide professional web development services.',
      designTier: {
        title: 'Design Tier Explanation',
        premium: {
          badge: 'Premium Design',
          title: 'Premium Design (Basic)',
          description: 'Applicable to Standard and Standard Pro plans. Provides professional, practical web design focusing on functionality and user experience, ensuring beautiful and easy-to-use websites.',
          features: [
            'Modern, clean design style',
            'Responsive layout, adapts to all devices',
            'Optimized user experience and interaction design'
          ],
          viewCases: 'View Cases'
        },
        premiumPlus: {
          badge: 'Top-tier Design',
          title: 'Top-tier Design (Advanced)',
          description: 'Applicable to Custom plan. Provides exceptional visual design and innovative experience, combining brand characteristics and industry trends to create unique and impressive websites.',
          features: [
            'Customized, unique visual design',
            'Advanced animations and interactive effects',
            'Deep brand identity integration'
          ],
          viewCases: 'View Cases'
        }
      },
      plans: {
        standard: 'Standard',
        standardPro: 'Standard Pro',
        custom: 'Custom',
        popular: 'Recommended',
        oneTime: 'One-time payment',
        contactSupport: 'Contact dedicated support',
        representativeCase: 'Representative Case',
        clickToVisit: 'Click to visit',
        viewDetails: 'View Detailed Comparison',
        viewCases: 'View Case Section',
        contact: 'Consult Now',
        contactService: 'Contact Support',
        standardLimitations: {
          title: '⚠️ Package Limitations:',
          '0': 'Limited to 1 page',
          '1': 'No custom domain',
          '2': 'Basic maintenance service'
        },
        standardProAdvantages: {
          title: '✨ Compared to Standard:',
          '0': 'Custom domain support',
          '1': 'Unlimited pages',
          '2': 'Free maintenance for 1 year',
          '3': 'Dedicated customer support'
        },
        customAdvantages: {
          title: '✨ Core Advantages:',
          '0': 'Top-tier visual design',
          '1': 'Customized interactive experience',
          '2': 'Deep brand integration',
          '3': 'Multi-language localization'
        }
      },
      comparison: {
        title: 'Detailed Comparison',
        serviceItem: 'Service Item'
      },
      optional: {
        title: 'Optional Services',
        subtitle: 'Enhance Your Website Features',
        description: 'Based on your business needs, we can provide the following optional services to make your website more complete and powerful.',
        form: {
          title: 'Form Features',
          description: 'Add contact forms, inquiry forms, appointment forms, etc., allowing customers to submit information and inquiries directly on the website.',
          features: ['Contact Form', 'Inquiry Form', 'Appointment Form']
        },
        consultation: {
          title: 'Customer Consultation Service',
          description: 'Integrate online customer service system with real-time chat, message board and other features, allowing customers to contact you at any time.',
          features: ['Online Customer Service System', 'Real-time Chat', 'Message Board']
        },
        products: {
          title: 'Product Management',
          description: 'Add product display and management features, supporting product categories, detail pages, inventory management, suitable for websites that need to display products or services.',
          features: ['Product Category Management', 'Product Detail Page', 'Inventory Management']
        },
        cms: {
          title: 'CMS Content Management System',
          description: 'Integrate content management system, allowing you to easily manage website content, update articles, pages and other information without technical background.',
          features: ['Article Management', 'Page Management', 'Media Library Management']
        },
        info: {
          title: 'Information Management',
          description: 'Provide complete information management functions, including data collection, storage, query and export, helping you better manage and analyze business data.',
          features: ['Data Collection & Storage', 'Data Query & Filtering', 'Data Export']
        },
        custom: {
          title: 'Other Custom Services',
          description: 'Based on your specific needs, we can provide more customized services, including third-party integration, API development, etc.',
          features: ['Third-party System Integration', 'API Interface Development', 'Custom Feature Development']
        },
        contact: 'Need to learn more about optional services? Please contact our customer service team for detailed quotes.',
        contactBtn: 'Contact Support'
      },
      terms: {
        title: 'Service Terms & Notes',
        delivery: {
          title: '*¹ (About Delivery Cycle):',
          content: 'Delivery cycle (average first delivery time of 3 days) refers to the average working time required for us to deliver the first complete preview version (V1). The starting point of this cycle is after the client has provided all necessary and qualified materials (including but not limited to final copy, images, Logo, and clear requirements documents). Time extensions caused by delayed client materials or new requirements raised during the process are not included in this commitment period.'
        },
        satisfaction: {
          title: '*² (About "Until Satisfied"):',
          content: 'The "until satisfied" clause applies to the 60-day concentrated modification period after the first version of the project is delivered. During this period, clients can propose unlimited modifications to design and functionality within the original requirements scope.',
          points: [
            'After the concentrated modification period ends, the service will be considered "satisfied" and automatically closed. Subsequent additional modification requests will be considered as new maintenance or iteration work and may incur additional fees.',
            'Modifications beyond the original requirements scope (such as adding new pages or new functional modules), even during the modification period, require separate evaluation and quotation.'
          ]
        },
        tracking: {
          title: '*³ (About Data Tracking):',
          content: '"Optional data tracking service" is an additional premium service. If the client chooses this option, their specific needs (such as tracking plan, report configuration) will be communicated separately, and the related development and deployment time will not be included in the above basic delivery cycle (*¹).'
        },
        branding: {
          title: '*⁴ (About Brand Design):',
          content: '"Brand design" service (such as Logo, VI, color scheme) is a professional service independent of website deployment. If the client chooses this service package, the website\'s "delivery cycle" (*¹) will start calculating after the brand design plan is finally confirmed.'
        }
      }
    }
  }
};

export function getTranslation(lang: Language) {
  return translations[lang];
}

