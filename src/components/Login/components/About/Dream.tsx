import { Textarea } from "@/components/ui/textarea";
import { Header } from "../Header";

export default function Dream() {
    return (
        <Header
            title="Share Your Dream 🤩"
            description="What is your biggest dream or goal? Write about your aspirations and what you hope to achieve in the future."
        >
            <Textarea placeholder="Type here (Optional)" className="border-primary-gray min-h-60"/>
        </Header>
    )
}