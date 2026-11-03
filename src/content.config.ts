import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const portfolio = defineCollection({
  loader: glob({
    base: "./src/content/portfolio",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      summary: z.string().min(1).max(180),
      category: z.enum(["site", "system"]),
      entryType: z.enum(["project", "concept"]),
      cover: z.object({
        image: image(),
        alt: z.string().min(1),
      }),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string().min(1),
          }),
        )
        .default([]),
      features: z.array(z.string().min(1)).default([]),
      technologies: z.array(z.string().min(1)).default([]),
      featured: z.boolean().default(false),
      order: z.number().int().nonnegative(),
      publishedAt: z.coerce.date().optional(),
      draft: z.boolean().default(true),
    }),
});

export const collections = { portfolio };
