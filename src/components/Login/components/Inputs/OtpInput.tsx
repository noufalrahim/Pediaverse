import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

interface OtpInputProps {
    setRenderIndex: (value: {
        type: 'login' | 'about';
        index: string;
    }) => void;
}

export default function OtpInput({
    setRenderIndex,
}: OtpInputProps) {
    return (
        <div>
            <h1 className="text-2xl text-black font-abhaya">Become a Part of Our</h1>
            <h1 className="text-2xl text-black font-abhaya">Community</h1>
            <p className="text-secondary-200 text-lg font-mulish">
                Sign up and connect with like-minded individuals.
            </p>
            <div className="my-10 flex flex-col gap-4 items-center font-mulish">
                <InputOTP maxLength={10}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} className="border-gray-300" />
                        <InputOTPSlot index={1} className="border-gray-300" />

                        <InputOTPSlot index={2} className="border-gray-300" />
                        <InputOTPSlot index={3} className="border-gray-300" />

                        <InputOTPSlot index={4} className="border-gray-300 " />
                        <InputOTPSlot index={5} className="border-gray-300" />
                    </InputOTPGroup>
                </InputOTP>
                <Button className="bg-gray-200 text-black hover:bg-gray-300 py-5 w-full rounded-xl" onClick={() => setRenderIndex({ type: 'about', index: '1' })}>
                    Verify OTP
                </Button>
                <p className="text-secondary-200 text-md mt-5 font-semibold text-center">
                    Didn't receive OTP? <span className="text-secondary-300 mx-1 cursor-pointer">Resend OTP</span>
                </p>
            </div>
        </div>
    )
}