import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const text = z.string().trim().min(1);
const href = z.union([
  z.string().url(),
  z.string().startsWith("mailto:"),
  z.string().startsWith("tel:"),
]);

const ui = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/ui" }),
  schema: z
    .object({
      meta: z
        .object({
          titleSuffix: text,
        })
        .strict(),
      nav: z
        .object({
          home: text,
          projects: text,
        })
        .strict(),
      section: z
        .object({
          about: text,
          xp: text,
          education: text,
        })
        .strict(),
      page: z
        .object({
          projects: z
            .object({
              title: text,
            })
            .strict(),
        })
        .strict(),
      a11y: z
        .object({
          skipToMain: text,
          opensNewTab: text,
        })
        .strict(),
      date: z
        .object({
          present: text,
        })
        .strict(),
    })
    .strict(),
});

const resume = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/resume" }),
  schema: z
    .object({
      name: text,
      about: text,
      initials: text,
      summary: text,
      avatarUrl: text.url().or(text.startsWith("/")),
      location: z
        .object({
          text: text,
          href: href,
          ariaLabel: text,
          ariaDescribedBy: text,
        })
        .strict(),
      contacts: z.array(
        z
          .object({
            id: text,
            href: href,
            label: text,
            icon: text,
            ariaLabel: text,
            ariaDescribedBy: text,
          })
          .strict(),
      ),
      skills: z.array(text),
    })
    .strict(),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z
    .object({
      company: text,
      title: text,
      description: text,
      link: text.url(),
      highlights: z.array(text).default([]),
      badges: z.array(text).default([]),
      logo: text,
      start: z.coerce.date(),
      end: z.coerce.date().nullable(),
    })
    .strict(),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z
    .object({
      school: text,
      degree: text,
      start: z.coerce.date(),
      end: z.coerce.date(),
    })
    .strict(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z
    .object({
      title: text,
      description: text,
      techStack: z.array(text),
      logo: text,
      link: z
        .object({
          href: href,
          ariaLabel: text,
          ariaDescribedBy: text,
        })
        .strict(),
    })
    .strict(),
});

export const collections = {
  ui,
  resume,
  experience,
  education,
  projects,
};
