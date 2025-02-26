import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message:"Password must be at least 8 characters.",
    }),
    remember_me: z.boolean().default(false).optional()
})

export const registerSchema = z.object({
    fullname: z.string().min(3, {
        message: "fullname must be at least 3 characters.",
    }),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message:"Password must be at least 8 characters.",
    })
})
