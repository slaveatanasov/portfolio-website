/** Short facts, stack groups and working principles. Edit here; pages read from this file. */

export const facts = [
  {
    label: 'Availability',
    value: 'Independent contractor, selectively taking new work when capacity and fit align.',
  },
  {
    label: 'Location',
    value: 'North Macedonia',
    note: 'Remote delivery across time zones.',
  },
  {
    label: 'Right to work',
    value: 'EU citizen & N. Macedonia',
    note: 'Clients across the EU, USA and worldwide.',
  },
] as const;

export const now = {
  role: 'Senior Web Developer at Deltatre, via Toptal',
  since: 'February 2026',
  note: 'Next.js on both client and server, plus architecture and API work across merged systems. LLM-assisted day to day.',
} as const;

export const coreStack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Infra',
  'AI & LLMs',
] as const;

export const stackGroups = [
  {
    name: 'Frontend & UI',
    items: [
      'HTML & CSS',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Redux Toolkit',
      'TanStack (Query, Router, Table)',
    ],
  },
  {
    name: 'AI & LLMs',
    items: [
      'Anthropic Claude',
      'OpenAI',
      'Cursor',
      'GitHub Copilot',
      'LLM APIs & integrations',
      'Prompt & tool-calling workflows',
      'Agent-style product features',
    ],
  },
  {
    name: 'Backend & data',
    items: ['REST', 'GraphQL', 'Node.js / Express', 'MongoDB', 'PostgreSQL', 'Neon', 'Supabase'],
  },
  {
    name: 'Infra & delivery',
    items: ['Vercel', 'AWS', 'Azure', 'CI/CD & DevOps', 'Docker', 'Linux', 'Cloudflare'],
  },
  {
    name: 'Tooling & quality',
    items: ['Git', 'VS Code', 'Figma', 'Unit & end-to-end testing', 'Vite & modern bundlers'],
  },
  {
    name: 'SEO & analytics',
    items: ['Technical & on-page SEO', 'Analytics & event tracking', 'Performance & Core Web Vitals'],
  },
  {
    name: 'Building, SaaS & collaboration',
    intro:
      'Beyond client work I also build and ship my own products: solopreneur and indie-style projects, SaaS ideas end to end, and collaboration with partners, users and teams when a product needs more than code.',
    items: [
      'Solopreneurship & side projects',
      'SaaS product building',
      'Collaboration & delivery',
      'Marketing & growth',
      'Stakeholder communication',
    ],
  },
  {
    name: 'Content & CMS',
    items: ['Strapi', 'Contentful', 'Payload CMS', 'WordPress', 'Headless CMS patterns'],
  },
  {
    name: 'Mobile (learning)',
    intro:
      'Still growing here: dabbling in React Native to see how mobile apps feel and ship, alongside web. Small experiments and real builds, not my main lane yet, but I am actively learning.',
    items: ['React Native'],
  },
] as const;

export const principles = [
  {
    title: 'Communication',
    text: 'Regular updates with engineers, designers and stakeholders.',
    home: true,
  },
  { title: 'Range', text: 'Agency and founder work, and longer corporate engagements.', home: false },
  {
    title: 'Scope',
    text: 'We agree the work up front, and we talk it through when something would change it.',
    home: true,
  },
  {
    title: 'Dates',
    text: 'We plan to the dates we set, and we say early if one needs to move.',
    home: true,
  },
  {
    title: 'Collaboration',
    text: 'Consultations, brainstorming, code reviews, pairing and shared ownership.',
    home: true,
  },
  {
    title: 'Stack & AI',
    text: 'Modern tooling and LLM-assisted work, where it speeds delivery without cutting quality.',
    home: true,
  },
  { title: 'Change', text: 'New stacks, teams or priorities are normal; I adjust.', home: false },
  {
    title: 'Learning',
    text: 'I keep up with tools, patterns and the product domain.',
    home: false,
  },
] as const;
