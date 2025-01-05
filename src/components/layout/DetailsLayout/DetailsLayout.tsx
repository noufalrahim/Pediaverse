//-------------------------Imports-------------------------
import { AcademicDetails, CompleteProfile, Dream, Interests, PersonalInformation } from "@/components/Login/components/About";
import { OtpInput, PhoneNoInput } from "@/components/Login/components/Inputs";
import { StudentDataType } from "@/types/StudentDataType";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema } from "@/components/Login/components/About/schema/StudentDataSchema";
import { Form } from "@/components/ui/form";

export default function DetailsLayout() {

    //-------------------------Variables-------------------------

    const steps = [
        { label: 'Personal Information' },
        { label: 'Academic Details' },
        { label: 'Hobbies' },
        { label: 'Dream' },
        { label: 'Complete Profile' },
    ];

    //-------------------------States and Hooks-------------------------
    const [activeStep, setActiveStep] = useState(0);
    const [renderIndex, setRenderIndex] = useState<
        {
            type: 'login' | 'about';
            index: string;
        }
    >({
        type: 'login',
        index: 'phone'
    });
    const [studentData, setStudentData] = useState<StudentDataType>();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            dateOfBirth: new Date(),
            gender: 'MALE',
            city: '',
            class12Mark: '',
            medium: 'ENGLISH',
            board: 'CBSE',
            interests: [],
            dream: '',
        },
    })
    console.log(studentData);

    //-------------------------Functions-------------------------
    const RenderComponent = (renderIndex: {
        type: 'login' | 'about';
        index: string;
    }) => {
        switch (renderIndex.type) {
            case 'login':
                switch (renderIndex.index) {
                    case 'phone':
                        return <PhoneNoInput setRenderIndex={setRenderIndex} />
                    case 'otp':
                        return <OtpInput setRenderIndex={setRenderIndex} />
                    default:
                        return <></>
                }
            case 'about':
                switch (renderIndex.index) {
                    case '1':
                        return <PersonalInformation
                            setStudentData={setStudentData}
                            steps={steps}
                            activeStep={activeStep}
                            handleNext={handleNext}
                            form={form}
                        />
                    case '2':
                        return <AcademicDetails
                            setStudentData={setStudentData}
                            steps={steps}
                            activeStep={activeStep}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            form={form}
                        />
                    case '3':
                        return <Interests
                            setStudentData={setStudentData}
                            steps={steps}
                            activeStep={activeStep}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            form={form}
                        />
                    case '4':
                        return <Dream
                            setStudentData={setStudentData}
                            steps={steps}
                            activeStep={activeStep}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            form={form}
                        />
                    case '5':
                        return <CompleteProfile
                            setStudentData={setStudentData}
                            steps={steps}
                            activeStep={activeStep}
                            onSubmit={onSubmit}
                            form={form}
                        />
                    default:
                        return <></>
                }
            default:
                return <></>
        }
    };

    const handlePrev = () => {
        setRenderIndex((prev) => ({ ...prev, index: (parseInt(prev.index) - 1).toString() }));
        setActiveStep((prev) => prev - 1);
    }

    const handleNext = () => {
        setRenderIndex((prev) => ({ ...prev, index: (parseInt(prev.index) + 1).toString() }));
        setActiveStep((prev) => prev + 1);
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="bg-secondary-100 p-4 flex flex-row max-w-7xl mx-auto shadow-xl rounded-xl">
            <div className="w-1/2">
                <img src="/layoutImage.png" alt="placeholder" className="w-[40rem] h-[40rem] object-cover" />
            </div>
            <Form {...form}>
                {RenderComponent(renderIndex)}
            </Form>
        </div>
    )
}