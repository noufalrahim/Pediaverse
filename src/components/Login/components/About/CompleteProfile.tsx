import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { StudentDataType } from "@/types/StudentDataType";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { formSchema } from "./schema/StudentDataSchema";
import { z } from "zod";

interface CompleteProfileProps {
    setStudentData: (data: StudentDataType) => void;
    steps: {
        label: string;
    }[];
    activeStep: number;
    onSubmit: (data:  z.infer<typeof formSchema>) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: any;
}

export default function CompleteProfile({
    steps,
    activeStep,
    onSubmit,
    form,
}: CompleteProfileProps) {

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={"p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"}>
            <StepperComponent steps={steps} activeStep={activeStep} />
            <div className="text-center items-center justify-center flex flex-col">
                <IoIosCheckmarkCircle className="h-28 w-28 text-success" />
                <h1 className="text-2xl font-bold text-black">Profile Completed</h1>
                <p className="text-secondary-200">Your student information has been successfully submitted. Thank you.</p>
            </div>
            <div className="flex justify-end gap-2">
                <Button className="self-end  bg-success text-white px-10 py-6 hover:bg-success/90 w-full">
                    Get Started
                </Button>
            </div>
        </form>
    )
}