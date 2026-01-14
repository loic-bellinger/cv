import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const basics = defineCollection({
  loader: glob({ pattern: "basics.md", base: "./src/content/resume" }),
  schema: z.object({
    name: z.string(),
    about: z.string(),
    initials: z.string(),
    summary: z.string(),
    location: z.object({
      text: z.string(),
      ariaLabel: z.string(),
      ariaDescribedBy: z.string(),
      href: z.string().url(),
    }),
    avatarUrl: z.string(),
    skills: z.array(z.string()),
  }).strict(),
});

const contacts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/resume/contacts" }),
  schema:
    z.object({
      ariaLabel: z.string(),
      ariaDescribedBy: z.string(),
      href: z.string().url(),
      icon: z.string(),
    }).strict()
});

const work = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/resume/work" }),
  schema: z.object({
    company: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    badges: z.array(z.string()),
    logo: z.string(),
    start: z.string(),
    end: z.string().nullable(),
  }).strict(),
});

const education = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/resume/education" }),
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    start: z.string(),
    end: z.string(),
  }).strict(),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    logo:z.string(),
    link:z.object({
      href: z.string().url(),
      ariaLabel: z.string(),
      ariaDescribedBy: z.string(),
    })
  }).strict(),
});



export const collections = {
  basics,
  work,
  education,
  contacts,
  projects,
};
