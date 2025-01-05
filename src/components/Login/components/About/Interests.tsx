import { StudentDataType } from "@/types/StudentDataType";
import { Header } from "../Header";
import { Badge } from "@/components/ui/badge"
import StepperComponent from "@/components/Stepper/Stepper";
import { Button } from "@/components/ui/button";

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

    const interests = [
        {
            label: "Sports 🏀",
            value: "sports"
        },
        {
            label: "Music 🎤",
            value: "music"
        },
        {
            label: "Reading 📖",
            value: "reading"
        },
        {
            label: "Art/Drawing 🎨",
            value: "art"
        },
        {
            label: "Coding/Programming 💻",
            value: "coding"
        },
        {
            label: "Writing ✍🏻",
            value: "writing"
        },
        {
            label: "Dance 🕺",
            value: "dance"
        },
        {
            label: "Photography 📸",
            value: "photography"
        },
        {
            label: "Gaming 🎮",
            value: "gaming"
        },
        {
            label: "Traveling 🏔️",
            value: "traveling"
        }
    ];

    const onNext = (data: StudentDataType) => {
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
                            <Badge key={index} className="px-5 py-3 m-2 bg-transparent text-gray-800 border border-primary-gray cursor-pointer">
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