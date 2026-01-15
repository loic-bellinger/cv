import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const profile = defineCollection({
  loader: glob({ pattern: "profile.md", base: "./src/content/resume" }),
  schema: z
    .object({
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
    })
    .strict(),
});

const contacts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/resume/contacts" }),
  schema: z
    .object({
      ariaLabel: z.string(),
      ariaDescribedBy: z.string(),
      href: z.string().url(),
      icon: z.string(),
    })
    .strict(),
});

const experience = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/resume/experience" }),
  schema: z
    .object({
      company: z.string(),
      title: z.string(),
      description: z.string(),
      link: z.string().url(),
      highlights: z.array(z.string()).optional().default([]),
      badges: z.array(z.string()).optional().default([]),
      logo: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date().nullable(),
    })
    .strict(),
});

const education = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/resume/education" }),
  schema: z
    .object({
      school: z.string(),
      degree: z.string(),
      start: z.string(),
      end: z.string(),
    })
    .strict(),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      techStack: z.array(z.string()),
      logo: z.string(),
      link: z.object({
        href: z.string().url(),
        ariaLabel: z.string(),
        ariaDescribedBy: z.string(),
      }),
    })
    .strict(),
});

export const collections = {
  profile,
  experience,
  education,
  contacts,
  projects,
};
