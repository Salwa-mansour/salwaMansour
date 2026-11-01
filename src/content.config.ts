import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        summary: z.string().max(200), // <-- Short description for your homepage list
        date: z.string(),
        techStack:z.array(z.string()),
        image: image().optional(),    // Optimized cover image
        url: z.string().url().optional(),
        gitHubUrl: z.string().url().optional(),
    }),
});
const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});
export const collections = {
    projects: projectsCollection,
    blog: blog,
};