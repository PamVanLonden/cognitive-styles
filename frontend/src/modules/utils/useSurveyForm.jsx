import { useState, useEffect, useContext } from 'react';
import { SurveyContext } from '../utils/SurveyContext';

// Custom hook to handle form state and updates
export const useSurveyForm = () => {
  const { surveyData, addSurveyData } = useContext(SurveyContext);
  const [formValues, setFormValues] = useState({});

  // Populate formValues with surveyData when the component mounts
  useEffect(() => {
    setFormValues(surveyData); // Initialize formValues with existing surveyData
  }, [surveyData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Save form values to context before navigating to the next page
  const handleNextPage = () => {
    addSurveyData(formValues); // Save all form values in the context
  };

  return { formValues, handleInputChange, handleNextPage };
};