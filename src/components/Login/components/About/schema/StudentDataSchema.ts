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
    fullName: z.string(),
    dateOfBirth: z.date(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
    email: z.string().email(), // Ensures valid email format
    city: z.string(),

    educations: z.array(z.object({
        instituteName: z.string(),
        rollNo: z.string(),
        course: z.string(),
        startDate: z.date().nullable(), // Allows null if not available
        endDate: z.date().nullable(),
        currentlyStudying: z.boolean(),
        cgpa: z.number()
    })),
    
    interests: z.array(z.object({
        label: z.string(),
        value: z.string()
    })),

    skills: z.array(z.string()),

    dream: z.string()
});
