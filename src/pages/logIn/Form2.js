import React, { useState } from "react";
import FormLogin from "./FormLogin";
import FormSuccess2 from "./FormSuccess2";
import "./Form2.css";

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container2">
        <a className="close-btn" href="/React_website">
          ×
        </a>
        <div className="form-content-left">
          <img
            className="form-img2"
            src={require("../../images/img-4.svg")}
            aria-hidden
            alt="spaceship"
          />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess2 />
        )}
      </div>
    </>
  );
};

export default Form2;
