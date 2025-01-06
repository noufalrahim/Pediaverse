import { Input } from "@/components/ui/input";
import { Header } from "../Header";
import { StudentDataType } from "@/types/StudentDataType";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

interface AcademicDetailsProps {
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

export default function AcademicDetails({
    setStudentData,
    steps,
    activeStep,
    handleNext,
    handlePrev,
    form,
}: AcademicDetailsProps) {

    const onNext = (data: StudentDataType) => {
        setStudentData(data);
        handleNext();
    }

    return (
        <form onSubmit={form.handleSubmit(onNext)} className={"p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"}>
            <StepperComponent steps={steps} activeStep={activeStep} />
            <Header
                title="Your Academic Background 🎓"
                description="Share details about your current academic level and performance."
            >
                <div className="flex flex-row gap-5">
                    <FormField
                        control={form.control}
                        name="class12th"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Class (12th)" className="border border-primary-gray py-5 rounded-lg" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-row gap-5">
                    <FormField
                        control={form.control}
                        name="medium"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full py-5 border border-primary-gray">
                                        <SelectValue placeholder="Medium" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="ENGLISH">English</SelectItem>
                                        <SelectItem value="Malyalam">Malayalam</SelectItem>
                                        <SelectItem value="OTHER">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="board"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full py-5 border border-primary-gray">
                                    <SelectValue placeholder="Board (CBSE)" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="CBSE">CBSE</SelectItem>
                                    <SelectItem value="ICSE">ICSE</SelectItem>
                                    <SelectItem value="STATE">State</SelectItem>
                                    <SelectItem value="OTHER">Other</SelectItem>
                                </SelectContent>
                                <FormMessage />
                            </Select>
                        )}
                    />
                </div>
            </Header>
            {
                <div className="flex justify-end gap-2">
                    <Button className="self-end  text-secondary-300 bg-white px-10 py-6 hover:bg-white/90" onClick={handlePrev}>
                        Back
                    </Button>
                    <Button className="self-end  bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90" onClick={handleNext}>
                        Next
                    </Button>
                </div>

            }
        </form>
    );
}