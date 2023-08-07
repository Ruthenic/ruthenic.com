import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        wip: z.boolean().optional().default(false),
        pubDate: z.string().transform((dateStr) => new Date(dateStr)),
        tags: z.array(z.string()),
        normalizedTitle: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
