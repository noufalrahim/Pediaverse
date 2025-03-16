import { StudentDataType } from "@/types/StudentDataType";
import { Header } from "../../../components/Header";
import { Badge } from "@/components/ui/badge";
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { useFormContext } from "react-hook-form";

const categorizedSkills = {
  "Technical Skills": [
    { label: "Web Development 🌐", value: "web_dev" },
    { label: "Data Science 📊", value: "data_science" },
    { label: "Machine Learning 🤖", value: "machine_learning" },
    { label: "Cybersecurity 🔒", value: "cybersecurity" },
  ],
  "Soft Skills": [
    { label: "Communication 🗣", value: "communication" },
    { label: "Leadership 👨‍💼", value: "leadership" },
    { label: "Problem-Solving 🧩", value: "problem_solving" },
  ],
  "Creative Skills": [
    { label: "Graphic Design 🎨", value: "graphic_design" },
    { label: "Video Editing 🎬", value: "video_editing" },
    { label: "Writing ✍🏻", value: "writing" },
  ],
  "Other Skills": [
    { label: "Project Management 📂", value: "project_management" },
    { label: "Marketing 📢", value: "marketing" },
  ],
};

interface SkillsProps {
  setStudentData: (data: StudentDataType) => void;
  steps: { label: string }[];
  activeStep: number;
  handleNext: () => void;
  handlePrev: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}

export default function Skills({
  setStudentData,
  steps,
  activeStep,
  handleNext,
  handlePrev,
  form,
}: SkillsProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("skills", selectedSkills);
  }, [selectedSkills, setValue]);

  const handleSelected = (value: string) => {
    setSelectedSkills((prev) => {
      const newSkills = prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];
      console.log("Selected skills:", newSkills); // Debug log
      return newSkills;
    });
  };

  const onSubmit = (data: StudentDataType) => {
    console.log("Submitting with skills:", selectedSkills); // Debug log
    setStudentData({ ...data, skills: selectedSkills });
    handleNext();
  };

  console.log("Rendering Skills component, activeStep:", activeStep); // Debug log

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"
    >
      <StepperComponent steps={steps} activeStep={activeStep} />
      <Header
        title="Showcase Your Skills 💡"
        description="Select the skills that best define your expertise."
      >
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="my-4">
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill.value}
                  className={cn(
                    "px-5 py-3 bg-transparent border text-gray-800 cursor-pointer",
                    selectedSkills.includes(skill.value)
                      ? "border-secondary-300"
                      : "border-primary-gray"
                  )}
                  onClick={() => handleSelected(skill.value)}
                >
                  {skill.label}
                </Badge>
              ))}
            </div>
          </div>
        ))}
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
          type="submit" onClick={handleNext}

          className="self-end bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90"
        >
          Next
        </Button>
      </div>
    </form>
  );
}