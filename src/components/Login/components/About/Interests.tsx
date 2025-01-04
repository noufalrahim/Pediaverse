import { Header } from "../Header";
import { Badge } from "@/components/ui/badge"

export default function Interests() {

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

    return (
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
    );
}