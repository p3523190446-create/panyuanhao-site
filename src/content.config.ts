import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const PROJECT_CATEGORIES = [
  '硬件与机器人',
  'AI 与算法',
  'Web 与产品',
  '评测与科研',
  '开源工具'
] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.enum(PROJECT_CATEGORIES),
    featured: z.boolean().default(false),
    order: z.number(),
    period: z.string(),
    context: z.string(),
    role: z.string(),
    status: z.string(),
    award: z.string().optional(),
    summary: z.string(),
    verification: z.string(),
    stack: z.array(z.string()),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          caption: z.string()
        })
      )
      .optional(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional()
  })
});

export const collections = { projects };
