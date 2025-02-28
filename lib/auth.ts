import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
 
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true
    },
    advanced: {
        cookies: {
            session_token: {
                name: "auth-isisman",
                attributes: {
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    path: '/'
                }
            }
        }
    }
});