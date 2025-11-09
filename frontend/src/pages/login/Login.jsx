import React, { useState } from 'react'
import StepPhoneEmail from '../steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../steps/StepOtp/StepOtp'



   const steps = {
        0: StepPhoneEmail,
        1: StepOtp,
    }




const Login = () => {

     const [step, setStep] = useState(0);
         const Step = steps[step];
    
    
         function onNext() {
            setStep(step+1)
         }
    

  return (
   <Step onNext={onNext} />
  )
}

export default Login