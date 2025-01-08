import { SessionCard } from "../Cards/SessionCard";
import { Button } from "../ui/button";

export default function Sessions() {
    return (
        <div className="w-1/3 bg-white shadow-lg rounded-xl max-h-screen overflow-auto">
            <div className="flex justify-between items-center m-5">
                <h1 className="font-mulish text-xl font-bold">Upcoming Sessions</h1>
                <Button className="text-secondary-300 bg-secondary-400 hover:bg-secondary-400/80 rounded-full">
                    See all
                </Button>
            </div>
            <div className="m-5 space-y-4">
                <SessionCard />
                <SessionCard />
                <SessionCard />
                <SessionCard />
                <SessionCard />
                <SessionCard />
                <SessionCard />
            </div>
        </div>
    );
}
