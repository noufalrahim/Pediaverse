import { Input } from "@/components/ui/input";
import { Header } from "../../../components/Header";
import { StudentType } from "@/types/StudentType";
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
import { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";


interface AcademicDetailsProps {
  setStudentData: (data: StudentType) => void;
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
      institute: "",
      course: "",
      startYear: null,
      endYear: null,
    },
  ]);

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        institute: "",
        course: "",
        startYear: null,
        endYear: null,
      },
    ]);
  };

  const removeEducation = (index: number) => {
    if (educations.length > 1) {
      setEducations(educations.filter((_, i) => i !== index));
    }
  };

  const onNext = (data: StudentType) => {
    console.log("onNext called with data:", data);
    setStudentData(data);
    handleNext();
  };

  console.log("Rendering AcademicDetails, activeStep:", activeStep);

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
        {educations.map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 border p-4 rounded-lg relative"
          >
            <h3 className="text-lg font-semibold">Education {index + 1}</h3>

            <FormField
              control={control}
              name={`educations[${index}].institute`}
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


            <>{ // <FormField
              //   control={control}
              //   name={`educations[${index}].rollNo`}
              //   render={({ field }) => (
              //     <FormItem>
              //       <FormControl>
              //         <Input
              //           {...field}
              //           placeholder="Roll Number"
              //           className="border border-primary-gray py-5 rounded-lg"
              //         />
              //       </FormControl>
              //       <FormMessage />
              //     </FormItem>
              //   )}
              // />
            }
            </>

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
              <FormField
                control={form.control}
                name={`educations[${index}].startYear`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Start Year "
                        className="border border-primary-gray py-5 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* End Year */}
              <FormField
                control={form.control}
                name={`educations[${index}].endYear`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="End Year "
                        className="border border-primary-gray py-5 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <>
              {// <FormField
                //   control={control}
                //   name={`educations[${index}].currentlyStudying`}
                //   render={({ field }) => (
                //     <FormItem className="flex items-center gap-2">
                //       <FormControl>
                //         <Checkbox
                //           checked={field.value}
                //           onCheckedChange={field.onChange}
                //         />
                //       </FormControl>
                //       <label className="text-sm">Currently Studying Here</label>
                //     </FormItem>
                //   )}
                // />
              }
            </>

            <Button
              variant="destructive"
              type="button" // Prevent form submission
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
          onClick={() => onNext(form.getValues())}
          className="self-end bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
