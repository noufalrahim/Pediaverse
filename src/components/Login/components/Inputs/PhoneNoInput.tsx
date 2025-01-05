import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";

interface PhoneNoInputProps {
    setRenderIndex: (value: {
        type: 'login' | 'about';
        index: string;
    }) => void;
}

export default function PhoneNoInput({
    setRenderIndex,
}: PhoneNoInputProps) {
    return (
        <div className="w-1/2 justify-center p-4 my-10 flex flex-col rounded-xl">
            <h1 className="text-2xl text-black font-abhaya">Become a Part of Our</h1>
            <h1 className="text-2xl text-black font-abhaya">Community</h1>
            <p className="text-secondary-200 text-lg font-mulish">
                Sign up and connect with like-minded individuals.
            </p>
            <div className="my-10 flex flex-col gap-4  font-mulish">
                <PhoneInput className="border-red-200" />
                <Button className="bg-gray-200 text-black hover:bg-gray-300 py-5 rounded-xl" onClick={() => setRenderIndex({ type: 'login', index: 'otp' })}>
                    Send OTP
                </Button>
                <p className="text-secondary-300 text-lg mt-5 font-semibold text-center cursor-pointer">
                    Terms & Conditions
                </p>
            </div>
        </div>
    )
}