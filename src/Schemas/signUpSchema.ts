
import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3,"bhai chota nam hai")
    .max(15,"bhai bht bada nam hai")
    .regex(/^[a-zA-Z0-9]+$/,"jada gen z na bano");

export const SignUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({
     message:    'real id se aao'
    }),
    password: z
        .string()
        .min(8, "bhai chota password hai")
        .max(20, "bhai bht bada password hai"),
    confirmPassword: z.string().min(8, "bhai chota password hai")
})