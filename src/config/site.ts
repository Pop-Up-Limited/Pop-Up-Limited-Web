export const COMPANY_NAME = 'Pop Up Limited';
export const COMPANY_TAGLINE =
  'We build innovative mobile applications and digital products that transform ideas into reality.';
export const DEFAULT_DESCRIPTION =
  'Pop Up Limited specializes in product management, UI/UX design, iOS development, and digital marketing. Explore IsleMark, Bubble Memo, and our professional services.';
export const SUPPORT_EMAIL = 'contact@popup.limited';
export const FORM_ENDPOINT = ''; // TODO: paste your Formspree endpoint (e.g. https://formspree.io/f/xxxxxxx)

export const NAV_LINKS = [
  { href: '/#products', label: 'Products' },
  { href: '/support', label: 'Support' },
  {
    label: 'Phoro',
    children: [
      { href: '/phoro/terms-and-conditions', label: 'Terms & Conditions' },
      { href: '/phoro/privacy', label: 'Privacy' },
      { href: '/phoro/support', label: 'Support' }
    ]
  }
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jinyi-bruce-li', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Pop-Up-Limited', icon: 'github' }
];

export const HERO = {
  title: 'We craft innovative mobile applications and digital products.',
  subtitle:
    'Specialized in product management, UI/UX design, iOS development, and digital marketing. Bringing your vision to life with precision and creativity.',
  primaryCta: { label: 'See Products', href: '/#products' },
  secondaryCta: { label: 'Contact Support', href: '/support' }
};

export const WHY_US = {
  headline: 'Why teams choose Pop Up Limited',
  points: [
    {
      title: 'Human-first automation',
      description:
        'We fuse AI acceleration with thoughtful guardrails so your brand stays consistent and on-message.' // TODO
    },
    {
      title: 'Secure by design',
      description:
        'Our infrastructure and review workflows respect privacy expectations and evolving regulations.' // TODO
    },
    {
      title: 'Partners in launch',
      description:
        'A dedicated success team keeps your creative engine flowing—from onboarding to campaign retros.' // TODO
    }
  ]
};

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`;

