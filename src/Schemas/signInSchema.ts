import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({
    message: "real id se aao"
  }),
  password: z
  .string()
  .min(8, "bhai chota password hai")
  .max(20, "bhai bht bada password hai"),
});
