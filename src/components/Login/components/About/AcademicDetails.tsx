import { Input } from "@/components/ui/input";
import { Header } from "../Header";
import { StudentDataType } from "@/types/StudentDataType";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { cn } from "@/lib/cn";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, PlusCircle, Trash2 } from "lucide-react";
import { format } from "date-fns";
//import { useForm, Controller } from "react-hook-form";

interface AcademicDetailsProps {
  setStudentData: (data: StudentDataType) => void;
  steps: { label: string }[];
  activeStep: number;
  handleNext: () => void;
  handlePrev: () => void;
  form: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default function AcademicDetails({
  setStudentData,
  steps,
  activeStep,
  handleNext,
  handlePrev,
  form,
}: AcademicDetailsProps) {
  const { control, handleSubmit } = form;
  const [educations, setEducations] = useState([
    {
      instituteName: "",
      rollNo: "",
      course: "",
      startDate: null,
      endDate: null,
      currentlyStudying: false,
      cgpa: "",
    },
  ]);

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        instituteName: "",
        rollNo: "",
        course: "",
        startDate: null,
        endDate: null,
        currentlyStudying: false,
        cgpa: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    if (educations.length > 1) {
      setEducations(educations.filter((_, i) => i !== index));
    }
  };

  const onNext = (data: StudentDataType) => {
    setStudentData(data);
    handleNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onNext)}
      className="p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"
    >
      <StepperComponent steps={steps} activeStep={activeStep} />
      <Header
        title="Your Academic Background 🎓"
        description="Share details about your academic journey."
      >
        {educations.map((education, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 border p-4 rounded-lg relative"
          >
            <h3 className="text-lg font-semibold">Education {index + 1}</h3>

            <FormField
              control={control}
              name={`educations[${index}].instituteName`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Institute Name"
                      className="border border-primary-gray py-5 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`educations[${index}].rollNo`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Roll Number"
                      className="border border-primary-gray py-5 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`educations[${index}].course`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full py-5 border border-primary-gray">
                        <SelectValue placeholder="Select Course" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="BSc">BSc</SelectItem>
                        <SelectItem value="BTech">BTech</SelectItem>
                        <SelectItem value="BA">BA</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row gap-5">
              {/* Start Date */}
              <FormField
                name={`educations.${index}.startDate`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full border border-primary-gray py-5 rounded-lg pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? format(field.value, "PPP")
                              : "Start date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-white"
                          align="end"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* End Date */}
              <FormField
                name={`educations.${index}.endDate`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full border border-primary-gray py-5 rounded-lg pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? format(field.value, "PPP")
                              : "End date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-white"
                          align="end"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name={`educations[${index}].currentlyStudying`}
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <label className="text-sm">Currently Studying Here</label>
                </FormItem>
              )}
            />

            <Button
              variant="destructive"
              onClick={() => removeEducation(index)}
            >
              <Trash2 className="h-4 w-4 mr-2" /> Remove
            </Button>
          </div>
        ))}

        <Button className="mt-4" type="button" onClick={addEducation}>
          <PlusCircle className="h-5 w-5 mr-2" /> Add Another Degree
        </Button>
      </Header>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          className="self-end text-secondary-300 bg-white px-10 py-6 hover:bg-white/90"
          onClick={handlePrev}
        >
          Back
        </Button>
        <Button
          type="submit"
          className="self-end bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
