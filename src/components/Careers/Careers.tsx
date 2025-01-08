import { useState } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { OverviewCard } from "../Cards/OverviewCard";
import { NotificationCard } from "../Cards/NotificationCard";

const careersList = [
    {
        label: 'Sports Analyst',
        value: 'sports_analyst',
        isSelected: false,
    },
    {
        label: 'Music Producer',
        value: 'music_producer',
        isSelected: false,
    },
    {
        label: 'Art Director',
        value: 'art_director',
        isSelected: false,
    },
    {
        label: 'Software Engineer',
        value: 'software_engineer',
        isSelected: false,
    },
    {
        label: 'Content Writer',
        value: 'content_writer',
        isSelected: false,
    },
    {
        label: 'Videographer',
        value: 'videographer',
        isSelected: false,
    },
    {
        label: 'Choreographer',
        value: 'choreographer',
        isSelected: false,
    },
    {
        label: 'Game Designer',
        value: 'game_designer',
        isSelected: false,
    }
]

export default function Careers() {

    const [careers, setCareers] = useState(careersList);
    const [selectedCareers, setSelectedCareers] = useState<string[]>([]);
    console.log(selectedCareers);
    const handleSelected = (interest: { label: string; value: string; isSelected: boolean; }) => {
        const updatedCareers = careers.map((item) => {
            if (item.label === interest.label) {
                return {
                    ...item,
                    isSelected: !item.isSelected,
                }
            }
            return item;
        });
        setCareers(updatedCareers);
        setSelectedCareers(updatedCareers.filter((item) => item.isSelected).map((item) => item.value));
    }

    return (
        <div className='w-3/5 mx-5 bg-white shadow-lg rounded-2xl p-5'>
            <p className="text-lg font-mulish font-semibold">Career Opportunities That Fit Your Profile</p>
            <NotificationCard />
            <div >
                <p className="font-mulish text-secondary-600">Choose a career</p>
                <div className="my-2 grid grid-cols-4 gap-5">
                    {
                        careers.map((career, index) => (
                            <Badge key={index} className={cn("px-5 py-3 mx-1 bg-transparent border text-gray-800 cursor-pointer rounded-full items-center text-center justify-center text-secondary-200 flex text-sm",
                                career.isSelected ? "border-secondary-200" : "border-primary-gray"
                            )} onClick={() => handleSelected(career)}>
                                {career.label}
                            </Badge>
                        ))
                    }
                </div>
                <OverviewCard />
            </div>
        </div>
    )
}
