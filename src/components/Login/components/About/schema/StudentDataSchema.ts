import { string, z } from "zod"

export const formSchema = z.object({
    fullName: z.string(),
    dateOfBirth: z.date(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
    email:z.string(),
    city: z.string(),
    //medium: z.enum(['ENGLISH', 'LOCAL', 'OTHER']),
    rollno:z.string(),
    instituteName: z.string(),
    course: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    cgpa: z.number(),
    //board: z.enum(['CBSE', 'ICSE', 'STATE', 'OTHER']),
    interests: z.array(z.object({
        label: z.string(),
        value: z.string()
    })),
    skills:z.array(string()),
    dream: z.string()
})