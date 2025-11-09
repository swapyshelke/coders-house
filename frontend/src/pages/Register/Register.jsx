import React, { useState } from 'react'
import styles from  "./Register.module.css"
import StepPhoneEmail from '../steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../steps/StepOtp/StepOtp';
import StepName from '../steps/StepName/StepName';
import StepAvatar from '../steps/StepAvatar/StepAvatar';
import StepUsername from '../steps/StepUsername/StepUsername';

   const steps = {
        0: StepPhoneEmail,
        1: StepOtp,
        2: StepName,
        3: StepAvatar,
        4: StepUsername
    }





const Register = () => {

    const [step, setStep] = useState(0);
     const Step = steps[step];


     function onNext() {
        setStep(step+1)
     }

 
  return (
    <div>
        <Step onNext={onNext} />
    </div>
  )
}

export default Register