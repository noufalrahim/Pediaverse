import { Textarea } from "@/components/ui/textarea";
import { Header } from "../Header";
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { StudentDataType } from "@/types/StudentDataType";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

interface DreamProps {
    setStudentData: (data: StudentDataType) => void;
    steps: {
        label: string;
    }[];
    activeStep: number;
    handleNext: () => void;
    handlePrev: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: any;
}

export default function Dream({
    setStudentData,
    steps,
    activeStep,
    handleNext,
    handlePrev,
    form,
}: DreamProps
) {

    const onNext = (data: StudentDataType) => {
        setStudentData(data);
        handleNext();
    }


    return (
        <form onSubmit={form.handleSubmit(onNext)} className={"p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"}>
            <StepperComponent steps={steps} activeStep={activeStep} />
            <Header
                title="Share Your Dream 🤩"
                description="What is your biggest dream or goal? Write about your aspirations and what you hope to achieve in the future."
            >
                <FormField
                    control={form.control}
                    name="Dream"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Textarea placeholder="Type here (Optional)" className="border-primary-gray min-h-60" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </Header>
            {
                <div className="flex justify-end gap-2">
                    <Button className="self-end  text-secondary-300 bg-white px-10 py-6 hover:bg-white/90" onClick={handlePrev}>
                        Back
                    </Button>
                    <Button className="self-end  bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90"  onClick={handleNext} type="submit">
                        Next
                    </Button>
                </div>
            }
        </form>
    )
}