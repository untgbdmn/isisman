import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js";
import { sendEmail } from "./resend";
 
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({ user, url, token }, request ) => {
            await sendEmail({
                email: user.email,
                subject: "Reset Password",
                text: `Reset your password here: ${url}`,
            })
        }
    },
    plugins: [nextCookies()]
});