//-------------------------Imports-------------------------
import { AcademicDetails, CompleteProfile, Dream, Interests, PersonalInformation } from "@/components/Login/components/About";
import { OtpInput, PhoneNoInput } from "@/components/Login/components/Inputs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { Stepper } from 'react-form-stepper';

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
                        return <PersonalInformation />
                    case '2':
                        return <AcademicDetails />
                    case '3':
                        return <Interests />
                    case '4':
                        return <Dream />
                    case '5':
                        return <CompleteProfile />
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

    return (
        <div className="bg-secondary-100 p-4 flex flex-row max-w-7xl mx-auto shadow-xl rounded-xl">
            <div className="w-1/2">
                <img src="/layoutImage.png" alt="placeholder" className="w-[40rem] h-[40rem] object-cover" />
            </div>
            <div className={cn("p-4 my-10 flex flex-col rounded-xl",
                renderIndex.type === 'login' ? 'w-1/2 justify-center' : 'w-3/4 border border-primary-gray justify-between'
            )}>
                {
                    renderIndex.type === 'about' && (
                        <Stepper
                            steps={steps}
                            activeStep={activeStep}
                            styleConfig={{
                                activeBgColor: '#5D5FEF',
                                activeTextColor: 'white',
                                completedBgColor: '#5D5FEF',
                                completedTextColor: 'white',
                                inactiveBgColor: 'lightGray',
                                inactiveTextColor: 'black',
                                size: '2em',
                                circleFontSize: '1em',
                                labelFontSize: '0.700em',
                                borderRadius: '50%',
                                fontWeight: 500,
                            }}
                        />
                    )
                }
                <div className={cn(
                    renderIndex.type === 'login' ? 'w-3/4' : 'w-full',
                )}>
                    {RenderComponent(renderIndex)}
                </div>
                {
                    renderIndex.type === 'about' && renderIndex.index !== '5' && (
                        <div className="flex justify-end gap-2">
                            {
                                parseInt(renderIndex.index) > 1 && (
                                    <Button className="self-end  text-secondary-300 bg-white px-10 py-6 hover:bg-white/90" onClick={handlePrev}>
                                        Back
                                    </Button>
                                )
                            }
                            <Button className="self-end  bg-secondary-300 text-white px-10 py-6 hover:bg-secondary-300/90" onClick={handleNext}>
                                Next
                            </Button>
                        </div>
                    )
                }
                {
                    renderIndex.type === 'about' && renderIndex.index === '5' && (
                        <div className="flex justify-end gap-2">
                            <Button className="self-end  bg-success text-white px-10 py-6 hover:bg-success/90 w-full">
                                Get Started
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}