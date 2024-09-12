import React, { useContext } from 'react';
import { SurveyContext } from '../utils/SurveyContext';

// List of question names where reversal should happen
// const questionsToReverse = [
//   'sEFEmailConfidence',       //2
//   'ipsGatherInfo',            //9
//   'ipsResearch',              //10
//   'ipsUnderstandDirection',   //11
//   'atrAvoidAdvancedSections', //12
//   'atrAvoidDanger',           //13
// ];

// This component will generate the Likert buttons (9)
const ButtonGroup = ({ name }) => {
  // State to keep track of the selected button
  const { surveyData, addSurveyData } = useContext(SurveyContext);

   // Function to reverse the value (calculate tens' complement)
  //  const getReversedValue = (value) => 10 - value;

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    addSurveyData(name, value); // Save the selected value to the context

    // Conditionally reverse the value based on the question name
    // const finalValue = questionsToReverse.includes(name) ? getReversedValue(value) : value;
    // addSurveyData(name, finalValue); // Store the appropriate value
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
