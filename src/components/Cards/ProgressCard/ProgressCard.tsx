import { cn } from "@/lib/utils";

interface ProgressCardProps {
    progress: number;
    label: string;
}

export default function ProgressCard({ progress, label }: ProgressCardProps) {
    return (
        <div className="w-1/6 h-[10rem]">
            <div className="bg-secondary-500 h-[7rem] rounded-xl justify-end flex flex-col">
                <div className={cn("bg-secondary-300 w-full rounded-b-xl")}
                    style={{ height: `${progress * 100}%` }} />
            </div>
            <p className="items-center text-center">{label}</p>
        </div>
    );
}
