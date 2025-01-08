import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { IoDocument } from "react-icons/io5";

export default function DocumentsCard() {
    return (
        <div className="my-5 flex flex-row gap-2 items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
                <IoDocument className="text-secondary-300" size={24} />
                <p className="">Session PDF</p>
            </div>
            <Button className="bg-secondary-300/20 text-secondary-300 rounded-xl border border-secondary-300">
                <Eye size={16} />
                Read
            </Button>
        </div>
    )
}
