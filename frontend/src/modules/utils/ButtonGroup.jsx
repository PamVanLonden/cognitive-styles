import React, { useContext } from 'react';
import { SurveyContext } from './SurveyContext';

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
        {[...Array(9)].map((_, index) => {
          const value = index + 1;
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