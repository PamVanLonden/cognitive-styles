import React, { useContext } from 'react';
import { SurveyContext } from './SurveyContext';
import { SURVEY_MAX_AGREE_VALUE, SURVEY_MIN_AGREE_VALUE } from './constants';

// This component will generate the Likert buttons (9)
const ButtonGroup = ({ name }) => {

  // State to keep track of the selected button
  const { surveyData, addSurveyData } = useContext(SurveyContext);

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    addSurveyData(name, value); // Save the selected value to the context
  };
 
  return (
    <div className="likertGroup">
      <p className="scale">
        {[...Array(SURVEY_MAX_AGREE_VALUE)].map((_, index) => {
          const value = index + SURVEY_MIN_AGREE_VALUE;

          // Define the labels based on the value (1-9 Likert scale example)
          const labels = [
            "Completely disagree",
            "Disagree",
            "Slightly disagree",
            "Might disagree",
            "Neither agree or disagree",
            "Might agree",
            "Slightly agree",
            "Agree",
            "Completely agree"
          ];

          // Get the corresponding label (ensure the index is valid)
          const ariaLabel = `${labels[index]}, ${value} out of ${SURVEY_MAX_AGREE_VALUE}`;

          return (
            <button
              role="button"
              key={value}
              type="button"
              name={name}
              value={value}
              className={surveyData[name] === value ? 'selected' : ''}
              onClick={() => handleButtonClick(value)}
              aria-label={ariaLabel}
            >
              {value}
            </button>
          );
        })}
      </p>
    </div>

  );
};

export default ButtonGroup;