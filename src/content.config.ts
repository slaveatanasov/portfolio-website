import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      summary: z.string(),
      role: z.string(),
      stack: z.array(z.string()),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      /** 'live' products get an outbound link; 'archived' ones are shown via screenshots only */
      status: z.enum(['live', 'archived', 'open-source']).default('archived'),
      url: z.url().optional(),
      repo: z.url().optional(),
      years: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      outcomes: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    }),
});

const experience = defineCollection({
  loader: file('./src/content/experience.json'),
  schema: z.object({
    company: z.string(),
    url: z.url().optional(),
    via: z.string().optional(),
    location: z.string().optional(),
    title: z.string(),
    start: z.string(),
    end: z.string().nullable(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: file('./src/content/education.json'),
  schema: z.object({
    years: z.string(),
    title: z.string(),
    institution: z.string(),
    url: z.url().optional(),
    summary: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { projects, experience, education };
