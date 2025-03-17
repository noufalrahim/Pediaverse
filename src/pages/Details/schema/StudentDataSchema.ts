import {  z } from "zod"

/*export const formSchema = z.object({
    fullName: z.string(),
    dateOfBirth: z.date(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
    email:z.string(),
    city: z.string(),
    educations :z.a,
    //medium: z.enum(['ENGLISH', 'LOCAL', 'OTHER']),
    //rollno:z.string(),
    //instituteName: z.string(),
    //course: z.string(),
    //startDate: z.date(),
    //endDate: z.date(),
    //cgpa: z.number(),
    //board: z.enum(['CBSE', 'ICSE', 'STATE', 'OTHER']),
    interests: z.array(z.object({
        label: z.string(),
        value: z.string()
    })),
    skills:z.array(string()),
    dream: z.string()
})
    */
//import { z } from "zod";

export const formSchema = z.object({

        name: z.string().min(1),
        rollNo: z.string().min(1),
        age: z.number(),
        mail: z.string().email(), // Ensures valid email format
        phoneNumber: z.string().min(1),
        courseYear: z.number(),
        location: z.string().min(1),

    educations: z.array(z.object({
        institute: z.string().min(1),
        course: z.string().min(1),
        startYear: z.number(),
        endYear: z.number()
    })).min(1),
  
    skillsandinterests: z.array(z.object({
        skillName: z.string().min(1),
        level: z.number().default(1)
    })).min(1),

    dream: z.string().min(1)
});
