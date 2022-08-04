import React from 'react'
import styles from "./Register.module.css";
import StepFullName from "../steps/StepFullName/StepFullName";
import StepOtp from "../steps/StepOtp/StepOtp";
import StepPhoneEmail from "../steps/StepPhoneEmail/StepPhoneEmail";
import StepAvatar from "../steps/StepAvatar/StepAvatar";
import StepUsername from "../steps/StepUsername/StepUsername";
import { useState } from 'react';


// all steps of registraion
const Steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepFullName,
    4: StepAvatar,
    5: StepUsername,
}

const Register = () => {
    const [step, setStep] = useState(1);
    const Step=Steps[step];
    return (
        <div>
            <Step stepIncreaser={setStep}/>
        </div>
    )
}

export default Register