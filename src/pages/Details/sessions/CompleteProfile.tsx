/* eslint-disable @typescript-eslint/no-explicit-any */
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { StudentDataType } from "@/types/StudentDataType";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { formSchema } from "../schema/StudentDataSchema";
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
            name: data.name,
            age: parseInt(data.age), // Random age between 18-27
            mail: data.mail,
            rollNo: generateRandomString(8),
            course: (data.education && data.education.length > 0) ? data.education[0].course : 'BSc',
            phoneNumber: `${Math.floor(9000000000 + Math.random() * 1000000000)}`,
            courseYear: Math.floor(Math.random() * 4) + 1,
            location: data.location,
        };

        studentMutate(studentData, {
            onSuccess: (respData) => {
                const educationDetails: EducationType = {
                    studentId: respData.id!,
                    institute: (data.education && data.education.length > 0) ? data.education[0].institute : 'College',
                    course: (data.education && data.education.length > 0) ? data.education[0].course : 'BSc',
                    startYear: (data.education && data.education.length > 0) ? data.education[0].startYear : 2021,
                    endYear: (data.education && data.education.length > 0) ? data.education[0].endYear : 2026,
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