import { Input } from "@/components/ui/input";
import { Header } from "../../../components/Header";
import { StudentType } from "@/types/StudentType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn";
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface PersonalInformationProps {
  setStudentData: (data: StudentType) => void;
  steps: {
    label: string;
  }[];
  activeStep: number;
  handleNext: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}

export default function PersonalInformation({
  setStudentData,
  steps,
  activeStep,
  handleNext,
  form,
}: PersonalInformationProps) {
  //  console.log(setStudentData);

  const onNext = (data: StudentType) => {
    setStudentData(data);
    console.log(data)
    handleNext();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onNext)}
      className={cn(
        "p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"
      )}
    >
      <StepperComponent steps={steps} activeStep={activeStep} />
      <Header
        title="Tell Us About Yourself 😃"
        description="Provide your basic details to help us know you better and serve you better."
      >
        <div className="flex flex-row gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Full Name "
                    className="border border-primary-gray py-5 rounded-lg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                <Input
                  type="number"
                  placeholder="Age "
                  min="1"
                  max="130"
                  className="border border-primary-gray py-5 rounded-lg"
                  {...field}
                 />
              </FormControl>
            </FormItem>
            )}
          />

        </div>
        <div className="flex flex-row gap-5">
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border border-primary-gray py-5 rounded-lg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-5">
        
        <>
          {// <FormField
          //   control={form.control}
          //   name="Gender"
          //   render={({ field }) => (
          //     <FormItem className="w-full">
          //       <Select
          //         onValueChange={field.onChange}
          //         defaultValue={field.value}
          //       >
          //         <SelectTrigger className="w-full py-5 border border-primary-gray">
          //           <SelectValue placeholder="Gender" />
          //         </SelectTrigger>
          //         <SelectContent className="bg-white">
          //           <SelectItem value="MALE">Male</SelectItem>
          //           <SelectItem value="FEMALE">Female</SelectItem>
          //           <SelectItem value="OTHER">Other</SelectItem>
          //         </SelectContent>
          //       </Select>
          //       <FormMessage />
          //     </FormItem>
          //   )}
          // />
          }
        </>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full py-5 border border-primary-gray">
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="THIRUVANANTHAPURAM">Thiruvananthapuram</SelectItem>
                    <SelectItem value="KOTTAYAM">Kottayam</SelectItem>
                    <SelectItem value="ERNAKULAM">Ernakulam</SelectItem>
                    <SelectItem value="ALAPPUZHA">Alappuzha</SelectItem>
                    <SelectItem value="KOZHIKODE">Kozhikode</SelectItem>
                    <SelectItem value="KANNUR">Kannur</SelectItem>
                    <SelectItem value="IDUKKI">Idukki</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Header>
      <div className="flex justify-end gap-2">
        <Button
          className="self-end  bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90"
          onClick={() => onNext(form.getValues())}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
