import { IoIosCheckmarkCircle } from "react-icons/io";

export default function CompleteProfile() {
    return (
        <div className="text-center items-center justify-center flex flex-col">
            <IoIosCheckmarkCircle className="h-28 w-28 text-success"/>
            <h1 className="text-2xl font-bold text-black">Profile Completed</h1>
            <p className="text-secondary-200">Your student information has been successfully submitted. Thank you.</p>
        </div>
    )
}