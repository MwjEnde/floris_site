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

const homeCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        heroImage: z.string(),
        ctaText: z.string(),
        ctaLink: z.string(),
    }),
});

const uitvaartCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        ctaTitle: z.string(),
        ctaText: z.string(),
        ctaButtonText: z.string(),
        ctaButtonLink: z.string(),
    }),
});

const contactCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        email: z.string(),
        phone: z.string(),
        formAction: z.string(),
        successMessage: z.string(),
        errorMessage: z.string(),
    }),
});

export const collections = {
    concerts: concertsCollection,
    biography: biographyCollection,
    repertoire: repertoireCollection,
    home: homeCollection,
    uitvaart: uitvaartCollection,
    contact: contactCollection,
};
