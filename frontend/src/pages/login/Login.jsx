import React,{ useState } from 'react'
import StepOtp from "../steps/StepOtp/StepOtp";
import StepPhoneEmail from "../steps/StepPhoneEmail/StepPhoneEmail";



// all steps of login
const Steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

const Login = () => {
    const [step, setStep] = useState(1);
    const Step=Steps[step];
    return (
        <div>
            <Step stepIncreaser={setStep}/>
        </div>
    )
}
export default Login