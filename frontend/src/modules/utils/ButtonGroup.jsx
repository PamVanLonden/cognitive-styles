import React, { useContext } from 'react';
import { SurveyContext } from './SurveyContext';
import { SURVEY_MAX_AGREE_VALUE, SURVEY_MIN_AGREE_VALUE } from '../../contants';

// This component will generate the Likert buttons (9)
const ButtonGroup = ({ name }) => {

  // State to keep track of the selected button
  const { surveyData, addSurveyData } = useContext(SurveyContext);

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    addSurveyData(name, value); // Save the selected value to the context
  };
 
  return (
    <div className="buttonGroup">
      <p className="scale">
        {[...Array(SURVEY_MAX_AGREE_VALUE)].map((_, index) => {
          const value = index + SURVEY_MIN_AGREE_VALUE;
          return (
            <button
              key={value}
              type="button"
              name={name}
              value={value}
              className={surveyData[name] === value ? 'selected' : ''}
              onClick={() => handleButtonClick(value)}
              
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