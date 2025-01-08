import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function NotificationCard() {
    return (
        <div className="border border-[#FEEAA9] bg-[#FFFCF2] rounded-xl py-2 px-3 flex flex-row items-center justify-start gap-2 my-5">
            <div className="flex flex-row-reverse justify-end -space-x-3 space-x-reverse *:ring *:ring-background">
                <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/88.jpg" />
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/88.jpg" />
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/88.jpg" />
                </Avatar>
            </div>
            <p className="font-mulish">
                In this career, 10,000 people are working with an average package of <span className="text-[#FB9405]">₹12 lakh per annum (LPA).</span>
            </p>
        </div>
    )
}
