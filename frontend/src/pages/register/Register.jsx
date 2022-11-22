import React from 'react'
import styles from "./Register.module.css";
import StepOtp from "../steps/StepOtp/StepOtp";
import StepPhoneEmail from "../steps/StepPhoneEmail/StepPhoneEmail";
import { useState } from 'react';


// all steps of registraion
const Steps = {
    1: StepPhoneEmail,
    2: StepOtp
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