import {z} from "zod"

export const createNewsSchema = z.object({
    body: z.object({
        title: z
            .string()
            .min(1, {message: "Title must not be empty."}),
        time: z
            .string()
            .min(1, {message: "Time must not be empty."}),
        description: z
            .string()
            .min(4, {message: "Description must be greater than 4 characters."}),
        link: z
            .string()
            .min(1, {message: "Link must not be empty."}),
    })
})

export const updateNewsSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z.object({
        title: z
            .string()
            .min(1, {message: "Title must not be empty."}),
        time: z
            .string()
            .min(1, {message: "Time must not be empty."}),
        description: z
            .string()
            .min(4, {message: "Description must be greater than 4 characters."}),
        link: z
            .string()
            .min(1, {message: "Link must not be empty."}),
    }).partial(),
});