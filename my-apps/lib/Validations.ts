import { z } from "zod";

export const signUpSchema = z.object({
    fullName: z.string.min(3),
    email : z.string.email(),
    universityId: z.coerce.number(),
});
