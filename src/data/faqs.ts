export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'How do I request onboarding support?',
    answer:
      'Email our team at support@mydomain.com with your workspace name, deployment timeline, and the products you plan to launch.' // TODO: update contact details
  },
  {
    question: 'Where can I review Floral’s data practices?',
    answer:
      'You can consult the Floral Privacy Policy and Terms for the most up-to-date information on how data is collected and processed.' // references legal pages
  },
  {
    question: 'Is there an SLA for incident response?',
    answer:
      'Enterprise plans include a shared incident Slack channel and phone escalation. Reach out to sales@mydomain.com to tailor your coverage.' // TODO: update contact details
  },
  {
    question: 'Can I integrate Pop Up Limited tools with my CMS?',
    answer:
      'Yes. Our API and webhook toolkit syncs tasks, assets, and approvals with modern CMS platforms. Implementation guides are available upon request.' // TODO: link integration docs
  },
  {
    question: 'Do you offer design services in addition to tooling?',
    answer:
      'We partner with select studios to offer creative co-pilots for launch campaigns. Share your needs through the support ticket form below.' // TODO: replace with confirmed offering
  }
];

