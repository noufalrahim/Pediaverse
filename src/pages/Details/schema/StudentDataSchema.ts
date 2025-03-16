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
    fullName: z.string().min(1),
    dateOfBirth: z.date(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
    city: z.string().min(1),
    email: z.string().email(), // Ensures valid email format
    rollno: z.string().min(1),
    instituteName: z.string().min(1),
    course: z.string().min(1),

    educations: z.array(z.object({
        instituteName: z.string().min(1),
        rollNo: z.string().min(1),
        course: z.string().min(1),
        startDate: z.date().nullable(),
        endDate: z.date().nullable(), 
        currentlyStudying: z.boolean(),
        cgpa: z.union([z.number(), z.string().min(1)]) 
    })).min(1),

    cgpa: z.union([z.number(), z.string().min(1)]),

    skills: z.array(z.string().min(1)).min(1),
    
    interests: z.array(z.object({
        label: z.string().min(1),
        value: z.string().min(1)
    })).min(1),

    dream: z.string().min(1)
});
