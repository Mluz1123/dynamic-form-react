import { useState } from "react";
import { Container } from "react-bootstrap";

import "./DynamicForm.css";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThridStep from "./ThridStep";

export default function DynamicForm() {
  const [step, setStep] = useState(1);

  const showNexrStep = () => {
    setStep(step + 1);
  };

  const showPreviewStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="dynamic-form mt-4 mb-5" id="dynamic-form">
      <Container className="p-4 text-center">
        <div className="content-dynamic-form mt5 p-4">
          <h1 className="title-dynamic-form">Fill the form</h1>
          <h2 className="steps-numbers">Step {step} of 3</h2>

          {getPageByStep(step, setStep)}

          <div className="actions">
            <div className="container-text">
              {step > 1 && step < 4 && (
                <p className="before" onClick={showPreviewStep}>
                  Before Step ⬅️
                </p>
              )}
            </div>
            <div className="container-text">
              {step > 0 && step < 3 && (
                <p className="next" onClick={showNexrStep}>
                  Next Step ➡️
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
  function getPageByStep(step, setStep) {
    if (step === 1) {
      return <FirstStep />;
    } else if (step === 2) {
      return <SecondStep />;
    } else if (step === 3) {
      return <ThridStep />;
    }
  }
}
