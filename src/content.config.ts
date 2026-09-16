import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        summary: z.string().max(200), // <-- Short description for your homepage list
        date: z.string(),
        image: image().optional(),    // Optimized cover image
    }),
});

export const collections = {
    projects: projectsCollection,
};