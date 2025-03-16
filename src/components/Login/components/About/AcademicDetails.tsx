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
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

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
  const [currentlyStudying, setCurrentlyStudying] = useState(false);

  const onNext = (data: StudentDataType) => {
    setStudentData(data);
    handleNext();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onNext)}
      className={
        "p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"
      }
    >
      <StepperComponent steps={steps} activeStep={activeStep} />
      <Header
        title="Your Academic Background 🎓"
        description="Share details about your current academic level and performance."
      >
        <div className="flex flex-col gap-5">
          {/* Institute Name */}
          <FormField
            control={form.control}
            name="instituteName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Institute Name"
                    className="border border-primary-gray py-5 rounded-lg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rollNo"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Rollno"
                    className="border border-primary-gray py-5 rounded-lg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Course Selection */}
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem className="w-full">
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
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Start Date & End Date */}
          <div className="flex flex-row gap-5">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full border border-primary-gray py-5 rounded-lg pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Start date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white" align="end">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full border border-primary-gray py-5 rounded-lg pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                          disabled={currentlyStudying}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>End date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white" align="end">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Currently Studying Checkbox */}
          <div className="flex items-center gap-1">
            <Checkbox
              id="currentlyStudying"
              checked={currentlyStudying}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                setCurrentlyStudying(checked === true)
              }
            />

            <label htmlFor="currentlyStudying" className="text-sm">
              Currently Studying Here
            </label>
          </div>

          {/* Current CGPA */}
          <FormField
            control={form.control}
            name="cgpa"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="CGPA"
                    className="border border-primary-gray py-5 rounded-lg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </Header>
      {
        <div className="flex justify-end gap-2">
          <Button
            className="self-end  text-secondary-300 bg-white px-10 py-6 hover:bg-white/90"
            onClick={handlePrev}
          >
            Back
          </Button>
          <Button
            className="self-end  bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      }
    </form>
  );
}
