/* eslint-disable @typescript-eslint/no-explicit-any */
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { StudentDataType } from "@/types/StudentDataType";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { formSchema } from "./schema/StudentDataSchema";
import { z } from "zod";
import { useCreateData } from "@/hooks/useCreateData";
import { generateRandomString } from "@/utils/generateRandomString";
import { EducationType } from "@/types/EducationType";
import { StudentType } from "@/types/StudentType";

interface CompleteProfileProps {
    setStudentData: (data: StudentDataType) => void;
    steps: {
        label: string;
    }[];
    activeStep: number;
    onSubmit: (data: z.infer<typeof formSchema>) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: any;
}

export default function CompleteProfile({
    steps,
    activeStep,
    onSubmit,
    form,
}: CompleteProfileProps) {

    const { mutate: studentMutate, 
        // isPending, 
        // isError 
    } = useCreateData<StudentType>("/students");
    const { mutate: educationMutate } = useCreateData<EducationType>("/educations");


    const handleSubmit = (data: any) => {
        console.log(data);
        const studentData: StudentType = {
            name: generateRandomString(6),
            age: Math.floor(Math.random() * 10) + 18, // Random age between 18-27
            mail: `${generateRandomString(5)}@${generateRandomString(3)}.com`,
            rollNo: generateRandomString(8),
            course: ["BTECH", "MTECH", "BSC", "MSC"][Math.floor(Math.random() * 4)],
            phoneNumber: `${Math.floor(9000000000 + Math.random() * 1000000000)}`, // Random 10-digit number
            courseYear: Math.floor(Math.random() * 4) + 1, // Random year 1-4
            location: ["USA", "India", "UK", "Canada", "Germany"][Math.floor(Math.random() * 5)]
        };

        studentMutate(studentData, {
            onSuccess: (data) => {
                const educationDetails: EducationType = {
                    studentId: data.id!,
                    institute: generateRandomString(8),
                    course: data.course,
                    startYear: Math.floor(Math.random() * 2000),
                    endYear: Math.floor(Math.random() * 2000) 
                }; 

                educationMutate(educationDetails, {
                    onSuccess: (data) => {
                        console.log("success", data);
                        
                    },
                    onError: (error) => {
                        console.log(error)
                    }
                })
            },
            onError: (error) => {
                console.log(error)
            }
        })
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={"p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"}>
            <StepperComponent steps={steps} activeStep={activeStep} />
            <div className="text-center items-center justify-center flex flex-col">
                <IoIosCheckmarkCircle className="h-28 w-28 text-success" />
                <h1 className="text-2xl font-bold text-black">Profile Completed</h1>
                <p className="text-secondary-200">Your student information has been successfully submitted. Thank you.</p>
            </div>
            <div className="flex justify-end gap-2">
                <Button className="self-end  bg-success text-white px-10 py-6 hover:bg-success/90 w-full" onClick={() => handleSubmit(form.getValues())}>
                    Get Started
                </Button>
            </div>
        </form>
    )
}