//-------------------------Imports-------------------------
import {
  AcademicDetails,
  CompleteProfile,
  Dream,
  Interests,
  PersonalInformation,
  Skills,
} from "@/components/Login/components/About";
import { OtpInput, PhoneNoInput } from "@/components/Login/components/Inputs";
import { StudentDataType } from "@/types/StudentDataType";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {  z } from "zod";
import { formSchema } from "@/components/Login/components/About/schema/StudentDataSchema";
import { Form } from "@/components/ui/form";

export default function DetailsLayout() {
  //-------------------------Variables-------------------------
  const steps = [
    { label: "Personal Information" },
    { label: "Academic Details" },
    { label: "Skills" },
    { label: "Hobbies" },
    { label: "Dream" },
    { label: "Complete Profile" },
  ];

  //-------------------------States and Hooks-------------------------
  const [activeStep, setActiveStep] = useState<number>(0);
  const [renderIndex, setRenderIndex] = useState<{
    type: "login" | "about";
    index: string;
  }>({ type: "login", index: "phone" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_studentData, setStudentData] = useState<StudentDataType | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      //city: "",
      email: "",
      educations: [
        {
          instituteName: "",
          rollNo: "",
          course: "",
        },
      ],
      skills: [],
      interests: [],
    },
  });

  //-------------------------Functions-------------------------
  const RenderComponent = ({
    type,
    index,
  }: {
    type: "login" | "about";
    index: string;
  }) => {
    if (type === "login") {
      return index === "phone" ? (
        <PhoneNoInput setRenderIndex={setRenderIndex} />
      ) : index === "otp" ? (
        <OtpInput setRenderIndex={setRenderIndex} />
      ) : null;
    }

    const aboutComponents: { [key: string]: JSX.Element } = {
      "1": (
        <PersonalInformation
          setStudentData={setStudentData}
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          form={form}
        />
      ),
      "2": (
        <AcademicDetails
          setStudentData={setStudentData}
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          form={form}
        />
      ),
      "3": (
        <Skills
          setStudentData={setStudentData}
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          form={form}
        />
      ),
      "4": (
        <Interests
          setStudentData={setStudentData}
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          form={form}
        />
      ),
      "5": (
        <Dream
          setStudentData={setStudentData}
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          form={form}
        />
      ),
      "6": (
        <CompleteProfile
          setStudentData={setStudentData}
          steps={steps}
          activeStep={activeStep}
          onSubmit={onSubmit}
          form={form}
        />
      ),
    };

    return aboutComponents[index] || null;
  };

  const handlePrev = () => {
    setRenderIndex((prev) => ({
      ...prev,
      index: (parseInt(prev.index) - 1).toString(),
    }));
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    console.log(form.getValues());
    setRenderIndex((prev) => ({
      ...prev,
      index: (parseInt(prev.index) + 1).toString(),
    }));
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values);
  }

  //-------------------------Render-------------------------
  return (
    <div className="bg-secondary-100 p-4 flex flex-row max-w-7xl mx-auto shadow-xl rounded-xl">
      <div className="w-1/2">
        <img
          src="/layoutImage.png"
          alt="placeholder"
          className="w-[40rem] h-[40rem] object-cover"
        />
      </div>
      <Form {...form}>{RenderComponent(renderIndex)}</Form>
    </div>
  );
}
