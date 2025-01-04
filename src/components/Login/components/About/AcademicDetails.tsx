import { Input } from "@/components/ui/input";
import { Header } from "../Header";

export default function AcademicDetails() {
    return (
        <Header
            title="Your Academic Background 🎓"
            description="Share details about your current academic level and performance."
        >
            <div className="flex flex-row gap-5">
                <Input placeholder="Class (12th)" className="border border-primary-gray py-5 rounded-lg" />
            </div>
            <div className="flex flex-row gap-5">
                <Input placeholder="Medium (English)" className="border border-primary-gray py-5 rounded-lg" />
                <Input placeholder="Board (CBSE)" className="border border-primary-gray py-5 rounded-lg" />
            </div>
        </Header>
    );
}