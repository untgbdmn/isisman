import { z } from "zod";

export const schoolSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    npsn: z.string().optional(),
    status: z.enum(["Swasta", "Negeri"]),
    bentuk_pend: z.enum(["SMA", "SMK"]),
    kurikulum: z.string().optional(),
    akreditasi: z.string().optional(),
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
})