import { StudentDataType } from "@/types/StudentDataType";
import { Header } from "../Header";
import { Badge } from "@/components/ui/badge"
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/cn";

const interestsList = [
    {
        label: "Sports 🏀",
        value: "sports",
        isSelected: false,
    },
    {
        label: "Music 🎤",
        value: "music",
        isSelected: false,
    },
    {
        label: "Reading 📖",
        value: "reading",
        isSelected: false,
    },
    {
        label: "Art/Drawing 🎨",
        value: "art",
        isSelected: false,
    },
    {
        label: "Coding/Programming 💻",
        value: "coding",
        isSelected: false,
    },
    {
        label: "Writing ✍🏻",
        value: "writing",
        isSelected: false,
    },
    {
        label: "Dance 🕺",
        value: "dance",
        isSelected: false,
    },
    {
        label: "Photography 📸",
        value: "photography",
        isSelected: false,
    },
    {
        label: "Gaming 🎮",
        value: "gaming",
        isSelected: false,
    },
    {
        label: "Traveling 🏔️",
        value: "traveling",
        isSelected: false,
    }
];
interface InterestsProps {
    setStudentData: (data: StudentDataType) => void;
    steps: {
        label: string;
    }[];
    activeStep: number;
    handleNext: () => void;
    handlePrev: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: any;
};

export default function Interests({
    setStudentData,
    steps,
    activeStep,
    handleNext,
    handlePrev,
    form,
}: InterestsProps) {

    const [interests, setInterests] = useState(interestsList);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    
    const handleSelected = (interest: { label: string; value: string; isSelected: boolean; }) => {
        const updatedInterests = interests.map((item) => {
            if (item.label === interest.label) {
                return {
                    ...item,
                    isSelected: !item.isSelected,
                }
            }
            return item;
        });
        setInterests(updatedInterests);
        setSelectedInterests(updatedInterests.filter((item) => item.isSelected).map((item) => item.value));
    }
    
    const onNext = (data: StudentDataType) => {
        console.log("selectedInterests", selectedInterests);
        setStudentData(data);
        handleNext();
    }



    return (
        <form onSubmit={form.handleSubmit(onNext)} className={"p-4 my-10 flex flex-col rounded-xl w-3/4 border border-primary-gray justify-between"}>
            <StepperComponent steps={steps} activeStep={activeStep} />
            <Header
                title="Discover Your Interests 🎨🖌️"
                description="Select the hobbies that interest you the most or add your own."
            >
                <div>
                    {
                        interests.map((interest, index) => (
                            <Badge key={index} className={cn("px-5 py-3 m-2 bg-transparent border text-gray-800 cursor-pointer",
                                interest.isSelected ? "border-secondary-300" : "border-primary-gray"
                            )} onClick={() => handleSelected(interest)}>
                                {interest.label}
                            </Badge>
                        ))
                    }
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