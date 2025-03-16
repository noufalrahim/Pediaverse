import { Header } from "../../../components/Header";
import { Badge } from "@/components/ui/badge";
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { useFormContext } from "react-hook-form";
import { StudentDataType } from "@/types/StudentDataType";

const categorizedSkills = {
  "Technical Skills": [
    { skillName: "Web Development 🌐", value: "web_dev" },
    { skillName: "Data Science 📊", value: "data_science" },
    { skillName: "Machine Learning 🤖", value: "machine_learning" },
    { skillName: "Cybersecurity 🔒", value: "cybersecurity" },
  ],
  "Soft Skills": [
    { skillName: "Communication 🗣", value: "communication" },
    { skillName: "Leadership 👨‍💼", value: "leadership" },
    { skillName: "Problem-Solving 🧩", value: "problem_solving" },
  ],
  "Creative Skills": [
    { skillName: "Graphic Design 🎨", value: "graphic_design" },
    { skillName: "Video Editing 🎬", value: "video_editing" },
    { skillName: "Writing ✍🏻", value: "writing" },
  ],
  "Other Skills": [
    { skillName: "Project Management 📂", value: "project_management" },
    { skillName: "Marketing 📢", value: "marketing" },
  ],
};

interface SkillsProps {
  steps: { label: string }[];
  activeStep: number;
  handleNext: (data: any) => void;
  handlePrev: () => void;
  form: any;
}

export default function Skills({
  steps,
  activeStep,
  handleNext,
  handlePrev,
  form,
}: SkillsProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { setValue, getValues } = useFormContext();

  useEffect(() => {
    setValue("skillsandinterests", selectedSkills);
  }, [selectedSkills, setValue]);

  const handleSelected = (value: string) => {
    setSelectedSkills((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const onSubmit = (data: any) => {
    handleNext(data); // Pass the updated data to the next step
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"
    >
      <StepperComponent steps={steps} activeStep={activeStep} />
      <Header title="Showcase Your Skills 💡" description="Select the skills that best define your expertise.">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="my-4">
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill.value}
                  className={cn(
                    "px-5 py-3 bg-transparent border text-gray-800 cursor-pointer",
                    selectedSkills.includes(skill.value) ? "border-secondary-300" : "border-primary-gray"
                  )}
                  onClick={() => handleSelected(skill.value)}
                >
                  {skill.skillName}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </Header>
      <div className="flex justify-end gap-2">
        <Button type="button" className="text-secondary-300 bg-white px-10 py-6 hover:bg-white/90" onClick={handlePrev}>
          Back
        </Button>
        <Button type="button" onClick={onSubmit}  className="bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90">
          Next
        </Button>
      </div>
    </form>
  );
}
