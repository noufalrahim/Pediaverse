import { Stepper } from "react-form-stepper";

interface StepperComponentProps {
    steps: { label: string }[];
    activeStep: number;
}

export default function StepperComponent({ steps, activeStep }: StepperComponentProps) {
    return (
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