import { BarChart2Icon, CalendarIcon } from 'lucide-react';
import { FiChevronsUp } from 'react-icons/fi';
import { ProgressCard } from '../ProgressCard';

export default function OverviewCard() {

    const progressList = [
        {
            progress: 0.2,
            label: 'Communication'
        },
        {
            progress: 0.1,
            label: 'Critical Thinking'
        },
        {
            progress: 0.06,
            label: 'Problem Solving'
        },
        {
            progress: 0.2,
            label: 'Creative Thinking'
        },
        {
            progress: 0.07,
            label: 'Decision Making'
        },
        {
            progress: 0.1,
            label: 'Observation Skills'
        }
    ];

    return (
        <div className='py-10'>
            <p className="text-2xl font-bold font-mulish">Overview</p>
            <div className="my-5 border border-secondary-200/40 rounded-xl p-5 flex items-center justify-start gap-5">
                <BarChart2Icon size={56} className="bg-secondary-400 text-secondary-300 rounded-full p-1" />
                <div className="font-mulish">
                    <p className="text-secondary-200 text-lg text-primary-gray-2 font-bold">Skill Proficiency Index</p>
                    <p className="text-2xl font-mulish">745<span className="text-xl text-primary-gray-2 font-bold">/1000</span></p>
                </div>
            </div>
            <div className="my-5 border border-secondary-200/40 rounded-xl p-5 flex flex-col items-start justify-between gap-5 font-mulish">
                <div className="border-b-2 border-dashed border-secondary-200/40 flex items-center justify-between gap-5 pb-5 w-full">
                    <div className='flex flex-row items-start justify-between gap-5 w-full'>
                        <div className="font-mulish">
                            <p className="text-lg text-primary-gray-2">Your Progress</p>
                            <div className="flex items-center gap-2 my-2">
                                <p className="text-3xl font-bold">2.4</p>
                                <FiChevronsUp className="text-green-600" size={24} />
                            </div>
                            <p className="text-sm text-primary-gray-2">Compared to Previous Month</p>
                        </div>
                        <div className="border border-primary-gray rounded-xl p-2 flex items-center gap-2">
                            <p className="text-primary-gray-2 font-mulish">2024</p>
                            <div className="h-5 w-[1px] bg-primary-gray-2" />
                            <CalendarIcon className="text-primary-gray-2" size={18} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-full items-center justify-between gap-5'>
                    {
                        progressList.map((item, index) => (
                            <ProgressCard key={index} progress={item.progress} label={item.label} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
