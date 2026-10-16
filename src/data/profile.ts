/** Short facts, stack groups and working principles. Edit here; pages read from this file. */

export const facts = [
  {
    label: 'Availability',
    value: 'Independent contractor, selectively taking new work when capacity and fit align.',
  },
  { label: 'Location', value: 'North Macedonia, remote delivery across time zones.' },
  { label: 'Citizenship', value: 'EU citizen (Bulgaria) and North Macedonia.' },
] as const;

export const now = {
  role: 'Senior Web Developer at Deltatre, via Toptal',
  since: 'February 2026',
  note: 'Next.js on both client and server, plus architecture and API work across merged systems.',
} as const;

export const coreStack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Docker',
  'CI/CD',
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
    name: 'Backend & data',
    items: ['REST', 'GraphQL', 'Node.js / Express', 'MongoDB', 'PostgreSQL / SQL', 'Supabase'],
  },
  {
    name: 'Infra & delivery',
    items: ['Vercel', 'AWS', 'Azure', 'CI/CD & DevOps', 'Docker', 'Linux', 'Cloudflare'],
  },
  {
    name: 'Tooling & quality',
    items: ['Git', 'VS Code', 'Figma', 'Testing / Jest', 'Webpack, Vite & modern bundlers'],
  },
  {
    name: 'AI & LLMs',
    items: [
      'Cursor',
      'GitHub Copilot',
      'Claude',
      'ChatGPT / OpenAI',
      'LLM APIs & integrations',
      'Prompt & tool-calling workflows',
      'Agent-style product features',
    ],
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
    items: ['Strapi', 'WordPress', 'Headless CMS patterns'],
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
  { title: 'Scope', text: 'Agreed in writing; I call out risks early.', home: true },
  {
    title: 'Dates',
    text: 'I aim to hit what we agree on, and I say early if that is not realistic.',
    home: true,
  },
  { title: 'Collaboration', text: 'Code reviews, pairing, shared ownership.', home: true },
  { title: 'Change', text: 'New stacks, teams or priorities are normal; I adjust.', home: false },
  {
    title: 'Learning',
    text: 'I keep up with tools, patterns and the product domain.',
    home: false,
  },
] as const;
