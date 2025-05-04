import { z } from "zod";

export const signUpSchema = z.object({
  fullname: z.string().min(3),
  email: z.string().email("Invalid email format"),
  university_id: z.string().min(1, "University ID is required"),
});
