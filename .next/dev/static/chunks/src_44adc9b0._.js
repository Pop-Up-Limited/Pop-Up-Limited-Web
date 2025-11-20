(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/config/site.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPANY_NAME",
    ()=>COMPANY_NAME,
    "COMPANY_TAGLINE",
    ()=>COMPANY_TAGLINE,
    "DEFAULT_DESCRIPTION",
    ()=>DEFAULT_DESCRIPTION,
    "FOOTER_COPYRIGHT",
    ()=>FOOTER_COPYRIGHT,
    "FORM_ENDPOINT",
    ()=>FORM_ENDPOINT,
    "HERO",
    ()=>HERO,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS,
    "SUPPORT_EMAIL",
    ()=>SUPPORT_EMAIL,
    "WHY_US",
    ()=>WHY_US
]);
const COMPANY_NAME = 'Pop Up Limited';
const COMPANY_TAGLINE = 'We build innovative mobile applications and digital products that transform ideas into reality.';
const DEFAULT_DESCRIPTION = 'Pop Up Limited specializes in product management, UI/UX design, iOS development, and digital marketing. We provide professional website development services.';
const SUPPORT_EMAIL = 'contact@popup.limited';
const FORM_ENDPOINT = '';
const NAV_LINKS = [
    {
        href: '/services',
        label: '服务方案'
    },
    {
        href: '/support',
        label: 'Support'
    }
];
const SOCIAL_LINKS = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jinyi-bruce-li',
        icon: 'linkedin'
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Pop-Up-Limited',
        icon: 'github'
    }
];
const HERO = {
    title: 'We craft innovative mobile applications and digital products.',
    subtitle: 'Specialized in product management, UI/UX design, iOS development, and digital marketing. Bringing your vision to life with precision and creativity.',
    primaryCta: {
        label: 'See Products',
        href: '/services'
    },
    secondaryCta: {
        label: 'Contact Support',
        href: '/support'
    }
};
const WHY_US = {
    headline: 'Why teams choose Pop Up Limited',
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
};
const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/LanguageContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('zh');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // 从 localStorage 读取语言设置
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
                setLanguage(savedLanguage);
            } else {
                // 根据浏览器语言设置默认语言
                const browserLang = navigator.language || navigator.userLanguage;
                if (browserLang.startsWith('zh')) {
                    setLanguage('zh');
                } else {
                    setLanguage('en');
                }
            }
        }
    }["LanguageProvider.useEffect"], []);
    const changeLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            changeLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "KTbWmAJOfw4h1w9bTqUJNryizY8=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/translations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Navigation
        nav: {
            services: 'Services',
            support: 'Support',
            contact: 'Contact'
        },
        // Homepage
        home: {
            badge: 'Building innovative mobile applications',
            heroTitle: 'We craft innovative mobile applications and digital products.',
            heroSubtitle: 'Specialized in product management, UI/UX design, iOS development, and digital marketing. Bringing your vision to life with precision and creativity.',
            seeProducts: 'See Products',
            contactSupport: 'Contact Support',
            launchFaster: 'Launch faster with adaptive workflows',
            launchDescription: 'Pop Up Limited combines AI copilots and human oversight so marketing and product teams can make ideas tangible within hours, not weeks.',
            secureCompliance: 'Secure compliance guardrails for sensitive industries',
            zeroMaintenance: 'Zero-maintenance creative pipelines',
            insights: 'Insights that bridge product, design, and support',
            whyUs: 'Why us',
            whyUsHeadline: 'Why teams choose Pop Up Limited',
            humanFirst: 'Human-first automation',
            humanFirstDesc: 'We fuse AI acceleration with thoughtful guardrails so your brand stays consistent and on-message.',
            secureByDesign: 'Secure by design',
            secureByDesignDesc: 'Our infrastructure and review workflows respect privacy expectations and evolving regulations.',
            partnersInLaunch: 'Partners in launch',
            partnersInLaunchDesc: 'A dedicated success team keeps your creative engine flowing—from onboarding to campaign retros.',
            readyToCoCreate: 'Ready to co-create with Pop Up Limited?',
            readyDescription: 'Partner with us to develop your mobile applications, design user experiences, or launch your digital products. Let\'s create something extraordinary together!',
            visitSupportCenter: 'Visit Support Center',
            contactUs: 'Contact Us'
        },
        // Services Page
        services: {
            title: 'Website Development Services',
            subtitle: 'Choose the website development service that suits your needs, from standard solutions to fully customized solutions, we provide professional website development services.',
            standard: 'Standard',
            standardPro: 'Standard Pro',
            custom: 'Custom',
            standardDesc: 'Suitable for startups and personal projects',
            standardProDesc: 'Suitable for growing businesses and professional needs',
            customDesc: 'Suitable for large enterprises and complex projects',
            oneTimePayment: 'One-time payment',
            contactSupport: 'Contact Support',
            consultNow: 'Consult Now',
            representativeCase: 'Representative Case',
            clickToOpen: 'Click to open',
            viewDetailedComparison: 'View Detailed Comparison',
            detailedComparison: 'Detailed Comparison',
            serviceItem: 'Service Item',
            delivery: 'Delivery',
            design: 'Design',
            responsiveDesign: 'Responsive Design',
            mobileFirstDesign: 'Mobile-First Design',
            crossBrowserCompatibility: 'Cross-Browser Compatibility',
            deployment: 'Deployment',
            pageCount: 'Page Count',
            maintenance: 'Maintenance',
            seo: 'SEO',
            deliveryCycle: 'Delivery Cycle',
            modifications: 'Modifications',
            analysisSupport: 'Analysis Support',
            customerService: 'Customer Service & Language',
            compliance: 'Compliance & Policy',
            dataTracking: 'Data Tracking',
            brandDesign: 'Brand Design',
            sourceCodeDelivery: 'Source code + URL delivery',
            premiumDesign: 'Premium Design (Basic)',
            topTierDesign: 'Top-tier Design (Advanced)',
            freeDeployment: 'Free deployment (no custom domain)',
            freeCustomDomain: 'Free custom domain deployment',
            maxOnePage: 'Max 1 page',
            unlimitedPages: 'Unlimited',
            maintenanceFee: '¥ 1,888 / year',
            freeOneYear: 'Free 1 year',
            freeFiveYears: 'Free 5 years',
            basicOptimization: 'Basic optimization',
            advancedOptimization: 'Advanced optimization',
            enhancedOptimization: 'Enhanced optimization',
            fastestTenDays: 'Fastest 10 days*¹',
            withinTenDays: 'Within 10 days*¹',
            fastestFifteenDays: 'Fastest 15 days*¹',
            twoTimes: '2 times',
            fiveTimes: '5 times',
            untilSatisfied: 'Until satisfied*²',
            none: '—',
            competitorAnalysis: 'Competitor analysis',
            dedicatedSupport: 'Dedicated support',
            financialAnalysis: 'Financial and business analysis team support',
            multilingualService: 'Multilingual service + Localized design',
            privacyPolicy: 'Privacy policy and terms of service templates',
            optionalTracking: 'Optional data tracking service*³',
            brandDesignFull: 'Logo / Illustration / Typography / Color scheme*⁴',
            designTierExplanation: 'Design Tier Explanation',
            premiumDesignTitle: 'Premium Design (Basic)',
            premiumDesignDesc: 'Applicable to Standard and Standard Pro packages. Provides professional and practical web design, focusing on functionality and user experience, ensuring the website is beautiful and easy to use.',
            premiumDesignFeatures: [
                'Modern and clean design style',
                'Responsive layout, compatible with all devices',
                'Optimized user experience and interaction design'
            ],
            topTierDesignTitle: 'Top-tier Design (Advanced)',
            topTierDesignDesc: 'Applicable to Custom package. Provides excellent visual design and innovative experience, combining brand characteristics and industry trends to create unique and impressive websites.',
            topTierDesignFeatures: [
                'Customized and unique visual design',
                'Advanced animations and interactive effects',
                'Deep brand image integration'
            ],
            viewCases: 'View Cases',
            popular: 'Recommended'
        },
        // Data Visualization
        dataViz: {
            statistics: 'Statistics',
            ourResults: 'Our Results',
            resultsDesc: 'Let the data speak, showcasing our professional capabilities and service results',
            successCases: 'Success Cases',
            customerSatisfaction: 'Customer Satisfaction',
            fastestDelivery: 'Fastest Delivery Cycle',
            techSupport: 'Tech Support',
            designTierDistribution: 'Design Tier Distribution',
            topTier: 'Top-tier Design',
            premium: 'Premium Design',
            serviceTypeDistribution: 'Service Type Distribution',
            webDesign: 'Web Design',
            frontendDevelopment: 'Frontend Development',
            brandDesign: 'Brand Design',
            deliveryCycleStats: 'Delivery Cycle Statistics',
            withinTenDays: 'Within 10 days',
            withinFifteenDays: 'Within 15 days',
            averageDelivery: 'Average Delivery Cycle',
            customerFeedback: 'Customer Feedback Ratings',
            designQuality: 'Design Quality',
            developmentEfficiency: 'Development Efficiency',
            communicationService: 'Communication Service',
            monthlyProjectTrend: 'Monthly Project Trend',
            projects: 'Projects'
        },
        // Contact Page
        contact: {
            title: 'Contact Us',
            subtitle: 'Please fill out the form below and we will get back to you as soon as possible.',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            submit: 'Submit',
            submitting: 'Submitting...',
            submitSuccess: 'Submitted successfully! We will contact you soon.',
            submitError: 'Submission failed, please try again later.'
        },
        // Consult Modal
        consult: {
            title: 'Consult Now',
            wechatConsult: 'WeChat Consult',
            addWechat: 'Add WeChat',
            scanConsult: 'Scan QR Code',
            scanWithWechat: 'Scan with WeChat',
            quickSubmit: 'Quick Submit',
            leaveContact: 'Leave contact information',
            placeholder: 'WeChat ID / Phone / Email',
            submit: 'Submit',
            submitting: 'Submitting...',
            submitSuccess: 'Submitted successfully! We will contact you soon.',
            submitError: 'Submission failed, please try again later.',
            qrPlaceholder: 'QR Code Placeholder',
            close: 'Close'
        },
        // Product Detail
        product: {
            title: 'Product Details Example',
            subtitle: 'This is an example product details page showing how to integrate the consultation modal feature.',
            consultNow: 'Consult Now'
        },
        // Common
        common: {
            language: 'Language',
            chinese: '中文',
            english: 'English'
        }
    },
    zh: {
        // Navigation
        nav: {
            services: '服务方案',
            support: '支持',
            contact: '联系我们'
        },
        // Homepage
        home: {
            badge: '构建创新的移动应用',
            heroTitle: '我们打造创新的移动应用和数字产品。',
            heroSubtitle: '专注于产品管理、UI/UX 设计、iOS 开发和数字营销。以精准和创意将您的愿景变为现实。',
            seeProducts: '查看产品',
            contactSupport: '联系支持',
            launchFaster: '通过自适应工作流程更快启动',
            launchDescription: 'Pop Up Limited 结合 AI 副驾驶和人工监督，让营销和产品团队能够在几小时内而非几周内将想法变为现实。',
            secureCompliance: '为敏感行业提供安全合规保障',
            zeroMaintenance: '零维护创意流程',
            insights: '连接产品、设计和支持的洞察',
            whyUs: '为什么选择我们',
            whyUsHeadline: '为什么团队选择 Pop Up Limited',
            humanFirst: '以人为本的自动化',
            humanFirstDesc: '我们将 AI 加速与周到的保障相结合，确保您的品牌保持一致并传达正确信息。',
            secureByDesign: '设计即安全',
            secureByDesignDesc: '我们的基础设施和审查流程尊重隐私期望和不断发展的法规。',
            partnersInLaunch: '启动合作伙伴',
            partnersInLaunchDesc: '专业的成功团队让您的创意引擎持续运转——从入职到活动回顾。',
            readyToCoCreate: '准备好与 Pop Up Limited 共同创造了吗？',
            readyDescription: '与我们合作开发您的移动应用、设计用户体验或推出您的数字产品。让我们一起创造非凡！',
            visitSupportCenter: '访问支持中心',
            contactUs: '联系我们'
        },
        // Services Page
        services: {
            title: '网站开发服务方案',
            subtitle: '选择适合您需求的网站开发服务，从标准方案到全定制解决方案，我们为您提供专业的网站开发服务。',
            standard: '标准',
            standardPro: '标准 Pro',
            custom: '全定制',
            standardDesc: '适合初创企业和个人项目',
            standardProDesc: '适合成长型企业和专业需求',
            customDesc: '适合大型企业和复杂项目',
            oneTimePayment: '一次性付费',
            contactSupport: '联系客服',
            consultNow: '立即咨询',
            representativeCase: '代表案例',
            clickToOpen: '点击跳转',
            viewDetailedComparison: '查看详细对比',
            detailedComparison: '详细对比',
            serviceItem: '服务项',
            delivery: '交付',
            design: '设计',
            responsiveDesign: '响应式设计',
            mobileFirstDesign: '移动优先设计',
            crossBrowserCompatibility: '跨浏览器兼容',
            deployment: '部署',
            pageCount: '页面数量',
            maintenance: '维护',
            seo: 'SEO',
            deliveryCycle: '交付周期',
            modifications: '修改',
            analysisSupport: '分析支持',
            customerService: '客服与语言',
            compliance: '合规与政策',
            dataTracking: '数据追踪',
            brandDesign: '品牌设计',
            sourceCodeDelivery: '源码+网址交付',
            premiumDesign: '优质设计（初级）',
            topTierDesign: '顶级设计（高级）',
            freeDeployment: '免费部署（不支持自定义域名）',
            freeCustomDomain: '免费自定义域名部署',
            maxOnePage: '最多 1 页',
            unlimitedPages: '不设上限',
            maintenanceFee: '¥ 1,888 / 年',
            freeOneYear: '免费 1 年',
            freeFiveYears: '免费 5 年',
            basicOptimization: '基础优化',
            advancedOptimization: '进阶优化',
            enhancedOptimization: '增强优化',
            fastestTenDays: '最快 10 天*¹',
            withinTenDays: '10 天内*¹',
            fastestFifteenDays: '最快 15 天*¹',
            twoTimes: '2 次',
            fiveTimes: '5 次',
            untilSatisfied: '直到满意*²',
            none: '—',
            competitorAnalysis: '竞品分析',
            dedicatedSupport: '专属客服',
            financialAnalysis: '金融与商业分析团队支持',
            multilingualService: '多语言服务 + 本地化设计',
            privacyPolicy: '隐私政策与服务条款模板',
            optionalTracking: '可选数据追踪服务*³',
            brandDesignFull: 'Logo / 插画 / 字体 / 配色*⁴',
            designTierExplanation: '设计分级说明',
            premiumDesignTitle: '优质设计（初级）',
            premiumDesignDesc: '适用于标准套餐和标准 Pro 套餐。提供专业、实用的网页设计，注重功能性和用户体验，确保网站美观且易于使用。',
            premiumDesignFeatures: [
                '现代化、简洁的设计风格',
                '响应式布局，适配所有设备',
                '优化的用户体验和交互设计'
            ],
            topTierDesignTitle: '顶级设计（高级）',
            topTierDesignDesc: '适用于全定制套餐。提供卓越的视觉设计和创新体验，结合品牌特色和行业趋势，打造独特且令人印象深刻的网站。',
            topTierDesignFeatures: [
                '定制化、独特的视觉设计',
                '高级动画和交互效果',
                '品牌形象深度整合'
            ],
            viewCases: '查看案例',
            popular: '推荐'
        },
        // Data Visualization
        dataViz: {
            statistics: '数据统计',
            ourResults: '我们的成果',
            resultsDesc: '用数据说话，展示我们的专业能力和服务成果',
            successCases: '成功案例',
            customerSatisfaction: '客户满意度',
            fastestDelivery: '最快交付周期',
            techSupport: '技术支持',
            designTierDistribution: '设计分级分布',
            topTier: '顶级设计',
            premium: '优质设计',
            serviceTypeDistribution: '服务类型分布',
            webDesign: '网站设计',
            frontendDevelopment: '前端开发',
            brandDesign: '品牌设计',
            deliveryCycleStats: '交付周期统计',
            withinTenDays: '10 天内',
            withinFifteenDays: '15 天内',
            averageDelivery: '平均交付周期',
            customerFeedback: '客户反馈评分',
            designQuality: '设计质量',
            developmentEfficiency: '开发效率',
            communicationService: '沟通服务',
            monthlyProjectTrend: '月度项目趋势',
            projects: '项目'
        },
        // Contact Page
        contact: {
            title: '联系我们',
            subtitle: '请填写以下表单，我们会尽快回复您。',
            name: '姓名',
            email: '邮箱',
            message: '留言',
            submit: '提交',
            submitting: '提交中...',
            submitSuccess: '提交成功！我们会尽快联系您。',
            submitError: '提交失败，请稍后重试。'
        },
        // Consult Modal
        consult: {
            title: '立即咨询',
            wechatConsult: '微信咨询',
            addWechat: '添加客服微信',
            scanConsult: '扫码咨询',
            scanWithWechat: '使用微信扫描二维码',
            quickSubmit: '快速提交',
            leaveContact: '留下联系方式',
            placeholder: '微信号/手机号/邮箱',
            submit: '提交',
            submitting: '提交中...',
            submitSuccess: '提交成功！我们会尽快联系您。',
            submitError: '提交失败，请稍后重试。',
            qrPlaceholder: '二维码占位符',
            close: '关闭'
        },
        // Product Detail
        product: {
            title: '产品详情页示例',
            subtitle: '这是一个示例产品详情页面，展示如何集成咨询弹窗功能。',
            consultNow: '立即咨询'
        },
        // Common
        common: {
            language: '语言',
            chinese: '中文',
            english: 'English'
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LanguageSwitcher.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LanguageSwitcher() {
    _s();
    const { language, changeLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>changeLanguage(language === 'zh' ? 'en' : 'zh'),
            className: "flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-foreground-dark dark:hover:border-brand-500",
            "aria-label": "切换语言 / Switch Language",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSwitcher.jsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSwitcher.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: language === 'zh' ? '中文' : 'English'
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSwitcher.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LanguageSwitcher.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSwitcher.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "YfQ/tjEUGa1Vo/lhAQnnbamvpP0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navigation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Navigation() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"]['zh'];
    const resolveActive = (href)=>{
        return pathname === href;
    };
    // 获取导航链接的翻译
    const getNavLabel = (href)=>{
        if (href === '/services') return t.nav.services;
        if (href === '/support') return t.nav.support;
        if (href === '/contact') return t.nav.contact;
        return href;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/70",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-3 text-lg font-bold text-foreground hover:text-brand-500 dark:text-foreground-dark",
                    "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_NAME"]} home`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/logo.svg",
                            alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_NAME"]} logo`,
                            className: "h-11 w-11"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-balance",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_NAME"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 focus-visible:ring-brand-300 md:hidden dark:border-slate-700 dark:text-foreground-dark",
                    "aria-label": "Toggle navigation",
                    "aria-controls": "primary-navigation",
                    "aria-expanded": isMenuOpen,
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-5 w-5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M4 7h16M4 12h16M4 17h16"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.jsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigation.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    id: "primary-navigation",
                    className: `${isMenuOpen ? 'flex' : 'hidden'} w-full flex-col gap-6 md:flex md:w-auto md:flex-row md:items-center md:gap-8`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-4 text-sm font-medium text-foreground md:flex-row md:items-center md:gap-6 dark:text-foreground-dark",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((item)=>item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100/80 dark:hover:bg-slate-800/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: [
                                                            'transition',
                                                            resolveActive(item.children[0].href) ? 'text-brand-500' : ''
                                                        ].join(' '),
                                                        children: getNavLabel(item.href)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navigation.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-3.5 w-3.5 text-slate-500 transition group-open:rotate-180",
                                                        viewBox: "0 0 16 16",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 6l4 4 4-4",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navigation.jsx",
                                                            lineNumber: 66,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Navigation.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Navigation.jsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:absolute md:left-0 md:mt-2 md:w-48 md:rounded-2xl md:border md:border-slate-200 md:bg-white md:p-2 md:shadow-xl md:shadow-slate-900/10 dark:md:border-slate-700 dark:md:bg-slate-900",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-1 text-sm",
                                                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: child.href,
                                                                className: `block rounded-xl px-4 py-2 transition hover:bg-brand-500/10 hover:text-brand-600 ${resolveActive(child.href) ? 'text-brand-500' : ''}`,
                                                                children: child.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Navigation.jsx",
                                                                lineNumber: 73,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, child.href, false, {
                                                            fileName: "[project]/src/components/Navigation.jsx",
                                                            lineNumber: 72,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navigation.jsx",
                                                lineNumber: 69,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navigation.jsx",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/src/components/Navigation.jsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `rounded-full px-3 py-2 transition hover:bg-slate-100/80 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${resolveActive(item.href) ? 'text-brand-500' : ''}`,
                                        children: getNavLabel(item.href)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.jsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/src/components/Navigation.jsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3 md:flex-row md:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/support",
                                    className: "btn-primary",
                                    children: t.nav.support
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navigation.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Navigation, "kezfY2Wzx6NQCubDHHg09XSEHgk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_44adc9b0._.js.map