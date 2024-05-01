import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";

function MultipleChoiceQuestion({ question, options, answer, onAnswer }) {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnswered(true);
    if (selectedOption === answer) {
      onAnswer(true); // Notify parent component of correct answer
    } else {
      onAnswer(false); // Notify parent component of incorrect answer
    }
  };

  useEffect(() => {
    if (selectedOption !== null) {
      setIsAnswered(true);
    }
  }, [selectedOption]);

  return (
    <div className="license-screen-css">
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row" style={{ border: "3px solid #f1f1f1" }}>
          <h4>{question}</h4>
          <form onSubmit={handleSubmit}>
            <div className="well">
              {options.map((option, index) => (
                <div key={index}>
                  <Input
                    type="radio"
                    id={`option-${index}`}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    disabled={isAnswered}
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </div>
              ))}
              <button
                type="submit"
                style={{ width: "100px" }}
                disabled={!isAnswered}
              >
                Submit
              </button>
            </div>
          </form>
          {isAnswered && (
            <p>
              {selectedOption === answer
                ? "Correct!"
                : `Incorrect. The correct answer is: ${answer}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultipleChoiceQuestion;
