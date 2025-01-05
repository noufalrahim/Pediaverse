import { z } from "zod"

export const formSchema = z.object({
    fullName: z.string(),
    dateOfBirth: z.date(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
    city: z.string(),
    class12Mark: z.string(),
    medium: z.enum(['ENGLISH', 'MALAYALAM', 'OTHER']),
    board: z.enum(['CBSE', 'ICSE', 'STATE', 'OTHER']),
    interests: z.array(z.object({
        label: z.string(),
        value: z.string()
    })),
    dream: z.string()
})