import { useState, useEffect, useContext } from 'react';
import { SurveyContext } from '../utils/SurveyContext';
import techOptions from '../data/techOptions.js';


// Custom hook to handle form state and updates
export const useSurveyForm = () => {
  const { surveyData, addSurveyData } = useContext(SurveyContext);
  const [formValues, setFormValues] = useState({});

  // Populate formValues with surveyData when the component mounts
  useEffect(() => {
    console.log('Initializing formValues with surveyData:', surveyData);
    setFormValues(surveyData); // Initialize formValues with existing surveyData
  }, [surveyData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Input change - Name:', name, 'Value:', value);
    setFormValues({ ...formValues, [name]: value });
    
    // Save the updated form value to the context immediately
    addSurveyData({ [name]: value }); 
  };

  // Save form values to context before navigating to the next page
  const handleNextPage = () => {
    console.log('Saving formValues to context:', formValues);
    addSurveyData(formValues); // Save all form values in the context
  };

  return { formValues, handleInputChange, handleNextPage, techOptions };
};