import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.enum(["complete", "in-progress", "archived"]),
      featured: z.boolean().default(false),
      order: z.number().int(),
      disciplines: z.array(z.string()),
      technologies: z.array(z.string()),
      role: z.string(),
      timeframe: z.string(),
      heroImage: image().optional(),
      outcome: z.string().optional(),
      repository: z.url().optional(),
    }),
});

export const collections = { projects };
