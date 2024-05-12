
import { z } from "zod";

export const messageSchema  = z.object({
    Content: z.string().min(10,"bhai feedback de rhe ho koi rating nhi").max(
        200,"bhai feedback de rhe ho ki kahani suna rhe ho"
    )
})
    