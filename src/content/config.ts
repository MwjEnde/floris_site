import { defineCollection, z } from 'astro:content';

const concertsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        time: z.string().optional(),
        location: z.string().optional(),
        ticketLink: z.string().optional(),
    }),
});

const biographyCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        portrait: z.string().optional(),
    }),
});

const repertoireCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        youtubeUrl: z.string(),
        composer: z.string().optional(),
    }),
});

export const collections = {
    concerts: concertsCollection,
    biography: biographyCollection,
    repertoire: repertoireCollection,
};
