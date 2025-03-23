import { StudentDataType } from "@/types/StudentDataType";
import { Header } from "../../../components/Header";
import { Badge } from "@/components/ui/badge";
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/cn";

const categorizedInterests = {
  Technology: [
    { skillName: "Coding/Programming 💻", value: "coding" },
    { skillName: "Gaming 🎮", value: "gaming" },
  ],
  "Non-Technical": [
    { skillName: "Sports 🏀", value: "sports" },
    { skillName: "Traveling 🏔️", value: "traveling" },
  ],
  "Art & Creativity": [
    { skillName: "Music 🎤", value: "music" },
    { skillName: "Art/Drawing 🎨", value: "art" },
    { skillName: "Photography 📸", value: "photography" },
    { skillName: "Writing ✍🏻", value: "writing" },
    { skillName: "Dance 🕺", value: "dance" },
  ],
  Academics: [{ skillName: "Reading 📖", value: "reading" }],
};


interface InterestsProps {
  setStudentData: (data: StudentDataType) => void;
  steps: { label: string }[];
  activeStep: number;
  handleNext: () => void;
  handlePrev: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}

export default function Interests({
  setStudentData,
  steps,
  activeStep,
  handleNext,
  handlePrev,
  form,
}: InterestsProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Sync interests with form state
  // useEffect(() => {
  //   console.log("Syncing interests to form:", selectedInterests);
  //   setValue("interests", selectedInterests);
  // }, [selectedInterests, setValue]);

  const handleSelected = (value: string) => {
    setSelectedInterests((prev) => {
      const newInterests = prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];
      console.log("Selected interests:", newInterests);
      return newInterests;
    });
  };

  const onNext = (data: StudentDataType) => {
    console.log("onNext called with:", { ...data, interests: selectedInterests });
    setStudentData({ ...data, interests: selectedInterests });
    handleNext();
  };

  console.log("Rendering Interests, activeStep:", activeStep);

  return (
    <form
      onSubmit={form.handleSubmit(onNext)}
      className="p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"
    >
      <StepperComponent steps={steps} activeStep={activeStep} />
      <Header
        title="Discover Your Interests 🎨🖌️"
        description="Select the hobbies that interest you the most."
      >
        {Object.entries(categorizedInterests).map(([category, interests]) => (
          <div key={category} className="my-4">
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest.value}
                  className={cn(
                    "px-5 py-3 bg-transparent border text-gray-800 cursor-pointer",
                    selectedInterests.includes(interest.value)
                      ? "border-secondary-300 bg-secondary-100"
                      : "border-primary-gray"
                  )}
                  onClick={() => handleSelected(interest.value)}
                >
                  {interest.skillName}
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
          type="submit"
          onClick={handleNext}
          className="self-end bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90"
        >
          Next
        </Button>
      </div>
    </form>
  );
}