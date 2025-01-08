import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DocumentsCard } from "../DocumentsCard";
import React from "react";

export default function SessionCard() {
    const [showMore, setShowMore] = React.useState(false);
    return (
        <div className="flex flex-col gap-5 font-mulish">
            <p className="text-md text-secondary-200 font-mulish">28th Wed Oct</p>
            <div className="flex flex-row gap-2 justify-between items-center font-mulish">
                <div className="flex flex-row gap-2 font-mulish">
                    <div className="bg-secondary-300 h-16 w-2 rounded-xl" />
                    <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="profile" className="h-16 w-16 rounded-xl" />
                    <div className="flex flex-col justify-between h-16">
                        <p className="font-bold text-sm font-mulish">Session Topic</p>
                        <p className="font-light text-sm font-mulish">8:00PM - 9:00PM</p>
                        <p className="font-light text-sm font-mulish text-secondary-300">Razik</p>
                    </div>
                </div>
                <Button className="bg-secondary-300 text-white hover:bg-secondary-300/80 rounded-xl">
                    Join
                </Button>
            </div>
            <div className="mx-5 my-2">
                <div className="flex justify-between flex-row">
                    <p className="text-secondary-200">Materials</p>
                   {
                    showMore ? (
                        <ChevronUp onClick={() => setShowMore(!showMore)} className="cursor-pointer"/>
                    ) : (
                        <ChevronDown onClick={() => setShowMore(!showMore)} className="cursor-pointer"/>
                    )
                   }
                </div>
                {
                    showMore && (
                        <>
                            <DocumentsCard />
                            <DocumentsCard />
                            <DocumentsCard />
                        </>
                    )
                }
            </div>
        </div>
    )
}