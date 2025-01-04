import { Input } from "@/components/ui/input";
import { Header } from "../Header";

export default function PersonalInformation() {
    return (
        <Header
            title="Tell Us About Yourself 😃"
            description="Provide your basic details to help us know you better."
        >
            <div className="flex flex-row gap-5">
                <Input placeholder="Full Name (Jeo alan)" className="border border-primary-gray py-5 rounded-lg" />
                <Input placeholder="Full Name (Jeo alan)" className="border border-primary-gray py-5 rounded-lg" />
            </div>
            <div className="flex flex-row gap-5">
                <Input placeholder="Full Name (Jeo alan)" className="border border-primary-gray py-5 rounded-lg" />
                <Input placeholder="Full Name (Jeo alan)" className="border border-primary-gray py-5 rounded-lg" />
            </div>
        </Header>
    );
}