"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNewsSchema = exports.createNewsSchema = void 0;
const zod_1 = require("zod");
exports.createNewsSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(1, { message: "Title must not be empty." }),
        time: zod_1.z
            .string()
            .min(1, { message: "Time must not be empty." }),
        description: zod_1.z
            .string()
            .min(4, { message: "Description must be greater than 4 characters." }),
        link: zod_1.z
            .string()
            .min(1, { message: "Link must not be empty." }),
    })
});
exports.updateNewsSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(1, { message: "Title must not be empty." }),
        time: zod_1.z
            .string()
            .min(1, { message: "Time must not be empty." }),
        description: zod_1.z
            .string()
            .min(4, { message: "Description must be greater than 4 characters." }),
        link: zod_1.z
            .string()
            .min(1, { message: "Link must not be empty." }),
    }).partial(),
});
