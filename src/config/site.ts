export const COMPANY_NAME = 'Pop Up Limited';
export const COMPANY_TAGLINE =
  'We build adaptive AI workflows that help creative teams launch ideas faster.'; // TODO: replace with your official company tagline
export const DEFAULT_DESCRIPTION =
  'Pop Up Limited crafts product experiences that blend human creativity with practical AI. Explore Floral, Phoro, and our support resources.'; // TODO: replace with marketing copy
export const SUPPORT_EMAIL = 'support@mydomain.com'; // TODO: replace with real support inbox
export const FORM_ENDPOINT = ''; // TODO: paste your Formspree endpoint (e.g. https://formspree.io/f/xxxxxxx)

export const NAV_LINKS = [
  { href: '/#products', label: 'Products' },
  { href: '/support', label: 'Support' },
  {
    label: 'Legal',
    children: [
      { href: '/floral/terms', label: 'Terms' },
      { href: '/floral/privacy', label: 'Privacy' }
    ]
  }
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' }, // TODO: replace placeholder social URLs
  { label: 'X', href: '#', icon: 'x' }, // TODO: replace placeholder social URLs
  { label: 'GitHub', href: 'https://github.com/Pop-Up-Limited', icon: 'github' } // TODO: verify GitHub org
];

export const HERO = {
  title: 'We craft delightful AI-powered tools for creators.',
  subtitle:
    'From prototyping to polished launch, Pop Up Limited helps creative teams ship faster with responsible, human-centered automation.', // TODO: refine hero copy
  primaryCta: { label: 'See Products', href: '/#products' },
  secondaryCta: { label: 'Talk to Support', href: '/support' }
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

